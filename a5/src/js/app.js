/**
 * WEB222 – Assignment 04
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
 *      Date:       2024-03-23
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

function updateLinks({ name, urls }) {
  const selection = document.getElementById("selected-artist");
  
  // Selected artist
  selection.textContent = `${name} (`;

  // Create the links
  for (let i = 0; i < urls.length; ++i) {
    const link = urls[i];

    selection.insertAdjacentElement("beforeend", createAnchor(link.url, link.name));

    if (i < urls.length - 1) {
      selection.insertAdjacentText("beforeend", ", ");
    }
  }
  selection.insertAdjacentText("beforeend", ")");
}

function updateSongs({ artistId }) {
  // Table
  const tbody = document.getElementById("songs");
  tbody.innerHTML = "";

  // Filter songs
  const filteredSongs = songs.filter((song) => {
    return !song.explicit && song.artistId === artistId;
  });

  for (const song of filteredSongs) {
    // <tr>
    const tr = document.createElement("tr");
    tr.onclick = () => console.log({ song });

    // <td> Song Name
    const tdName = document.createElement("td");
    
    tdName.appendChild(createAnchor(song.url, song.title));

    tr.appendChild(tdName);

    // <td> Year
    const tdYear = document.createElement("td");
    tdYear.textContent = song.year;

    tr.appendChild(tdYear);

    // <td> Duration
    const tdDuration = document.createElement("td");
    const secs = song.duration;
    tdDuration.textContent = `${parseInt(secs / 60)}:${(secs % 60)
      .toString()
      .padStart(2, "0")}`;

    tr.appendChild(tdDuration);

    tbody.appendChild(tr);
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

addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  let first = true;

  artists.forEach((artist) => {
    const button = createArtistButtons(artist)
    menu.appendChild(button);

    if (first) {
      first = false;
      button.click();
    }
  });
});
