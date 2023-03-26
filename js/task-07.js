const fontSizeControler = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");
fontSizeControler.addEventListener("input", changeFontSize);
function changeFontSize(event) {
  textToChange.style.fontSize = `${event.currentTarget.value}px`;
}
