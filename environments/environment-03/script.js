"use strict";
const products = [
  { name: "Køleskab", price: 2500, inStock: true },
  { name: "Hoppebold", price: 5, inStock: true },
  { name: "Banjo", price: 750, inStock: false },
];
window.addEventListener("load", initApp);

function initApp() {
  document
    .querySelector("#form-container")
    .addEventListener("submit", addNewProductClicked);
  showProducts();
}
function showProducts() {
  const productList = document.querySelector("#list-container");
  productList.innerHTML = "";
  for (const product of products) {
    if (product.inStock === true) {
      let productListHTML = /*html*/ `
            <li>${product.name} ${product.price},-</li>
            `;
      productList.insertAdjacentHTML("beforeend", productListHTML);
    }
  }
}
function addNewProduct(name, price, inStock) {
  const newProduct = {
    name: name,
    price: price,
    inStock: inStock,
  };
  products.push(newProduct);
  showProducts();
}
function addNewProductClicked(event) {
  console.log("clicked");
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.checked;
  addNewProduct(name, price, inStock);
}
