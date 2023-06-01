"use strict";
window.addEventListener("load", initApp);
const students = [];
function initApp() {
  showStudents();
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
  students.push(newStudent);
  showStudents(students);
  console.log(students);
}
function showStudents() {
  students.sort((a, b) => a.age - b.age);
  const studentsTable = document.querySelector("#students-table-body");
  studentsTable.innerHTML = "";
  for (const student of students) {
    const studentsTableHTML = /*html*/ `
     <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    `;
    studentsTable.insertAdjacentHTML("beforeend", studentsTableHTML);
  }
}
