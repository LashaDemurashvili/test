'use strict';

/*

let people = [
    {name: "aaron",age: 65},
    {name: "beth",age: 2},
    {name: "cara",age: 13},
    {name: "daniel",age: 3},
    {name: "ella",age: 25},
    {name: "fin",age: 1},
    {name: "george",age: 43},
]

let toddlers = people.filter(person => person.age <= 3)
console.log(toddlers);

*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
let team = [
    {
        name: "aaron",
        position: "developer"
    },
    {
        name: "beth",
        position: "ui designer"
    },
    {
        name: "cara",
        position: "developer"
    },
    {
        name: "daniel",
        position: "content manager"
    },
    {
        name: "ella",
        position: "cto"
    },
    {
        name: "fin",
        position: "backend engineer"
    },
    {
        name: "george",
        position: "developer"
    },

]

let developers = team.filter(person => person.position === 'developer')
console.log(developers);

developers.forEach((member, index) => {
    console.log(`${index+1} - ${member.name}`);
})

*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
let team = [
    {
        name: "aaron",
        position: "developer"
    },
    {
        name: "beth",
        position: "ui designer"
    },
    {
        name: "cara",
        position: "developer"
    },
    {
        name: "daniel",
        position: "content manager"
    },
    {
        name: "ella",
        position: "cto"
    },
    {
        name: "fin",
        position: "backend engineer"
    },
    {
        name: "george",
        position: "developer"
    },

]

let nondevelopers = team.filter(member => member.position !== 'developer')
console.log(nondevelopers);

*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
let winners = ["Anna", "Beth", "Cara"]

let gold = winners.filter((winner, index) => index === 0)
let silver = winners.filter((winner, index) => index === 1)
let bronze = winners.filter((winner, index) => index === 2)

console.log(`Gold Winner: ${gold}, \nSilver Winner: ${silver}, \nBronze Winner: ${bronze}`);

*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
let competitors = ["Anna", "Beth", "Cara", "David"]

function displayWinners(name, index, array) {
    let isNextItem = index + 1 < array.length
    if (isNextItem) {
        console.log(`The No${index+1} winner is ${name}.`);
    } else {
        console.log(`Sorry, ${name} is not one of the winners.`)
    }
}

competitors.filter(function(n, i, arr)  {
    displayWinners(n, i,arr)
});

*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


let people = [
    {name: "aaron", age: 65},
    {name: "beth", age: 15},
    {name: "cara", age: 13},
    {name: "daniel", age: 3},
    {name: "ella", age: 25},
    {name: "fin", age: 16},
    {name: "george", age: 18},
];

let range = {
    lower: 13,
    upper: 16
};


let teenagers = people.filter(function (person) {
    return person.age >= this.lower && person.age <= this.upper;
}, range);

console.log(teenagers);


/*



*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE
/////////////////////////////////////////////////////////




