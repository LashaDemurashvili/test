'use strict';


///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


// Immediately Invoked Function Expressions (IIFE)
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    // random color array
    const colorArr = ['blue', 'yellow', 'green', 'purple'];

    // make outside the event listener
    let previousChoice = null;

    document.body.addEventListener('click', function () {
        let newChoice;
        const randFunc = function () {
            return Math.trunc(Math.random() * colorArr.length);
        };

        // avoid same color, change to new one
        do {
            newChoice = randFunc();
        } while (newChoice === previousChoice);

        // else, Update previousChoice
        previousChoice = newChoice;

        console.log(newChoice);
        header.style.color = colorArr[newChoice];
    });
})();


