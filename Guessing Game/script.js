'use strict';

const genNewNumber = () => Math.round(Math.random() * 19 + 1);

let game = {
  btn: document.querySelector('.check'),
  btn_again: document.querySelector('.again'),
  input_field: document.querySelector('.guess'),
  message: document.querySelector('.message'),
  number: document.querySelector('.number'),
  correctNumber: genNewNumber(),
  score: document.querySelector(".score"),
  highscore: document.querySelector('.highscore'),
  numOfTries: 1,

  getTextAsNumber: function (element) {
    return Number(element.textContent);
  },

  /* Wish I could use an arrow function here */
  checkForMatch: function () {
    this.input_field.value != this.correctNumber 
      ? this.loseGame()
      : this.winGame()
  },

  winGame: function () {
    this.message.textContent = 'You got it!';
    this.number.textContent = this.correctNumber;
    this.btn.classList.toggle("hidden");
    if (game.getTextAsNumber(this.score) < game.getTextAsNumber(this.highscore)) { 
      this.highscore.textContent = 0;
      this.updateScore(this.highscore, this.getTextAsNumber(this.score)); 
    } else {
      alert("Your score isn't low enough! Try again.");
    }
    this.btn_again.classList.toggle("hidden");
  },

  loseGame: function () {
    if (this.input_field.value < this.correctNumber) {
      this.message.textContent = "Higher...";
      console.log("Higher");
    } else {
      this.message.textContent = "Lower...";
      console.log("Lower");
    }
    this.updateScore(this.score, this.numOfTries);
    this.numOfTries++;

  },

  resetGame: function () {
    this.message.textContent = "Start guessing!";
    this.btn_again.classList.toggle("hidden");
    this.btn.classList.toggle("hidden");
    this.correctNumber = genNewNumber();
    this.input_field.value = "";
    this.score.textContent = 0;
    this.numOfTries = 0;
  },
  
  updateScore: function (element, amount) {
    element.textContent = (this.getTextAsNumber(element) + amount);
  },

}

// functionality
game.btn.addEventListener('click', function () {
  const guess = Number(game.input_field.value);

  if (!guess) {
    game.message.textContent = 'Enter a guess!';
  } else {
    game.checkForMatch();
  }
  console.log(`The number is ${game.correctNumber}`);
});

game.btn_again.addEventListener("click", function () {
  game.resetGame();
});