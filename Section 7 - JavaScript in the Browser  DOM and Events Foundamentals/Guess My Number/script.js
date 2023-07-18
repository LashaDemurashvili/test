'use strict';

// this includes 20 also, so from 1 to 20
// we need let type because we will change them
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// just testing
console.log(secretNumber);

// array for incorrect answer, which we need to restart after  >> again << button
let arrIncorrectNums = [];

// custom function to update textContent of any elements, ==> by class name
const updateContent = (class_name, text_content) => {
    {
        document.querySelector(`.${class_name}`).textContent = text_content;
    }
};

// main brain - use onclick()
const checkFunc = function () {
    const guessNumber = Number(document.querySelector('.guess').value);

    if (arrIncorrectNums.includes(guessNumber)) {
        alert("Please choose different numbers, you already choose this one which wasn't correct !!!");
    } else if (guessNumber <= 0 || guessNumber > 20) {
        alert('Please choose number between 1 to 20');
    } else {
        // add incorrect guess number to the array
        arrIncorrectNums.push(guessNumber);

        // if input is empty
        if (!guessNumber) {
            updateContent('message', '⛔ No number!');

            // if user make correct guess
        } else if (guessNumber === secretNumber) {
            updateContent('number', guessNumber);
            updateContent('message', '🎉 Correct Number!');

            document.querySelector('.number').style.width = '30rem';
            document.querySelector('body').style.background = '#5f9451';

            if (score > highScore) {
                highScore = score;
                updateContent('highscore', highScore);
            }
        }

        // guess is wrong
        else if (guessNumber !== secretNumber) {
            if (score > 1) {
                score--;
                updateContent('score', score);

                // using ternary operator - if else one line
                guessNumber < secretNumber ? updateContent('message', '📉 Too low!')
                    : updateContent('message', '📈 Too high!');

                document.querySelector('.guess').focus(); // focus mouse cursor
            } else {
                updateContent('message', '💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
        }
    }
};

// use addEventListener
// again  - function  -- > reset settings
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score; // for reset score

    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    updateContent('message', 'Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').focus();

    // clear array
    arrIncorrectNums = [];
});


