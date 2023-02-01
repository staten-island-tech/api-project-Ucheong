import "../styles/style.css";
import "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./dom";
AOS.init();

let current = "character";

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

DOMSelectors.characters.addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Character Name`;
  DOMSelectors.display.innerHTML = ``;
  current = "characters";
  main("character");
});

document.querySelector(".episodes").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Episode (Type it in S00E00 format!)`;
  DOMSelectors.display.innerHTML = ``;
  current = "episodes";
  main("episodes");
});

document.querySelector(".location").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Location Name`;
  DOMSelectors.display.innerHTML = ``;
  current = "locations";
  main("locations");
});

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  switch (current) {
    case "characters":
      characterFilter();
      break;
    case "locations":
      locationFilter();
      break;
    case "episodes":
      episodeFilter();
  }
});

function main(x) {
  switch (x) {
    case "episodes":
      episodeGeneral();
      break;
    case "locations":
      locationGeneral();
      break;
    case "character":
      characterGeneral();
      break;
    default:
      console.log("error");
  }
}

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

async function episodeGeneral() {
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

async function episodeFilter() {
  try {
    DOMSelectors.display.innerHTML = ``;
    await episodecaller();
    let e = DOMSelectors.input.value;
    let filtered = [];
    episodes.forEach((episode) => {
      episode.results.forEach((lol) => {
        if (lol.episode.includes(e)) {
          filtered.push(lol);
        }
      });
    });
    filtered.forEach((bob) => {
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
    if (DOMSelectors.display.innerHTML.includes(e)) {
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<p class="error"> NOT FOUND </p>`
      );
    }
    DOMSelectors.input.value = "";
  } catch (error) {}
}

//break

let locations = [];

async function locationcaller() {
  locations = [];
  for (let i = 1; i <= 7; i++) {
    let page1 = await fetch(
      `https://rickandmortyapi.com/api/location?page=${i}`
    );
    locations.push(await page1.json());
  }
}

async function locationGeneral() {
  await locationcaller();
  locations.forEach((location) => {
    location.results.forEach((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card2" data-aos="fade-down">
        <h2 class="name"> Name: ${bob.name}</h2>
        <h2 class="type"> Type: ${bob.type}</h2>
        <h2 class="dimension"> Dimension: ${bob.dimension}</h2>
        <button class="residents"> Residents </button>
        </div>`
      );
    });
  });
}

async function locationFilter() {
  try {
    DOMSelectors.display.innerHTML = ``;
    await locationcaller();
    let place = DOMSelectors.input.value;
    let filtered = [];
    locations.forEach((location) => {
      location.results.forEach((lmao) => {
        if (lmao.name.includes(place)) {
          filtered.push(lmao);
        }
      });
    });
    console.log(filtered);
    filtered.map((bob) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card2" data-aos="fade-down">
        <h2 class="name"> Name: ${bob.name}</h2>
        <h2 class="type"> Type: ${bob.type}</h2>
        <h2 class="dimension"> Dimension: ${bob.dimension}</h2>
        <button class="residents"> Residents </button>
        </div>`
      );
    });
    if (DOMSelectors.display.innerHTML.includes(place)) {
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<p class="error"> NOT FOUND </p>`
      );
    }
    DOMSelectors.input.value = "";
  } catch (error) {}
}

//break

let character = [];

async function charactercaller() {
  character = [];
  for (let i = 1; i <= 42; i++) {
    let page = await fetch(
      `https://rickandmortyapi.com/api/location?page=${i}`
    );
    character.push(await page.json());
  }
}

async function characterGeneral() {
  await charactercaller();
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
    await charactercaller();
    let person = DOMSelectors.input.value;
    let filtered = [];
    character.forEach((characters) => {
      characters.results.forEach((lmao) => {
        if (lmao.name.includes(person)) {
          filtered.push(lmao);
        }
      });
    });
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
    if (DOMSelectors.display.innerHTML.includes(place)) {
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<p class="error"> NOT FOUND </p>`
      );
    }
    DOMSelectors.input.value = "";
  } catch (error) {}
}
