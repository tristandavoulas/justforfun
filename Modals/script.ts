'use strict';

const modal: Element = document.querySelector(".modal");
const overlay: Element = document.querySelector(".overlay");
const btnCloseModal: Element = document.querySelector(".close-modal");
const btnsOpenModal: NodeList = document.querySelectorAll(".show-modal");

function toggleHidden(...args) {
  args.forEach(function (el: Element) {
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