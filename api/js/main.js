import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";

const characters = "https://rickandmortyapi.com/api/character";
const location = "https://rickandmortyapi.com/api/location";
const episodes = "https://rickandmortyapi.com/api/episode";

async function original() {
  let character = await getData();
  character.results.forEach((bob) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
    <h2 class="name">${bob.name}</h2>
    <img src="${bob.image}" alt="image of ${bob.name}">
    <a href="">More Details</a>
    </div>`
    );
  });
}
document.querySelector(".original").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = ``;
  original();
});

async function getData() {
  const responses = await fetch(characters);
  const data = await responses.json();
  return data;
}

async function card() {
  let character = await getData();
  character.results.forEach((bob) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
    <h2 class="name">${bob.name}</h2>
    <img src="${bob.image}" alt="image of ${bob.name}">
    <a href="">More Details</a>
    </div>`
    );
  });
}
card();

async function init() {
  try {
    DOMSelectors.display.innerHTML = ``;
    let character = await getData();
    let person = DOMSelectors.input.value;
    let filtered = character.results.filter(
      (lol) => lol.name.includes(`${person}`) || lol.name === `${person}`
    );
    filtered.map((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card">
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

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  init();
});
