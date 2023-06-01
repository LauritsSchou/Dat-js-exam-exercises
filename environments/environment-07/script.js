"use strict";
const students = [];
window.addEventListener("load", initApp);

function initApp() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", addStudent);
}
function addStudent(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  addStudentClicked(name, email, age);
}
function addStudentClicked(name, email, age) {
  const newStudent = {
    name: name,
    email: email,
    age: age,
  };
  console.log(checkStudentMail(newStudent));
  if (
    checkStudentMail(newStudent)[0].length >= 4 &&
    checkStudentMail(newStudent)[1] === "stud.kea.dk"
  ) {
    students.push(newStudent);
  }
  console.log(students);
}
function checkStudentMail(student) {
  return student.email.split("@");
}
