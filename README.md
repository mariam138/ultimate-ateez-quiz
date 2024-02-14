# The Ultimate Ateez Quiz

![Screenshot 2024-02-01 at 13 17 33](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/46cee039-90fe-4b8f-b519-802ed8b696b8)

## Introduction

A fun quiz game made to test your knowledge on the Kpop group called Ateez. Find out how well you know them!

## User Experience
### User Stories

## Design
### Colour Scheme

For the colour scheme, I chose to use colours `#5BCCED` (bright blue) and `#FAD732` (bright yellow). These colours were chosen as they are bright and fun colours, but are also the colour theme of one of Ateez's album covers.

![ateez-wave-album-cover](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/5d6a843a-62da-437c-a349-7fb3974c23f3)

These colours were checked for accessibility using [EightShapes](https://contrast-grid.eightshapes.com/).

![Screenshot 2024-02-01 at 13 25 14](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/e2e25444-e59b-46ba-b1c9-912d7f2da132)

The two colours passed with AAA on a black background and vice versa, so I decided to use those colours overall for my colour scheme, keeping the blue and yellow for highlights.

### Typography

For the main title, I wanted a fun font that was similar to handwriting, but still readable for accessibility. For this, I chose the **"Averia Sans Libre"** font. To find a font to match it, I used [Fontjoy](https://fontjoy.com/).

![Screenshot 2024-01-31 at 20 11 23](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/e81be6e4-7339-425d-b9be-0af98d3b1aa3)

Fontjoy generated the font **"Nunito Sans"** which I have decided to use as my paragraph and question text for my quiz.

### Wireframes

To produce wireframes for the quiz, I used Balsamiq. The wireframes helped me have a basic idea of the setup I wanted for my quiz, although the aim was to keep it all on one page. I made wireframes for both mobile and desktop for the home page, the quiz itself and the score page at the end. Some adjustments were made from the wireframes for the final deployed version.

#### Landing Page

![quiz landing page desktop](https://github.com/mariam138/legacy-of-dubai/assets/150139337/ff8b8d12-5301-435d-8efd-1b41fb36469d)

![quiz phone landing page](https://github.com/mariam138/legacy-of-dubai/assets/150139337/5c352214-d20a-407c-aabd-4405f3d8f9be)

#### Quiz Page

![quiz question page](https://github.com/mariam138/legacy-of-dubai/assets/150139337/1fa4c456-8f92-41c4-8f74-97d82c0b841a)

![quiz phone question page](https://github.com/mariam138/legacy-of-dubai/assets/150139337/b657155e-2c99-43b0-9299-f5d6d36c2e1d)

#### Final Score Page

![quiz score page](https://github.com/mariam138/legacy-of-dubai/assets/150139337/b19bfa70-69c6-4477-b7bd-e7529dba0574)

![quiz phone score page](https://github.com/mariam138/legacy-of-dubai/assets/150139337/63bbf992-0b9a-41f6-b852-5bcfb20ec133)

## Features

### Home Page

The home page features a group picture of ateez as the background with a bright blue plain background which fits in with the colour scheme. Underneath the title quiz is another group picture of Ateez, which is responsive. Underneath the picture is the tagline **"How well do you know Ateez?"**, followed by some more paragraph text. Underneath the text there are three buttons: one to start the quiz, one for the instructions on how the quiz works and lastly one to change the settings of the game. 

![Screenshot 2024-02-14 at 19 43 48](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/df240062-119f-458f-a1d9-f0ccda902673)

On larger screens, hovering the mouse over the buttons will change their colour with a slight transition. The blue **"Start!"** button will change into a lighter blue and enlarge slightly, while the **"Instructions"** and **"Settings"** buttons change their background colour to black and the text to yellow. This is to indicate clickability, but also to separate the **"Start!"** button from the others visually, to indicate it has a different action. 

![Screenshot 2024-02-14 at 19 55 45](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/94f541ce-2640-49ed-91f6-957f23baf3c0)
![Screenshot 2024-02-14 at 19 55 55](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/3d962b15-f7b6-4438-a958-c6e9cf47df30)
![Screenshot 2024-02-14 at 19 56 01](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/15653fda-08fe-4853-adcb-c6ae54e48b48)


When clicking on the **Instructions** button, a modal appears explaining briefly how the game will work.

![Screenshot 2024-02-14 at 20 06 03](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/902cc9af-06b0-4203-80b5-8f283253f5a7)

Clicking the **"Back"** button will close the modal and return to the home page. 

Clicking on the **Settings** button will open a modal, allowing you to choose between a longer quiz of 20 questions, or a shorter quiz of 10 questions.

![Screenshot 2024-02-14 at 20 09 22](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/5e2ea1d4-7d55-4b84-bca5-d7133e746961)
 Again, pressing the **Back** button will take you back to the home page.

 Clicking the **Start** buttion leads straight into the quiz.

 ### Quiz Section

 Upon clicking the **Start** button, the home page disappears to reveal the quiz section. The question number is at the top with the question underneath. In a separate container, the current score (either out of 10 or 20) is shown. Underneath the score counter are the options for each question. The quiz has been designed so that each time it is started or reloaded, the questions and the options are both shuffled. Therefore, the order of the questions and the options will be different each time.

 ![Screenshot 2024-02-14 at 20 21 35](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/a6f2a7ff-0d67-452d-ad98-566b3d470d5c)

Below the options is an **Exit** button, which opens a modal when clicked. When hovered on, the button changes to red text and a black background. 

![Screenshot 2024-02-14 at 20 23 00](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/86f1ee5b-d4ed-4432-9110-31444277f0b8)

The modal provides the user with the option to either go back to the home page when clicking **Yes** or to continue with the quiz by clicking **No, go back**. Both of these buttons also have hover styling where the colours are switched.

![Screenshot 2024-02-14 at 20 23 42](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/5c3f3e55-051e-4029-ac83-e09e1fee61ef)

When the correct answer is clicked, it highlights in green and increases the score by 1.

![Screenshot 2024-02-14 at 20 26 18](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/31b91fd1-91f4-49f5-a470-593a18c828aa)

When the wrong answer is clicked, it is highlighted in red while simultaneously the correct answer is highlighted green. The score counter does not change when the wrong answer is chosen.

![Screenshot 2024-02-14 at 20 27 51](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/7163cbaa-0b3f-4627-a0f8-9fb60f5c96c3)

All option buttons have a hover feature where they enlarge slightly. 

![Screenshot 2024-02-14 at 20 29 08](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/8bb6a2e8-6629-4a1b-bad8-e67fb6f9985f)

Clicking on the **Next** button then loads the next question. Any answers that have been highlighted in green or red go back to yellow. On the final question, the **Next** button leads to the results page.

### Results Page

At the end of the quiz, the user's final score is shown, alongside a comment indicating how much of a fan of Ateez they are. There are four different comments depending on the score the user gets. 

![Screenshot 2024-02-14 at 20 35 24](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/aaebde2e-4f05-49c0-b822-f348755b92d8)

There are four comments possible: 
- If the score is **0-5 / 20** or **0-2 / 10**, the comment shown is *"It seems like you're still really new to the fandom. That's okay, you'll get to know Ateez better eventually!"*
- If the score is **6-10 / 20** or **3-5 / 10**, the comment shown is *"Not bad! You know Ateez a little bit, but still learning about them!"*
- If the score is **11-15 / 20** or **6-7 / 10**, the comment shown is *"You're definitely an Atiny, you know almost everything about Ateez!"*
- If the score is **16-20 / 20** or **8-10 / 10**, the comment shown is *"Woah, you're the Master Atiny! You know everything about them, amazing!"*

Clicking on the **Play again?** button will reload the quiz and start from the beginning. Pressing the **Home** button will go back to the home page. Both buttons have a hover effect where the text becomes yellow and the background becomes black.

![Screenshot 2024-02-14 at 20 42 08](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/0631dd82-d4f7-461f-914e-5ec257c6a55e)
![Screenshot 2024-02-14 at 20 42 18](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/36e937c3-d2ba-4760-9380-24bd555b048e)

### Future Features

The first feature I would like to implement is adding a score board to the game, using the window's local storage. This would allow the user to enter a name or a nickname if they wished. If they didn't want to enter a name, then a randomly generated one would be used in their place on the score board. The scores would show either out of 10 or out of 20, depending on the quiz length chosen. Alternatively, two seperate score boards could be made, one for the long quiz and one for the short quiz. 

The second feature I would like to implement is adding a dark/night mode to the game. This could be accessed in the settings. I would change the quiz's background image to a darker group image of ateez, but the containers for the quiz and all buttons would remain the same. 

A third feature would be to implement a timer to each question, maybe for a harder setting for the quiz. On each question, the user would have a 10 second timer counting down at the top. If the user does not choose in time, the correct answer would be shown but their score would not go up.

## Testing

### Validation of Code

### Lighthouse Testing

### Accesibility Testing

### Manual Testing

## Technologies Used

To create the wireframes, **Balsamiq** was used.

## Deployment

Deployment of the project took place early on, once the HTML and CSS for the home page had been set up. Deployment took place as follows:

1. The GitHub page for the website was loaded
2. The **Settings** tab was clicked, located in the top right corner.
3. From the **Settings** page, on the left-hand side the **Pages** tab was clicked from the menu.
4. Under the **Branch** section, the page was selected to be made from the **main** branch followed by the **root** folder.
5. These settings were saved and the website was deployed after a few minutes, with a link being provided at the top of the page.

## Bug Fixes

1. When trying to create the options buttons for when the quiz started, the button was not showing in the HTML. However, it would show in the console when logged.

![Screenshot 2024-02-04 at 12 44 50](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/eed1df59-6b8c-4d90-a1f7-92b6d6a66142)

![Screenshot 2024-02-04 at 12 47 17](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/b518e577-6849-464d-b321-421c00123264)

    After moving the `options-area` div inside the `quiz-area` div, then an error was thrown stating that the element with the id `options-area` was undefined. This turned out to be because I had set the 'innerHTML' iin the javascript, overwriting the `options-area` I had created in the HTML originally. To fix this, I created separate divs that would appear underneath the `quiz-area` div, and created a function that would show these divs when the quiz was loaded.

2. Continuning on from the last bug fix, I then ran into an error when creating the `options-area` div as part of the `createOptions` function where the console was throwing a **"Reference Error"** stating that `optionsArea` had not been defined. After some googling on what a **Reference Error** means, I found that I had to re-declare the `optionsArea` valuable in the `createOptions` function due to its block scope.

3. When creating the buttons which contained the options for each question, I made a for loop. However, my initial code led to three buttons being created with the same answer. 

![Screenshot 2024-02-04 at 16 12 32](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/0bba9175-b13c-4a78-bfe5-fd151b61d6c3)

My initial code was written as follows:  

    for (i = 0; i < 3; i++){  

        let optionButton = document.createElement('button');  

        optionButton.textContent = ``${questions[0].options[0]}``;  

        optionsArea.appendChild(optionButton); 
    } 

I realised that having the index for options as "0" was causing the loop to create three buttons with the first answer in the options array. Changing it to [i] allowed it to create three buttons each with three different options.

4. After creating the buttons, I wanted to add click events to them all to create a *"CheckAnswer"* function. When I declared the **"optionButtons"** variable outside of the **"createOptions"** function and logged the node list to the console, it gave a length of 0. I realised that this was because the separate option buttons were being created inside the function, giving them **function scope**. By declaring **"optionButton"** as an empty variable *outside* the **"createOptions"** function, this allowed it to have a global scope. Logging the array of the option buttons to the console then worked, giving a length of 3.

5. To allow the user to only have the option of clicking one of the option buttons, I added `{once:true}` to the event handler. However, after adding the exit and next buttons underneath the quiz, this feature seemed to also affect these buttons, even though the click event was only on the **options-area div**. So when clicking on the exit button first, then going back into the quiz from the modal, none of the option buttons were responding to the click event again. To stop this, I added **"e.stopPropagation()"** to the click events for the **exitModalButton** and **continueQuizButton**.

6. When looping through the quiz questions, whenever the correct answer was clicked, rather than the score increasing by 1 , it would increase by the index of the question number. When logging the text for the clicked button and the corresponding correct answer, these both matches, but the console continued to log them an increasing number of times each question. This was why the score was increasing exponentially. This turned out to be because I had accidentally added multiple event listeners to the option buttons. To fix this, one event listener with the function **checkAnswer** was defined and declared outside of any functions created so that it was only called once. 

## Credits

### Code

- Code to create modals is adapted from [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
- Code to add listener events to multiple elements simultaneously is adaptedd from [fjolt.com](https://fjolt.com/article/javascript-multiple-elements-addeventlistener)
- Code to shuffle the questions for the quiz is adapted from [Bro Code](https://www.youtube.com/watch?v=FGAUekwri1Q&list=WL&index=2) on Youtube
- Code to use anonymous functions in my modal functions is adapted from [javascripttutorial.net](https://www.javascripttutorial.net/javascript-anonymous-functions/)