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
//////////////////////////////////////////// Short Circuiting - && || operators
// Section -  Short Circuiting
// and && operator
// return first false
console.log(2 && null && false && 8);
// last value if all are truth
console.log(2 && 1 && true && 777);

// or || operator
// return first truth value
console.log(0 || 2 || 3 || 0 || 7);

// last value if all are false
console.log(0 || false || 0 || 0 || null);

