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

// For debugging, display all of our data in the console. You can remove this later.
// console.log({ artists, songs }, "App Data");

addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const selection = document.getElementById("selected-artist");
  const tbody = document.getElementById("songs");

  let first = true;

  artists.forEach((artist) => {
    const button = document.createElement("button");

    button.textContent = artist.name;
    button.onclick = () => {
      // Selected artist
      selection.textContent = `${artist.name} (`;

      const links = artist.urls;
      for (let i = 0; i < links.length; ++i) {
        const link = links[i];

        const a = document.createElement("a");
        a.setAttribute("href", link.url);
        a.setAttribute("target", "_blank");
        a.textContent = link.name;

        selection.insertAdjacentElement("beforeend", a);

        if (i < links.length - 1) {
          selection.insertAdjacentText("beforeend", ", ");
        }
      }
      selection.insertAdjacentText("beforeend", ")");

      // Table
      tbody.innerHTML = "";

      // Filter songs
      const filteredSongs = songs.filter((song) => {
        return !song.explicit && song.artistId === artist.artistId;
      });

      filteredSongs.forEach((song) => {
        // <tr>
        const tr = document.createElement("tr");
        tr.onclick = () => console.log({ song });

        // <td> Song Name
        const tdName = document.createElement("td");
        const nameLink = document.createElement("a");

        nameLink.setAttribute("href", song.url);
        nameLink.setAttribute("target", "_blank");
        nameLink.textContent = song.title;
        tdName.appendChild(nameLink);

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
      });
    };

    menu.appendChild(button);

    if (first) {
      first = false;
      button.click();
    }
  });
});
