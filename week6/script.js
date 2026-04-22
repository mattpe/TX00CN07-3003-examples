'use strict';

// get reference to specific element using id selector
const outputP = document.querySelector('#output-text');
// use variable to refer the element in DOM
outputP.textContent = 'Text updated by JS code!';

// get references to all p element in document (array like)
const pElements = document.querySelectorAll('p');
console.log(pElements);
// choose the second item (p) in array using index number and
// change the color by adding style attribute to html element
pElements[1].style = 'color: red';
// same thing by using setAttribute method
//pElements[1].setAttribute('style', 'color: red');



// print contents of an array to document
const texts = ['first p', 'second paragraph', 'third paragraph'];
// get ref to <main> element
const mainElement = document.querySelector('main');
// creating new elements and appending them to <main>
for (let i = 0; i < texts.length; i++) {
  const newP = document.createElement('p');
  newP.textContent = `${i+1}: ${texts[i]} created by JS!`;
  //newP.textContent = i+1 + ': ' + texts[i] + ' created by JS!';
  mainElement.appendChild(newP);
  // add class 'bold' to all new p elements
  newP.classList.add('bold');
}

// any html elements/structures can be written to DOM using .innerHTML
//mainElement.innerHTML = '<p>Main element content replaced with this</p>';

// Events

// get a reference to a button
const clearButton = document.querySelector('#clear');
//console.log(clearButton);
clearButton.addEventListener('click', function() {
  // this anonymous function gets called when click event is catched for clearButton
  console.log('clear button clicked');
  mainElement.innerHTML = '<p>Main element content replaced with this!</p>';
});

// catch a click event for whole header section
const header = document.querySelector('header');
function headerClick(event) {
  console.log('header section clicked, event object:', event);
  // check if the click was on the left side of header
  if (event.clientX < 100) {
    console.log('you clicked left side of header!');
  }
}
header.addEventListener('click', headerClick);

// Handling form input

const form = document.querySelector('form');
const textInput = document.querySelector('input[name=input]');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('form submitted');
  const userInput = textInput.value;
  console.log('user input:', userInput);
  // do something with the user input
  // clear the input field:
  textInput.value = '';
});