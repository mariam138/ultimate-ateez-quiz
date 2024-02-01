// Code to create modal is adapted from: https://www.w3schools.com/howto/howto_css_modals.asp

// Get modal from DOM
let modal = document.getElementById('instructions-modal');

// Get button that opens instructions modal
let instructionsModalButton = document.getElementById('instructions-btn');

// Get button that will close modal
let backButton = document.getElementsByClassName('back-button')[0];

// Opens instructions modal when button is clicked
instructionsModalButton.onclick = function () {
    modal.style.display = "block";
}

// Closes instructions modal when back button is clicked
backButton.onclick = function () {
    modal.style.display = "none";
}