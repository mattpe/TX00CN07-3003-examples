'use strict';

console.log('script loaded and running!');

// read input as a string
let age = prompt('Enter your age:');
// convert it to number
age = parseInt(age);

console.log('age value:', age, 'type of value:', typeof age);

// test if age is a not a real number (NaN)
// e.g. isNaN(30) evaluates to false and isNaN(NaN) evaluates to true
if (isNaN(age)) {
  console.log('not a numeric value');
} else if (age < 0 || age > 120) {
  // if age is less than 0 OR age is greater than 120, condition evaluates to true
  console.log('invalid age value');
} else {
  if (age == 30) {
    console.log('you are thirty years old');
  } else if (age < 30) {
    console.log('less than 30');
  } else if (age > 30) {
    console.log('greater than 30');
  }

  // other if using the same value of the variable
  if (age != 30) {
    console.log('not thirty years old.');
  }
}

// While loop

// name guessing game
let guess = prompt('Try to guess my name:');
const correctAnswer = 'Matti';
let guessCount = 1;
const maxGuessCount = 5;
let playerWon = true;

// prompt new input if and as long as the guess IS NOT equal to correct answer
while (guess != correctAnswer) {
  console.log('Your guess was wrong!');
  guess = prompt('Try to guess my name:');
  guessCount++; // the same as: guessCount = guessCount + 1;
  if (guessCount > maxGuessCount) {
    console.log('Maximum amount of guesses exceeded. No win this time!');
    playerWon = false;
    break;
  }
}

if (playerWon) {
  console.log('Your guess was correct!');
  console.log('You needed ' + guessCount + ' guesses!');
}

// for loops (we will continue next week)

for (let i = 10; i > -10; i -= 2) {
    console.log('value of i: ', i);
}
