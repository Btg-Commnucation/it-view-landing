const accountSent = (formContainer, accountTag) => {
  formContainer.innerHTML = `
      <div class="hero-banner">
      <h3>Merci</h3>
      <img src="../wp-content/themes/it-theme/public/close-it-contact.svg" alt="Fermer le fenêtre de contact" id="close-contact" class="close-account">
  </div>
  <div class="form-container">
      <img src="../wp-content/themes/it-theme/public/keylock.svg" alt="la lettre O de IT-OneView">
      <p>Toute l’équipe IT-OneView vous remercie 😊 <br />Nous prendrons rapidement contact avec vous</p>
  </div>`;

  const closeAccount = document.querySelector(".close-account");

  closeAccount.addEventListener("click", () => {
    accountTag.style.display = "none";
    document.body.style.overflow = "scroll";
    document.body.classList.remove("no-scroll");
  });
};

export { accountSent };
