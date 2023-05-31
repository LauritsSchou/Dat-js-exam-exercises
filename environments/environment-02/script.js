"use strict";
const animals = [
  {
    name: "Jaguar",
    type: "Cat",
    age: 12,
  },
  {
    name: "Dolphin",
    type: "Mammal",
    age: 5,
  },
  {
    name: "Elephant",
    type: "Mammal",
    age: 44,
  },
];
window.addEventListener("load", initApp);
function initApp() {
  document
    .querySelector("#create-form")
    .addEventListener("submit", addNewAnimalClicked);
  showAnimals();
}
function showAnimals() {
  animals.sort((a, b) => a.age - b.age);
  const animalList = document.querySelector("#list-container");
  animalList.innerHTML = "";
  for (const animal of animals) {
    const animalListHTML = `
    <li>    ${animal.name} ${animal.type} ${animal.age}</li>
    `;
    animalList.insertAdjacentHTML("beforeend", animalListHTML);
  }
}
function addNewAnimal(name, type, age) {
  const newAnimal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(newAnimal);
  showAnimals();
}
function addNewAnimalClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;
  addNewAnimal(name, type, age);
}
