// Creating an object named 'user'
const user = {
    username: "Tabassum",
    price: 999,

    // Method inside the object
    WelcomeMessage: function () {

        // 'this' refers to the current object (user)
        console.log(`${this.username}, take care`);

        // Prints the current object
        console.log(this);
    }
}

// Calling WelcomeMessage() using the user object
// Here, 'this' refers to the 'user' object
user.WelcomeMessage();

// Changing the username property
user.username = "Akshat";

// Calling the method again
// Now 'this.username' will be "Akshat"
user.WelcomeMessage();


// In Node.js, the value of 'this' at the top level depends on
// how the file/module is executed.
// console.log(this);


// Function declaration
function chai() {

    let username = "Adarsh";

    // Inside a regular function, 'this' does NOT refer to
    // the local variables of the function.
    console.log(this);
}

// Calling the function
chai();


// Function expression
// const chai = function () {
//     let username = "hitesh";

//     // 'this.username' does not access the local username variable.
//     // In a regular function, 'this' depends on how the function is called.
//     console.log(this.username);
// }

// Calling the function
// chai();