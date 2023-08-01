'use strict';

//////////////////////////////////////
// String Methods Practice

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

let flightsArray = flights.split('+');

const func = (someText) => {
    return someText.slice(0, 3).toUpperCase()
}

for (let item of flightsArray) {
    const splitSem = item.split(';');

    let [type, from, to, time] = [...splitSem];
    type = type.replaceAll('_', ' ').trim()

    const result = `${type.startsWith('Delayed') ? '🔴' : ' '.repeat(10)} ${type} from ${func(from)} to ${func(to)} (${time.replace(':', 'h')})`

    console.log(result.padStart(45, ' '));
}
