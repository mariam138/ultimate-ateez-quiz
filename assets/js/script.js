// Code to create modal is adapted from: https://www.w3schools.com/howto/howto_css_modals.asp

// Get instructions modal from DOM
let instructionsModal = document.getElementById('instructions-modal');
// Get button that opens instructions modal
let instructionsModalButton = document.getElementById('instructions-btn');
// Get button that will close instructions modal
let backButtonOne = document.getElementsByClassName('back-button')[0];
// // Opens instructions modal when button is clicked
// instructionsModalButton.onclick = function () {
//     instructionsModal.style.display = "block";
// };
// // Closes instructions modal when back button is clicked
// backButtonOne.onclick = function () {
//     instructionsModal.style.display = "none";
// };

// Get settings modal from DOM
let settingsModal = document.getElementById('settings-modal');
// Get button that opens settings modal
let settingsModalButton = document.getElementById('settings-btn');
// Get button that will close settings modal
let backButtonTwo = document.getElementsByClassName('back-button')[1];
// // Opens settings modal
// settingsModalButton.onclick = function () {
//     settingsModal.style.display = "block";
// };
// Closes settings modal
// backButtonTwo.onclick = function () {
//     settingsModal.style.display = "none";
// };

function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

settingsModalButton.addEventListener('click', () => openModal(settingsModal));
backButtonTwo.addEventListener('click', () => closeModal(settingsModal));
instructionsModalButton.addEventListener('click', () => openModal(instructionsModal));
backButtonOne.addEventListener('click', () => closeModal(instructionsModal));

// When the start button is pressed, the loadQuiz function is called
let startButton = document.getElementById('start-button');
startButton.addEventListener('click', loadQuiz);

let quizArea = document.getElementById('quiz-area');
let questionArea = document.getElementById('question-area');
let currentQuestion = 1;
let currentQuestionIndex = 0;
let score = 0;
let scoreDiv = document.getElementById('score-div');

const radioButtons = document.querySelectorAll('input[name="quiz-length"]');
let radioButton;
let shortQuizButton = document.getElementById('short-quiz');
let longQuizButton = document.getElementById('long-quiz');
let scoreParagraph = document.getElementById('score-paragraph');



/** When the start button is pressed
 * this function will load the quiz in the
 * question area
 */
function loadQuiz() {
    // Hide content of the quiz area div
    quizArea.style.display = "none";

    // Display the question area div
    questionArea.style.display = "flex";

    resultsArea.classList.add('hidden');

    optionsArea.style.display = "flex";
    optionsArea.style.flexDirection = "column";
    optionsArea.style.alignItems = "center";

    currentQuestion = 1;
    score = 0;

    clearStatus();
    shuffleQuestions(questions); // This will shuffle the questions each time the quiz is (re)loaded
    chooseQuizLength();

    questionArea.innerHTML = `<h1>Question ${currentQuestion}</h1>
    <h2>${questions[currentQuestionIndex].question}</h2>`;
   
    createOptions();
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].removeAttribute('disabled');
    }

  
}

/** A for loop is used to iterate through the optionButtons array
 * and create the option buttons text, using the options array in the
 * questions objects.
 */
function createOptions() {

    //Shuffle the order the options are shown each time a question is loaded
    shuffleQuestions(optionButtons);
    for (let i = 0; i < 3; i++) {
        optionButtons[i].innerHTML = `${questions[currentQuestionIndex].options[i]}`;
    }

}


function chooseQuizLength () {
    if (shortQuizButton.checked){
        currentQuestionIndex = 10;
        scoreParagraph.innerText = `${score} / 10`;
    } else if (longQuizButton.checked) {
        currentQuestionIndex = 0;
        scoreParagraph.innerText = `${score} / 20`;
    }
}

for (radioButton of radioButtons) {
    radioButton.addEventListener('change', chooseQuizLength);
}

let optionsArea = document.getElementById('options-area');
let optionOne = document.getElementById('option-one');
let optionTwo = document.getElementById('option-two');
let optionThree = document.getElementById('option-three');
let optionButtons = [optionOne, optionTwo, optionThree];
let nextButton = document.getElementById('next-button');

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

/** This function will shuffle any array that is passed through to it, using the Fisher-Yates
 * algorithm. In this case, this function will be called to shuffle the quiz questions
 * each time the quiz is started or reloaded. Code adapted from:
 * https://www.youtube.com/watch?v=FGAUekwri1Q&list=WL&index=2
 */
