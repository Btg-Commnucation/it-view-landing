<section id="account">
    <div class="container">
        <div class="hero-banner">
            <h3>Je crée mon compte</h3>
            <img src="<?= get_template_directory_uri(); ?>/public/close-it-contact.svg" alt="Fermer le fenêtre de contact" id="close-account">
        </div>
        <div class="form-container">
            <img src="<?php echo get_template_directory_uri(); ?>/public/keylock.svg" alt="la lettre O de IT-OneView">
            <p>Afin d’obtenir la création de votre compte, merci de remplir les informations suivantes :</p>
            <div class="form">
                <?php echo do_shortcode('[contact-form-7 id="144" title="Créer un compte"]') ?>
            </div>
        </div>
    </div>
</section>