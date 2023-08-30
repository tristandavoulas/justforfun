'use strict';

const btn = document.querySelector('.check');
const btn_again = document.querySelector('.again');
const input_field = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');

let genNewNumber = () => Math.round(Math.random() * 20);

function checkForMatch(guess, correctNumber) {
  guess != correctNumber 
    ? loseGame(message) 
    : winGame(message, correctNumber);
}

function winGame(message, correctNumber) {
  message.textContent = 'You got it!';
  number.textContent = correctNumber;
}

function loseGame(message) {
  message.textContent = 'Try again!';
}

function resetGame(message, score) {
  message.textContent = "Start guessing!";
  score.value = 0;
  
}

// function

let correctNumber = genNewNumber();

btn.addEventListener('click', function () {
  const guess = Number(input_field.value);

  if (!guess) {
    message.textContent = 'Enter a guess!';
  } else {
    checkForMatch(input_field.value, correctNumber);
  }
  console.log(`The number is ${correctNumber}`);
});