function shuffleQuestions (array) {
    for (let i = array.length - 1; i > 0; i-- ) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

// Define the event listener function
function optionsClickHandler(e) {
    if (e.target.classList.contains('options-button')) {
        checkAnswer(e.target);

        // Disables the buttons once an option has been chosen
        for (i = 0; i < 3; i++) {
            optionButtons[i].setAttribute('disabled', true);
        }
    }

}

/** This function when called will check whether the option clicked on is the right answer
 * and highlight that button green and increment the score by one.
 * If the incorrect answer is clicked, the button will highlight red.
 * Once an option is clicked, the Next button will be displayed to allow the user to go
 * to the next question.
 */
function checkAnswer (clickedButton) {
    
    if (clickedButton.innerText === questions[currentQuestionIndex].correctAnswer) {
        clickedButton.classList.add('correct');
        score++; // increase score by 1
        if (shortQuizButton.checked) {
            scoreParagraph.innerText = `${score} / 10`;
        } else if (longQuizButton.checked) {
            scoreParagraph.innerText = `${score} / 20`; // update displayed value
        }
    } else {
        clickedButton.classList.add('incorrect');
        // Highlights the correct answer if the incorrect answer is clicked
        for (button of optionButtons) {
            if (button.innerText === questions[currentQuestionIndex].correctAnswer) {
                button.classList.add('correct');
            }
        }
    }
    
    nextButton.classList.remove('hidden'); // Removes hidden class from next button when an option is clicked
}

function nextQuestion () {

    currentQuestion++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
         // Remove disabled attribute from all option buttons
         for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].removeAttribute('disabled');
        }

        // Update displayed variable values
        questionArea.innerHTML = `<h1>Question ${currentQuestion}</h1>
        <h2>${questions[currentQuestionIndex].question}</h2>`;

        createOptions();
        clearStatus();

    } else {
        showResult();
    }
   

}

// Add event listener to optionsArea
optionsArea.addEventListener('click', optionsClickHandler);
// Add event listener to nextButton
nextButton.addEventListener('click', nextQuestion);

let resultsArea = document.getElementById('results-area');
let finalScore = document.getElementById('final-score');
let finalScoreComment = document.getElementById('score-comment');

/** This function will close the question and options area
 * and show the results area instead. The final score is displayed.
 * Based on the final score, a comment will show on how much of
 * a fan you are.
 */
function showResult() {
    optionsArea.style.display = "none";
    questionArea.style.display = "none";
    resultsArea.classList.remove('hidden');

    if (longQuizButton.checked) {
        finalScore.innerText = `${score} / 20`;
        if (score <= 5) {
            finalScoreComment.innerText = "It seems like you're still really new to the fandom. That's okay, you'll get to know Ateez better eventually!";
        } else if (score <= 10) {
            finalScoreComment.innerText = "Not bad! You know Ateez a little bit, but still learning about them!";
        } else if (score <= 15) {
            finalScoreComment.innerText = "You're definitely an Atiny, you know almost everything about Ateez!";
        } else if (score <= 20) {
            finalScoreComment.innerText = "Woah, you're the Master Atiny! You know everything about them, amazing!";
        }
    } else if (shortQuizButton.checked) {
        finalScore.innerText = `${score} / 10`;
        if (score <= 2) {
            finalScoreComment.innerText = "It seems like you're still really new to the fandom. That's okay, you'll get to know Ateez better eventually!";
        } else if (score <= 5) {
            finalScoreComment.innerText = "Not bad! You know Ateez a little bit, but still learning about them!";
        } else if (score <= 7) {
            finalScoreComment.innerText = "You're definitely an Atiny, you know almost everything about Ateez!";
        } else if (score <= 10) {
            finalScoreComment.innerText = "Woah, you're the Master Atiny! You know everything about them, amazing!";
        }
    }
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
// exitModalButton.onclick = function openExitModal (e) {
//     exitModal.style.display = "block";
// };

exitModalButton.addEventListener('click', () => openModal(exitModal));
continueQuizButton.addEventListener('click', () => closeModal(exitModal));
// Closes exit modal and continues quiz
// continueQuizButton.onclick = function (e) {
//     exitModal.style.display = "none";
// };
// Closes exit modal and exits quiz, going back to the home page
closeQuizButton.addEventListener('click', exitQuiz)

/** When the closeQuizButton is clicked, this will hide the two containers for the quiz
 * and load up the start page again. It will also close the exit modal.
 * When the Home button is clicked on the results page,
 * this will also hide the results area page again.
 */
function exitQuiz () {
    questionArea.style.display = "none";
    optionsArea.style.display = "none";
    quizArea.style.display = "block";
    exitModal.style.display = "none";
    resultsArea.classList.add('hidden');
}

/** This function will remove the colours from the quiz buttons when the quiz is reloaded.
 * The Next button is hidden again, and updates the displayed score.
 * If the quiz is reloaded, the score and question index are set back to 0.
 */
function clearStatus() {
    // Removes the correct/incorrect classes from the buttons so they show yellow again
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].classList.remove('correct');
        optionButtons[i].classList.remove('incorrect');
    }
    
    // Hides the next button again when quiz starts or is reloaded
    nextButton.classList.add('hidden');
}

const restartQuizButton = document.getElementById('restart-quiz-btn'); // Get restart button from DOM
const homeButton = document.getElementById('home-btn'); // Get home button from DOM

restartQuizButton.addEventListener('click', loadQuiz); // Will restart the quiz when the restart button is clicked
homeButton.addEventListener('click', exitQuiz); // Will go back to the landing page when the home button is clicked