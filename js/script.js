import { observerHeader } from "./header.js";
import { observerHeroBanner } from "./hero-banner.js";
import { observer } from "./solution.js";

observer.observe(document.querySelector("#observer-solution"));
observerHeader.observe(document.querySelector("header"));
observerHeroBanner.observe(document.querySelector("#hero-banner"));
