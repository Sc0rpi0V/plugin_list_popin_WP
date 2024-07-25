import { Component, Fragment } from '@wordpress/element'
import { decodeEntities } from '@wordpress/html-entities'
import { UP, DOWN, ENTER } from '@wordpress/keycodes'
import { Spinner, Popover, Button } from '@wordpress/components'
import { withInstanceId } from '@wordpress/compose'
import { withSelect } from '@wordpress/data'
import { addQueryArgs } from '@wordpress/url'
import apiFetch from '@wordpress/api-fetch'
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

const stopEventPropagation = event => event.stopPropagation()

const subtypeStyle = {
	border: '3px solid lightgrey',
	padding: '5px',
	borderRadius: '7px',
	marginRight: '10px',
	fontSize: '80%'
}

const debounce = (func, wait = 100) => {
	let timeout
	return function (...args) {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			func.apply(this, args)
		}, wait)
	}
}

class PostSelector extends Component {
	/**
	 * ===== Available Props =======
	 *
	 * posts <Array> of Post Objects, must include ID and title.
	 * data <Array> array of post properties to return (top level only right now)
	 * postType = <String> singular name of post type to restrict results to.
	 * onPostSelect <Function> callback for when a new post is selected.
	 * onChange <Function> callback for when posts are deleted or rearranged.
	 * limit <Number> limit selection to posts to X number of posts.
	 *
	 */
	constructor() {
		super(...arguments)
		this.onChange = this.onChange.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
		this.bindListNode = this.bindListNode.bind(this)
		this.updateSuggestions = debounce(this.updateSuggestions.bind(this), 200)
		this.limit = this.props.limit ? parseInt(this.props.limit) : false

		this.suggestionNodes = []

		this.postTypes = null

		this.state = {
			posts: [],
			showSuggestions: false,
			selectedSuggestion: null,
			input: ''
		}
	}

	componentDidUpdate() { }

	componentWillUnmount() {
		delete this.suggestionsRequest
	}

	bindListNode(ref) {
		this.listNode = ref
	}

	bindSuggestionNode(index) {
		return ref => {
			this.suggestionNodes[index] = ref
		}
	}

	async updateSuggestions(value) {
		// Show the suggestions after typing at least 2 characters
		// and also for URLs
		if (value.length < 2 || /^https?:/.test(value)) {
			this.setState({
				showSuggestions: false,
				selectedSuggestion: null,
				loading: false
			})

			return
		}

		this.setState({
			showSuggestions: true,
			selectedSuggestion: null,
			loading: true
		})

		const request = apiFetch({
			path: addQueryArgs('/wp/v2/search', {
				search: value,
				per_page: 20,
				type: 'post',
				subtype: this.props.postType ? this.props.postType : 'any'
			})
		})

		request
			.then(posts => {
				// A fetch Promise doesn't have an abort option. It's mimicked by
				// comparing the request reference in on the instance, which is
				// reset or deleted on subsequent requests or unmounting.
				if (this.suggestionsRequest !== request) {
					return
				}

				this.setState({
					posts,
					loading: false
				})
			})
			.catch(() => {
				if (this.suggestionsRequest === request) {
					this.setState({
						loading: false
					})
				}
			})

		this.suggestionsRequest = request
	}

	onChange(event) {
		const inputValue = event.target.value
		this.setState({ input: inputValue })
		this.updateSuggestions(inputValue)
	}

	onKeyDown(event) {

		const { showSuggestions, selectedSuggestion, posts, loading } = this.state
		// If the suggestions are not shown or loading, we shouldn't handle the arrow keys
		// We shouldn't preventDefault to allow block arrow keys navigation
		if (!showSuggestions || !posts.length || loading) {
			return
		}

		switch (event.keyCode) {
			case UP: {
				event.stopPropagation()
				event.preventDefault()
				const previousIndex = !selectedSuggestion ? posts.length - 1 : selectedSuggestion - 1
				this.setState({
					selectedSuggestion: previousIndex
				})
				break
			}
			case DOWN: {
				event.stopPropagation()
				event.preventDefault()
				const nextIndex = selectedSuggestion === null || selectedSuggestion === posts.length - 1 ? 0 : selectedSuggestion + 1
				this.setState({
					selectedSuggestion: nextIndex
				})
				break
			}
			case ENTER: {
				if (this.state.selectedSuggestion !== null) {
					event.stopPropagation()
					const post = this.state.posts[this.state.selectedSuggestion]
					this.selectLink(post)
				}
			}
		}
	}

	selectLink(post) {
		// get the "full" post data if a post was selected. this may be something to add as a prop in the future for custom use cases.
		if (this.props.data) {
			// if data already exists in the post object, there's no need to make an API call.
			let reachOutToApi = false
			const returnData = {}
			for (const prop of this.props.data) {
				if (!post.hasOwnProperty(prop)) {
					reachOutToApi = true
					return
				}
				returnData[prop] = post[prop]
			}

			if (!reachOutToApi) {
				this.props.onPostSelect(returnData)
				this.setState({
					input: '',
					selectedSuggestion: null,
					showSuggestions: false
				})
				return
			}
		}

		// get the base of the URL for the post API request
		const restBase = this.getPostTypeData(post.subtype).restBase

		apiFetch({
			path: `/wp/v2/${restBase}/${post.id}`
		}).then( async response => {
			const excerpt = response.excerpt ? response.excerpt.rendered : ''
			const imageObj = response.featured_media ? await apiFetch({ path:`/wp/v2/media/${response.featured_media}`}) : ''
			const fullPost =  {
				title: decodeEntities(response.title.rendered),
				id: response.id,
				excerpt: decodeEntities(excerpt),
				url: response.link,
				image : imageObj,
				date: response.date,
				type: response.type,
				status: response.status
			}

			// send data to the block
			this.props.onPostSelect(fullPost)
		})
		this.setState({
			input: '',
			selectedSuggestion: null,
			showSuggestions: false
		})
	}

