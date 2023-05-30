"use strict";
let products = [];
let basket = [];
window.addEventListener("load", initApp);
async function initApp() {
  await getProducts();
  showProducts();
}

async function getProducts() {
  let response = await fetch("products.json");
  let json = await response.json();
  products = json;
}

function showProducts() {
  document.querySelector("#products").innerHTML = "";
  for (const product of products) {
    let productsHtml = /*html*/ `
    <article>
               <h3 id=name>${product.name}</h3>
               <p id=weight>${product.weight}g</p>
               <p id=price>${product.price},-</p>
               <button>Læg i kurv</button>
               </article>
               `;
    document.querySelector("#products").insertAdjacentHTML("beforeend", productsHtml);
    document.querySelector("#products article:last-child button").addEventListener("click", () => addToBasketClicked(product));
  }
}
function addToBasketClicked(product) {
  const productAndAmount = { product: product, amount: 1 };
  const productExists = basket.find((productAndAmount) => productAndAmount.product === product);
  if (productExists) {
    productExists.amount++;
  } else {
    basket.push(productAndAmount);
  }
  console.log(basket);
  showBasket();
}
function showBasket() {
  document.querySelector("#basket tbody").innerHTML = "";
  for (const productAndAmount of basket) {
    let basketHTML = /*html*/ `
        <tr>
              <td>
                <button class="remove">-</button>
                  ${productAndAmount.amount}
                <button class="add">+</button>
              </td>
              <td>${productAndAmount.product.name}</td>
              <td>${productAndAmount.product.price},-</td>
              <td>${productAndAmount.amount * productAndAmount.product.price},-</td>
            </tr>
            `;
    document.querySelector("#basket tbody").insertAdjacentHTML("beforeend", basketHTML);
    document.querySelector("#basket tr:last-child .remove").addEventListener("click", () => removeFromBasketClicked(productAndAmount.product));
    document.querySelector("#basket tr:last-child .add").addEventListener("click", () => addToBasketClicked(productAndAmount.product));
  }
}
function removeFromBasketClicked(product) {
  const productExists = basket.find((productAndAmount) => productAndAmount.product === product);
  if (productExists) {
    productExists.amount--;
    if (productExists.amount === 0) {
      let currentProduct = basket.indexOf(productExists);
      basket.splice(currentProduct, 1);
    }
  }
  showBasket();
}
