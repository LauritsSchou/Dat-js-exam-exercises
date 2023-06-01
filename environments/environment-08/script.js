"use strict";
let playlist = [];
window.addEventListener("load", initApp);
async function initApp() {
  await getPlaylist();
  showSongs(playlist);
}

async function getPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  playlist = data;
}
function showSongs(playlist) {
  const songList = document.querySelector("#songlist");
  songList.innerHTML = "";
  for (const song of playlist) {
    const songListHTML =
      /*html*/
      `
    <li>${song.artist} ${song.title} ${song.duration}<button>Remove</button></li>
    `;
    songList.insertAdjacentHTML("beforeend", songListHTML);
    document
      .querySelector("#songlist li:last-child button")
      .addEventListener("click", () => removeClicked(song.title));
  }
}

function removeClicked(songName) {
  console.log(songName);
  playlist = playlist.filter((song) => song.title !== songName);
  showSongs(playlist);
}
