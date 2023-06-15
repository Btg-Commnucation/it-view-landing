const accountSent = (formContainer) => {
  formContainer.innerHTML = `
      <div class="hero-banner">
      <h3>Merci</h3>
      <img src="../wp-content/themes/it-theme/public/close-it-contact.svg" alt="Fermer le fenêtre de contact" id="close-contact">
  </div>
  <div class="form-container">
      <img src="../wp-content/themes/it-theme/public/keylock.svg" alt="la lettre O de IT-OneView">
      <p>L’équipe IT-OneView vous remercie pour la création de votre compte.<br /> Nous prendrons rapidement contact avec vous&nbsp;😊</p>
  </div>`;
};

export { accountSent };
