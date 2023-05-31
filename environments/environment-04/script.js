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
    const teachersListHTML = /*html*/ `
    <li>Name: ${teacher.name}. <br>Email: ${teacher.email}</li>
    `;
    teachersList.insertAdjacentHTML("beforeend", teachersListHTML);
  }
}
function addTeacher(name, email) {
  const newTeacher = {
    name: name,
    email: email,
  };
  teachers.push(newTeacher);
  showTeachers();
}
