'use strict';

// timer function

setTimeout(function() {
  console.log("This message is printed once after 1000 milliseconds");
}, 1000);

// for(let i=0; i<100; i++) {
//     console.log('Program continues after setTimeout', i);
// }
// console.log('Program continues after setTimeout. Final.');

const output = document.querySelector('#output-text');

// async function runs in the background when called
async function loadData() {
		// await can be only used inside async function
		// download data.json file from the same server folder
    const response = await fetch('data.json');
		// extract json data from http response object
		const data = await response.json();
		// use the data as a JS object
    console.log('data downloaded (async func):', data);
		output.textContent = 'Name: ' + data.name + ', age: ' + data.age;
}
// call async function
loadData();
// main app keeps running without waiting the async function to finish
console.log('data downloading (main app)');


// TV MAZE API EXAMPLE
async function fetchData(searchTerm) {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=' + searchTerm);
    if (!response.ok) { // Check if the response is successful (status code 200-299)
      throw new Error('HTTP error! status: ' + response.status);
    }
    const data = await response.json();
    console.log('Fetched data:', data);
		// example: log tv show name of the first search result
		console.log('First result: ', data[0].show.name);
    return data; // This will return a promise that resolves to the data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
//fetchData('emmerdale');
console.log('This message is printed before the data is fetched');


// Function for searching tv shows and displaying the on the page
// event handler for form's submit event
async function searchTVShows(event) {
	event.preventDefault();
	const input = document.querySelector('input').value;
	const shows = await fetchData(input);
	console.log('tv shows:', shows);
	const ul = document.querySelector('#list');
	// clear output before adding new results
	ul.innerHTML = '';
	for (const item of shows) {
		// console.log('name: ', item.show.name);
		// create new list item element
		const li = document.createElement('li');
		// add li to ul
		ul.appendChild(li);
		li.textContent = item.show.name;
		// create image element and add it to DOM if image property exists
		if (item.show.image) {
			const image = document.createElement('img');
			// image might be null 
			image.src = item.show.image.medium;
			li.appendChild(image);
		}
	}
}

// Add event listener for search form
const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', searchTVShows);
