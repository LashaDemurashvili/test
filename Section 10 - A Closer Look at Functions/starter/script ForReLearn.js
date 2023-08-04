'use strict';


/*
/////////////////////////////////////////////////////////////////////////////// default parameters
const bookings = [];

const createBooking = function (
    flightNum = 11,
    numPassengers = flightNum * 22,
    price = 33) {
    // es5 method for default parameters, OR assignment

    // flightNum = flightNum || 10;     // this two is the same
    // flightNum ||= 10;                   // this two is the same
    // numPassengers ||= 15;
    // price ||= 20;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking);
    bookings.push(booking); // push to the array
};

createBooking()                       // not give parameters, then using default parameters
createBooking(1,1,1)                // give new parameters
createBooking(1, undefined, 2)    //undefined -> means same as we don't give parameter, so if there is default parameter then call it

console.log(bookings)  // log array


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
///////////////////////////////////////////////////////////////////////////////// How Passing Arguments Works: Values vs. Reference
const flight = 'BOEING777';
const lasha = {
    name: 'Lasha Demurashvili',
    passport: 284007,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 284007) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};

checkIn(flight, lasha);

// after function invoke passenger.name in lasha object will be changed
console.log(flight);
console.log(lasha);

const changePassport = function (person) {
    person.passport = Math.trunc(Math.random() * 9999999999)
}
// after that lasha has new passport number
changePassport(lasha)
console.log(`New passport is ${lasha.passport}`)

// and if we check, see that new password don't match
checkIn(flight, lasha)


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// counter
const counter = {
    value: 22,
    inc() {
        this.value++;
    }
}

// log first declared value
console.log(counter.value)

// update original value
for (let i = 0; i < 15; i++) {
    counter.inc()
}

// log changed value
console.log(typeof counter.value)
console.log(counter.value)

// so after we call function, in the original object change value to new one


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// Functions Accepting Callback Functions
// using regex, and g for global
// replace all whitespace with ''
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}


const upperFirstChar = function (str) {
    // create empty array for capitalize string
    const newArr = []

    const [...others] = str.trim().split(' ')  // array
    for (let item of others) {

        // avoid empty string
        if (item !== '') {
            newArr.push(item.replace(item[0], item[0].toUpperCase()))
        }
    }
    // console.log(...newArr)
    return newArr.join(' ');
}

console.log('\n')
// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);   // returned function name
    console.log('\n')
};

transformer('hello I love javaScript, but i also like python', upperFirstWord)
transformer('hello I love javaScript, but i also like python', upperFirstChar)
transformer('hello I love javaScript, but i also like python', oneWord)


// let counter = 0;
// document.body.addEventListener('click', function (){
//     console.log(`Click ${counter++}`)
// })


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww_CODE_TITLE
CODE_HERE


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/




















// template

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww_CODE_TITLE
CODE_HERE


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/