	renderSelectedPosts() {
		// show each post in the list.
		return (
			<ul>
				{this.props.posts.map((post, i) => (
					
					<li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'nowrap' }} key={post.id}>

						{
							/* render the post type if we have the data to support it */
							this.hasPostTypeData() && <span style={subtypeStyle}>{post.type}</span>
						}

						<span style={{ flex: 1 }}>{post.title}</span>
						<span>
              {i !== 0 ? (
				  <Button
					  style={{ display: 'inline-flex', padding: '8px 2px', textAlign: 'center' }}
					  icon="arrow-up-alt2"
					  onClick={() => {
						  this.props.posts.splice(i - 1, 0, this.props.posts.splice(i, 1)[0])
						  this.props.onChange(this.props.posts)
						  this.setState({ state: this.state })
					  }}
				  />
			  ) : null}

							{i !== this.props.posts.length - 1 ? (
								<Button
									style={{ display: 'inline-flex', padding: '8px 2px', textAlign: 'center' }}
									icon="arrow-down-alt2"
									onClick={() => {
										this.props.posts.splice(i + 1, 0, this.props.posts.splice(i, 1)[0])
										this.props.onChange(this.props.posts)
										this.setState({ state: this.state })
									}}
								/>
							) : null}

							<Button
								style={{ display: 'inline-flex', textAlign: 'center' }}
								icon="no"
								onClick={() => {
									this.props.posts.splice(i, 1)
									this.props.onChange(this.props.posts)
									// force a re-render.
									this.setState({ state: this.state })
								}}
							/>
            </span>
					</li>
				))}
			</ul>
		)
	}
	resolvePostTypes(sourcePostTypes) {
		// check if the post types have already been resolved
		if (this.postTypes !== null) {
			return
		}

		// check if we have the source post types from the API
		if (sourcePostTypes == null) {
			return
		}

		// transform the source post types from the API
		// into the data we need and put it in a map
		const arr = sourcePostTypes.map((p) => {
			return [p.slug, {
				slug: p.slug,
				displayName: p.labels.singular_name,
				restBase: p.rest_base
			}]
		})

		this.postTypes = new Map(arr)
		
	}

	// get the post type data
	getPostTypeData(slug) {
		if (!this.hasPostTypeData()) { return {} }
		return this.postTypes.get(slug)
	}

	hasPostTypeData() {
		return this.postTypes !== null
	}

	render() {
		this.resolvePostTypes(this.props.sourcePostTypes)
		const { autoFocus = true, instanceId, limit } = this.props
		const { showSuggestions, posts, selectedSuggestion, loading, input } = this.state
		const inputDisabled = !!limit && this.props.posts.length >= limit
		/* eslint-disable jsx-a11y/no-autofocus */
		return (
			<Fragment>
				{this.renderSelectedPosts()}
				<div className="block-editor-url-input">
					<input
						autoFocus={autoFocus}
						type="text"
						aria-label={'URL'}
						required
						value={input}
						onChange={this.onChange}
						onInput={stopEventPropagation}
						placeholder={inputDisabled ? __(`Limted to ${limit} posts`, 'gutenberg_admin' ): __('Entrer le nom de la page ou article')}
						onKeyDown={this.onKeyDown}
						role="combobox"
						aria-expanded={showSuggestions}
						aria-autocomplete="list"
						aria-owns={`block-editor-url-input-suggestions-${instanceId}`}
						aria-activedescendant={selectedSuggestion !== null ? `block-editor-url-input-suggestion-${instanceId}-${selectedSuggestion}` : undefined}
						style={{ width: '100%' }}
						disabled={inputDisabled}
					/>
					{loading && <Spinner />}
				</div>
				{showSuggestions &&
				!!posts.length && (
					<Popover position="bottom" noArrow focusOnMount={false}>
						<div className="block-editor-url-input__suggestions" id={`block-editor-url-input-suggestions-${instanceId}`} ref={this.bindListNode} role="listbox">
							{posts.map((post, index) => (
								<button
									key={post.id}
									role="option"
									tabIndex="-1"
									id={`block-editor-url-input-suggestion-${instanceId}-${index}`}
									ref={this.bindSuggestionNode(index)}
									className={`block-editor-url-input__suggestion ${index === selectedSuggestion ? 'is-selected' : ''}`}
									onClick={() => this.selectLink(post)}
									aria-selected={index === selectedSuggestion}
								>
									<div style={{ display: 'flex', alignItems: 'center' }}>

										{
											/* render the post type if we have the data to support it */
											this.hasPostTypeData() && <div style={subtypeStyle}>{post.subtype}</div>
										}

										<div>{decodeEntities(post.title) || '(no title)'}</div>
									</div>

								</button>
							))}
						</div>
					</Popover>
				)}
			</Fragment>
		)
		/* eslint-enable jsx-a11y/no-autofocus */
	}
}

export default withSelect((select) => {
	const { getPostTypes } = select('core')
	return {
		sourcePostTypes: getPostTypes({per_page: -1})
	}
})(withInstanceId(PostSelector))
