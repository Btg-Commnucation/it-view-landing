<section id="contact">
    <div class="container">
        <div class="hero-banner">
            <h3>Je demande ma démo</h3>
            <img src="<?= get_template_directory_uri(); ?>/public/close-it-contact.svg" alt="Fermer le fenêtre de contact" id="close-contact" class="close-contact">
        </div>
        <div class="form-container">
            <img src="<?php echo get_template_directory_uri(); ?>/public/keylock.svg" alt="la lettre O de IT-OneView">
            <p>Afin d'obtenir une démo de notre solution IT-OneView, merci de remplir les informations suivantes :</p>
            <div class="form">
                <?php echo do_shortcode('[contact-form-7 id="5" title="Formulaire de contact 1"]') ?>
            </div>
        </div>
    </div>
</section>