let counterValue = 0;
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
decrBtn.addEventListener("click", count);
incrBtn.addEventListener("click", count);
function count(evt) {
  switch (evt.currentTarget.dataset.action) {
    case "decrement":
      counterValue -= 1;
      break;
    case "increment":
      counterValue += 1;
      break;
  }
  value.innerHTML = counterValue;
}
