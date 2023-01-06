import "../styles/style.css";

const URL = "";
async function getData(URL) {
  try {
    const respone = await fetch(URL);
    const data = await respone.json();
    document.getElementById("lol").textContent = data;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
