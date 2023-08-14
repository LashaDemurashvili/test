/*
///////////////////////////////////////////////////////////////////////////////// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('slice');
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// shallow copy
console.log(arr.slice());
console.log([...arr]);
const arrCopy = [...arr]

// splice - delete from original
console.log('\nsplice');
// SPLICE
arr.splice(-1); // deleted -1 position
console.log(arr);
arr.splice(1, 2);
console.log(arr);
console.log(arrCopy.splice(0, 3)); // log but, delete from original also,
console.log(`Array after log splice - ${arrCopy}`);


console.log('\nreverse');
// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// remain original one after log
console.log([...arr2].reverse(), 'reverse'); // original arr2 doesn't modify
console.log(arr2, 'original');

console.log(arr2.reverse());    // original arr2 does modify now, after log also
console.log(arr2);



console.log('\nconcat');
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);  // using spread operator


console.log('\njoin');
// JOIN
console.log(letters.join(' - '));
console.log(letters);


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// // The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// at method works also with string
console.log('Lasha'.at(0));
console.log('Lasha'.at(-1));



//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// // Looping Arrays: forEach

//////////////////////////// NOTE ////////////////////////////
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});


/////////////////////////////////////////// second approach
// movements.forEach(func);
// function func(mov, i, arr){
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//     }
// }


// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// // forEach With Maps and Sets
// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
    // console.log(_);
});

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// // The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

////////////// using normal call back function
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

///////////////// using 'forof' method
// const movementsUSDfor = [];
// for (const mov of movements) {
//     movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);


////////////// using arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
            mov
        )}`
);
console.log(movementsDescriptions);

//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// side effects, map & forEach
// Data

// we have username
const account0 = {
    owner: 'Lasha Demurashvili',
    movements: [100, 250, -270, 30, -150, -1130, -270, -100],
    username: 'ldem',
    interestRate: 1.2, // %
    pin: 3333,
};


// we don't have username
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};


const accounts = [account0, account1];


// side effects, 'do some work without returning anything.'
// using forEach, because we need to modified current object
const createUserName = function (accs) {
    accs.forEach(function (acc) {
        // when we use ||= operator, when 'username' exist, it's stay as it is, other-ways crete new one
        acc.username ||= acc.owner.toLowerCase().split(' ').map(word => word[0]).join('');
    });
};

createUserName(accounts);

console.log(account0);  // remain original 'username'
console.log(account1);  // create new username


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////////////////////////////////// The filter Method
const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
    return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/













/////////////////

// template

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww_CODE_TITLE
CODE_HERE


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/









