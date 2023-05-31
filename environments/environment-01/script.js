"use strict";
let users = [];
let adminCount = 0;
let userCount = 0;
let guestCount = 0;
window.addEventListener("load", initApp);
async function initApp() {
  await getUsers();
  showUsers(users);
  countUsers(users);
}
async function getUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  users = json;
}
function showUsers(listOfUsers) {
  document.querySelector("#userlist").innerHTML = "";
  for (const user of listOfUsers) {
    let userHTML = /*html*/ `
    <li>Name: ${user.name} Role: ${user.role} Status: ${checkUserStatus(
      user
    )}</li>
    `;
    document
      .querySelector("#userlist")
      .insertAdjacentHTML("beforeend", userHTML);
  }
}
function checkUserStatus(user) {
  if (user.active === true) return /*html*/ "Active";
  else {
    return /*html*/ "Passive";
  }
}
function countUsers(listOfUsers) {
  for (const user of listOfUsers) {
    if (user.role === "admin") {
      adminCount++;
      document.querySelector("#admin-count").innerHTML = adminCount;
    } else if (user.role === "user") {
      userCount++;
      document.querySelector("#user-count").innerHTML = userCount;
    } else if (user.role === "guest") {
      guestCount++;
      document.querySelector("#guest-count").innerHTML = guestCount;
    }
  }
}
