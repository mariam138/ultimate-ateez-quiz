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

/** When the start button is pressed
 * this function will load the quiz in the
 * quiz area
 */
function loadQuiz () {
    let quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = "";
}

let startButton = document.getElementById('start-button');
startButton.addEventListener('click', loadQuiz);

let questions = [{
    question: "What is Ateez's debut date?",
    options: ["24th October 2018", "17th November 2018", "23rd March 2018"],
    correctAnswer: "24th October 2018"
},
{
    question: "What day is known as 'Atiny Day', a day dedicated to the fandom?",
    options: ["3rd April", "17th November", "7th November"],
    correctAnswer: "17th November"
},
{
    question: "What is the name of Ateez's fandom lightstick?",
    options: ["Ateez lightstick", "AuroraBong", "Lightiny"],
    correctAnswer: "Lightiny"
},
{
    question: "Which entertainment company is Ateez signed under?",
    options: ["KQ Entertainment", "Hybe Entertainment", "JYP Entertainment"],
    correctAnswer: "KQ Entertainment"
},{
    question: "Which two members of Ateez have the duo name 'Topaz' for sharing the same birth month?",
    options: ["Yeosang and San", "Hongjoong and Wooyoung", "Yunho and Jongho"],
    correctAnswer: "Hongjoong and Wooyoung"
},
{
    question: "To date, what is Ateez's most watched YouTube music video?",
    options: ["Bouncy (K-Hot Chilli Peppers)", "Fireworks (I'm The One)", "Wonderland"],
    correctAnswer: "Wonderland"
},
{
    question: "What was Ateez's pre-debut group name?",
    options: ["KQ Fellaz", "The Boyz", "Stray Kids"],
    correctAnswer: "KQ Fellaz"
},
{
    question: "What are the names of Ateez's two debut title tracks?",
    options: ["Wave and Illusion", "Treasure and Pirate King", "Say My Name and Hala Hala"],
    correctAnswer: "Treasure and Pirate King"
},
{
    question: "Who is an ambassador for the designer brand 'Balmain'?",
    options: ["Seonghwa", "Mingi", "Hongjoong"],
    correctAnswer: "Hongjoong"
},
{
    question: "Which two members were the hosts of the radio show 'Idol Radio' between 2022-2023?",
    options: ["Yunho and Hongjoong", "Jongho and Yeosang", "San and Wooyoung"],
    correctAnswer: "Yunho and Hongjoong"
},
{
    question: "Which two members left BigHit entertainment together to join KQ Entertainment?",
    options: ["Wooyoung and Jongho", "Wooyoung and Yeosang", "Mingi and Hongjoong"],
    correctAnswer: "Wooyoung and Yeosang"
},
{
    question: "Which member is the main vocalist and has sung soundtracks for two K-dramas?",
    options: ["Seonghwa", "Yunho", "Jongho"],
    correctAnswer: "Jongho"
},
{
    question: "Who auditioned initially as a rapper but debuted as a vocalist?",
    options: ["Seonghwa", "San", "Yeosang"],
    correctAnswer: "Seonghwa"
},
{
    question: "Besides Hongjoong, who is the other main rapper?",
    options: ["Yunho", "Mingi", "Wooyoung"],
    correctAnswer: "Mingi"
},
{
    question: "What is the name of the current world tour Ateez is embarking on?",
    options: ["The Expedition Tour", "The Fellowship: Beginning of the End", "Towards the Light: Will to Power"],
    correctAnswer: "Towards the Light: Will to Power"
},
{
    question: "What is the title track from the album The World EP1: Propaganda called?",
    options: ["Guerrilla", "Crazy Form", "Turbulence"],
    correctAnswer: "Guerrilla"
},
{
    question: "What is the name of the behind the scenes content periodically posted to YouTube that has been going on since their debut?",
    options: ["Anewz", "Ateez Logbook", "Wanteez"],
    correctAnswer: "Ateez Logbook"
},
{
    question: "How many Korean albums have Ateez released (including singles, EPs and full albums)?",
    options: ["8", "14", "13"],
    correctAnswer: "13"
},
{
    question: "In 2020, Atinys voted to choose the title track for Zero:Fever Part 1. Which song won the vote?",
    options: ["Inception", "Thanxx", "Fever"],
    correctAnswer: "Inception"
},
{
    question: "Who has been named as the ambassador of their local town, Namhae?",
    options: ["Yunho", "San", "Jongho"],
    correctAnswer: "San"
}]