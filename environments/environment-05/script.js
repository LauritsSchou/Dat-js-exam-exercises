"use strict";
import { courses } from "./courses.js";
window.addEventListener("load", initApp);

function initApp() {
  showCourses();
  addCourse("Biologi", 15, "Laurits");
}
function showCourses() {
  let coursesList = document.querySelector("#courses-list");
  coursesList.innerHTML = "";
  for (const course of courses) {
    const coursesListHTML = /*html*/ `
<li>${course.name} ${course.ectsPoints} ${course.teacher}</li>
`;
    coursesList.insertAdjacentHTML("beforeend", coursesListHTML);
  }
}
function addCourse(name, ectsPoints, teacher) {
  const newCourse = {
    name: name,
    ectsPoints: ectsPoints,
    teacher: teacher,
  };
  courses.push(newCourse);
  showCourses();
}
