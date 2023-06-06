<!DOCTYPE html>
<html <?php language_attributes() ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header>
        <div class="container">
            <?php $logo = get_field('logo', 'options'); ?>
            <div class="anim-container">
                <img src="<?= $logo ? esc_url($logo['url']) : './public/logo-it-oneview.svg' ?>" alt="<?= $logo ? esc_attr($logo['alt']) : "IT-OneView, continuous improvement"; ?>" />
            </div>
            <?php $texte_header = get_field('texte_du_bouton') ? get_field('texte_du_bouton') : "Je demande ma démo" ?>
            <div class="anim-container">
                <button><?= $texte_header; ?></button>
            </div>
        </div>
    </header>