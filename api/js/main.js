import "../styles/style.css";

const URL = "http://api.chartlyrics.com/GetLyric";
async function getData(URL) {
  try {
    const responses = await fetch(URL);
    const data = await responses.json();
    document.getElementById(".respone").textContent = data.Lyric;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

document.querySelector(".light").addEventListener("click", function () {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.querySelector(".dark").addEventListener("click", function () {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});
