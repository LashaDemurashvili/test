'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// selected all which has same classes -> this is actually array now
const btnsShowModal = document.querySelectorAll('.show-modal');

// open function
const openFunction = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
// close function
const closeFunction = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let btn of btnsShowModal) {
    btn.addEventListener('click', openFunction); // without calling function
}

// create array for close
let btnsCloseArr = [btnCloseModal, overlay];

// close buttons, iterate over array
for (let item of btnsCloseArr) {
    item.addEventListener('click', closeFunction);
}

// handle key - Esc
// no matter what we assign to function in this case: function (e) {console.log(e)}
// it's returns key which we pressed actually
document.addEventListener('keydown', function (e) {
    // console.log(e);
    // console.log(e.key);

    e.key === 'Escape' && !modal.classList.contains('hidden') ? closeFunction() : null;
});
