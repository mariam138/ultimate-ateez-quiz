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

To produce wireframes for the quiz, I used Balsamiq. The wireframes helped me have a basic idea of the setup I wanted for my quiz, although the aim was to keep it all on one page. I made wireframes for both mobile and desktop for the home page, the quiz itself and the score page at the end.

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

![Screenshot 2024-02-01 at 13 53 25](https://github.com/mariam138/legacy-of-dubai/assets/150139337/5018700b-191c-49fe-9879-acc50071cc3d)

On larger screens, hovering the mouse over the buttons will change their colour with a slight transition. The blue **"Start!"** button will change into a lighter blue, while the **"Instructions"** and **"Settings"** buttons change their background colour to black and the text to yellow. This is to indicate clickability, but also to separate the **"Start!"** button from the others visually, to indicate it has a different action. 

![Screenshot 2024-02-01 at 13 56 30](https://github.com/mariam138/legacy-of-dubai/assets/150139337/bd2a3ba0-3cd5-4829-96db-d0e275f0da04)
![Screenshot 2024-02-01 at 13 56 37](https://github.com/mariam138/legacy-of-dubai/assets/150139337/b068d58b-2eca-429d-9208-1c4f1d602cc4)
![Screenshot 2024-02-01 at 13 56 40](https://github.com/mariam138/legacy-of-dubai/assets/150139337/86b1ad52-e9d1-492a-8b51-7100eb771cbf)

When clicking on the **"Instructions"** button, a modal appears explaining briefly how the game will work.

![Screenshot 2024-02-01 at 18 11 09](https://github.com/mariam138/ultimate-ateez-quiz/assets/150139337/7438cc86-5e0c-4ecb-86cf-327d2d97b601)

Clicking the **"Back"** button will close the modal and return back to the home page. 

### Future Features

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

6. When looping through the quiz questions, whenever the correct answer was clicked, rather than the score increasing by 1 , it would increase by the index of the question number.

## Credits

### Code

- Code to create modals is adapted from [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
- Code to add listener events to multiple elements simultaneously is adaptedd from [fjolt.com](https://fjolt.com/article/javascript-multiple-elements-addeventlistener)