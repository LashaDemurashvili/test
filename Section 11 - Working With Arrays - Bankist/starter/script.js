'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account0 = {
    owner: 'Lasha Demurashvili',
    movements: [10000, 250, -270, 30, -150, -1130, -270, -100],
    username: 'ldem',
    interestRate: 1.2, // %
    pin: 3,
};

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account0, account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const displayMovements = function (acc) {
    containerMovements.innerHTML = '';  // for clear old html data

    acc.movements.forEach(function (mov, index) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// displayMovements(account0.movements);


// side effects, 'do some work without returning anything.'
// using forEach, because we need to modified current object
const createUserName = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(word => word[0]).join('');
    });
};

createUserName(accounts);

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(x => x > 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = `${incomes}💶`;

    const out = acc.movements
        .filter(x => x < 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumOut.textContent = `${Math.abs(out)}💶`;

    const interest = acc.movements
        .filter(x => x > 0)
        .map(deposits => (deposits * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            return int >= 1;
        })
        .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${interest}💶`;

};
// calcDisplaySummary(account0);


const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
}


let currentAccount;

// submit button
btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    // using preventDefault() to STOP auto refresh page(when we use 'form' in html, page automatically refreshed)
    // (when we click ENTER, this same as click button, in 'form')
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    // console.log(currentAccount);

    // optional chaining method
    // currentAccount? - this mean, if currentAccount exist
    if (currentAccount?.pin === Number(inputLoginPin.value)) {

        labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0].toUpperCase()}`;

        containerApp.style.opacity = 100;

        // clear form
        inputLoginUsername.value = inputLoginPin.value = '';

        updateUI(currentAccount)

    } else {
        alert("Wrong username or password");
    }
});


btnTransfer.addEventListener('click', function(e){
    e.preventDefault()

    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value)

    if (amount > 0 && amount <= currentAccount.balance && receiverAccount && receiverAccount.username !== currentAccount.username){
        console.log(receiverAccount);
    }


    updateUI(currentAccount)

})


/*



 */