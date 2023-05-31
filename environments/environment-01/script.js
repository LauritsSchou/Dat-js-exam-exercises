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
  users = json;
}
function showUsers(listOfUsers) {
  const adminUsers = listOfUsers.filter(sortUsersByAdmin);
  const userlist = document.querySelector("#userlist");
  userlist.innerHTML = "";
  for (const user of adminUsers) {
    if (user.active === true) {
      let userHTML = /*html*/ `
    <li> User name: ${user.name} User status: Active</li>`;
      userlist.insertAdjacentHTML("beforeend", userHTML);
    } else {
      let userHTML = /*html*/ `
    <li> User name: ${user.name} User status: Passive</li>`;
      userlist.insertAdjacentHTML("beforeend", userHTML);
    }
  }
}
function sortUsersByAdmin(user) {
  return user.role === "admin";
}
