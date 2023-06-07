<?php wp_footer(); ?>

<footer>
    <div class="container">
        <div class="anim-container">
            <h2></h2>
        </div>
        <?php $texte_header = get_field('texte_du_bouton') ? get_field('texte_du_bouton') : "Je demande ma démo" ?>
        <div class="anim-container">
            <button><?= $texte_header; ?></button>
        </div>
    </div>
</footer>

</body>

</html>