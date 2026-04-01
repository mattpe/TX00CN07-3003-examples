'use strict';

console.log('Hello from separate js file!');

const number1 = 5;

let number2;
console.log('value of number2 is', number2);
number2 = 10;
console.log('type of number2 variable is', typeof number2);


let result = number1 + number2;

// print to developer tools console
console.log('result is ' + result);

/*
 print using a browser popup window
 this is a multiline comment
*/
//alert('Hello popup!');

// printing "inside" the html document
// get a reference to p element with id "output"
const outputParagraph = document.querySelector('#output');
// use reference to update the content of p element
outputParagraph.textContent = 'Hello from JS file! Result of the ' +
                              'calculation is ' + result;


// Interactive calculator (reading user input)

const userInput1 = prompt('Give me a number:');
console.log('userInput1 value', userInput1, typeof userInput1);
const userInput2 = prompt('Give me another number:');

// re-using result variable that is defined earlier in the script
// convert string values to floating point (decimal) numbers
// before calculating
result = parseFloat(userInput1) + parseFloat(userInput2);
console.log('result:', result, typeof result);

// using template literals with backtick
outputParagraph.textContent = `Hello from JS file! Result of the
                               calculation is ${result}`;

let number = 0;
number++;
// is same as
number = number + 1;
console.log(number);

// example of random values: get an integer value between 1 and 6
const randomNumber = Math.ceil(Math.random() * 6);
console.log('random number', randomNumber);
