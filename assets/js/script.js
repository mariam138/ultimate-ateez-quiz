// Get modal from DOM
let modal = document.getElementById('instructions-modal');

// Get button that opens instructions modal
let instructionsModalButton = document.getElementById('instructions-btn');

// Get button that will close modal
let backButton = document.getElementsByClassName('back-button')[0];

instructionsModalButton.onclick = function () {
    modal.style.display = "block";
}

backButton.onclick = function () {
    modal.style.display = "none";
}