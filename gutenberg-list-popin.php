<?php
/**
 * Plugin Name:     Gutenberg List PopIn
 * Description:     Block Gutenberg permettant l'affichage d'un texte et image ou vidéo avec l'ouverture sur un pop-in (Vidéo)
 * Version:         0.1.0
 * Author:          
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenberg-list-popin
 *
 * @package         create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
class GutenbergListPopIn {

	/**
	 * __construct
	 *
	 * @return void
	 */
	public function __construct() {
		/* register activation function */
		register_block_type_from_metadata(__DIR__, [
			'render_callback' => [
				__CLASS__,
				'block_dynamic_render',
			],
		]);
		add_filter('block_categories_all', [__CLASS__, 'gutenberg_category'], 10, 2);
	}

	/**
	 * init
	 *
	 * @return void
	 */
	public static function init() {
		new self;
	}

	/**
	 * Add category if not exist
	 *
	 * @param $categories
	 *
	 * @return array
	 */
	public static function gutenberg_category($categories) {
		if (!in_array([
			'slug' => 'gutenberg',
			'title' => __('gutenberg Blocks', 'mario-blocks'),
		], $categories)) {
			$news = [
				'slug' => 'gutenberg',
				'title' => __('gutenberg Blocks', 'mario-blocks'),
			];
			if (!in_array($news, $categories)) {
				return array_merge(
					[
						$news,
					],
					$categories
				);
			}
		}
		return $categories;
	}

	/**
	 * CALLBACK
	 *
	 * Render callback for the dynamic block.
	 *
	 * Instead of rendering from the block's save(), this callback will render
	 * the front-end
	 *
	 * @param $att Attributes from the JS block
	 *
	 * @return string Rendered HTML
	 * @since    1.0.0
	 */
	public static function block_dynamic_render($att) {
		$title = "";
		extract($att);
		$html = '<div class="wp-block-create-block-gutenberg-article-popin">';
		$html .= '<div class="wrapper-content">';
		$html .= '<div class="list-article-heading">';
		$html .= '<div class="list-article-title title title-category"><h3><span>' . $category . '</span>' . $title . '</h3></div>';
		$html .= '</div>';
		$html .= '<div class="container-list">';
		$html .= '<div class="col-left">';
		$html .= '<div class="list-article">';
		if (isset($btnRandom) && $btnRandom) {
			shuffle($listArticle);
		}
		foreach ($listArticle as $key => $article) {
			$post_id = has_filter('wpml_object_id') ? apply_filters( 'wpml_object_id', $article['id'], get_post_type($article['id']) ) : $article['id'];
			if ($post_id && $post = get_post($post_id)) {
				$html .= '
									<div class="list-article-item">
										<div class="article-info">
											<a href="' . get_permalink($post) . '" class="open-panel-bottom button" data-id="' . $post->ID . '">
											<p class="article-title is-limited">' . $post->post_title . '</p>
											</a>
										</div>
										<div class ="more-info">
											<a href="' . get_permalink($post) . '" class="open-panel-bottom button" data-id="' . $post->ID . '"></a>
										</div>
									</div>';
			}
		}
		$html .= '</div>';
		$html .= '</div><div class="col-right">';

		if (is_array($image)) {
			if ($image["sizes"]["large"] !== NULL) {
				$image_src = $image["sizes"]["large"]["url"];
			}
			else {
				$image_src = $image["url"];
			}
			if ($isVideo && $urlVideo) {
				$html .= "<div class='image open-video'><img width='250' height='250' src='" . $image_src . "' /></div>";
				$html .= "<div class='wp-embedded-container'><div class='wp-embedded-content'>" . $urlVideo . "</div></div>";
			}
			else {
				$html .= "<div class='image'><img width='250' height='250' src='" . $image_src . "' /></div>";
			}

		}

		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';

		return $html;

	}

}

add_action('init', ['GutenbergListPopIn', 'init']);
