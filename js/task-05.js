const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", printName);
function printName(event) {
  event.currentTarget.value
    ? (nameOutput.innerHTML = event.currentTarget.value)
    : (nameOutput.innerHTML = "Anonymous");
}
