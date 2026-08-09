// ==========================================
// DATES IN JAVASCRIPT
// ==========================================


// new Date() creates a Date object
// It stores the current date and time
let myDate = new Date();


// Converts the date into a readable string
console.log(myDate.toString());


// Converts the date into ISO format
// Example: 2026-08-09T09:30:00.000Z
console.log(myDate.toISOString());


// Converts the Date object into JSON format
// Usually returns the date in ISO string format
console.log(myDate.toJSON());


// Returns only the date according to local format
// Example: 9/8/2026
console.log(myDate.toLocaleDateString());


// Same method again
// This will also return the local date
console.log(myDate.toLocaleDateString());


console.log("object type");


// ==========================================
// TYPE OF DATE
// ==========================================

console.log("+++++++++++++++");


// Date is actually an OBJECT in JavaScript
console.log(typeof myDate); // object



// ==========================================
// CREATING A CUSTOM DATE
// ==========================================


// Date(year, month, day)
//
// IMPORTANT:
// JavaScript months start from 0
//
// 0  = January
// 1  = February
// 2  = March
// ...
// 6  = July
// 7  = August
//
// So 7 means August
let myCreatedDate = new Date(2026, 7, 9);


// Converts the date into a readable format
console.log(myCreatedDate.toDateString());
// Output: Sun Aug 09 2026



// ==========================================
// TIMESTAMP
// ==========================================


// Date.now() returns the current timestamp
// Timestamp is the number of milliseconds
// since January 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now();

console.log(myTimeStamp);


// getTime() returns the timestamp of a specific Date object
console.log(myCreatedDate.getTime());


// Date.now() gives milliseconds
// Dividing by 1000 converts milliseconds → seconds
console.log(Date.now() / 1000);


// Math.floor() removes the decimal part
// This gives the current Unix timestamp in seconds
console.log(Math.floor(Date.now() / 1000));



// ==========================================
// GET DATE INFORMATION
// ==========================================

let newDate = new Date();


// Prints the complete Date object
console.log(newDate);


// getMonth() returns the month number
// IMPORTANT: January = 0, February = 1, ..., December = 11
console.log(newDate.getMonth());


// getFullYear() returns the current year
// Example: 2026
//
// IMPORTANT:
// We need () because getFullYear is a function
console.log(newDate.getFullYear());


// getHours() returns the current hour
// Example: 15
//
// IMPORTANT:
// We need () because getHours is a function
console.log(newDate.getHours());



// ==========================================
// GET DAY NAME
// ==========================================


// toLocaleString() can format the date
// according to a particular locale


// weekday: "long" returns the complete day name
// Example: Sunday, Monday, Tuesday...
console.log(
    newDate.toLocaleString("default", {
        weekday: "long"
    })
);