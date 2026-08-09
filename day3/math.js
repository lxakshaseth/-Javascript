// Math is a built-in JavaScript object
// It provides methods and properties for performing mathematical operations
console.log(Math);


// Math.abs() removes the negative sign and returns the absolute value
// -5 → 5
console.log(Math.abs(-5));


// Math.round() rounds a number to the nearest integer
// 5.8 → 6
console.log(Math.round(5.8));


// Math.ceil() always rounds the number UP
// 4.7 → 5
console.log(Math.ceil(4.7));


// Math.floor() always rounds the number DOWN
// 6.8 → 6
console.log(Math.floor(6.8));


// Math.min() returns the smallest number from the given values
// 4, 7, 2, 8 → 2
console.log(Math.min(4, 7, 2, 8));


// Math.max() returns the largest number from the given values
// 4, 7, 2, 8 → 8
console.log(Math.max(4, 7, 2, 8));


// ==========================================
// Random Number
// ==========================================

console.log("random function");


// Math.random() generates a random decimal number
// The value is always >= 0 and < 1
// Example: 0.2345, 0.7821, 0.0912
console.log(Math.random());


// Every time Math.random() is called,
// it generates a new random number
console.log(Math.random());


// Generates another random number between 0 and 1
console.log(Math.random());


// Math.random() → 0 to less than 1
// Multiplying by 10 gives a number from 0 to less than 10
// Example: 0.5 * 10 = 5
console.log(Math.random() * 10);


// Math.random() generates 0 to less than 1
// Subtracting 3 shifts the range
// Result will be between -3 and less than -2
console.log(Math.random() - 3);


// Math.random() * 10 → 0 to less than 10
// Then -10 shifts the range
// Result will be between -10 and less than 0
console.log((Math.random() * 10) - 10);


// ==========================================
// Generate Random Number Between MIN & MAX
// ==========================================

console.log("new method for MIN & MAX");


// Minimum value
const min = 10;

// Maximum value
const max = 20;


// This formula generates a random INTEGER
// between min and max (both included)
//
// Math.random() → 0 to less than 1
// (max - min + 1) → creates the required range
// Math.floor() → removes the decimal part
// + min → shifts the result to start from min
//
// For min = 10 and max = 20:
// Possible output: 10, 11, 12, 13, ... 19, 20
console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);