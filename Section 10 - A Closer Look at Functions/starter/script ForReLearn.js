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