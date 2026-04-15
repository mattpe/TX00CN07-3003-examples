'use strict';

// for loops

for (let i = 10; i > -10; i -= 2) {
  console.log('value of i: ', i);
}

const values = [5, 8, -14, 'something', true];
console.log('values array', values);

// log a specific value (second) in array using index number
//console.log(values[1]);

// check the size of the array
console.log('array size:', values.length);

// print all values using a for loop
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// update the values or add more values to it
values[1] = 'this was number 8';
values[5] = 'this is sixth value';
//values[9] = 'this is tenth value';

// better way to add new values using push()
values.push('this is the new last value');

// other version of for loop: for-of
for (const value of values) {
  console.log(value);
}

// search array for a value -14
const valueFound = values.includes(-14);
console.log('value was found:', valueFound);

// object literals for storing data (similar to dictionaries in Python)
const person = {
  name: 'Jack',
  age: 20,
};

// two ways to refer the values of object's properties:
console.log(person.name + ' is ' + person['age'] + ' years old.');

// objects and arrays can be nested freely
values.push(person);
console.log(values);

// array of persons
const persons = [];
// add person object to array
persons.push(person);
// add more people
persons.push({name: 'Jill', age: 55});
persons.push({name: 'Donald', age: 78});

/**
// disabled temporarily in comment block

// ask user to add persons
// first prompt for person name and age
const newPersonName = prompt('Name:');
const newPersonAge = prompt('Age:');
// then add new values to array as an object
persons.push({
  name: newPersonName,
  age: parseInt(newPersonAge)
});
*/

console.log('persons array', persons);

// print out all persons
for (const person of persons) {
  console.log(person.name + ' is ' + person.age + ' years old.');
}

// Functions

// function definition
function doSomething() {
  console.log('this');
  console.log('is');
  console.log('a function running here!');
}

// to run the function you need to call it:
//doSomething();

// Prompts name and age of a person from user and returns a person object
function promptForPerson() {
  const newPersonName = prompt('Name:');
  const newPersonAge = prompt('Age:');
  // create and return a person object
  const person = {
    name: newPersonName,
    age: parseInt(newPersonAge),
  };
  return person;
}

// Print all contents of persons array
function printAllPersons(someArray) {
  for (const person of someArray) {
    console.log(person.name + ' is ' + person.age + ' years old.');
  }
}

// ask for one more person
const newPerson = promptForPerson();
persons.push(newPerson);

printAllPersons(persons);

// ask one person more (same as above in the same line)
persons.push(promptForPerson());

// use function to print the persons
printAllPersons(persons);
