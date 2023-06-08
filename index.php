<?php get_header(); ?>

<main>
    <section id="hero-banner" class="hero-banner">
        <div class="container">
            <div class="hero-banner__content">
                <?php if (have_rows('titre_haut_de_page')) :  ?>
                    <div class="anim-container">
                        <h1 class="hero-banner__title">
                            <?php while (have_rows('titre_haut_de_page')) : the_row();
                                if (get_sub_field('noir')) : ?>
                                    <span><?php the_sub_field('noir'); ?></span>
                                    <br />
                                <?php endif; ?>
                                <?php if (get_sub_field('vert')) : ?>
                                    <span class="green"><?php the_sub_field('vert'); ?></span>
                                <?php endif; ?>
                                <?php if (get_sub_field('jaune')) : ?>
                                    <span class="yellow"><?php the_sub_field('jaune'); ?></span>
                                <?php endif; ?>
                            <?php endwhile; ?>
                        </h1>
                    </div>
                <?php endif; ?>
                <div class="separator"></div>
                <div class="anim-container">
                    <div class="text-hero">
                        <?php the_field('texte_haut_de_page') ?>
                    </div>
                </div>
            </div>
            <div class="anim-container">
                <?php $image_top = get_field('image_haut_de_page'); ?>
                <img src="<?= esc_url($image_top['url']); ?>" alt="<?= esc_attr($image_top['alt']); ?>">
            </div>
        </div>
    </section>
    <section id="solution" class="solution">
        <div class="container">
            <div class="anim-container">
                <h2><?php the_field('titre_solution'); ?></h2>
            </div>
            <?php if (have_rows('liste')) : ?>
                <ul class="liste">
                    <?php while (have_rows('liste')) : the_row(); ?>
                        <li>
                            <span class="number"><?php the_sub_field('numero'); ?></span>
                            <span class="question">
                                <span class="texte">
                                    <?php the_sub_field('question'); ?>
                                </span>
                            </span>
                        </li>
                    <?php endwhile; ?>
                </ul>
            <?php endif; ?>
        </div>
        <div id="observer-solution"></div>
    </section>
    <?php get_template_part('./parts/content'); ?>
    <?php get_template_part('./parts/offres'); ?>
    <?php get_template_part('./parts/confiance'); ?>
    <?php get_template_part('./parts/bottom'); ?>
    <?php get_template_part('./parts/overlay-contact'); ?>
</main>

<?php get_footer(); ?>