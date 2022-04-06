'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnsOpenModal1 = document.querySelectorAll('.show-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnsOpenModal2 = document.querySelectorAll('.show-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const btnsOpenModal3 = document.querySelectorAll('.show-modal3');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//MODAL WINDOW 1
for (let i = 0; i < btnsOpenModal1.length; i++)
  btnsOpenModal1[i].addEventListener('click', openModal);

btnCloseModal1.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//MODAL WINDOW 2
for (let i = 0; i < btnsOpenModal2.length; i++)
  btnsOpenModal2[i].addEventListener('click', openModal);

btnCloseModal2.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//MODAL WINDOW 3
for (let i = 0; i < btnsOpenModal3.length; i++)
  btnsOpenModal3[i].addEventListener('click', openModal);

btnCloseModal3.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});