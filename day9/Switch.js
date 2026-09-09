// ---------------- SWITCH STATEMENT ----------------

// Basic syntax of a switch statement.
// 'key' is the value that will be compared with each case.
// 'break' stops the execution of the switch statement.
// 'default' executes when none of the cases match.

/*
switch (key) {

    case value:
        // Code to execute when the case matches.
        break;

    default:
        // Code to execute when no case matches.
        break;
}
*/


// Stores the month number in a constant variable.
const month = 3;

// Checks the value of 'month' against each case.
switch (month) {

    // Checks whether month is equal to 1.
    case 1:

        // Prints January if month is 1.
        console.log("January");

        // Stops the switch statement from continuing to the next case.
        break;


    // Checks whether month is equal to 2.
    case 2:

        // Prints February if month is 2.
        console.log("February");

        // Stops the switch statement.
        break;


    // Checks whether month is equal to 3.
    case 3:

        // Prints March if month is 3.
        console.log("March");

        // Stops the switch statement.
        break;


    // Checks whether month is equal to 4.
    case 4:

        // Prints April if month is 4.
        console.log("April");

        // Stops the switch statement.
        break;


    // Executes when month does not match any of the above cases.
    default:

        // Prints a message when the month number is invalid.
        console.log("Invalid month");

        // Stops the switch statement.
        break;
}