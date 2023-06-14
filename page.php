<?php get_header('page'); ?>

<main id="page">
    <img src="<?= get_template_directory_uri(); ?>/public/barre_de_couleurs_web.png" alt="Barre de couleurs">
    <?php get_template_part('./parts/content'); ?>
</main>

<?php get_footer(); ?>