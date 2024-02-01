// Code to create modal is adapted from: https://www.w3schools.com/howto/howto_css_modals.asp

// Get instructions modal from DOM
let instructionsModal = document.getElementById('instructions-modal');

// Get button that opens instructions modal
let instructionsModalButton = document.getElementById('instructions-btn');

// Get button that will close instructions modal
let backButtonOne = document.getElementsByClassName('back-button')[0];

// Opens instructions modal when button is clicked
instructionsModalButton.onclick = function () {
    instructionsModal.style.display = "block";
}

// Closes instructions modal when back button is clicked
backButtonOne.onclick = function () {
    instructionsModal.style.display = "none";
}

// Get settings modal from DOM
let settingsModal = document.getElementById('settings-modal');

// Get button that opens settings modal
let settingsModalButton = document.getElementById('settings-btn');

// Get button that will close settings modal
let backButtonTwo = document.getElementsByClassName('back-button')[1];

// Opens settings modal
settingsModalButton.onclick = function () {
    settingsModal.style.display = "block";
}

// Closes settings modal
backButtonTwo.onclick = function () {
    settingsModal.style.display = "none";
}