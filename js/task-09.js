function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeColor);
function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.innerHTML = color;
}
