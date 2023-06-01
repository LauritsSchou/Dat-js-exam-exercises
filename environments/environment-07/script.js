"use strict";
const students = [];

window.addEventListener("load", initApp);

function initApp() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", addStudentClicked);
  showStudents();
}

function addStudentClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  addStudent(name, email, age);
}
function addStudent(name, email, age) {
  const newStudent = {
    name: name,
    email: email,
    age: age,
  };
  students.push(newStudent);
  showStudents();
}
function showStudents() {
  students.sort((a, b) => a.name.localeCompare(b.name));
  const studentTable = document.querySelector("#students-table-body");
  studentTable.innerHTML = "";

  for (const student of students) {
    if (student.age >= 18) {
      const studentTableHTML = /*html*/ `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
        `;
      studentTable.insertAdjacentHTML("beforeend", studentTableHTML);
    }
  }
}
