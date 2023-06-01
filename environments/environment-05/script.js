"use strict";
import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  showCourses();
}

function showCourses() {
  const coursesList = document.querySelector("#courses-list");
  coursesList.innerHTML = "";
  compareCourses(courses);
  for (const course of courses) {
    const coursesListHTML = /*html*/ `
    <li>${course.name}${course.ectsPoints}</li>
    
    `;
    coursesList.insertAdjacentHTML("beforeend", coursesListHTML);
  }
}
function compareCourses() {
  courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}
