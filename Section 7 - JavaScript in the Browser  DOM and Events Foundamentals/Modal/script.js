'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// selected all which has same classes
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

//we can  iterate like a Array
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openFunction);
}

// close button
// we don't need to calling the function like this --> closeFunction (); it's automaticaly calling
btnCloseModal.addEventListener('click', closeFunction);
overlay.addEventListener('click', closeFunction);

// handle key - Esc
// no matter what we assign to function in this case: function (e) {console.log(e)}
// it's returns key which we pressed actually
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeFunction(); // we need function with execution on this case --> function();
  }
});
