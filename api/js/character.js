import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const characters = "https://rickandmortyapi.com/api/character";

document.querySelector(".characters").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  charactercard();
});

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
      `<div class="display-card" data-aos="fade-down">
      <h2 class="name">${bob.name}</h2>
      <img src="${bob.image}" alt="image of ${bob.name}">
      <a href="">More Details</a>
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
        `<div class="display-card" data-aos="fade-down">
      <h2 class="name">${bob.name}</h2>
      <img src="${bob.image}" alt="image of ${bob.name}"> 
      <a href="">More Details</a>
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
