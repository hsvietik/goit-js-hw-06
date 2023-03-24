const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const ingredientsList = [];
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  ingredientsList.push(item);
});

console.log(ingredientsList);
list.append(...ingredientsList);

// const list = document.querySelector("#ingredients");
// for (const ingredient of ingredients) {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   list.append(item);
// }
