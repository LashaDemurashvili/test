'use strict';


const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults()
        this.displayResults('string')
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },

};


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

const Data1 =  [5, 2, 3]
const Data2 =  [1, 5, 3, 9, 6, 1]

poll.displayResults.call(displayResults, ...Data1)

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
// };
//
//
// poll.registerNewAnswer = function () {
//     console.log(this.question);
//     for (let item of this.options) {
//         console.log(item);
//     }
//     const userInput = Number(prompt(" "));
//     if (userInput >= 0 && userInput < 4) {
//         this.answers[userInput]++;
//     } else {
//         console.log('You make wrong input!');
//     }
//     this.displayResults()
// };
//
// poll.displayResults = function (){
//     console.log(this.answers);
// }
//
// document.querySelector('.poll').addEventListener('click', function (){
//     poll.registerNewAnswer()
// })
//
//
// const Data1 =  [5, 2, 3]
// const Data2 =  [1, 5, 3, 9, 6, 1]
