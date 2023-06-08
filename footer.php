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
</footer>

</body>

</html>