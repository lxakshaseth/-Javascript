// ---------------- IF / ELSE STATEMENT ----------------

// Declares a constant variable and stores true to represent that the user is logged in.
const isUserloggedIn = true;

// Declares a constant variable and stores the current temperature.
const temperature = 41;

// Checks whether the temperature is exactly equal to 41.
if (temperature === 41) {

    // Executes when the condition is true.
    console.log("less than 50");

} else {

    // Executes when the condition is false.
    console.log("temperature is greater than 50");
}


// ---------------- COMPARISON OPERATORS ----------------

// <   → Less than
// >   → Greater than
// <=  → Less than or equal to
// >=  → Greater than or equal to
// ==  → Equal to (checks only value)
// !=  → Not equal to (checks only value)
// === → Strictly equal to (checks value and data type)
// !== → Strictly not equal to (checks value and data type)


// ---------------- SCOPE ----------------

// Declares a constant variable containing the user's score.
const score = 200;

// Checks whether the score is greater than 100.
if (score > 100) {

    // 'power' is declared using let and is available only inside this block.
    let power = "fly";

    // Prints the value of power using a template literal.
    console.log(`user power: ${power}`);
}


// ---------------- SHORT-HAND NOTATION ----------------

// Declares a constant variable containing the user's balance.
const balance = 1000;

// Checks whether the balance is greater than 500.
if (balance > 500)

    // Executes when the condition is true.
    console.log("test");

// This statement is outside the if statement because braces are not used.
console.log("test2");


// ---------------- IF / ELSE IF / ELSE ----------------

// Checks whether the balance is less than 500.
if (balance < 500) {

    // Executes when balance is less than 500.
    console.log("less than 500");

} else if (balance < 750) {

    // Executes when balance is 500 or more but less than 750.
    console.log("less than 750");

} else if (balance < 900) {

    // Executes when balance is 750 or more but less than 900.
    console.log("less than 900");

} else {

    // Executes when balance is 900 or greater.
    console.log("balance is 900 or greater");
}


// ---------------- LOGICAL OPERATORS ----------------

// Stores whether the user is logged in.
const userLoggedIn = true;

// Stores whether the user has a debit card.
const debitCard = true;

// Stores whether the user logged in using Google.
const loggedInFromGoogle = true;

// Stores whether the user logged in using email.
const loggedInFromEmail = true;

// Stores whether the user is a guest user.
const guestUser = true;


// ---------------- AND (&&) OPERATOR ----------------

// Checks whether all three conditions are true.
// All conditions must be true for the code inside the if block to execute.
if (userLoggedIn && debitCard && 2 == 2) {

    // Executes when all conditions are true.
    console.log("Allow to buy course");
}


// ---------------- OR (||) OPERATOR ----------------

// Checks whether at least one condition is true.
// The condition becomes true if email, Google, or guest login is true.
if (loggedInFromEmail || loggedInFromGoogle || guestUser) {

    // Executes when at least one condition is true.
    console.log("user logged in");
}