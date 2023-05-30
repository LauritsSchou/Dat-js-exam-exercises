"use strict";
window.addEventListener("load", initApp);
let users = [];
async function initApp() {
  await getUsers();
  showUsers(users);
}
async function getUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  users.push(json);
}
function showUsers(users) {
  const userlist = document.querySelector("#userlist");
  userlist.innerHTML = "";
  for (const user of users) {
    let userHTML = /*html*/ `
    <li> User name: ${user.name} User status: ${user.active}</li>`;
    userlist.insertAdjacentHTML("beforeend", userHTML);
  }
}
