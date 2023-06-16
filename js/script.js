import { observerHeader } from "./header.js";
import { observerHeroBanner } from "./hero-banner.js";
import { observer } from "./solution.js";
import { observerContent } from "./content.js";
import { handleLastType } from "./LastType.js";
import { observerConfiance } from "./confiance.js";
import { observerBottom } from "./bottom.js";
import { observerFooter } from "./footer.js";
import { contactSent } from "./contactSent.js";
import { accountSent } from "./accountSent.js";

document.addEventListener("DOMContentLoaded", () => {
  const observerSolution = document.querySelector("#observer-solution");
  if (observerSolution) {
    observer.observe(observerSolution);
  }

  const observerFromHeader = document.querySelector("header");
  if (observerFromHeader) {
    observerHeader.observe(observerFromHeader);
  }

  const heroBanner = document.querySelector("#hero-banner");

  if (heroBanner) {
    observerHeroBanner.observe(heroBanner);
  }

  const offres = document.querySelector("#offres");
  if (offres) {
    observerHeroBanner.observe(offres);
  }

  const offresContainer = document.querySelector(".offres-container");
  if (offresContainer) {
    observerHeroBanner.observe(offresContainer);
  }

  const confiance = document.querySelector("#confiance");
  if (confiance) {
    observerConfiance.observe(confiance);
  }

  const bottom = document.querySelector("#bottom");
  if (bottom) {
    observerBottom.observe(bottom);
  }

  const footer = document.querySelector("footer");
  if (footer) {
    observerFooter.observe(footer);
  }

  const blocks = document.querySelectorAll(".wp-block-columns");

  if (blocks) {
    blocks.forEach((block) => {
      observerContent.observe(block);
    });
  }

  const offreUn = document.getElementById("offre-1");
  const offreDeux = document.getElementById("offre-2");
  const offreTrois = document.getElementById("offre-3");

  if (offreUn && offreDeux && offreTrois) {
    const avantageUn = offreUn.children[1].querySelectorAll(".avantage-1");
    const avantageDeux = offreUn.children[1].querySelectorAll(".avantage-2");
    const avantageTrois = offreDeux.children[1].querySelectorAll(".avantage-1");
    const avantageQuatre =
      offreDeux.children[1].querySelectorAll(".avantage-2");
    const avantageCinq = offreTrois.children[1].querySelectorAll(".avantage-1");
    const avantageSix = offreTrois.children[1].querySelectorAll(".avantage-2");

    if (avantageUn) {
      handleLastType(avantageUn);
    }

    if (avantageDeux) {
      handleLastType(avantageDeux);
    }

    if (avantageTrois) {
      handleLastType(avantageTrois);
    }

    if (avantageQuatre) {
      handleLastType(avantageQuatre);
    }

    if (avantageCinq) {
      handleLastType(avantageCinq);
    }

    if (avantageSix) {
      handleLastType(avantageSix);
    }
  }

  const btnContact = document.querySelectorAll(".btn-contact");
  const contact = document.getElementById("contact");
  const closeContact = document.getElementById("close-contact");
  const formContainer = document.querySelector("#contact > .container");
  const form = document.querySelector(
    "#contact > .container > .form-container > .form > .wpcf7 > form"
  );
  const accountForm = document.querySelector(
    "#account > .container > .form-container > .form > .wpcf7 > form"
  );
  const account = document.getElementById("account");
  const closeAccount = document.getElementById("close-account");
  const btnAccount = document.querySelector(".btn-account");
  const accountContainer = document.querySelector("#account > .container");

  if (btnContact && contact && closeContact && formContainer && form) {
    form.addEventListener("submit", (e) => {
      setTimeout(() => {
        console.log(e.target.dataset.status);
        if (
          e.target.dataset.status === "sent" ||
          e.target.dataset.status === "resetting"
        ) {
          contactSent(formContainer, contact);
        }
      }, 500);
    });

    btnContact.forEach((btn) => {
      btn.addEventListener("click", () => {
        contact.style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.classList.add("no-scroll");
      });
    });

    closeContact.addEventListener("click", () => {
      contact.style.display = "none";
      document.body.style.overflow = "scroll";
      document.body.classList.remove("no-scroll");
    });

    contact.addEventListener("click", (e) => {
      if (e.target === contact) {
        contact.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.classList.remove("no-scroll");
      }
    });
  }

  if (btnAccount && account && closeContact && formContainer && accountForm) {
    accountForm.addEventListener("submit", (e) => {
      setTimeout(() => {
        if (
          e.target.dataset.status === "sent" ||
          e.target.dataset.status === "resetting"
        ) {
          accountSent(accountContainer, account);
        }
      }, 500);
    });

    btnAccount.addEventListener("click", () => {
      account.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.classList.add("no-scroll");
    });

    closeAccount.addEventListener("click", () => {
      account.style.display = "none";
      document.body.style.overflow = "scroll";
      document.body.classList.remove("no-scroll");
    });

    account.addEventListener("click", (e) => {
      if (e.target === account) {
        account.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.classList.remove("no-scroll");
      }
    });
  }
});
