"use strict";
window.addEventListener("load", initApp);

let students = [];
function initApp() {
  document.querySelector("#create-student-form").addEventListener("submit", prepareStudentData);
}

function prepareStudentData(event) {
  event.preventDefault();
  console.log("prepareStudentData is running");
  let form = event.target;
  const student = {
    name: form.name.value,
    email: form.email.value,
    age: Number(form.age.value),
  };
  addStudent(student);
}
function addStudent(student) {
  students.push(student);
  showStudents();
}
function showStudents() {
  students.sort((a, b) => a.name.localeCompare(b.name));
  document.querySelector("#students-table-body").innerHTML = "";
  for (const student of students)
    if (student.age >= 18) {
      let studentHTML = /*html*/ `
    <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>`;
      document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", studentHTML);
    }
}
