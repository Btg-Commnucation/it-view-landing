<?php wp_footer(); ?>

<footer>
    <div class="container">
        <div class="anim-container">
            <h3><?php the_field('texte_bas_de_page', 'option'); ?></h3>
        </div>
        <?php $texte_header = get_field('texte_du_bouton') ? get_field('texte_du_bouton') : "Je demande ma démo" ?>
        <div class="anim-container">
            <button class="btn-contact"><?= $texte_header; ?></button>
        </div>
    </div>
    <section class="mentions">
        <div class="container">
            <ul class="link">
                <li>
                    <?php $mentions = get_field('mentions_legales', 'option'); ?>
                    <a href="<?= esc_url($mentions['url']); ?>"><?= esc_html($mentions['title']); ?></a>
                </li>
            </ul>
            <p class="realisation">Site réalisé par : <a href="https://www.btg-communication.fr" target="_blank">btg communication</a></p>
        </div>
    </section>
</footer>

</body>

</html>