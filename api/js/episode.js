import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const episodes1 = "https://rickandmortyapi.com/api/episode";
const episodes2 = "https://rickandmortyapi.com/api/episode?page=2";
const episodes3 = "https://rickandmortyapi.com/api/episode?page=3";

document.querySelector(".episodes").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Episode (Type it in S00E00 format!)`;
  DOMSelectors.display.innerHTML = ``;
  episodecard();
});

async function getEpisode() {
  const responses = await fetch(episodes1);
  const data = await responses.json();
  return data;
}

// const data = async () => {
//   try {
//     const responses = await Promise.all(
//       episodes.map((episode) => fetch(episode).then((res) => res.json()))
//     );
//     console.log(responses);
//   } catch (error) {
//     DOMSelectors.display.insertAdjacentHTML(
//       "afterbegin",
//       `<p class="error"> NOT FOUND </p>`
//     );
//   }
// };
// data();

async function episodecard() {
  let episode = await getEpisode();
  episode.results.forEach((bob) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card" data-aos="fade-down">
      <h2 class="name">Name: ${bob.name}</h2>
      <h2 class="date">Air Date: ${bob.air_date}</h2>
      <h2 class="episode">Episode: ${bob.episode}</h2>
      </div>`
    );
  });
}

async function init3() {
  try {
    DOMSelectors.display.innerHTML = ``;
    let episode = await getEpisode();
    let e = DOMSelectors.input.value;
    let filtered = episode.results.filter(
      (lol) => lol.episode.includes(`${e}`) || lol.episode === `${e}`
    );
    filtered.map((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card" data-aos="fade-down">
        <h2 class="name">Name: ${bob.name}</h2>
        <h2 class="date">Air Date: ${bob.air_date}</h2>
        <h2 class="episode">Episode: ${bob.episode}</h2>
        </div>`
      );
    });
    if (DOMSelectors.display.innerHTML.includes(`${e}`)) {
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
  init3();
});
