import "../styles/style.css";

const URL = "https://genius-song-lyrics1.p.rapidapi.com/songs/lyrics";
async function getData(URL) {
  try {
    const responses = await fetch(URL);
    const data = await responses.json();
    document.getElementById("response").textContent = data.data[0].artist;
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
