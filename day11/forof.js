//for off
// ["" , "" , ""]
//[{},{},{}]

// Create an array containing numbers from 1 to 5
const arr = [1, 2, 3, 4, 5];

// Iterate over each element of the array using for...of loop
for (const num of arr) {

    // Print the current number
    console.log(num);
}

// Create a string containing a greeting message
const greetings = "hello world";

// Iterate over each character of the string using for...of loop
for (const greet of greetings) {

    // Print each character
    console.log(`Each char is ${greet}`);
}

// Create a new Map
const map = new Map();

// Add India with "IN" as the key
map.set('IN', "India");

// Add United States with "USA" as the key
map.set('USA', "United States of America");

// Add France with "fr" as the key
map.set('fr', "France");

// Print the complete Map
console.log(map);
 