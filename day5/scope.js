//scope determine where a variable can be accessed in your code
//think scope like room in your house
// variable inside a room are only accessible within that room
//variable in the living room (global scope) are accessible for every one

//type of scope
//1. global scope: variable declare outside function and block scope
let name = "Akshat";

function greet() {
    console.log(name);
}

greet(); // Akshat
console.log(name); // Akshat
//2. function scope : variable declare inside a function block
function test() {
    let age = 21;
    console.log(age); // 21
}

test();

console.log(age); // ReferenceError
//3. block scope: varible declare inside a specific block
if (true) {
    let x = 10;
    const y = 20;

    console.log(x); // 10
    console.log(y); // 20
}

console.log(x); // ReferenceError
console.log(y); // ReferenceError

