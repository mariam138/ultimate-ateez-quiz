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
};
// Closes instructions modal when back button is clicked
backButtonOne.onclick = function () {
    instructionsModal.style.display = "none";
};

// Get settings modal from DOM
let settingsModal = document.getElementById('settings-modal');
// Get button that opens settings modal
let settingsModalButton = document.getElementById('settings-btn');
// Get button that will close settings modal
let backButtonTwo = document.getElementsByClassName('back-button')[1];
// Opens settings modal
settingsModalButton.onclick = function () {
    settingsModal.style.display = "block";
};
// Closes settings modal
backButtonTwo.onclick = function () {
    settingsModal.style.display = "none";
};

// When the start button is pressed, the loadQuiz function is called
let startButton = document.getElementById('start-button');
startButton.addEventListener('click', loadQuiz);

let quizArea = document.getElementById('quiz-area');
let questionArea = document.getElementById('question-area');
let currentQuestionIndex = 0;
let score = 0;
let scoreDiv = document.getElementById('score-div');

/** When the start button is pressed
 * this function will load the quiz in the
 * question area
 */
function loadQuiz() {
    // Hide content of the quiz area div
    quizArea.style.display = "none";

    // Display the question area div
    questionArea.style.display = "flex";

    // Set up HTML for the question area div
    let currentQuestion = 1;
    questionArea.innerHTML = `<h1>Question ${currentQuestion}</h1>
    <h2>${questions[currentQuestionIndex].question}</h2>`;

    clearStatus();
    createOptions();

    /** This is declared in the loadQuiz function so that when the clearStatus function is called,
     * the event listeners are added back to the option buttons.
     */

    // Adds the same event listener to mulitple elements
    // Adapted from https://fjolt.com/article/javascript-multiple-elements-addeventlistener
    optionsArea.addEventListener('click', (e) => {
        if (e.target.classList.contains('options-button')) {
            checkAnswer(e.target);
        }
    }, {
        once: true
    });

    // {once:true} allows only one button to be clicked therefore one click event
    // so user cannot click on another answer and its classlist property won't change
    // code adapted from: 
    // https://www.sololearn.com/en/Discuss/1794949/solvedis-there-a-way-to-disable-click-on-an-element-with-an-event-listener-without-removing-the-event-listener-or-flags-ifs

    let scoreParagraph = document.getElementById('score-paragraph'); 
}

let optionsArea = document.getElementById('options-area');
let optionOne = document.getElementById('option-one');
let optionTwo = document.getElementById('option-two');
let optionThree = document.getElementById('option-three');
let optionButtons = [optionOne, optionTwo, optionThree];
let nextButton = document.getElementById('next-button');
let scoreParagraph = document.getElementById('score-paragraph');

function createOptions () {

    // Displays option buttons in a column
    optionsArea.style.display = "flex";
    optionsArea.style.flexDirection = "column";
    optionsArea.style.alignItems = "center";
 
    optionOne.innerHTML = `${questions[currentQuestionIndex].options[0]}`;
    optionTwo.innerHTML = `${questions[currentQuestionIndex].options[1]}`;
    optionThree.innerHTML = `${questions[currentQuestionIndex].options[2]}`;

}

//Questions, options and their correct answers for the quiz
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
}];

/** This function when called will check whether the option clicked on is the right answer
 * and highlight that button green and increment the score by one.
 * If the incorrect answer is clicked, the button will highlight red.
 * Once an option is clicked, the Next button will be displayed to allow the user to go
 * to the next question.
 */
function checkAnswer (clickedButton) {
    if (clickedButton.innerText === questions[currentQuestionIndex].correctAnswer) {
        clickedButton.classList.add('correct');
        ++score;
        scoreParagraph.innerText = `${score} / 20`;
    } else {
        clickedButton.classList.add('incorrect');
    }

    nextButton.classList.remove('hidden'); // Removes hidden class from next button when an option is clicked
}

// Get exit quiz modal from DOM
let exitModal = document.getElementById('exit-modal');
// Get button that opens exit modal
let exitModalButton = document.getElementById('exit-button');
// Get button that will leave the quiz
let closeQuizButton = document.getElementById('close-quiz-btn');
// Get button that will close the exit modal and return to quiz
let continueQuizButton = document.getElementById('continue-quiz-btn');

// Opens exit modal
exitModalButton.onclick = function openExitModal (e) {
    e.stopPropagation(); // To stop the {once:true} from having affect on the exit modal button
    exitModal.style.display = "block";
};
// Closes exit modal and continues quiz
continueQuizButton.onclick = function (e) {
    e.stopPropagation(); // To stop the {once:true} from having affect on the continue quiz button
    exitModal.style.display = "none";
};
// Closes exit modal and exits quiz, going back to the home page
closeQuizButton.addEventListener('click', exitQuiz)

/** When the closeQuizButton is clicked, this will hide the two containers for the quiz
 * and load up the start page again. It will also close the exit modal.
 */
function exitQuiz () {
    questionArea.style.display = "none";
    optionsArea.style.display = "none";
    quizArea.style.display = "block";
    exitModal.style.display = "none";
}

/** This function will remove the colours from the quiz buttons when the quiz is reloaded.
 * The for loop loops through the three buttons defined in the optionButtons array.
 */
function clearStatus() {
    
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].classList.remove('correct');
        optionButtons[i].classList.remove('incorrect');
    }
    
    nextButton.classList.add('hidden'); // Hides the next button again when quiz starts or is reloaded
    score = 0;
}
