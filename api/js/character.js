import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

let character = [];

async function charactercaller() {
  character = [];
  for (let i = 1; i <= 42; i++) {
    let page = await fetch(
      `https://rickandmortyapi.com/api/location?page=${i}`
    );
    character.push(await page.json());
    characterGeneral();
    character = [];
  }
}

async function characterGeneral() {
  await locationcaller();
  character.forEach((characters) => {
    characters.results.forEach((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="display-card1" data-aos="fade-down">
      <h2 class="name">${bob.name}</h2>
      <img src="${bob.image}" alt="${bob.name}">
      <button class="details"> More Details </button>
      </div>`
      );
    });
  });
}

async function characterFilter() {
  try {
    DOMSelectors.display.innerHTML = ``;
    let character = await getCharacters();
    let person = DOMSelectors.input.value;
    let filtered = character.results.filter(
      (lol) => lol.name.includes(`${person}`) || lol.name === `${person}`
    );
    filtered.map((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card1" data-aos="fade-down">
      <h2 class="name">${bob.name}</h2>
      <img src="${bob.image}" alt="${bob.name}">
      <button class="details"> More Details </button>   
      </div>`
      );
    });
    if (DOMSelectors.display.innerHTML.includes(`${person}`)) {
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<p class="error"> NOT FOUND </p>`
      );
    }
    DOMSelectors.input.value = "";
  } catch (error) {}
}
