import { observerHeader } from "./header.js";
import { observerHeroBanner } from "./hero-banner.js";
import { observer } from "./solution.js";
import { observerContent } from "./content.js";
import { handleLastType } from "./LastType.js";
import { observerConfiance } from "./confiance.js";
import { observerBottom } from "./bottom.js";
import { observerFooter } from "./footer.js";
import { contactSent } from "./contactSent.js";

document.addEventListener("DOMContentLoaded", () => {
  const observerSolution = document.querySelector("#observer-solution");
  if (observerSolution) {
    observer.observe(observerSolution);
  }

  const observerFromHeader = document.querySelector("header");
  if (observerFromHeader) {
    observerHeader.observe(observerFromHeader);
  }

  observerHeroBanner.observe(document.querySelector("#hero-banner"));
  observerHeroBanner.observe(document.querySelector("#offres"));
  observerHeroBanner.observe(document.querySelector(".offres-container"));
  observerConfiance.observe(document.querySelector("#confiance"));
  observerBottom.observe(document.querySelector("#bottom"));
  observerFooter.observe(document.querySelector("footer"));

  const blocks = document.querySelectorAll(".wp-block-columns");

  blocks.forEach((block) => {
    observerContent.observe(block);
  });

  const offreUn = document.getElementById("offre-1");
  const offreDeux = document.getElementById("offre-2");
  const offreTrois = document.getElementById("offre-3");

  const avantageUn = offreUn.children[1].querySelectorAll(".avantage-1");
  const avantageDeux = offreUn.children[1].querySelectorAll(".avantage-2");
  const avantageTrois = offreDeux.children[1].querySelectorAll(".avantage-1");
  const avantageQuatre = offreDeux.children[1].querySelectorAll(".avantage-2");
  const avantageCinq = offreTrois.children[1].querySelectorAll(".avantage-1");
  const avantageSix = offreTrois.children[1].querySelectorAll(".avantage-2");

  handleLastType(avantageUn);
  handleLastType(avantageDeux);
  handleLastType(avantageTrois);
  handleLastType(avantageQuatre);
  handleLastType(avantageCinq);
  handleLastType(avantageSix);

  const btnContact = document.querySelectorAll(".btn-contact");
  const contact = document.getElementById("contact");
  const closeContact = document.getElementById("close-contact");
  const formContainer = document.querySelector("#contact > .container");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    setTimeout(() => {
      if (e.target.dataset.status === "sent") {
        contactSent(formContainer);
      }
    }, 300);
  });

  btnContact.forEach((btn) => {
    btn.addEventListener("click", () => {
      contact.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.classLisT.add("no-scroll");
    });
  });

  closeContact.addEventListener("click", () => {
    contact.style.display = "none";
    document.body.style.overflow = "scroll";
    document.body.classLisT.remove("no-scroll");
  });

  contact.addEventListener("click", (e) => {
    if (e.target === contact) {
      contact.style.display = "none";
      document.body.style.overflow = "scroll";
      document.body.classLisT.remove("no-scroll");
    }
  });
});
