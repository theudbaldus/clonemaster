# CLONEMASTER
![Project screenshot](/screenshot.png)

## TABLE OF CONTENTS
- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Known Issues](#known-issues)

## PROJECT OVERVIEW
As an active foreign language learner, I have used [Clozemaster](https://clozemaster.com) for a long time. I wanted to recreate one of the main features of this website/app, which is the "fill in the blanks" quiz, testing vocabulary in context. The user is given a phrase in his target language with one missing word. The translation is displayed below the phrase, you guessed it: user has to find the missing word. It helps memorizing words by presenting them to the user in a specific context, making it easier to learn and recall it.    
The quiz is made from English to French so you will probably make the incorrect counter go to the moon if you don't know the language yet.

## SETUP AND INSTALLATION
> git clone https://github.com/theudbaldus/tapatshoes_next13.git  
> npm install  
> npm run dev

## USAGE
Try to guess the French missing word and check your answer.

## FEATURES
I wanted to recreate the logic behind this feature. First, we give the user a phrase and an input field he has to fill with the correct missing word. To do that, he can read the translation of the phrase below the field. When typing the answer, the code checks if he is on the right track or not. Let's say the answer is "bonjour": if the starts answering by typing "b", the text turns to green, otherwise, it becomes red. He can check for answer by clicking on the corresponding button or by pressing "Enter" key. If he is correct, he gets one point and can continue the quiz, otherwise, the incorrect counter gets one point and the answer is displayed in the input field, he is then allowed to retry. When completing the quiz, an end screen is displayed, giving the user the opportunity to retry the quiz if he wants to.

## TECHNOLOGIES USED
I built this project in plain Javascript, CSS and of course HTML. Working with vanilla JS made me practice the use of event listeners and DOM manipulation.

## KNOWN ISSUES
* The input field size of the first phrase does not match the size of the answer