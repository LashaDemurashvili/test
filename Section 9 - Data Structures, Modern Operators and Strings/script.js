/*
// destructuring arrays
// swap
let [first, sec] = restaurant.categories;
console.log(first, sec);
[first, sec] = [sec, first];
console.log(first, sec);
// now first is equal to second and sec to first

const [a, b] = restaurant.order(0, 1); // order - is function => returned value a = 0, b = 1
console.log(`a: ${a} \nb: ${b}`);


//////////////////////////////////////////////////////////
// nested & default value
const arr = [1, , 3, [77, 88, 99]];
const [a, b = 7, c, [d, k, o]] = arr;

console.log(a, b, c);
console.log(d, k, o);

//////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////




*/

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

  order: function (first, second) {
    return [this.starterMenu[first], this.mainMenu[second]];
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
};

// Destructuring Object
const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu);

// change the names
const { name: newName, openingHours: newHours, mainMenu: newMenu } = restaurant;

console.log(newName, newHours, newMenu);
