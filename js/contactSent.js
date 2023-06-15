const contactSent = (formContainer) => {
  formContainer.innerHTML = `
    <div class="hero-banner">
    <h3>Merci</h3>
    <img src="../wp-content/themes/it-theme/public/close-it-contact.svg" alt="Fermer le fenêtre de contact" id="close-contact">
</div>
<div class="form-container">
    <img src="../wp-content/themes/it-theme/public/keylock.svg" alt="la lettre O de IT-OneView">
    <p>Toute l’équipe IT-OneView vous remercie 😊 <br />Nous prendrons rapidement contact avec vous</p>
</div>`;
};

export { contactSent };
