'use strict';

/*
/////////////////////////////////////////////////////////////////////////////// Destructuring Arrays
const arr = [11,22,33,44]
const originalArr = [...arr]

let [x,y,z] = arr
console.log(`X is ${x}, Y is ${y}, Z is ${z}`);

// swap X and Y
console.log(`*** now X is Y | Y is X ***`);
[x,y] = [y,x]
console.log(`X is ${x}, Y is ${y}, Z is ${z}`);


// if we over the array actually length than - we get undefined value
const [a,b,c,d,e,f] = arr
console.log(a,b,c,d,e,f);

// shallow copy
// changes will appear in both of array
console.log('\nShallow copy, will change both array');
const badCopyArr = arr
badCopyArr.push(222)
console.log(arr);
console.log(badCopyArr);


console.log(`\nClone array using spread operator\nRemain original one`);
// deep clone arr
// changes will appear only new array
const goodCopyArr = [...originalArr] // using spread operator
goodCopyArr.push(777,666)
console.log(originalArr);
console.log(goodCopyArr);

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


/*
/////////////////////////////////////////////////////////////////////////////// Destructuring Objects
const obj = {
    username: 'lasha1998',
    password: 'pass123'
}

// get values from obj as new variables
// NOTE - new value name should be the same as in obj value, otherways we get an => undefined value
// undefined
const {username, password} = obj
console.log(username, password);

// now "user" and "pass" not found
// and we get default values
const {user:u='default_value', pass: p='default_value'} = obj
console.log(u, p);

// now "username" and "password" actually exist in the object, so we get values from obj, and not default values
// :new_name => we can change the name
const {username:us='default_value', password: pas='default_value'} = obj
console.log(us, pas);


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// The Spread Operator (...)
// spread operator
const add = (...numbers) => {
    return numbers.reduce((x, y) => x + y);
};

const arrOfNumbers = [11,9, 5]
const result = add(...arrOfNumbers, 100)
console.log(`Result is ${result}`);

// using rest operator
const testArr = [22,33,44,55,66,77]
// now for ...j it's rest operator, and for [...testArr] it's spread operator
const [i,k, ...j] = [...testArr]
console.log(i);
console.log(k);
console.log(j);

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// Rest Pattern and Parameters
const arr = [1, 2, 3, 4, 5, 6, 77];
// now we use rest operator which should be always last one otherways we get ann error
// SyntaxError: Rest element must be last element

const [x, y, ...others] = arr;
console.log(x);
console.log(y);
console.log(others);
console.log(...others); // using spread operators, which access we to get individual parameters

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// Short Circuiting (&& and ||)
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

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// The Nullish Coalescing Operator (??)
const restaurant = {
    name: 'test'
}

restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
restaurant.numGuests = 0
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// Logical Assignment Operators
// ||=
// ??=

const rest1 = {
    name: 'La Octagone',
    owner: 'lasha familia',
    millionaire: false,
    yacht: 0
};

const rest2 = {
    name: 'Ta Garador',
    island: 'apenin',
    staff: 22,
    director: 'adriano chelentano',
    numGuest: 20,
}
console.log(rest1);
console.log(rest2);

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10

// so if numGuest founded in rest1, that value stay as it is,
// if not found assign to the new variable
rest1.numGuest ||= 37;
rest2.numGuest ||= 10;

// if found(stay as it is) OR =(assign new variable) 'lashka'
rest1.name ||= 'lashka' // now updated because name exist in 'rest1' object
rest1.dog ||= 'loma'

// so those values will change because
// false and 0 were in this object
rest1.millionaire ||= 3
rest1.yacht ||= 1

console.log(`\nAfter changes\n`);
console.log(rest1);
console.log(rest2);

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


// AND assignment operator
const lashaObj = {
    name:'lasha',
    age:25
}

// created new key value pair - ufc: undefined
lashaObj.name = lashaObj.name && 'Mcgregor'  // found and updated
lashaObj.ufc = lashaObj.ufc && 'Jons'  // not found and created ONLY key

// avoid undefined value
lashaObj.boxing &&= 'mayweather'  // not found and not updated
lashaObj.age &&= '007'  // found and updated

console.log(lashaObj);

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// --------------------------------------------------------------------------------------------------------------------
/*
/////////////////////////////////////////////////////////////////////////////// // Looping Arrays: The for-of Loop
const myArray = ['lasha', 'demurashvili', 25, 'Dog']
for (let item of myArray) {
    // console.log(item);
}

///////////////////////////////////////////////////////////////////////////////// entries()
// console.log(...myArray.entries());

// 1 option
// for (let item of myArray.entries()){
//     console.log(`${item[0]+1} - ${item[1]}`);
// }

// 2 option better  using destruction array method ==> [item, element] of array.entries()
for (let [i, el] of myArray.entries()){
    console.log(`${i+1} - ${el}`);
}
//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// // Enhanced Object Literals
// create object and insert into => 'myObj'
const favoriteAnimals = {
    1: 'cheetah',
    2: 'lion',
    3: 'tiger'
}

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

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/






/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/




/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/




/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/