<section class="hero-banner">
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