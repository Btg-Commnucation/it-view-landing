<section id="confiance">
    <div class="container">
        <div class="anim-container">
            <h2><?php the_field('titre_confiance'); ?></h2>
        </div>
        <div class="separator"></div>
        <div class="anim-container">
            <article>
                <?php the_field('texte_sous_titre') ?>
            </article>
        </div>
        <?php if (have_rows('partenaire')) : ?>
            <ul class="partenaire">
                <?php while (have_rows('partenaire')) : the_row(); ?>
                    <li>
                        <?php $image_partenaire = get_sub_field('image') ?>
                        <img src="<?= esc_url($image_partenaire['url']) ?>" alt="<?= esc_attr($image_partenaire['alt']); ?>">
                    </li>
                <?php endwhile; ?>
            </ul>
        <?php endif; ?>
    </div>
</section>