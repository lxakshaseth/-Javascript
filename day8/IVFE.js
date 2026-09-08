// IIFE = Immediately Invoked Function Expression
// It is a function that executes immediately after it is created.

// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})(); // The () immediately invokes the function


// IIFE with an arrow function
// 'name' is a parameter that receives the value "Akshat"

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Akshat"); // Passing "Akshat" as an argument