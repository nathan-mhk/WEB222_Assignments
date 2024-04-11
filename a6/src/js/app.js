/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Nathan Kong
 *      Student ID: 150950236
 *      Date:       2024-04-09
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

function createAnchor(href, textContent) {
  const anchor = document.createElement("a");

  anchor.setAttribute("href", href);
  anchor.setAttribute("target", "_blank");
  anchor.textContent = textContent;

  return anchor;
}

function updateLinks(artist) {
  const { name, urls, region } = artist;
  const selection = document.getElementById("selected-artist");

  // Selected artist
  selection.textContent = `${name} | ${region}`;
  selection.insertAdjacentElement("beforeend", document.createElement("br"));

  // Create the links
  for (let i = 0; i < urls.length; ++i) {
    const link = urls[i];

    selection.insertAdjacentElement("beforeend", createAnchor(link.url, link.name));

    if (i < urls.length - 1) {
      selection.insertAdjacentText("beforeend", " | ");
    }
  }
}

function createCard(song) {
  const { url, imageUrl, title, year, duration } = song;

  // <div> Card
  const card = document.createElement("div");
  card.className = "card";

  // <a><img></a> Clickable Image
  const img = document.createElement("img");
  img.setAttribute("src", imageUrl);

  const imgLink = createAnchor(url, "");
  imgLink.appendChild(img);

  card.appendChild(imgLink);

  // <h3> Song Name
  const songName = document.createElement("h3");
  songName.textContent = title;

  card.appendChild(songName);

  // <div> Year - Duration flex box
  const yearDuration = document.createElement("div");

  // <time> Year
  const songYear = document.createElement("time");
  songYear.textContent = year;

  yearDuration.appendChild(songYear);

  // <p> Duration
  const songDuration = document.createElement("p");
  const secs = duration;
  songDuration.textContent = `${parseInt(secs / 60)}:${(secs % 60).toString().padStart(2, "0")}`;

  yearDuration.appendChild(songDuration);

  card.appendChild(yearDuration);

  return card;
}

function updateSongs({ artistId }) {
  // Cards container
  const cards = document.getElementById("cards");
  cards.innerHTML = "";

  // Filter songs
  const filteredSongs = songs.filter((song) => {
    return !song.explicit && song.artistId === artistId;
  });

  for (const song of filteredSongs) {
    // Append the card to the cards container
    cards.appendChild(createCard(song));
  }
}

function createArtistButtons(artist) {
  const button = document.createElement("button");

  button.textContent = artist.name;

  button.onclick = () => {
    updateLinks(artist);
    updateSongs(artist);
  };

  return button;
}

function requestArtistButton() {
  const button = document.createElement("button");
  button.id = "requestArtist";
  button.textContent = "Request A New Artist";
  
  button.onclick = () => {
    window.open("./request.html", "_blank");
  };

  return button;
}

function loadMenu() {
  const menu = document.getElementById("menu");
  let first = true;

  artists.forEach((artist) => {
    const button = createArtistButtons(artist);
    menu.appendChild(button);

    if (first) {
      first = false;
      button.click();
    }
  });

  menu.appendChild(requestArtistButton());
}

function newsLetterForm() {
  const invalidEmail = document.getElementById("invalidEmail");
  invalidEmail.style.display = "none";

  const signUp = document.getElementById("signUp");

  signUp.addEventListener("submit", event => {
    const emailInput = document.getElementById("email").value;

    const res = String(emailInput).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!res) {
      event.preventDefault();
      invalidEmail.style.display = "block";
      return false;
    }

    invalidEmail.style.display = "none";
    return true;
  });
}

addEventListener("DOMContentLoaded", () => {
  loadMenu();
  newsLetterForm();
});
