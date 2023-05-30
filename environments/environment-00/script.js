"use strict";
window.addEventListener("load", initApp);
function initApp() {
  document.querySelector("#result_failure").setAttribute("hidden", true);
  document.querySelector("#result_success").setAttribute("hidden", true);
  document.querySelector("#btn-knap").addEventListener("click", clicked);
}
function clicked() {
  document.querySelector("#result_success").removeAttribute("hidden");
  console.log("det virker");
}
