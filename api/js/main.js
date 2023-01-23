import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";

const characters = "https://rickandmortyapi.com/api/character";
const location = "https://rickandmortyapi.com/api/location";
const episodes = "https://rickandmortyapi.com/api/episode";
async function getData(characters) {
  try {
    const responses = await fetch();
    const data = await responses.json();
    data.results.forEach((name) => {
      DOMSelectors.display.insertAdjacentElement;(
      "beforeend",
      `<h2> ${name.name}</h2>`
    ));
  } catch (error) {
    console.log(error);
  }
}
getData(characters);

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

/* function createcard() {
  let name = DOMSelectors.input.value;
  card(name);
}

function card(name) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
    <img class="display-img" src="${img}"/ >
    <h2 class="name">${name}</h2>
    </div>`
  );
} */

function clearinputs() {
  DOMSelectors.input.value = "";
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  createcard();
  clearinputs();
});
