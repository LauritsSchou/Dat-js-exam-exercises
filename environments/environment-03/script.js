"use strict";
const products = [
  {
    name: "køleskab",
    price: 1600,
    inStock: false,
  },
  {
    name: "hoppebold",
    price: 5,
    inStock: true,
  },
  {
    name: "banjo",
    price: 160000,
    inStock: false,
  },
];
window.addEventListener("load", initApp);

function initApp() {
  showProducts();
  document
    .querySelector("#create-form")
    .addEventListener("submit", addNewProductClicked);
}
function showProducts() {
  let productlist = document.querySelector("#list-container");
  productlist.innerHTML = "";
  products.sort((a, b) => b.inStock - a.inStock);
  for (const product of products) {
    const productlistHTML =
      /*html*/
      `
    <li>${product.name} ${product.price},- ${checkProductInStock(product)}</li>
    `;
    productlist.insertAdjacentHTML("beforeend", productlistHTML);
  }
}
function checkProductInStock(product) {
  if (product.inStock === true) {
    return /*html*/ "På lager";
  } else {
    return /*html*/ "Ikke på lager";
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
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.checked;
  addNewProduct(name, price, inStock);
}
