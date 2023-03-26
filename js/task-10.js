function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const amountField = controls.firstElementChild;
let amount;

amountField.addEventListener("input", (e) => {
  return (amount = e.currentTarget.value);
});
createBtn.addEventListener("click", createBoxes);
function createBoxes() {
  let boxSize = 30;
  let boxesArr = [];
  while (boxesArr.length < amount) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxesArr.push(box);
  }
  boxes.append(...boxesArr);
}
destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  amountField.value = "";
});

// function createBoxes() {
//   let boxSize = 30;
//   while (boxes.children.length < amount) {
//     const box = document.createElement("div");
//     boxes.append(box);
//     box.style.width = `${boxSize}px`;
//     box.style.height = `${boxSize}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxSize += 10;
//   }
// }
