<section id="offres">
    <div class="container">
        <?php $image_offres = get_field('image_offres'); ?>
        <img src="<?= esc_url($image_offres['url']) ?>" alt="<?= esc_attr($image_offres['alt']); ?>">
        <div class="anim-container">
            <h2><?php the_field('titre_offres') ?></h2>
        </div>
        <?php if (have_rows('offres')) : $i = 0 ?>
            <ul class="offres-container">
                <?php while (have_rows('offres')) : the_row();
                    $i = $i + 1;  ?>
                    <div class="shadow">
                        <div class="anim-container">
                            <li class="offre" id="offre-<?= $i ?>">
                                <h3><?php the_sub_field('nom_offres'); ?><br /><span><?php the_sub_field('prix'); ?></span><span class="ht"> ht</span></h3>
                                <?php if (have_rows('avantages_offres')) : ?>
                                    <ul class="avangates-offre">
                                        <?php while (have_rows('avantages_offres')) : the_row();
                                            if (intval(get_sub_field('quelle_offre')) <= $i) : ?>
                                                <li class="current-avantage avantage-<?= intval(get_sub_field('quelle_offre')); ?>">
                                                    <?php the_sub_field('nom_avantages'); ?>
                                                </li>
                                            <?php else : ?>
                                                <li class="not-current-avantage avantage-<?= intval(get_sub_field('quelle_offre')); ?>">
                                                    <?php the_sub_field('nom_avantages'); ?>
                                                </li>
                                            <?php endif; ?>
                                        <?php endwhile; ?>
                                    </ul>
                                <?php endif; ?>
                                <p class="engagement"><?php the_sub_field('engagement') ?> mois d'engagement</p>
                            </li>
                        </div>
                    </div>
                <?php endwhile; ?>
            </ul>
        <?php endif; ?>
        <?php $texte_header = get_field('texte_du_bouton', 'option') ? get_field('texte_du_bouton', 'option') : "Je demande ma démo" ?>
        <div class="anim-container">
            <button><?= $texte_header; ?></button>
        </div>
    </div>
</section>