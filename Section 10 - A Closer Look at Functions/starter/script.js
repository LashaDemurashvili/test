'use strict';

// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    plane: 'Boeing-',
    bookings: [],
    // book function(){}
    book(flightNum, name, plane) {
        console.log(`${name} - booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}, to the ${this.plane} ${plane} !`);
    }
};


// lufthansa.book(239, 'Lasha Demurashvili', '777')

