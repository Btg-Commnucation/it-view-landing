<?php
add_theme_support('post-thumbnails');
add_theme_support('title-tag');

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Options générales du thème',
        'menu_title' => 'options générales du thème',
        'menu_slug' => 'options-generales-du-theme',
        'capability' => 'edit_posts',
        'redirect' => false,
        'position' => '2'
    ));
}

add_filter('script_loader_tag', 'load_as_ES6', 10, 3);

function load_as_ES6($tag, $handle, $source)
{
    if ('btg-script' === $handle) {
        $tag = '<script src="' . $source . '" type="module" ></script>';
    }
    return $tag;
};

function btg_register_assets()
{
    wp_enqueue_style('btg-style', get_template_directory_uri() . '/css/style.css', 1.0);
    wp_enqueue_script('btg-script', get_template_directory_uri() . '/js/script.js', array(), 1.0, true);
}

add_action('wp_enqueue_scripts', 'btg_register_assets');

/* Disable WordPress Admin Bar for all users */
add_filter('show_admin_bar', '__return_false');

add_filter('wpcf7_autop_or_not', '__return_false');
