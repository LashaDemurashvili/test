'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starter, main) {
        return [this.starterMenu[starter], this.mainMenu[main]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    ordDeliv: function({startIndex=0, mainIndex=0, time='77:77', address='@@'}){
        console.log(`Order recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ar ${time}`);
    },
};

const {fri:f='777', ...week} = restaurant.openingHours
console.log(week);
console.log(f);

const [a,b, ...others] =  restaurant.categories
console.log(a, b);
console.log(others);


const add = (...numbers) => {
    return numbers.reduce((x,y) => x+y)
}


const plus = (...numbers) => {
    let sum = 0;
    for(let i of numbers){
        sum+= i
    }
    return sum
}

const x = [12,2,5]
console.log(add(...x));
console.log(plus(12,2,5));

console.log(3 && false);

