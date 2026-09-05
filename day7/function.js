// Simple console.log statements
console.log("G"); 
console.log("W"); 
console.log("Q"); 
console.log("W"); 
console.log("R"); 
console.log("F"); 
console.log("F"); 
console.log("D"); 

// This statement executes after the above console.log statements
console.log("next line"); 


// Function Declaration
// Defining a function does NOT execute the code inside it.
// The function runs only when we call it using: myFunction()
function myFunction() { 
    console.log("G"); 
    console.log("W"); 
    console.log("Q"); 
    console.log("W"); 
    console.log("R"); 
    console.log("F"); 
    console.log("F"); 
    console.log("D"); 
} 

// Function call is commented, so this will NOT execute
// myFunction(); 


// Add two numbers
// function addTwonumbers(number1, number2){ 
//     console.log(number1+number2); 
// } 

// Function calls with different types of arguments
// addTwonumbers(40,90);     // 130
// addTwonumbers(40,"4");    // "404"
// addTwonumbers("4",9);      // "49"


// Calling myFunction()
// This executes all the console.log statements inside myFunction()
myFunction (); 


// Function with parameters and return statement
function addTwonumbers(number1, number2){ 

    // This code executes before the return statement
    //let result = number1 + number2; 

    console.log("all the code before return statement will be executed"); 

    //return result; 


    // return sends the calculated value back to the place
    // where the function was called
    return number1 + number2; 


    // IMPORTANT:
    // Code written after return will NOT execute
    // because return immediately exits the function
    // Also note: "consoloe" is misspelled; it should be "console"
    consoloe.log("this is after return statement"); 
} 


// Calling addTwonumbers() and storing its returned value
const result = addTwonumbers(40,90); 

// Printing the returned result
console.log("result :" , result); 


// Login user message example
console.log("loginUserMessage"); 


// Function that accepts username as a parameter
function loginUserMessage(username){ 

    // If no username is passed, username will be undefined
    if (username === undefined){ 

        // Display message when username is not provided
        console.log("Please provide a username"); 

        // Stop function execution
        return; 
    } 

    // Template literal is used to create the login message
    return `${username} just logged in` 
} 


// Calling function with a username
console.log(loginUserMessage("Gaurav")) 


// Calling function without passing any value
// username becomes undefined
console.log(loginUserMessage()) 


// When we don't pass any value to the function,
// the parameter gets the value undefined.