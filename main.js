import { phrases } from "./js/phrases";
import { characters } from "./js/specialCharacters";

// initiate counters, phrase index and user input
let correct = 0;
let incorrect = 0;
let toGo = 5;
let index = 0;
let answer = phrases[index].answer;
let userInput = "";

const handleKeyDownSubmit = (event) => {
    if (event.key === "Enter") {
        onSubmit();
    };
};

const handleKeyDownRetry = (event) => {
    if (event.key === "Enter") {
        onRetry();
    };
};

const handleKeyDownNext = (event) => {
    if (event.key === "Enter") {
        onNext();
    };
};

// select elements
const correctCounter = document.querySelector("#correct");
const incorrectCounter = document.querySelector("#incorrect");
const toGoCounter = document.querySelector("#toGo");
const correctMessage = document.querySelector("#message")
const phrase = document.querySelector("#phrase");
const input = document.querySelector("#input");
const specCharsDiv = document.getElementById("specChars");
const translation = document.querySelector("#translation");
const submitBtn = document.querySelector("#submit");
const retryBtn = document.querySelector("#retry");
const nextBtn = document.querySelector("#next");
const successScreen = document.querySelector("#successScreen");
const successBtn = document.querySelector("#successButton");

// set phrase and translation elements on screen
phrase.innerHTML = phrases[index].phrase;
translation.innerHTML = phrases[index].translation;

// Create a temporary hidden element to measure the width of the answer text
function calculateInputWidth() {
    const hiddenElement = document.createElement("span");
    hiddenElement.style.visibility = "hidden";
    hiddenElement.style.position = "absolute";
    hiddenElement.style.fontFamily = "Outfit";
    hiddenElement.style.fontSize = "2rem";
    hiddenElement.style.top = "-9999px";
    hiddenElement.innerText = answer;
    document.body.appendChild(hiddenElement);

    // Set the initial width of the input field based on the width of the answer
    input.style.width = `${hiddenElement.offsetWidth + 3}px`;
};

calculateInputWidth();

// assign function to input that checks in real time if user's on the right track, if he is, text turns green, otherwise it turns red
input.addEventListener("input", function () {
    userInput = this.value.toLowerCase();
    const answerLowerCase = answer.toLowerCase();

    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === answerLowerCase[i]) {
            input.style.color = "#22c55e";
        } else {
            input.style.color = "#991b1b";
            break;
        };
    };
});

// listen to "Enter" key on input to fire onSumbit function
input.addEventListener("keydown", handleKeyDownSubmit);

// assign functions to submit, retry and success buttons
submitBtn.addEventListener("click", onSubmit);
retryBtn.addEventListener("click", onRetry);
nextBtn.addEventListener("click", onNext);
successBtn.addEventListener("click", onReset);

// generate special characters divs below input field
characters.forEach(character => {
    // create button
    const button = document.createElement("button");
    button.textContent = character;

    // add event listener to each button, updating user input value with special character on click
    button.addEventListener("click", () => {
        input.value += character;
        input.focus();
    });

    // add each button to the corresponding div
    specCharsDiv.appendChild(button);
});

// update text on screen after successful submit
function updateText() {
    answer = phrases[index].answer;
    phrase.innerHTML = phrases[index].phrase;
    translation.innerHTML = phrases[index].translation;
    input.value = "";
    calculateInputWidth();
};

// handle user submit checking for correct answer
function onSubmit() {
    if (userInput === answer) {
        // if there is no more phrases to play, user won, we reset all the values again, else: we keep going by updating counters and text on screen
        if (toGo === 1) {
            successScreen.style.display = "flex";
        } else {
            correct += 1;
            toGo -= 1;
            submitBtn.style.display = "none";
            nextBtn.style.display = "block";
            correctMessage.style.display = "block";
            input.removeEventListener("keydown", handleKeyDownSubmit);
            input.addEventListener("keydown", handleKeyDownNext);
            correctCounter.innerHTML = correct;
            toGoCounter.innerHTML = toGo;
        };
    } else {
        input.value = answer;
        input.style.color = "#991b1b";
        incorrect += 1;
        incorrectCounter.innerHTML = incorrect;
        submitBtn.style.display = "none";
        retryBtn.style.display = "block";
        input.removeEventListener("keydown", handleKeyDownSubmit);
        input.addEventListener("keydown", handleKeyDownRetry);
    };
};

// function that reset input value
function onRetry() {
    input.value = "";
    retryBtn.style.display = "none";
    submitBtn.style.display = "block";
    input.removeEventListener("keydown", handleKeyDownRetry);
    input.addEventListener("keydown", handleKeyDownSubmit);
};

function onNext() {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
    correctMessage.style.display = "none";
    input.removeEventListener("keydown", handleKeyDownNext);
    input.addEventListener("keydown", handleKeyDownSubmit);
    index += 1;
    updateText();
};

function onReset() {
    correct = 0;
    incorrect = 0;
    toGo = 5;
    index = 0;
    answer = phrases[index].answer;
    userInput = "";
    input.value = "";
    correctCounter.innerHTML = correct;
    incorrectCounter.innerHTML = incorrect;
    toGoCounter.innerHTML = toGo;
    updateText();
    successScreen.style.display = "none";
}