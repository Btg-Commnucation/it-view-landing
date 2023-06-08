const contactSent = (formContainer) => {
  formContainer.innerHTML = `
    <div class="hero-banner">
    <h3>Merci</h3>
    <img src="../wp-content/themes/it-theme/public/close-it-contact.svg" alt="Fermer le fenêtre de contact" id="close-contact">
</div>
<div class="form-container">
    <img src="../wp-content/themes/it-theme/public/keylock.svg" alt="la lettre O de IT-OneView">
    <p>Nous avons bien reçu votre demande de démo.<br />Notre équipe va prendre contact avec vous dans les meileurs délais.</p>
</div>`;
};

export { contactSent };
