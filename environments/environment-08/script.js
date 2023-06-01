"use strict";
const songs = [
  {
    artist: "Pitbull",
    title: "Mr. Worldwide",
    duration: "3:33",
    upvote: 0,
  },
  {
    artist: "Queen",
    title: "Another one bites the dust",
    duration: "4:44",
    upvote: 0,
  },
  {
    artist: "Drake",
    title: "Hotline Bling",
    duration: "4:20",
    upvote: 0,
  },
];
window.addEventListener("load", initApp);

function initApp() {
  showSongs();
}

function showSongs() {
  const songList = document.querySelector("#songlist");
  songList.innerHTML = "";
  for (const song of songs) {
    const songListHTML = /*html*/ `
    <li> ${song.artist}: ${song.title} (${song.duration})<button>Upvote</button></li>
    `;
    songList.insertAdjacentHTML("beforeend", songListHTML);
    document
      .querySelector("#songlist li:last-child button")
      .addEventListener("click", () => upvoteClicked(song));
  }
}
function upvoteClicked(song) {
  song.upvote++;
  showSongs(songs.sort((a, b) => b.upvote - a.upvote));
}
