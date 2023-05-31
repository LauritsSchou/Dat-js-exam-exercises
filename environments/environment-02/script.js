"use strict";
window.addEventListener("load", initApp);
let animals = [];
function initApp() {
  document
    .querySelector("#create-form")
    .addEventListener("submit", addNewAnimalClicked);
  showAnimals(animals);
}
function addNewAnimal(name, type, age) {
  let newAnimal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(newAnimal);
  showAnimals(animals);
}
function addNewAnimalClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;
  addNewAnimal(name, type, age);
}
function showAnimals(listOfAnimals) {
  console.log(listOfAnimals);
  const animalList = document.querySelector("#list-container");
  animalList.innerHTML = "";
  animals.sort((a, b) => a.name.localeCompare(b.name));
  for (const animal of listOfAnimals) {
    let animalListHTML = /*html*/ `<p>
  ${animal.name} ${animal.type} ${animal.age}</p>
  `;
    animalList.insertAdjacentHTML("beforeend", animalListHTML);
  }
}
