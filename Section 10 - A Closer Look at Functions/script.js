'use strict';

// unique returned value from array
// Array of choices
// const choices = ["Option 1", "Option 2"];
const choices = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7"];


// Initialize previous choice
let previousChoice = null;

// Function to get a random choice different from the previous one
function getRandomChoice() {
    let newChoice;

    // Keep generating a random choice until it's different from the previous one
    do {
        newChoice = choices[Math.floor(Math.random() * choices.length)];
    } while (newChoice === previousChoice);

    // Update previousChoice
    previousChoice = newChoice;

    return newChoice;
}

// // Example usage
// for (let i = 0; i < 5; i++) {
//     const randomChoice = getRandomChoice();
//     console.log(`Random choice ${i + 1}: ${randomChoice}`);
// }


document.body.addEventListener('click', function () {
    const randomChoice = getRandomChoice();
    document.querySelector('h1').textContent = randomChoice;
    console.log(randomChoice);
});