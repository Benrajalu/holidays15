<?php

function my_scripts() {
	
	wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js'
	);

	wp_enqueue_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/bower_components/angular-route/angular-route.min.js'
	);

	wp_enqueue_script(
		'angularjs-sanitize',
		get_stylesheet_directory_uri() . '/bower_components/angular-sanitize/angular-sanitize.min.js'
	);

	wp_enqueue_script(
		'angularjs-animate',
		get_stylesheet_directory_uri() . '/bower_components/angular-animate/angular-animate.min.js'
	);

	wp_enqueue_script(
		'angularjs-ui-router',
		get_stylesheet_directory_uri() . '/bower_components/angular-ui-router/release/angular-ui-router.min.js'
	);

	wp_enqueue_script(
		'jQuery',
		get_stylesheet_directory_uri() . '/assets/js/vendor/jquery-1.11.1.min.js'
	);

	wp_enqueue_script(
		'magnific-popup',
		get_stylesheet_directory_uri() . '/bower_components/magnific-popup/dist/jquery.magnific-popup.min.js'
	);

	wp_enqueue_script(
		'justifiedGallery',
		get_stylesheet_directory_uri() . '/bower_components/Justified-Gallery/dist/js/jquery.justifiedGallery.min.js'
	);

	wp_enqueue_script(
		'plugins',
		get_stylesheet_directory_uri() . '/assets/js/plugins.js'
	);

	wp_enqueue_script(
		'my-scripts',
		get_stylesheet_directory_uri() . '/assets/js/app.js',
		array( 'angularjs', 'angularjs-route', 'angularjs-sanitize', 'angularjs-animate', 'angularjs-ui-router', 'jQuery', 'magnific-popup', 'justifiedGallery', 'plugins' )
	);

	wp_localize_script(
		'my-scripts',
		'myLocalized',
		array(
			'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/',
			'root' => trailingslashit( get_template_directory_uri() )
		)
	);
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

add_theme_support( 'post-thumbnails' );


if ( function_exists( 'add_image_size' ) ) { 
	add_image_size( 'nantes', 332, 488, true);
	add_image_size( 'cities', 471, 556, true);
	add_image_size( 'panorama', 1701, 579, true);
}

update_option('image_default_link_type','none');

add_filter('json_prepare_post', 'json_api_encode_acf');

function json_api_encode_acf($post) {
    
    $acf = get_fields($post['ID']);
    
    if (isset($post)) {
      $post['acf'] = $acf;
    }

    return $post;

}

function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

add_filter('acf_the_content', 'filter_ptags_on_images');