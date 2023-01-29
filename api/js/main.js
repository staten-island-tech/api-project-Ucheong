import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";

const characters = "https://rickandmortyapi.com/api/character";
const location = "https://rickandmortyapi.com/api/location";
const episodes = "https://rickandmortyapi.com/api/episode";

async function getData() {
  const responses = await fetch(characters);
  const data = await responses.json();
  return data;
}

async function init() {
  let character = await getData();
  character.results.forEach((bob) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
      <h2 class="name">${bob.name}</h2>
      <img src="${bob.image}" alt="image of ${bob.name}"> 
      </div>`
    );
  });
}
init();

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

// function createcard() {
//   let name = DOMSelectors.input.value;
//   card(name);
// }

function clearinputs() {
  DOMSelectors.input.value = "";
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  createcard();
  clearinputs();
});
