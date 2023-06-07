import { observerHeader } from "./header.js";
import { observerHeroBanner } from "./hero-banner.js";
import { observer } from "./solution.js";
import { observerContent } from "./content.js";
import { handleLastType } from "./LastType.js";
import { observerConfiance } from "./confiance.js";
import { observerBottom } from "./bottom.js";

document.addEventListener("DOMContentLoaded", () => {
  observer.observe(document.querySelector("#observer-solution"));
  observerHeader.observe(document.querySelector("header"));
  observerHeroBanner.observe(document.querySelector("#hero-banner"));
  observerHeroBanner.observe(document.querySelector("#offres"));
  observerHeroBanner.observe(document.querySelector(".offres-container"));
  observerConfiance.observe(document.querySelector("#confiance"));
  observerBottom.observe(document.querySelector("#bottom"));

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
});
