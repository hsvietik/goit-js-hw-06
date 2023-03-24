const list = document.querySelector("#categories");
const listItems = list.children;
console.dir(`Number of categories: ${listItems.length}`);

function getCategories() {
  [...listItems].forEach((item) => {
    console.log(
      `Category: ${item.firstElementChild.innerText}\nElements: ${item.lastElementChild.children.length}`
    );
  });
}

getCategories();
