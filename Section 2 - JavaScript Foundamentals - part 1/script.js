
/*
////////////////////////////////////
// Strings and Template Literals

const firstName = "Lasha";
const lastName = "Demurashvili";
const age = 24;

const personLasha = "I'm"+" "+firstName +" "+ lastName +", and i am"+" "+age +" "+ "years old";
console.log(personLasha);
const newPersonLasha = `I'm ${firstName} ${lastName}, and i am ${age} years old`;
console.log(newPersonLasha);

let newLiner = `first line\nsecond line\nthird line`;
console.log(newLiner);

console.log(`new first line\n\
new second line\n\
new third line`);

console.log(`new first line
new second line
new third line`);

////////////////////////////////////
// Taking Decisions: if / else Statements

const age = 17;
const isOldEnough = age >= 18;
let canDrive; // creare varaible for we have access inside if statement
if(isOldEnough){
    if(age > 18){
        canDrive = `You are ${age} years old \nof course you can drive!\you're over ${age-18} years`;
    }else{ 
        canDrive = `You are ${age} years old \nof course you can drive!`;
        // else statement same as --> else if (age === 18)
    }
    console.log(canDrive);
}else{
    const notCanDrive = `sorry you can't drive\nyou only left ${18-age} years!`;
    console.log(notCanDrive);
}


////////////////////////////////////
// odd eve number
const myNumber = 18;

if((myNumber % 2) == 0){
    console.log(`${myNumber} is even number!`);
}else {
    console.log(`${myNumber} is odd number!`);
}


/////////////////////////////////////////
BMI using template literals


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const bmiMark = massMark/heightMark**2;
const bmiJohn = massJohn/heightJohn**2;

let result;
if(bmiMark>bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}else{
    console.log(`"Mark's BMI (${bmiMark}) is less than John's (${bmiJohn})!`)
}

/////////////////////////////////////////
// logical operators


////// condition
// language - ENG
// population - less than 50 miliion
//  island - no island

// 1 option
const country = "Georgia";
const language = false; 
const population = true; 
const isIsland = false;

if (language && population && !isIsland) {
    console.log(`You should live in ${country} :)`);
}else {
    console.log(`${country} does not meet your criteria :(`);
}

// 2 option
const new_country = "Georgia";
const new_language = "GEO" 
const new_population = 3.8; 
const new_isIsland = false;

if (new_language === "ENG" && new_population < 50 && !new_isIsland) {
    console.log(`You should live in ${new_country} :)`);
}else {
    console.log(`${new_country} does not meet your criteria :(`);
}




////////////////////////////////chalange 3
// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (110+112+101)/3;
const scoreKoalas = (110+112+101)/3;
console.log(scoreDolphins, scoreKoalas);


if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Winner is - Dolphins teams");
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Winner is - Koalas teams");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Draw");
} else {
    console.log("No one win!");
}



////////////////////////////////////////////////switch
// switch
const userInput = Number(prompt("Choose the number from 1 to 7 according to week day: "));

switch(userInput){
    case 1:
    case 2:
        console.log("Monday or Thuesday");
        break;
    case 3:
    case 4:
    console.log("Wednesday or Tharsday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Satarday or Sunday");
        break;
    default:
        console.log("Wrong input")
}

// if else 
if(userInput === 1 || userInput === 2){
    console.log("Monday or Thuesday");
}else if (userInput === 3 || userInput === 4){
    console.log("Wednesday or Thuesday");
}else if (userInput === 5){
    console.log("Friday");
}else if (userInput === 6 || userInput === 7){
    console.log("Satarday or Sunday");
}else {
    console.log("Wrong input")
}

//////////////////////////////
const languages = "georgian";
switch(languages){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log( 'Great language too :D');
}

/////////////////////////////////////////////////////////////
const firstName = "Lasha"
const lastName = "Demurashvili"
const fullName = `${firstName} ${lastName}`
const dateOfBirth_year = 1998;
const today_year = 2022;

const age = today_year-dateOfBirth_year;

console.log(`Hi there, I am ${fullName} and I'm ${age} years old!`);


/////////////////////////////////////////////////////////////
// The Conditional (Ternary) Operator

// const age = 19;

/// first option
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

///// second option
// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

///// third option
// let drink;
// if(age >= 18){
//     drink = 'wine 🍷';
// }else {
//     drink = 'water 💧';
// }
// console.log(`I like to drink ${drink} because i am ${age} years old!`);
// //////////// another option  
// console.log(`I like to drink ${age >= 18 ? 'WINE' : 'WATER'}`)


const population = 130;
console.log(`Portugal's population is ${population >= 33 ? 'above' : 'below'} average`);


/////////////////////////////////////////////////////////////



const bill = 275;
const tip = bill>=50 && bill <= 300 ? bill * 0.15: bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/




