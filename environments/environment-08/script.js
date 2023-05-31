"use strict";
const songs = [];

window.addEventListener("load", initApp);

function initApp() {
  showSongs(songs);
  document.querySelector("#add-song-form").addEventListener("submit", () => createSongClicked);
  document.querySelector("#sort-artist").addEventListener("change", () => compareSongsByArtist(songs));
  document.querySelector("#sort-title").addEventListener("click", () => compareSongsByTitle(songs));
}
function addSong(artist, title, duration) {
  const newSong = {
    artist: artist,
    title: title,
    duration: duration,
  };
  songs.push(newSong);
}
function createSongClicked(event) {
  event.preventDefault();
  let form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  addSong(artist, title, duration);
}
function showSongs(listOfSongs) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of listOfSongs) {
    let songHTML = /*html*/ `
    <li>Title: ${song.title}. Artist: ${song.artist}. Duration: ${song.duration}</li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", songHTML);
  }
}
function compareSongsByArtist(songs) {
  console.log("artist");
  return songs.sort((a, b) => a.artist.localeCompare(b.artist));
}
function compareSongsByTitle(songs) {
  console.log("title");
  return songs.sort((a, b) => a.title.localeCompare(b.title));
}
