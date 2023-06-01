"use strict";
import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  showCourses(courses);
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", filterByChanged);
}
function showCourses(listOfCourses) {
  const coursesList = document.querySelector("#courses-list");
  coursesList.innerHTML = "";
  for (const course of listOfCourses) {
    const coursesListHTML = /*html*/ `
    <li>${course.name} ${course.ectsPoints}</li>
    `;
    coursesList.insertAdjacentHTML("beforeend", coursesListHTML);
  }
}

function filterByChanged() {
  let selectedValue = document.querySelector("#select-filter-ects").value;
  console.log(selectedValue);
  filterCoursesByEctsPoints(selectedValue);
}

function filterCoursesByEctsPoints(value) {
  const filteredCourses = courses.filter(
    (course) => course.ectsPoints == value
  );
  showCourses(filteredCourses);
}
