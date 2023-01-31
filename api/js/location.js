import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// const location = "https://rickandmortyapi.com/api/location";

document.querySelector(".location").addEventListener("click", function () {
  DOMSelectors.label.innerHTML = ``;
  DOMSelectors.label.innerHTML = `Location Name`;
  DOMSelectors.display.innerHTML = ``;
  locationcard();
});

// document.querySelector(".residents").addEventListener("click", function () {
//   document.body.innerHTML = ``;
// });

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

// async function getLocation() {
//   const responses = await fetch(location);
//   const data = await responses.json();
//   return data;
// }

async function locationcard() {
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

//   locations.results.forEach((bob) => {
//     DOMSelectors.display.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="display-card2" data-aos="fade-down">
//         <h2 class="name"> Name: ${bob.name}</h2>
//         <h2 class="type"> Type: ${bob.type}</h2>
//         <h2 class="dimension"> Dimension: ${bob.dimension}</h2>
//         <button class="residents"> Residents </button>
//         </div>`
//     );
//   });
// }

async function init2() {
  try {
    DOMSelectors.display.innerHTML = ``;
    await locationcaller();
    let place = DOMSelectors.input.value;
    let filtered = locations.results.filter(
      (lol) => lol.name.includes(`${place}`) || lol.name === `${place}`
    );
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
    if (DOMSelectors.display.innerHTML.includes(`${place}`)) {
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
  init2();
});
