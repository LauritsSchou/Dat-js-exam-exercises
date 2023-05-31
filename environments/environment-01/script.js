"use strict";
let users = [];
window.addEventListener("load", initApp);
async function initApp() {
  await getUsers();
  showUsers();
}
async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  users = data;
}
function showUsers() {
  let userList = document.querySelector("#userlist");
  userList.innerHTML = "";
  for (const user of users) {
    if (user.active === true) {
      const userlistHTML = /*html*/ `
        <li>${user.name} </li>
        `;
      userList.insertAdjacentHTML("beforeend", userlistHTML);
    }
  }
}
function createUser(name, active, role) {
  const newUser = {
    name: name,
    active: active,
    role: role,
  };
  users.push(newUser);
  showUsers();
}
