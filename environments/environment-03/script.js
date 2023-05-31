"use strict";
const products = [
  {
    name: "Køleskab",
    price: 2500,
    inStock: true,
  },
  {
    name: "Hoppebold",
    price: 25,
    inStock: true,
  },
  {
    name: "Banjo",
    price: 250099,
    inStock: false,
  },
];
window.addEventListener("load", initApp);

function initApp() {
  showProducts();
  document
    .querySelector("#select-sort-by")
    .addEventListener("change", sortByChanged);
}
function showProducts() {
  const productList = document.querySelector("#list-container");
  productList.innerHTML = "";
  for (const product of products) {
    const productListHTML = /*html*/ `
    <li>${product.name} ${product.price},- ${product.inStock}</li>
    `;
    productList.insertAdjacentHTML("beforeend", productListHTML);
  }
}
function sortByChanged() {
  const selectedValue = document.querySelector("#select-sort-by").value;
  console.log(selectedValue);
  if (selectedValue === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
    showProducts();
  } else if (selectedValue === "price") {
    products.sort((a, b) => b.price - a.price);
    showProducts();
  } else if (selectedValue === "inStock") {
    products.sort((a, b) => b.inStock - a.inStock);
    showProducts();
  } else if (selectedValue === "") {
    showProducts();
  }
}
