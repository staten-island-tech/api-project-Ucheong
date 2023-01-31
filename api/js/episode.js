import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

document.querySelector(".episodes").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = `Episode (Type it in S00E00 format!)`;
  DOMSelectors.display.innerHTML = ``;
  episodecard();
});

let episodes = [];

async function episodecaller() {
  episodes = [];
  for (let i = 1; i <= 3; i++) {
    let page1 = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${i}`
    );
    episodes.push(await page1.json());
  }
}

async function episodecard() {
  await episodecaller();
  episodes.forEach((episode) => {
    episode.results.forEach((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card3" data-aos="fade-down">
      <h2 class="name">Name: ${bob.name}</h2>
      <h2 class="date">Air Date: ${bob.air_date}</h2>
      <h2 class="episode">Episode: ${bob.episode}</h2>
      <button class="people"> Characters in the Episode </button>
      </div>`
      );
    });
  });
}

// let displaycard = document.querySelector("div.display-card"),
//   people = displaycard.querySelector("button.people");
// people.addEventListener("click", function () {
//   document.body.innerHTML = ``;
// });

async function init3() {
  try {
    DOMSelectors.display.innerHTML = ``;
    await episodecaller();
    let e = DOMSelectors.input.value;
    let filtered = episodes.results.filter(
      (lol) => lol.episode.includes(`${e}`) || lol.episode === `${e}`
    );
    filtered.map((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card3" data-aos="fade-down">
        <h2 class="name">Name: ${bob.name}</h2>
        <h2 class="date">Air Date: ${bob.air_date}</h2>
        <h2 class="episode">Episode: ${bob.episode}</h2>
        <button class="people"> Characters in the Episode </button>
        </div>`
      );
    });
    if (DOMSelectors.display.innerHTML.includes(`${e}`)) {
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbeg in",
        `<p class="error"> NOT FOUND </p>`
      );
    }
    DOMSelectors.input.value = "";
  } catch (error) {}
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  init3();
});
