"use strict";
import { courses } from "./courses.js";
window.addEventListener("load", initApp);

function initApp() {
  sortCoursesByDate(courses);
  const coursesList = document.querySelector("#courses-list");
  coursesList.innerHTML = "";
  for (const course of courses) {
    const coursesListHTML = /*html*/ `
    <li>${course.name} ${course.startDate} ${course.ectsPoints}</li>
    `;
    coursesList.insertAdjacentHTML("beforeend", coursesListHTML);
  }
}
function sortCoursesByDate(courses) {
  courses.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}
