# The Ultimate Ateez Quiz

![Screenshot 2024-02-15 at 21 03 45](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/bc670fde-65aa-4d44-88cb-e2b22894851e)

## Introduction

**The Ultimate Ateez Quiz** is a fun online quiz aimed at fans (known as **Atinys**) of the K-pop group **Ateez**, to test their knowledge and how much of a fan they are. It is built with a combination of HTML, CSS and JavaScript. Find out how well *you* know Ateez! 

[Click here to view the live site!](https://mariam138.github.io/ultimate-ateez-quiz/)

## User Experience
### User Stories

- As a user, I want to be able to test my knowledge on Ateez
- As a user, I want to get visual feedback on my answers
- As a user, I want to be able to choose how long I spend playing the quiz
- As a user, I want to see what my final score is and how that ranks me as a fan
- As a user, I want to be able to leave the quiz whenever I want to

- As a site owner, I want to create a fun quiz on the K-pop group ateez
- As a site owner, I want people to take interest in Ateez through the quiz questions
- As a site owner, I want the quiz to be easily navigated to keep the interest of any users

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

The home page features a group picture of ateez in the background with a bright blue plain background colour, which fits in with the colour scheme. Underneath the title quiz is another group picture of Ateez, which is responsive. Underneath the picture is the tagline **"How well do you know Ateez?"**, followed by some more paragraph text. Underneath the text there are three buttons: one to start the quiz, one for the instructions on how the quiz works and lastly, one to change the settings of the game. 

![Screenshot 2024-02-14 at 19 43 48](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/df240062-119f-458f-a1d9-f0ccda902673)

On larger screens, hovering the mouse over the buttons will change their colour with a slight transition. The blue **"Start!"** button will change into a lighter blue and enlarge slightly, while the **"Instructions"** and **"Settings"** buttons change their background colour to black and the text to yellow. This is to indicate clickability, but also to separate the **"Start!"** button from the others visually, indicating it has a different action. 

![Screenshot 2024-02-14 at 19 55 45](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/94f541ce-2640-49ed-91f6-957f23baf3c0)
![Screenshot 2024-02-14 at 19 55 55](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/3d962b15-f7b6-4438-a958-c6e9cf47df30)
![Screenshot 2024-02-14 at 19 56 01](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/15653fda-08fe-4853-adcb-c6ae54e48b48)


When clicking on the **Instructions** button, a modal appears explaining briefly how the game will work.

![Screenshot 2024-02-15 at 21 07 58](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/a450c8cf-ee91-4e23-b8c4-06e1d94fc0cc)

Clicking the **"Back"** button will close the modal and return to the home page. 

Clicking on the **Settings** button will open a modal, allowing you to choose between a longer quiz of 20 questions, or a shorter quiz of 10 questions.

![Screenshot 2024-02-15 at 21 08 26](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/4978babe-3cc8-45b1-b594-1062c6f9b680)

 Again, pressing the **Back** button will take you back to the home page. Clicking the **Start** buttion leads straight into the quiz.

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

At the end of the quiz, the user's final score is shown, alongside a comment indicating how much of a fan of Ateez they are. Different comments are displayed depending on the score the user gets. 

![Screenshot 2024-02-14 at 20 35 24](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/aaebde2e-4f05-49c0-b822-f348755b92d8)

There are four comments possible: 
- If the score is **0-5 / 20** or **0-2 / 10**, the comment shown is *"It seems like you're still really new to the fandom. That's okay, you'll get to know Ateez better eventually!"*
- If the score is **6-10 / 20** or **3-5 / 10**, the comment shown is *"Not bad! You know Ateez a little bit, but still learning about them!"*
- If the score is **11-15 / 20** or **6-7 / 10**, the comment shown is *"You're definitely an Atiny, you know almost everything about Ateez!"*
- If the score is **16-20 / 20** or **8-10 / 10**, the comment shown is *"Woah, you're the Master Atiny! You know everything about them, amazing!"*

Clicking on the **Play again?** button will reload the quiz and start from the beginning. Pressing the **Home** button will go back to the home page. Both buttons have a hover effect where the text becomes yellow and the background becomes black.

![Screenshot 2024-02-14 at 20 42 08](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/0631dd82-d4f7-461f-914e-5ec257c6a55e)
![Screenshot 2024-02-14 at 20 42 18](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/36e937c3-d2ba-4760-9380-24bd555b048e)

### 404 Page

In case the user enters the wrong address into the address bar, I have created a 404 page. 

![Screenshot 2024-02-15 at 19 12 46](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/9bc8c48e-c96c-44ea-b7a8-418b0ea4b4de)

A message is displayed stating that the page could not be found. A **Home** button is displayed underneath to guide the user back to the Home page. This also has a hover effect where the colours are changed.

### Future Features

The first feature I would like to implement is adding a score board to the game, using the window's local storage. This would allow the user to enter a name or a nickname if they wished. If they didn't want to enter a name, then a randomly generated one would be used in their place on the score board. The scores would show either out of 10 or out of 20, depending on the quiz length chosen. Alternatively, two seperate score boards could be made, one for the long quiz and one for the short quiz. 

The second feature I would like to implement is adding a dark/night mode to the game. This could be accessed in the settings. I would change the quiz's background image to a darker group image of ateez, but the containers for the quiz and all buttons would remain the same. 

A third feature would be to implement a timer to each question, maybe for a harder setting for the quiz. On each question, the user would have a 10 second timer counting down at the top. If the user does not choose in time, the correct answer would be shown but their score would not go up.

A fourth feature to be included would be a progress bar at the top of the quiz, to indicate to the user how far along into the quiz they are. The progress could be displayed as a percentage, with a progress bar that fills up as the quiz goes along.

A fifth feature to be introduced to the quiz would be keyboard events. For example, if the user wanted to leave the quiz, they could press the 'Esc' key. To go to the next question, the 'Enter' key could be used, etc.

## Testing

### Validation of Code

- No errors were found with CSS when ran through the [W3C Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmariam138.github.io%2Fultimate-ateez-quiz%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- The HTML code was validated for each main feature of the quiz, as certain HTML elements are not present until the quiz is running. Validation of the HTML code throughout different stages of the quiz was done by copying the relevant HTML code from Chrome's DevTools and pasting into the [W3 Validator](https://validator.w3.org/).
    - The HTML for the home page only showed one warning message, which was that there was an empty heading element. This empty heading element was for the final score of the quiz, which would remain empty until the very end. [Home Page validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmariam138.github.io%2Fultimate-ateez-quiz%2F)
    - During the quiz, once a button is clicked, they then become disabled. In the JavaScript, this is done by looping through the buttons and adding a **"disabled = true"** attribute. This showed as an error in the validation, stating *"Bad value true for attribute disabled on element button."* After [reading](https://www.c-sharpcorner.com/article/understanding-the-disabled-attribute-in-html/) how the **disabled** attribute is usually used in HTML, it appears that only writing **disabled** is needed, without the **"= true"** part. This did not flag up any errors in the validator. However, as I have written it explicitly in the JavaScript as **disabled = true**, I cannot change this in the HTML, so these errors have been chosen to be ignored.
    - No further errors are shown when no option buttons have been clicked during the quiz.
    - No further errors were present when the instructions modal, settings modal or exit modal were open. 
    - No further errors were shown on the results page, and the warning for an empty heading disappeared. 
    - No errors were shown when validating the [404 page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fmariam138.github.io%2Fultimate-ateez-quiz%2F404.html)
- The JavaScript code was validated using [JSHint](https://jshint.com/) by direct input. No errors were shown, however there were several warnings due to the fact that I had used syntax that is only avaible for ES6 onwards. Therefore, these warnings were ignored. The validator highlighted an unused variable that had been declared, **scoreDiv**, and so this was removed from the JavaScript code.

### Lighthouse Testing

Using Lighthouse in Chrome's DevTools, the performance of the loading of the page was analysed.

On desktop, performance achieved an overall socre of 94, so no further changes were made.

![Screenshot 2024-02-14 at 21 14 17](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/187a54e4-23a6-4ba9-a303-ccf92c9b6eb0)

On mobile, the initial performance scored 78. 

![Screenshot 2024-02-14 at 21 16 31](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/ecddf5be-5182-4d86-8830-85908d820514)

After looking into the report, this was because of the size of the background image. To improve performance, I reduced the size of the background image for mobile phones by 100px and performed the lighthouse test again. This led to a performance of 91.

![Screenshot 2024-02-15 at 13 52 36](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/85701dd0-7773-46e6-b70d-e5c4a2e39e82)

### Accesibility Testing

The accessibility was tested using WebAIM's accesibility testing tool, [WAVE](https://wave.webaim.org/report#/https://mariam138.github.io/ultimate-ateez-quiz/). Four errors were found: 1 error for an empty heading, and 3 errors for empty buttons. However, these empty elements were for the Final score heading on the results page, and the option buttons for the quiz. Both of these elements have text present once the quiz has started, but this was not recognised by the WAVE tool. For this reason, I have chosen to ignore these errors. No other errors were found on the website.

### Manual Testing

Manual testing was conducted on two devices:
- MacBook Air 2015 13-inch
- iPhone 13

For the testing of this project, both responsive features and the Javascript logic were tested. Below are tables highlighting the tests that took place for each main feature of the quiz.

#### Home Page

| Feature being tested                                                         | Expected Outcome                                                                                    | How is the feature being tested                                                                                                           | Pass or Fail? |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Instructions Button                                                          | A modal opens with the quiz’s instructions                                                          | Click on the button                                                                                                                       | Pass          |
| Instructions Modal Back Button                                               | The instructions modal is closed when the back button is clicked                                    | Click on the button                                                                                                                       | Pass          |
| Settings Button                                                              | A modal with the quiz’s settings opens                                                              | Click on the button                                                                                                                       | Pass          |
| Settings Modal Back Button                                                   | The settings modal closes when the back button is clicked                                           | Click on the button                                                                                                                       | Pass          |
| Long Quiz Setting                                                            | When the quiz is started, 20 questions are played                                                   | Make sure the long quiz setting is chosen and play through the quiz to make sure 20 questions are shown, and the score counter shows /20  | Pass          |
| Short Quiz Setting                                                           | When the quiz is started, 10 questions are played                                                   | Make sure the short quiz setting is chosen and play through the quiz to make sure 10 questions are shown, and the score counter shows /10 | Pass          |
| Start Button                                                                 | The home page area is replaced by the quiz questions area                                           | Clicking on the Start button                                                                                                              | Pass          |
| Settings Button Hover effect (laptop screens and larger only)                | When hovered over by the mouse, the Settings button changes colours                                 | Hovering the mouse over the Settings button                                                                                               | Pass          |
| Instructions Button Hover effect (laptop screens and larger only)            | When hovered over by the mouse, the Instructions button changes colours                             | Hovering the mouse over the Instructions button                                                                                           | Pass          |
| Settings Modal Back Button Hover effect (laptop screens and larger only)     | When hovered over by the mouse, the back button changes colour                                      | Hovering the mouse over the back button in the Settings modal                                                                             | Pass          |
| Instructions Modal Back Button Hover effect (laptop screens and larger only) | When hovered over by the mouse, the back button changes colour                                      | Hovering the mouse over the back button in the Instructions modal                                                                         | Pass          |
| Start Button hover effect (laptop screens and larger only)                   | When hovered over by the mouse, the Start button turns into a lighter blue, and the button enlarges | Hovering the mouse over the Start button                                                                                                  | Pass          |

#### Quiz Page

| Feature being tested                                                          | Expected Outcome                                                                                                                                 | How is the feature being tested                                                                   | Pass or Fail? |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------- |
| Correct answer button                                                         | When the correct answer is clicked, the button turns green                                                                                       | Clicking on the correct answer on a question                                                      | Pass          |
| Incorrect answer button                                                       | When the incorrect answer is clicked, the incorrect button turns red, and the button with the correct answer turns green                         | Clicking on an incorrect answer on a question                                                     | Pass          |
| Next Button                                                                   | When an option button is clicked, the next button appears below the options                                                                      | Click on an option button                                                                         | Pass          |
| Next Button                                                                   | When the next button is clicked, the next question is loaded                                                                                     | Click on the next button after clicking on an option button                                       | Pass          |
| Exit button                                                                   | When the exit button is clicked, a modal asking the user if they are sure they want to leave appears                                             | Click on the exit button                                                                          | Pass          |
| Yes button in exit modal                                                      | When the Yes button is clicked, the user is returned back to the home page, and the containers for the questions and options are hidden          | Click on the Yes button in the exit modal                                                         | Pass          |
| No, go back button in the exit modal                                          | When the No, go back button is clicked, the exit modal is closed and the user is able to continue with the quiz                                  | Click on the No, go back button in the exit modal                                                 | Pass          |
| Shuffling of quiz questions                                                   | When the quiz is started (again) from either the home page or the results page, the questions should be shuffled and appear in a different order | Click on the Start button and click on the Play Again? button                                     | Pass          |
| Score and button incorrect/correct classes on start of quiz                   | When a quiz is (re)started, the score should be set to 0 and any buttons should not be highlighted red or green                                  | Click on the Start button and click on the Play again? button                                     | Pass          |
| Quiz score                                                                    | When the correct answer is clicked, the score should increase by 1                                                                               | Click on the correct answer                                                                       | Pass          |
| Option buttons                                                                | Once an option button is clicked, none of the option buttons are clickable until the next question is loaded                                     | Click an option button initially, then click on all option buttons to make sure they are disabled | Pass          |
| Option buttons hover effect (laptop screens and larger only)                  | When hovered with a mouse, the option buttons should get bigger, and return to their normal size when the mouse is off                           | Hover mouse over each option button then move mouse away                                          | Pass          |
| Exit button hover effect (laptop screens and larger only)                     | When hovered over with a mouse, the Exit button should change colours                                                                            | Hover mouse over Exit button                                                                      | Pass          |
| Exit modal “Yes” button hover effect (laptop screens and larger only)         | When hovered over with a mouse, the Yes button in the exit modal should change colours                                                           | Hover mouse over the Yes button in the exit modal                                                 | Pass          |
| Exit modal “No, go back” button hover effect (laptop screens and larger only) | When hovered over with a mouse, the No, go back button in the exit modal should change colours                                                   | Hover mouse over the No, go back button in the exit modal                                         | Pass          |
| Next button hover effect (laptop screens and larger only)                     | When hovered over with a mouse, the Next button should become a slightly lighter blue                                                            | Hover mouse of the Next button                                                                    | Pass          |

#### Results Page

| Feature being tested                                             | Expected Outcome                                                                                                                                         | How is the feature being tested                                                                                              | Pass or Fail? |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Quiz section Next Button                                         | On the last question of both the long and short quiz, the question and options containers should be hidden and the results container should be displayed | Click on the Next button on the last question of the quiz                                                                    | Pass          |
| Final score                                                      | If the long quiz was played, the final score will show out of /20                                                                                        | Play through the long quiz                                                                                                   | Pass          |
| Final score                                                      | If the short quiz was played, the final score will show out of /10                                                                                       | Play through the short quiz                                                                                                  | Pass          |
| Results page image                                               | When the quiz is finished, a picture of Ateez should load                                                                                                | Load the result page after the final question of the quiz                                                                    | Pass          |
| Play Again? button                                               | When the button is clicked, the quiz should restart                                                                                                      | Click the Play Again? button                                                                                                 | Pass          |
| Home button                                                      | When the button is clicked, the results container should be hidden and the home page should be displayed                                                 | Click the Home button                                                                                                        | Pass          |
| Final result comments                                            | Depending on the range of score for either the long or short quiz, the correct corresponding comment should be displayed underneath the picture          | Play through the quiz, getting a score to match each score range for each of the 4 comments for both the short and long quiz | Pass          |
| Play Again? Button hover effect (laptop screens and larger only) | When hovered on, the Play Again? Button should change colours                                                                                            | Hover the mouse over the button                                                                                              | Pass          |
| Home button hover effect (laptop screens and larger only)        | When hovered on, the Home button should change colours                                                                                                   | Hover the mouse over the button                                                                                              | Pass          |

#### No Script Tag

| Feature being tested       | Expected Outcome                                                                           | How is the feature being tested         | Pass or Fail? |
| -------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------- | ------------- |
| <noscript> element in HTML | When javascript is disabled, a message should appear telling the user it has been disabled | Disabling Javascript in Chrome DevTools | Pass          |

#### 404 Page

| Feature being tested                           | Expected Outcome                                                        | How is the feature being tested | Pass or Fail? |
| ---------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------- | ------------- |
| Home Button                                    | When the button is clicked, the user is navigated back to the home page | Click on the Home button        | Pass          |
| Home Button hover effect (larger screens only) | When moving the mouse over the button, the button should change colours | Hover mouse over button         | Pass          |

## Technologies Used

To create the wireframes, **Balsamiq** was used. The quiz was created using **Gitpod** using HTML, CSS and JavaScript.

## Deployment

Deployment of the project took place early on, once the HTML and CSS for the home page had been set up. Deployment took place as follows:

1. The GitHub page for the website was loaded
2. The **Settings** tab was clicked, located in the top right corner.
3. From the **Settings** page, on the left-hand side the **Pages** tab was clicked from the menu.
4. Under the **Branch** section, the page was selected to be made from the **main** branch followed by the **root** folder.
5. These settings were saved and the website was deployed after a few minutes, with a link being provided at the top of the page.

To clone the repository, the following steps are as follows:

1. On the repository, click the **Code** tab in the upper navigation bar, and then click the green **Code** button to reveal a drop down menu.
2. Copy the URL for the repository
3. In the coding workspace, open the terminal and change the current working directory to the one where you want the clone to be located
4. In the terminal, write `git clone` and paste the copied URL after it
5. Press **Enter** to create the cloned repository

Cloning the repository allows all files to be accessible on the local computer.

## Bug Fixes

1. When trying to create the options buttons for when the quiz started, the button was not showing in the HTML. However, it would show in the console when logged.

![Screenshot 2024-02-04 at 12 44 50](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/eed1df59-6b8c-4d90-a1f7-92b6d6a66142)

![Screenshot 2024-02-04 at 12 47 17](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/b518e577-6849-464d-b321-421c00123264)

After moving the `options-area` div inside the `quiz-area` div, then an error was thrown stating that the element with the id `options-area` was undefined. This turned out to be because I had set the 'innerHTML' in the javascript, overwriting the `options-area` I had created in the HTML originally. To fix this, I created separate divs that would appear underneath the `quiz-area` div, and created a function that would show these divs when the quiz was loaded.

2. When creating the buttons which contained the options for each question, I made a for loop. However, my initial code led to three buttons being created with the same answer. 

![Screenshot 2024-02-04 at 16 12 32](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/0bba9175-b13c-4a78-bfe5-fd151b61d6c3)

My initial code was written as follows:  

    for (i = 0; i < 3; i++){  

        let optionButton = document.createElement('button');  

        optionButton.textContent = ``${questions[0].options[0]}``;  

        optionsArea.appendChild(optionButton); 
    } 

I realised that having the index for options as "0" was causing the loop to create three buttons with the first answer in the options array. Changing it to [i] allowed it to create three buttons each with three different options.

3. After creating the buttons, I wanted to add click events to them all to create a *"CheckAnswer"* function. When I declared the **"optionButtons"** variable outside of the **"createOptions"** function and logged the node list to the console, it gave a length of 0. I realised that this was because the separate option buttons were being created inside the function, giving them **function scope**. Instead, I created the button elements in the HTML and left them empty. This allowed the event handler to work.

4. To allow the user to only have the option of clicking one of the option buttons, I added `{once:true}` to the event handler. However, after adding the exit and next buttons underneath the quiz, this feature seemed to also affect these buttons, even though the click event was only on the **options-area div**. So when clicking on the exit button first, then going back into the quiz from the modal, none of the option buttons were responding to the click event again. To stop this, I instead used the **"disabled"** attribute with javascript, applied only to the option buttons. 

5. When looping through the quiz questions, whenever the correct answer was clicked, rather than the score increasing by 1 , it would increase by the index of the question number. When logging the text for the clicked button and the corresponding correct answer, these both matched, but the console continued to log them an increasing number of times each question. This was why the score was increasing exponentially. This turned out to be because I had accidentally added multiple event listeners to the option buttons. To fix this, one event listener with the function **checkAnswer** was defined and declared outside of any functions created so that it was only called once. 

## Credits

### Code

- Code to create modals is adapted from [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
- Code to add listener events to multiple elements simultaneously is adapted from [fjolt.com](https://fjolt.com/article/javascript-multiple-elements-addeventlistener)
- Code to shuffle the questions for the quiz is adapted from [Bro Code](https://www.youtube.com/watch?v=FGAUekwri1Q&list=WL&index=2) on Youtube
- Code to use anonymous functions in my modal functions is adapted from [javascripttutorial.net](https://www.javascripttutorial.net/javascript-anonymous-functions/)

### Images

- The background image and home page image of Ateez are both courtesy of KQ Entertainment
- The group picture of Ateez on the results page is courtesy of Ateez's [Twitter/X](https://x.com/ATEEZofficial/status/1751216141756932114?s=20) account

### Other Media

- All icons used are from [Font Awesome](https://fontawesome.com/)
- Fonts have been imported from [Google Fonts](https://fonts.google.com/)

All other text and code was created by myself.