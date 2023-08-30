'use strict';

const genNewNumber = () => Math.round(Math.random() * 20);

let game = {
  btn : document.querySelector('.check'),
  btn_again: document.querySelector('.again'),
  input_field: document.querySelector('.guess'),
  message: document.querySelector('.message'),
  number: document.querySelector('.number'),
  correctNumber: genNewNumber(),
  score: document.querySelector('.score'),
  gameInProgress: true,

  checkForMatch: function () {
    console.log(this.input_field.value, this.correctNumber);
    this.input_field.value != this.correctNumber 
      ? this.loseGame()
      : this.winGame()
  },

  winGame: function () {
    this.message.textContent = 'You got it!';
    this.number.textContent = this.correctNumber;
  },

  loseGame: function () {
    this.message.textContent = 'Try again!';
  },

  resetGame: function () {
    this.message.textContent = "Start guessing!";
    this.score.value = 0;
  },
}
// function

game.btn.addEventListener('click', function () {
  const guess = Number(game.input_field.value);

  if (!guess) {
    game.message.textContent = 'Enter a guess!';
  } else {
    game.checkForMatch();
  }
  console.log(`The number is ${game.correctNumber}`);
});
