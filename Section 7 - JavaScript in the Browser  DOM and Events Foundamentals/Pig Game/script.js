'use strict';

// select elements wit two different methods
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //we dont need - #
const diceEl = document.querySelector('.dice');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// function for switch to active player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScoreNew = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active'); //toggle  - switch on/off
  player1.classList.toggle('player--active');
};
let scores, currentScoreNew, activePlayer, plaing;

// initialiation
const init = function () {
  // create array - we can to change values inside
  scores = [0, 0];
  currentScoreNew = 0;
  activePlayer = 0;
  plaing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEl.classList.add('hidden'); //  before start dice should be hidden
  player0.classList.remove('player--winner'); // work only which has actually this class
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

// restat game
init();

// rolling dice
btnRoll.addEventListener('click', function () {
  if (plaing) {
    // 1.random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    // 2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3.check after rolled
    if (dice !== 1) {
      // 1. add to the current score
      currentScoreNew += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScoreNew;
    } else {
      // 2. switch next player
      switchPlayer();
    }
  }
});

// hold button
btnHold.addEventListener('click', function () {
  if (plaing) {
    // 1.add current socre to the array according to the active player
    scores[activePlayer] += currentScoreNew;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //  2.check if player's score is grater or equal to 100 - if True --> winner <-- and end game
    if (scores[activePlayer] >= 100) {
      plaing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      // hide buttons when win
      document.querySelector('.dice').classList.add('hidden');
      // document.querySelector('.btn--roll').classList.add('hidden');
      // document.querySelector('.btn--hold').classList.add('hidden');
    } else {
      // 3. switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
