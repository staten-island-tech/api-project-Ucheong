import "../styles/style.css";
import "./dom";
import "./link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});
