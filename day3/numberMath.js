// Simple number value
const score = 400;

// Prints the value of score
console.log(score);


// Creates a Number object with value 100
const balance = new Number(100);

// Prints the Number object
console.log(balance);


// Converts the number into a string using toString()
// Then .length gives the number of characters in the string
// 100 → "100" → length = 3
console.log(balance.toString().length);


// toFixed(3) keeps 3 digits after the decimal point
// 100 → "100.000"
console.log(balance.toFixed(3));


// Creates a decimal number
const otherNumber = 0.99;

// toPrecision(1) returns the number with 1 significant digit
// 0.99 → 1
console.log(otherNumber.toPrecision(1));


// Creates a large number
const hundreds = 1000000;


// toLocaleString('en-IN') formats the number
// according to Indian numbering system
// 1000000 → 10,00,000
console.log(hundreds.toLocaleString('en-IN'));