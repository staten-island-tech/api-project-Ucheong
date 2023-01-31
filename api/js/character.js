import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
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

let character = [];

async function charactercaller() {
  character = [];
  for (let i = 1; i <= 42; i++) {
    let page1 = await fetch(
      `https://rickandmortyapi.com/api/location?page=${i}`
    );
    character.push(await page1.json());
  }
}

// document.querySelector(".details").addEventListener("click", function () {
//   document.body.innerHTML = ``;
// });

// async function getCharacters() {
//   const responses = await fetch(characters);
//   const data = await responses.json();
//   return data;
// }

async function charactercard() {
  await charactercaller();
  character.results.forEach((bob) => {
    // array inside array
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
