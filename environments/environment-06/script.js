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
  basket.push(product);
  console.log(basket);
  showBasket();
}
function showBasket() {
  document.querySelector("#basket").innerHTML = "";
  for (const product of basket) {
    let basketHTML = /*html*/ `
        <tr>
              <td>${product.name}</td>
              <td>${product.weight}g</td>
              <td>${product.price},-</td>
     </tr>
        `;
    document.querySelector("#basket").insertAdjacentHTML("beforeend", basketHTML);
  }
}
