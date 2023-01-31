import "../styles/style.css";
import "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./dom";
AOS.init();

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

// let x = character;

// DOMSelectors.characters.addEventListener("click", function () {
//   let x = episodes;
//   if (x === episodes) {
//     async function init3() {
//       try {
//         DOMSelectors.display.innerHTML = ``;
//         await episodecaller();
//         let e = DOMSelectors.input.value;
//         let filtered = episodes.results.filter(
//           (lol) => lol.episode.includes(`${e}`) || lol.episode === `${e}`
//         );
//         filtered.map((bob) => {
//           DOMSelectors.display.insertAdjacentHTML(
//             "afterbegin",
//             `<div class="display-card3" data-aos="fade-down">
//             <h2 class="name">Name: ${bob.name}</h2>
//             <h2 class="date">Air Date: ${bob.air_date}</h2>
//             <h2 class="episode">Episode: ${bob.episode}</h2>
//             <button class="people"> Characters in the Episode </button>
//             </div>`
//           );
//         });
//         if (DOMSelectors.display.innerHTML.includes(`${e}`)) {
//         } else {
//           DOMSelectors.display.insertAdjacentHTML(
//             "afterbeg in",
//             `<p class="error"> NOT FOUND </p>`
//           );
//         }
//         DOMSelectors.input.value = "";
//       } catch (error) {}
//     }
//   } else if (x === location) {
//     async function init2() {
//       try {
//         DOMSelectors.display.innerHTML = ``;
//         await locationcaller();
//         let place = DOMSelectors.input.value;
//         let filtered = locations.results.filter(
//           (lol) => lol.name.includes(`${place}`) || lol.name === `${place}`
//         );
//         filtered.map((bob) => {
//           DOMSelectors.display.insertAdjacentHTML(
//             "afterbegin",
//             `<div class="display-card2" data-aos="fade-down">
//             <h2 class="name"> Name: ${bob.name}</h2>
//             <h2 class="type"> Type: ${bob.type}</h2>
//             <h2 class="dimension"> Dimension: ${bob.dimension}</h2>
//             <button class="residents"> Residents </button>
//             </div>`
//           );
//         });
//         if (DOMSelectors.display.innerHTML.includes(`${place}`)) {
//         } else {
//           DOMSelectors.display.insertAdjacentHTML(
//             "afterbegin",
//             `<p class="error"> NOT FOUND </p>`
//           );
//         }
//         DOMSelectors.input.value = "";
//       } catch (error) {}
//     }
//   } else if (x === character) {
//     async function init1() {
//       try {
//         DOMSelectors.display.innerHTML = ``;
//         let character = await getCharacters();
//         let person = DOMSelectors.input.value;
//         let filtered = character.results.filter(
//           (lol) => lol.name.includes(`${person}`) || lol.name === `${person}`
//         );
//         filtered.map((bob) => {
//           DOMSelectors.display.insertAdjacentHTML(
//             "afterbegin",
//             `<div class="display-card1" data-aos="fade-down">
//           <h2 class="name">${bob.name}</h2>
//           <img src="${bob.image}" alt="${bob.name}">
//           <button class="details"> More Details </button>
//           </div>`
//           );
//         });
//         if (DOMSelectors.display.innerHTML.includes(`${person}`)) {
//         } else {
//           DOMSelectors.display.insertAdjacentHTML(
//             "afterbegin",
//             `<p class="error"> NOT FOUND </p>`
//           );
//         }
//         DOMSelectors.input.value = "";
//       } catch (error) {}
//     }
//   } else {
//     console.log("error");
//   }
// });
