/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n'

 /**
	* React hook that is used to mark the block wrapper element.
	* It provides all the necessary props like the class name.
	*
	* @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
	*/
 import {InspectorControls, MediaUpload,  RichText, useBlockProps,} from '@wordpress/block-editor'
 import {Button, PanelBody, CheckboxControl, TextareaControl} from '@wordpress/components';


 /**
	* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
	* Those files can contain any CSS code that gets applied to the editor.
	*
	* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
	*/
 //import './editor.scss'
 import PostSelector from './post-selector'


 import { useState, useEffect } from '@wordpress/element';

 /**
	* The edit function describes the structure of your block in the context of the
	* editor. This represents what the editor will render when the block is used.
	*
	* @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	*
	* @return {WPElement} Element to render.
	*/
 export default function Edit(props) {
	 // Get parameter and function we need for the module
	 const { attributes: { title, category, listArticle, btnRandom, image, isVideo, urlVideo }, setAttributes } = props
	 // Generate the front
	 const listArticleDisplay = listArticle.map((article) => {

		 let renderArticles

			 // Style Accordion Popin
			 renderArticles = <div className={`list-article-item list-article-item-${ article.id }`}>
				 <div className="article-info">
						<a className="article-link" href={ article.url }>
							<p className="article-title">{ article.title }</p>
						</a>
				 </div>
				 <div className="article-info">
						<a href={ article.url } className="open-panel-bottom-post button" data-id={`${ article.id }`}>+</a>
				 </div>
			 </div>
		 return (renderArticles)
	 } )

	 const [h2, setH3] = useState(null);
	 const [eventAdded, setEventAdded] = useState(false);
	 const [length, setLength] = useState(0);

	 useEffect(() => {
		 setH3(document.querySelector('#block-' + props.clientId).querySelector('h2'))
	 }, [])

	 useEffect(() => {
		 if (h2 && !eventAdded) {
			 h2.addEventListener("input", () => {
				 setLength(h2.innerText.length)
			 })
			 setEventAdded(true)
		 }
	 }, [h2, eventAdded])

	/**
	 * Function for the rendering the add and remove button for MediaUpload
	 * @param open onClick function to transfer
	 * @param media media we want to remove image
	 * @return return the html for buttons
	 */
	const renderMediaButton = (open) => {
		const addImageButton =
			<Button
				isPrimary
				onClick={ open }
				style={{
					marginBottom: '8px',
					marginRight: '4px'
				}}
			>
				{ (image.url !== '') ? __('Remplacer Image', 'gutenberg_admin') : __('Mettre une Image', 'gutenberg_admin') }
			</Button>
		const removeImageButton =
			<Button
				isDestructive
				className="remove-image"
				onClick={ () => setAttributes({ image: '' })  }
				style={{
					marginBottom: '8px'
				}}
			>
				{ __('Supprimer', 'gutenberg_admin')}
			</Button>

		return (
			<div>
				{ addImageButton }
				{ ( image.url !== '' ) ? removeImageButton : '' }
			</div>
		)
	}

			 //
	 // Generate the render for attributes field
	const listArticleFields =
		 <>
			 <div className="list-article-heading">
				 <RichText
					 tagName="span"
					 className="list-article-category"
					 disabled={true}
					 placeholder={__('Entrer une catégorie','gutenberg')}
					 value={ category }
					 onChange={ (category) => setAttributes({ category }) }
				 />
				 <RichText
					 tagName="h2"
					 className="list-article-title"
					 placeholder={__('Entrer un titre','gutenberg')}
					 value={ title }
					 style={{backgroundColor: `${length > 50 ? 'red': 'white'}`}}
					 onChange={ (title) =>  setAttributes({ title }) }

				 />
			 </div>
			 <div className="list-article">
				 { listArticleDisplay }
			 </div>
		 </>


	const mediaFields =
		<>
			<div className="list-article-image">
				<div className="list-article-image-display">
					<img src={ (image.url !== '') ? image.url : ''} />
				</div>
				<MediaUpload
					 label={ __('Sélection d\'un visuel', 'gutenberg') }
					allowedTypes={ ['image'] }
					value={ image }
					onSelect={ (image) => setAttributes({ image }) }
					render={ ( { open } ) => { return renderMediaButton(open) } }
				/>

				<CheckboxControl
					 label={ __('Afficher une video au clic sur le visuel ?', 'gutenberg') }
					 checked={ isVideo }
					 onChange={ (isVideo) => setAttributes({ isVideo }) }
				 />

				{ ( isVideo ) ? <TextareaControl
													className="url-video"
													label={__('Iframe de la video','gutenberg')}
													value={ urlVideo }
													onChange={ (urlVideo) =>  setAttributes({ urlVideo }) }
												/> : '' }
			</div>
		</>

	 return [
		 <InspectorControls>
			 <PanelBody
				 title={  __('Liste Article','gutenberg') }
				 initialOpen={ true }
				 className="form-list-article list-article"
			 >
				 <PostSelector
					 onPostSelect={post => {
						 const updatedPosts = [...listArticle, post]
						 setAttributes({ listArticle: updatedPosts })
					 }}
					 posts={listArticle}
					 onChange={newValue => {
						 setAttributes({ listArticle: [...newValue] })
					 }}
					 postType={''}
				 />
				 <CheckboxControl
					 label={ __('Affichage aléatoire', 'gutenberg') }
					 checked={ btnRandom }
					 onChange={ (btnRandom) => setAttributes({ btnRandom }) }
				 />
			 </PanelBody>
		 </InspectorControls>
		 ,
		 <div { ...useBlockProps() }>
				<div className="wrapper-content">
					<div className="col-left">
						{ listArticleFields }
					</div>
					<div className="col-right">
						{ mediaFields }
					</div>
				</div>
		 </div>
	 ]
 }
