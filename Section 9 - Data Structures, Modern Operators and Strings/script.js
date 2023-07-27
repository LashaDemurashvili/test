'use strict';

// create object and insert into => 'myObj'
const favoriteAnimals = {
    1: 'cheetah',
    2: 'lion',
    3: 'tiger'
}

// Enhanced Object Literals
const myObj = {
    name:'lasha',
    surname: 'demurashvili',
    age: 25,

    // insert obj without any declaration
    favoriteAnimals,

    // new function style in ES6
    // capitalizeFirstLetter
    cFL(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // new function style in ES6
    calcAge(){
        console.log(`${this.cFL(this.name)} ${this.cFL(this.surname)} is ${this.age} years old.`);
    },
}


console.log(myObj);
myObj.calcAge()