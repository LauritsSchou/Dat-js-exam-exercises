"use strict";
let songs = [];
window.addEventListener("load", initApp);
async function initApp() {
  await getPlaylist();
  showSongs(songs);
}
async function getPlaylist() {
  const response = await fetch("playlist.json");
  const json = await response.json();
  console.log(json);
  songs = json;
}
function showSongs(songs) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songs) {
    let songlistHTML = /*html*/ `
        <li>${song.artist} ${song.title} ${song.duration} <button>Remove</button></li>
        `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songlistHTML);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeClicked(song));
  }
}
function removeClicked(songToRemove) {
  songs = songs.filter((song) => song !== songToRemove);
  showSongs(songs);
}
