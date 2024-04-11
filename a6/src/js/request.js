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
 *      Date:       2024-04-10
 */

function getLastInputIndex(container) {
    // Get the divs inside the "songsVids"
    const subContainers = container.getElementsByTagName("div");

    // Get the last <input>, which is inside the last div
    const lastDiv = subContainers[subContainers.length - 1];
    const lastInput = lastDiv.getElementsByTagName("input")[0];

    // Get the number of the last <input>. The result from the very first <input> should be "0"
    const lastInputIndex = parseInt(lastInput.name.match(/\d+$/)) + 1;

    return lastInputIndex > 999 ? -1 : lastInputIndex;
}

function renameInputs(container) {
    const inputs = container.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].name = `songsVids${i}`;
    }
}

function newSongsVidsField(container, lastInputIndex) {
    // Create a new sub-container div for the input and "remove" button
    const newSubContainer = document.createElement("div");

    const newInput = document.createElement("input");
    newInput.type = "url";
    newInput.name = `songsVids${lastInputIndex}`;
    newInput.required = true;

    newSubContainer.appendChild(newInput);

    // "Remove" button
    const removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.textContent = "⊖";
    removeButton.onclick = () => {
        container.removeChild(newSubContainer);
        renameInputs(container);
    };

    newSubContainer.appendChild(removeButton);

    return newSubContainer;
}

function songsVids() {
    // Get the "songsVids" div
    const container = document.getElementById("songsVids");

    // Get the "Add" button
    const button = document.getElementById("songsVidsAdd");

    button.onclick = () => {
        const lastInputIndex = getLastInputIndex(container);

        if (lastInputIndex === -1) {
            console.log("You cannot add more than 1000 songs at once!");
            return;
        }

        container.appendChild(newSongsVidsField(container, lastInputIndex));
    };
}

function validateFields(form) {
    const formData = new FormData(form);
    // const 
    return false;
}

function submitRequest() {
    const requestForm = document.getElementById("requestForm");

    requestForm.addEventListener("submit", event => {
        if (validateFields(requestForm)) {
            event.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    songsVids();
    submitRequest();
});