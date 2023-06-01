"use strict";
const songs = [];

window.addEventListener("load", initApp);

function initApp() {
  showSongs();
  document
    .querySelector("#add-song-form")
    .addEventListener("submit", addSongClicked);
  document
    .querySelector("#sort-artist")
    .addEventListener("click", sortByArtist);
  document.querySelector("#sort-title").addEventListener("click", sortByTitle);
}

function addSongClicked(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  addSong(artist, title, duration);
}

function addSong(artist, title, duration) {
  const newSong = {
    artist: artist,
    title: title,
    duration: duration,
  };
  songs.push(newSong);
  showSongs();
}
function showSongs() {
  const songList = document.querySelector("#songlist");
  songList.innerHTML = "";
  for (const song of songs) {
    const songListHTML = /*html*/ `
    <li>${song.artist}: ${song.title} (${song.duration})</li>
    `;
    songList.insertAdjacentHTML("beforeend", songListHTML);
  }
}
function sortByArtist() {
  console.log("sortByArtist");
  showSongs(songs.sort((a, b) => a.artist.localeCompare(b.artist)));
}

function sortByTitle() {
  console.log("sortByTitle");
  showSongs(songs.sort((a, b) => a.title.localeCompare(b.title)));
}
