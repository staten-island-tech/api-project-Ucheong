import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const characters = "https://rickandmortyapi.com/api/character";

document.querySelector(".characters").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Character Name`;
  DOMSelectors.display.innerHTML = ``;
  charactercard();
});

// document.querySelector(".details").addEventListener("click", function () {
//   document.body.innerHTML = ``;
// });

async function getCharacters() {
  const responses = await fetch(characters);
  const data = await responses.json();
  return data;
}

async function charactercard() {
  let character = await getCharacters();
  character.results.forEach((bob) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card1" data-aos="fade-down">
      <h2 class="name">${bob.name}</h2>
      <img src="${bob.image}" alt="${bob.name}">
      <button class="details"> More Details </button>
      </div>`
    );
  });
}

async function init1() {
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

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  init1();
});
