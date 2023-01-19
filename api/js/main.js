import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";

// const URL = "";
// async function getData(URL) {
//   try {
//     const responses = await fetch(URL);
//     const data = await responses.json();
//     document.getElementById("response").textContent = data.cards.name;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData(URL);

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

function createcard() {
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
}

function clearinputs() {
  DOMSelectors.input.value = "";
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  createcard();
  clearinputs();
});
