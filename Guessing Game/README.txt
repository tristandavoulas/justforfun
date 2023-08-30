This program is a simple guessing game

To play, simply enter a number in the box and click guess. For every incorrect guess, your score will increase. The amount your score will increase by will increase by 1 for every incorrect guess. For example, your first incorrect guess adds 1 point, your second adds 2 points, your third adds 3, and so on.

This game is like golf - a lower score is better. If you guess the number correctly and your score is less than the current high score, your score should replace the old high score.

When the game ends, the Check! button should disappear and the Again! button should appear in the top left corner. Clicking Again! should reset the game to it’s default state.

For the tutorial we were not asked to write this program in an object-oriented fashion however I felt like it might simplify the code a bit, as I thought referring to properties with dot notation would be easier than having to write out the long code for selecting an HTML element. (document.querySelector(“.score”)) becomes this.score. It may have been better to just assign those selectors to variables instead, since I would be able to use arrow functions and there is really no reason that all of this code needs to exist inside a “Game” object.

Let me know how you would have approached this problem and if there are any ways I could write this code in a more succinct and readable fashion. 

My own thoughts/questions:

- The score element could have just been hard coded as 0 from the start

- genNewNumber() could have just been included in the object, but I wanted to write an arrow function

- I had separate properties within the game object - one with a reference to each HTML element, and one for each of their values as a number, so I could use it in calculations. I realized that was unnecessary and created a function getTextAsNumber(element) that simply returned the textContent of the element argument, which is always an HTML element. 

- Would it be better to write a function to check whether the player’s current score is lower than the old high score (see line 31) or keep the if/else statement

- For readability sake, should I have functions for actions as simple as toggling classes? (See line 29, 34)

- Should I use ternary expression for the if/else at line 40?

- Should I have created properties for not only the HTML elements, but also for the textContent selectors? I think this would make functions like winGame() a little more readable
