"use strict";
import { teachers } from "./teachers.js";
window.addEventListener("load", initApp);
function initApp() {
  showTeachers();
}
function showTeachers() {
  const teachersList = document.querySelector("#teachers-list");
  teachersList.innerHTML = "";
  for (const teacher of teachers) {
    const teacherListHTML = /*html*/ `
    <li>${teacher.name} ${teacher.email}</li>
    `;
    teachersList.insertAdjacentHTML("beforeend", teacherListHTML);
  }
}
function sortByName(teachers) {
  return teachers.sort((a, b) => a.name.localeCompare(b.name));
}
function sortByEmail(teachers) {
  return teachers.sort((a, b) => a.email.localeCompare(b.email));
}
