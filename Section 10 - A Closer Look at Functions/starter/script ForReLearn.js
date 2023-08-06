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
//////////////////////////////////////////////////////////////////////////////// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting}; ${name}`)
    }
}

// 1 approach
const x = greet('Hello')
x('Lasha')

// 2 approach
greet('Hey')('Loma')


// using arrow functions
const greetArrow = (greeting) => {
    return (name) => {
        console.log(`${greeting}, ${name}`)
    }
}

console.log('')

// 1 approach
const salami = greetArrow('Salami')
salami('David Beckhem')

// 2 approach
greetArrow('Hi')("lasha")


// another way to use arrow function
console.log('')
const greetArr = greeting => name => {
    console.log(`${greeting}, ${name}`)
}

greetArr('zd')('jason statham')


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    plane: 'Boeing-',
    bookings: [],
    // book function(){}
    book(flightNum, name, plane) {
        console.log(`${name} - booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}, to the ${this.plane}${plane} !`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name}) // or just name: name
    },
};

// call method
lufthansa.book(239, 'Lasha Demurashvili', '777')
lufthansa.book(222, 'Jason Statham', '639')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    plane: 'Airbus-',
    bookings: [],
};


// so when we need same method
// create new variable - book - and store in method from ==> lufthansa.book,
// but this. keyword no longer work in here
const book = lufthansa.book; // of course without call this function () right here

// Does NOT work
// book(24, 'Jack bauer', 24)

book.call(eurowings, 24, 'Jack bauer', 24)
book.call(eurowings, 23, 'Jack bauer11', 23)
console.log(eurowings.bookings)

// original one is preserved NOT MODIFIED
console.log(lufthansa.bookings)

const geo = {
    airline: 'Geo Air Lines',
    iataCode: 'GE',
    plane: 'Geobus-',
    bookings: [],
}

// using array, and then spread operator
const personOne = [12, 'person one', 41]
const personTwo = [13, 'person two', 41]
book.call(geo, ...personOne)
book.call(geo, ...personTwo)

// this one is also different one from the original one,
console.log(geo.bookings)


// apply method
const flightData = [583, 'George Cooper', 55];

// this two is the same,  ==>  book.apply(geo, flightData); & book.call(geo, ...flightData);
// in modern JS we no longer use apply,
// instead of we just use ==> call and then ==> ...spread operator

// book.apply(geo, flightData);
book.call(geo, ...flightData);
console.log(geo.bookings);

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// The bind Method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    plane: 'Boeing-',
    bookings: [],
    // book function(){}
    book(flightNum, name, plane) {
        console.log(`${name} - booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}, to the ${this.plane}${plane} !`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name}) // or just name: name
    },
};

const book = lufthansa.book;

const geo = {
    airline: 'Geo Air Lines',
    iataCode: 'GE',
    plane: 'Geobus-',
    bookings: [],
}

// this two is the same, but we just use --> book <-- constant what we declared above
// const bookGeo = lufthansa.book.bind(geo)
const bookGeo = book.bind(geo)

bookGeo(1, 'aaa', 11)
bookGeo(2, 'bbb', 22)
bookGeo(3, 'ccc', 33)

console.log(geo.bookings)

// create new object
const rus = {
    airline: 'Rus Air Lines',
    iataCode: 'RU',
    plane: 'MoscowAir-',
    bookings: [],
}

const bookRus = lufthansa.book.bind(rus)

bookRus(11, 'rus1', 12)
bookRus(11, 'rus2', 13)
bookRus(11, 'rus3', 14)

console.log(rus.bookings)


// create new object
const uk = {
    airline: 'Ukraine Air Lines',
    iataCode: 'UK',
    plane: 'UkraineAir-',
    bookings: [],
}

// using bind method, and default parameters
const bookUk = lufthansa.book.bind(uk, 66, 66) // so first two parameters is default, then what passed we use only first one, AS LAST
bookUk(11, 22, 33) // we only use first parameter, as last one, because first and second parameter are defaults,
bookUk(11, 22)
bookUk(11)
// bookUk()  // we got undefined

console.log(uk.bookings)

//////////////////////////////////////////////////////////// NOTE: bind method return new function

lufthansa.planeNum = 300;
lufthansa.buyPlane = function(){
    console.log(this.buyPlane)

    this.planeNum++;
    console.log(this.planeNum)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// lufthansa.buyPlane.bind(lufthansa)
// or
// function (){lufthansa.buyPlane()}


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/



/*
/////////////////////////////////////////////////////////////////////////////// bind
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