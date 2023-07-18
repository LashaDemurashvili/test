// 'use strict';
//////////////// we use for catch any errors
/*
// start
////////////////////////////////////////////////////////////////////

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


////////////////////////////////////////////////////////////////////
function describeCountry(country, population, capitalCity){
    const result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return result;
}


const georgia = describeCountry("Georgia", 4, "Tbilisi");
const russia = describeCountry("Russia", 140, "Moscow");
const usa = describeCountry("USA", 350, "Washington");

console.log(`${georgia}\n\t${russia}\n\t\t${usa}`);


////////////////////////////////////////////////////////////////////
// Function declaration
function age_1(birthYear, currentYear){
    return currentYear - birthYear;
}
const sopo = age_1(1995,2022);
console.log(sopo);

// Function expression
const age = function(birthYear, currentYear){
    return currentYear - birthYear;
}
const lasha = age(1998,2022);
console.log(lasha);



////////////////////////////////////////////////////////////////////
// Function declaration
function percentageOfWorld1(population) {
 return (population / 7900) * 100;
 }

// Function expression
 const percentageOfWorld2 = function (population) {
 return (population / 7900) * 100;
 };
 const percPortugal1 = percentageOfWorld1(10);
 const percChina1 = percentageOfWorld1(1441);
 const percUSA1 = percentageOfWorld1(332);
 console.log(percPortugal1, percChina1, percUSA1);



/////////////////////////////////////////////////////////////////
// function declaration 
function birthYear(name, myage, currentyear){
    return `Hi ${name}, your birth year is ${currentyear-myage} `;
}
const lasha = birthYear("lasha", 24, 2022);
console.log(lasha);

// function expresion 
const calcBirthYear = function(name, myage, currentyear){
    return `Hi ${name}, your birth year is ${currentyear-myage} `;
}
const sopo = calcBirthYear("sopo", 27, 2022);
console.log(sopo);



//////////////////////////////////////////////////////////////////// arrow function 
const (NAME OF FUNCTION) = (PARAMETER1, PARAMETER2) {
    STATEMENT1;
    STATEMENT2;
    return RESULT;
}

const percentageOfWorld3 = population => (population/7900)*100;
const percPortugal1 = percentageOfWorld3(10);
const percChina1 = percentageOfWorld3(1441);
const percUSA1 = percentageOfWorld3(332);

console.log(percPortugal1, percChina1, percUSA1);



//////////////////////////////////////////////////////////////////// arrow function - with multiply properties
const calcAge = (name, age, currentYear) => {
    const result = `Hi ${name}, your birthyear is ${currentYear-age}`;
    return result;
}
console.log(calcAge("lasha", 24, 2022));

console.log(typeof calcAge);


////////////////////////////////////////////////////////////////////function calling another function
const percentageOfWorld1 = function(popul){
    return popul/7900*100;
}

const describePopulation = function(country, population){
    const percentOfPopulation = percentageOfWorld1(population);
    const result = `${country} has ${population} million people, which is about ${percentOfPopulation}% of the world`
    return result;
}
const georgiaPopulation = describePopulation("Georgia", 3.8);
console.log(georgiaPopulation);


////////////////////////////////////////////////////////////////////
// Coding Challenge #1

const calcAverage = (a,b,c) => (a+b+c)/3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function(avgDolhins, avgKoalas){
    if(avgDolhins >= 2*avgKoalas){
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    }else if (avgKoalas >= 2*avgDolhins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    }else {
        console.log("No team wins!");
    }
}

checkWinner(scoreDolphins, scoreKoalas);
////////////////////////////////////////////////////////////////////
const divide = function(num){
    return num / 2;
}

const years = [3000, 1967, 2002, 2010, 2018];
const dividedNumbers = [
    divide(years[0]),
    divide(years[2]),
    divide(years[years.length-1]),
];
console.log(dividedNumbers);


////////////////////////////////////////////////////////////////////
// push - add element to the end of the array 
const friends = ['Michael', 'Steven', 'Peter'];

friends.push("Lasha");
const newLength = friends.push("Beka"); // we can to save current length of list after added new one
console.log(newLength); 

console.log(friends);

// unshift - add element begening of the array
friends.unshift("loma");
console.log(friends);

// Remove elements
// pop - method remove last element - we can to store this emelent as a variable OR JUST REMOVE
friends.pop();
const lastElement = friends.pop();
console.log(friends)
console.log(lastElement);

// shift - remove first element // we can aslo to save as a variable
const firstElement = friends.shift();
console.log(firstElement);
console.log(friends);

console.log(friends.indexOf("lasha")); // -1  ==> not in array
console.log(friends.indexOf("Peter"))

// includes  - returns ==> true or false 
const ifNameInArray = function(name, array){
    if(array.includes(name)){
        console.log(`${name} is in the array!`);
    }else {
        array.push(name); // added end of the array
        console.log(array);
        console.log(`Now ${name} is in the array!`);
    }
}
////////////////////////////////////////////////////////////////////
// Exercises
const neighbours = ['Armenia', 'Azerbaijan', 'Turkey', 'Russia'];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes("Germany")){
    console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Turkey")] = "Australia";
console.log(neighbours);

////////////////////////////////////////////////////////////////////
// Chalange #2
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// with arrow function method
const calcTipArrow = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
]
const totals = [
    bills[0] + calcTip(bills[0]),
    bills[1] + calcTip(bills[1]),
    bills[2] + calcTip(bills[2]),
]
console.log(bills, tips, totals);


////////////////////////////////////////////////////////////////////
const arrowFunction = (name, age) => `Your name is ${name} and your age is ${age}`;

const lasha = arrowFunction("lasha", 24);
console.log(lasha);

////////////////////////////////////////////////////////////////////
const objectOfLasha = {
    firstname: "lasha",
    lastname: "demurashvili",
    age: 2022-1998,
    cars: ["Mercedes-Benz", "BMW", "Rolls Royce"] 
}
console.log(objectOfLasha["age"])


const myCountry= {
    country: "Georgia",
    capital: "Tbilisi",
    language: "georgian language",
    population: 3.8,
    neighbours: ["Russia", "Armenia", "Azerbaijan", "Turkey"]
}
console.log(myCountry["neighbours"][0]); // russia



////////////////////////////////////////////////////////////////////
// Introduction to Objects

 const objectOfLasha = {
    firstname: "lasha",
    lastname: "demurashvili",
    age: 2022-1998,
    cars: ["Mercedes-Benz", "BMW", "Rolls Royce"]  // inner array
}
console.log(objectOfLasha.age)
// or another way
console.log(objectOfLasha["age"])

console.log(`${objectOfLasha.firstname} has ${objectOfLasha.cars.length} cars and his favorite one is ${objectOfLasha.cars[0]}`)

////////////////////////////////////////////////////////////////////
const objectOfLasha = {
    firstname: "lasha",
    lastname: "demurashvili",
    age: 2022-1998,
    cars: ["Mercedes-Benz", "BMW", "Rolls Royce"]  // inner array
}

const userPrompt = prompt("What is your object of interest about lasha? choose one : firstname, lastname, age, cars: "); // returne string  -so we need to use [] instead of . (dot )
if (objectOfLasha[userPrompt]){
    console.log(objectOfLasha[userPrompt]);
}else {
    console.log('Wrong request! Choose between firstname, lastname, age or cars');
}

// object sort by - abc - automatical
// add another key: value - pair
objectOfLasha.nation = "European";
objectOfLasha["Skincolor"] = "White";
console.log(objectOfLasha);

////////////////////////////////////////////////////////////////////
const myCountry= {
    country: "Georgia",
    capital: "Tbilisi",
    language: "georgian",
    population: 3.8,
    neighbours: ["Russia", "Armenia", "Azerbaijan", "Turkey"]
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbors countries and a capital called ${myCountry.capital}`)
// sample output==> Georgia has 3.8 million georgian-speaking people, 4 neighbors countries and a capital called Tbilisi

myCountry.population += 2;
console.log(myCountry.population)

myCountry["population"] -= 2;
console.log(myCountry.population)

////////////////////////////////////////////////////////////////////
// Object Methods

// we need >> this. << method for we have access inside this object
// and then we need to calling function like this - someObject.info()

const  lashaObject = {
    name: "Lasha",
    surname: "Demurashvili",
    city: "Tbilisi",
    birthYear: 1998,
    hasDriverLicence: true,
    cars: ["BMW", "Porsche", "Mclaren"],
    
    // default value is 2022
    calcAge: function(currentYear=2022){
        this.age = currentYear - this.birthYear;        //created new key: value - pair 
        return this.age;        
    },

    getInfo: function(){
        return `${this.name} is ${this.age}-years old and he has ${this.hasDriverLicence ? "a" : "no"} driver licence`;
    },
}
lashaObject.calcAge(2047);      //execute this function first for crating - key: value - of - age 
console.log(lashaObject.getInfo())      //calling getInfo() function 


////////////////////////////////////////////////////////////////////
const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],

    describe: function(){
        return `${this.country}'s capital is ${this.capital}`;
    },
    checkIsland: function(){
        this.isIsland = this.neighbours.length === 0 ? true : false; 
        return this.isIsland;
    },
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

////////////////////////////////////////////////////////////////////
// Coding Challenge #3

// example output
// "John's BMI (28.3) is higher than Mark's (23.9)!"

const Mark = {
    name : "Mark",
    surname: "Miller",
    mass: 78,
    height: 1.69,
}

const John = {
    name : "John",
    surname: "Smith",
    mass: 92,
    height: 1.95,
}

// function for check who has higer BMI
const checkCompare = function(johnBmi, markBmi){
    if(johnBmi > markBmi){
        return `John's BMI (${johnBmi}) is higher than Mark's (${bmiMark})!`;
    } else if(markBmi > johnBmi){
        return `Marks's BMI (${markBmi}) is higher than Jhon's (${johnBmi})!`;
    }else if (markBmi === johnBmi){
        return `Jhon's BMI ${johnBmi} is equal to Mark's BMI ${markBmi} `;
    }
}

// main function which calculate and return result //
const calcBMIobject  = {
    calcBmiMethod: function(mass, height){
        const bmi = mass/height**2;
        return bmi;
    },
    getSummary: function(){
        const bmiMark = this.calcBmiMethod(Mark.mass, Mark.height);
        const bmiJohn = this.calcBmiMethod(John.mass, John.height);
        // return `John's BMI (${bmiJohn}) is ${bmiJohn > bmiMark ? "higher" : "less"} than Mark's (${bmiMark})!`;      //not work when numbers are equal
        return checkCompare(bmiJohn, bmiMark);
    },
}
console.log(calcBMIobject.getSummary());

////////////////////////////////////////////////////////////////////
// for loop

for(let i = 1; i<=50;i++){
    console.log(`Voter number ${i}/50 is currently voting`);
}


////////////////////////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const years = [2000, 2005, 2001, 2006, 2007];
const ages = [];        //create an ampty array

for(let i = 0; i<years.length;i++){
    const age = 2037 - years[i];
    ages.push(age);     //every age added in - ages  - array
}
console.log(ages);

////////////////////////////////////////////////////////////////////
// constinue and break
const lashaArray = [
    "lasha",
    true,
    24,
    "tbilisi",
    "gori",
    "loma",
]

// continue --> stop current iteration and skip to the next 
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < lashaArray.length; i++) {
  if (typeof lashaArray[i] !== 'string') {
    continue;
  }
  console.log(lashaArray[i], "-->", typeof lashaArray[i]);
}

//  break
console.log('--- BREAK WHEN ITERATE NUMBERS  ---');
for(let i = 0;i<lashaArray.length;i++){
    if(typeof (lashaArray[i]) === "number"){
        break;
    }
    console.log(lashaArray[i]);
}

////////////////////////////////////////////////////////////////////
// Exercises
const calcPersentages = function(data){
    return data/7900*100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];
for(let i = 0; i<populations.length;i++){
    const calculatedData = calcPersentages(populations[i])
    percentages2.push(calculatedData);
    // percentages2[i] = calculatedData; // this two is the same
}

console.log(percentages2);

// using map method
const x = populations.map(x => calcPersentages(x))
console.log(x)

////////////////////////////////////////////////////////////////////
// multiplication table ----> need to review

var result = ' x   ';

function buff(val){
  var buff = '';
  var pad = 4 - val;
    while( pad-- > 0 )
            buff += ' ';            
  return buff;
}

for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']' + buff((j+'').length+2);
        } 
        else if(j == 0 && i>0){
          result += '[' + i + ']';
        } 
        else if(i>0 && j>0){
        result += buff((i*j+'').length ) + i*j;
        }
    }
    result += '\n'
}
console.log(result)


////////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
const lashaArray = [
    "lasha",
    true,
    24,
    "tbilisi",
    "gori",
    "loma",
]

for(let i = lashaArray.length-1 ;i>=0;i--){
    console.log(lashaArray[i]);
}


////////////////////////////////////////////////////////////////////
// 2 main section 
// 3 into main section
// 3 into into
for(let i = 0; i< 2; i++) {
    console.log(`Main section ${i}`);
    for(let j = 0; j< 3; j++) {      
        console.log(`\tInner section  ${j}`);
        for(let k = 0; k< 3; k++) {
            console.log(`\t\tInner inner section  ${k}`);
        }
    }
}

////////////////////////////////////////////////////////////////////
const listOfNeighbours = [[
    'Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia'
]];

for(let i = 0; i<listOfNeighbours.length;i++){
    if(listOfNeighbours[i].length > 1){
        for(let j = 0; j< listOfNeighbours[i].length;j++){
            console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
        }
    }else {
        console.log(`Neighbour: ${listOfNeighbours[i]}`);
    }
}

////////////////////////////////////////////////////////////////////
/// another way

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
    ];
 for (let i = 0; i < listOfNeighbours.length; i++){
    for (let y = 0; y < listOfNeighbours[i].length; y++){
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

////////////////////////////////////////////////////////////////////
// pyramid 
let height = 0;
let boxes = 100;
while(height <= boxes){
    height ++;
    boxes -= height;
    console.log("*".repeat(height));
}

////////////////////////////////////////////////////////////////////
// check odd even 
let i = 1;
while(i<10){
    if(i%2 === 0){
        console.log(`${i*2} - is even number`);
    }else {
        console.log(`${i*3} - is odd number`);
    }
    i ++;
}

////////////////////////////////////////////////////////////////////
// dice = 6
let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('Loop is about to end...');
    }
}

////////////////////////////////////////////////////////////////////
// dice = 6:6

let counter = 0
while(true){
    let dice_1 = Math.trunc(Math.random()*6)+1;
    let dice_2 = Math.trunc(Math.random()*6)+1;
    counter ++;
    if(dice_1 === 6 && dice_2 === 6){
        console.log(`You rolled a ${dice_1} : ${dice_2}`);
        console.log(`You neded ${counter} move for result ${dice_1} : ${dice_2}`)
        break;
    }else {
        console.log(`You rolled a ${dice_1} : ${dice_2}`);
    }
}

////////////////////////////////////////////////////////////////////
// chalange 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill* 0.15 : bill * 0.2;
}

for(let i = 0; i<bills.length;i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i]+tip);
}

console.log(bills, tips, totals)

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
// dice = 7:7

let counter = 0;
while (true) {
    let dice_1 = Math.trunc(Math.random() * 7) + 1;
    let dice_2 = Math.trunc(Math.random() * 7) + 1;
    counter++;
    if (dice_1 === 7 && dice_2 === 7) {
        console.log(`You rolled a ${dice_1} : ${dice_2}`);
        console.log(`You neded ${counter} move for result ${dice_1} : ${dice_2}`);
        break;
    } else {
        console.log(`You rolled a ${dice_1} : ${dice_2}`);
    }
}


*/
let x = 10
while (x-- > 0){
    console.log(x)
}


