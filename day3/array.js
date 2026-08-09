// ==========================================
// ARRAY CONCEPT
// ==========================================


// Creating an array using square brackets []
// Array can store multiple values in a single variable
const myArr = [2, 4, 5, 55, 67, 8, 5, 22];


// Creating an array of strings
const myHeros = ["papa", "bhaiya"];


// Another way to create an array using Array constructor
const myArr2 = new Array(1, 2, 3, 4, 5);


// Array index starts from 0
// Index:  0  1  2  3   4  5  6  7
// Value:  2  4  5  55 67  8  5  22

// Accessing the value at index 1
console.log(myArr[1]); // 4


// Accessing the value at index 5
console.log(myArr[5]); // 8


// Accessing the value at index 1 of myHeros
console.log(myHeros[1]); // bhaiya



// ==========================================
// ARRAY METHODS
// ==========================================


// Introduction to push() method
console.log("Introduction of push method");


// push() adds a new element at the END of the array
myArr.push(6);

console.log(myArr);
// [2, 4, 5, 55, 67, 8, 5, 22, 6]



// ==========================================
// pop() METHOD
// ==========================================

console.log("Introduction of pop method");


// pop() removes the LAST element from the array
// Here, 6 will be removed
myArr.pop();


// ==========================================
// unshift() METHOD
// ==========================================


// unshift() adds a new element at the BEGINNING of the array
// Here, 33 will be added at index 0
myArr.unshift(33);


// ==========================================
// includes() METHOD
// ==========================================


// includes() checks whether a value exists in the array
// Returns true if found
// Returns false if not found
//
// Here, 9 does not exist in the array
console.log(myArr.includes(9)); // false


// Prints the updated array
console.log(myArr);



// ==========================================
// indexOf() METHOD
// ==========================================


// indexOf() returns the index of a given value
// Here, 33 is at index 0
console.log(myArr.indexOf(33)); // 0



// ==========================================
// SLICE AND SPLICE
// ==========================================


// Display the original array before slice()
console.log("A", myArr);


// ==========================================
// slice()
// ==========================================


// slice(start, end) creates a NEW array
// It does NOT change the original array
//
// start = 1
// end = 3
//
// It takes elements from index 1
// up to (but NOT including) index 3
//
// Example:
// [33, 2, 4, 5, 55, 67, 8, 5, 22]
//      ↑  ↑
//      1  2
//
// Result: [2, 4]

const myn1n = myArr.slice(1, 3);


// Prints the new array created by slice()
console.log(myn1n);


// Original array remains unchanged
console.log("B", myArr);



// ==========================================
// splice()
// ==========================================


// splice(start, deleteCount)
//
// start = 1
// deleteCount = 3
//
// It starts from index 1
// and removes 3 elements
//
// IMPORTANT:
// splice() CHANGES the original array
const myn2 = myArr.splice(1, 3);


// Prints the modified original array
console.log("C", myArr);


// splice() returns the elements that were removed
console.log(myn2);