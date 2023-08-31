'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function toggleHidden(...args) {
  args.forEach(function (el) {
    el.classList.toggle("hidden");
  });
}

btnsOpenModal.forEach(function (el) {
  el.addEventListener("click", function () {
    toggleHidden(modal, overlay);
  });
});

btnCloseModal.addEventListener("click", function () {
  toggleHidden(modal, overlay);
});

overlay.addEventListener("click", function () {
  toggleHidden(modal, overlay);
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    toggleHidden(modal, overlay);
});