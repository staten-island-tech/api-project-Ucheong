import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const location = "https://rickandmortyapi.com/api/location";

document.querySelector(".location").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Location Name`;
  DOMSelectors.display.innerHTML = ``;
  locationcard();
});

async function getLocation() {
  const responses = await fetch(location);
  const data = await responses.json();
  return data;
}

async function locationcard() {
  let locations = await getLocation();
  locations.results.forEach((bob) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card" data-aos="fade-down">
        <h2 class="name"> Name: ${bob.name}</h2>
        <h2 class="type"> Type: ${bob.type}</h2>
        <h2 class="dimension"> Dimension: ${bob.dimension}</h2>
        </div>`
    );
  });
}

async function init2() {
  try {
    DOMSelectors.display.innerHTML = ``;
    let locations = await getLocation();
    let place = DOMSelectors.input.value;
    let filtered = locations.results.filter(
      (lol) => lol.name.includes(`${place}`) || lol.name === `${place}`
    );
    filtered.map((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card" data-aos="fade-down">
        <h2 class="name"> Name: ${bob.name}</h2>
        <h2 class="type"> Type: ${bob.type}</h2>
        <h2 class="dimension"> Dimension: ${bob.dimension}</h2>
        </div>`
      );
    });
    if (DOMSelectors.display.innerHTML.includes(`${place}`)) {
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<p class="error"> NOT FOUND </p>`
      );
    }
    DOMSelectors.input.value = "";
  } catch (error) {}
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  init2();
});
