// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (tempsArray) {
  let maxTemp = tempsArray[0]; //  for example
  let minTemp = tempsArray[0]; //  for example

  for (let i = 0; i < tempsArray.length; i++) {
    let curTemp = tempsArray[i]; //current temperature
    if (typeof curTemp === "number") {
      if (curTemp > maxTemp) maxTemp = curTemp;
      if (curTemp < minTemp) minTemp = curTemp;
    } else {
      continue;
    }
  }
  console.log(`Max temperature: ${maxTemp}\nMin temperature: ${minTemp}`);
  return `Amplitude: ${maxTemp - minTemp}`; //amplitude (max-min)
};

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROBLEM 1: BETTER WAY
const calcTempAmplitude = (temperatureArray) => {
    let mx = 0;
    let mn = 0;

    for(let item of temperatureArray){
        if(typeof(item) === 'number'){
            if (item>mx){mx=item}
            if (item<mn){mn=item}
        }
    }
    console.log(`Max temperature: ${mx}\nMin temperature: ${mn}`);
    return `Amplitude: ${mx - mn}`;
}

const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcTempAmplitudeNew = function (temps_1, temps_2) {
  const temps = temps_1.concat(temps_2); // concatenate two array

  return calcTempAmplitude(temps); // call first function
};
const array_1 = [3, -2, -6, -1];
const array_2 = [9, 13, 17, 15, 14, 9, 5];

console.log(calcTempAmplitudeNew(array_1, array_2));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    value: Number(prompt("Degrees celsius:")),
  };
  const kelvin = measurement.value + 273;
  return `${measurement.value}°C is: ${kelvin}K`;
};
console.log(measureKelvin());
console.warn("asa");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// sample output
//  "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days"

// datas
const temps_1 = [17, 21, 23];
const temps_2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const result = `${arr[i]}ºC in ${i + 1} days ... `;
    str += result;
  }
  console.log("...", str);
};

printForecast(temps_1);
printForecast(temps_2);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
BETTER WAY

const temps_1 = [17, 21, 23];
const temps_2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let result;
    let str = "";
    for (let item in arr) {
        let i = Number(item);  // covert to --> Number

        let r = `${arr[i]}ºC in ${i + 1} days`

        //use if else block that detect which iteration is current
        if(i === 0){
            result = `... ${r} | `;
        } else if (i === arr.length - 1){
             result = `${r} |`;
         } else {
            result = `${r} ... | `;
        }
        str += result;
    }
    console.log(str);
};
const newConcatArray = temps_1.concat(temps_2)
printForecast(newConcatArray);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Calculator - using switch
console.log("Welcome to the JS calculator");

const firstNum = Number(prompt("Please enter the first number: "));
console.log("[ + ] Add \n[ - ] Subtract \n[ * ] Multiplication \n[ / ] Divide");
const operator = prompt("Choose the operator: ");

const secondNum = Number(prompt("Please enter the second number: "));

let result = 0;
switch (operator) {
  case "+":
    result = firstNum + secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
  case "-":
    result = firstNum - secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
  case "*":
    result = firstNum * secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
  case "/":
    result = firstNum / secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
  default:
    console.log("Wrong input !!!");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// if input is digit

// The regular expression `/^\d+$/` is used to check if the input consists only of digits.
// The `^\d+$` pattern matches the start of the string (`^`), followed by one or more digits (`\d+`),
// and then the end of the string (`$`).

const input = prompt('Enter a value:');
const isDigit = /^\d+$/.test(input);

if (isDigit) {
  console.log('The input consists only of digits.');
} else {
  console.log('The input contains non-digit characters.');
}


*/
