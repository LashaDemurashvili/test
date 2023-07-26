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


const rest1 = {
    name: 'La Octagone',
    owner: 'lasha familia',
    millionaire: false,
    yacht: 0
};

const rest2 = {
    name: 'Ta Garador',
    numGuest: 20,
}
console.log(rest1);
console.log(rest2);

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10

// so if numGuest founded in rest1, that value stay as it is, if not found assign to the new variable
rest1.numGuest ||= 37;
rest2.numGuest ||= 10;

// if found(stay as it is) OR =(assign new variable) 'lashka'
rest1.name ||= 'lashka'
rest1.dog ||= 'loma'

// so those values will change because
// false and 0 were in this object
rest1.millionaire ||= 3
rest1.yacht ||= 1

console.log(rest1);

// to avoid 'false' and '0' cases bug we use nullish operator
// nullish assignment operator (null or undefined)
// ??=
const myObj = {
    name:'lasha',
    bike: false,
    cat: 0
}

console.log(myObj);

myObj.name ??= 'new_lasha'
myObj.bike ??= 'Harley Davidson - Fat Boy'
myObj.cat ??= 'little cat'

// now values will not change
console.log(myObj);