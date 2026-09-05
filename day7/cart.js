// ======================================================
// 1. REST OPERATOR (...) IN FUNCTION
// ======================================================

// val1, val2, val3, val4, val5 receive the first 5 values.
//
// ...num1 collects ALL remaining values into an ARRAY.
//
// Example:
// CalculateCartPrice(100, 200, 300, 400, 500, 700, 900)
//
// val1 = 100
// val2 = 200
// val3 = 300
// val4 = 400
// val5 = 500
//
// num1 = [700, 900]
//
// IMPORTANT:
// ... is called REST OPERATOR when used in function parameters.

function CalculateCartPrice(val1, val2,val3, val4,val5,... num1){
    return num1
}

// Here first 5 values go into val1-val5.
// All remaining values go into num1 as an ARRAY.

console.log(CalculateCartPrice(
    100, 200, 300, 400, 500,
    700, 900, 1000, 1100, 1200,
    1300, 1400, 1500, 1600, 1700,
    1800, 1900, 2000
));


// ======================================================
// 2. PASSING OBJECT TO A FUNCTION
// ======================================================

// Creating an object
const user = { 
    username : " john bnega don ",
    price : 146
}


// This function accepts an object as a parameter.
//
// anyobject is just a parameter name.
// It will contain the object that we pass to the function.

function handleobject(anyobject){

    // Accessing object properties using dot notation
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// Passing the 'user' object to the function
handleobject(user);


// This is commented, so it will NOT execute.
//handleobbject (user)


// ======================================================
// 3. DIRECTLY PASSING AN OBJECT TO A FUNCTION
// ======================================================

// We don't always need to create an object in a separate variable.
//
// We can directly create and pass an object to the function.

handleobject({
    username : " bebo ",
    price : 100
})


// ======================================================
// 4. PASSING ARRAY TO A FUNCTION
// ======================================================

// Creating an array
const myNewArray = [
    200, 300, 400, 500, 600,
    700, 800, 900, 1000
];


// Function that accepts an array
function returSecondValue(getArray){

    // Array indexing starts from 0.
    //
    // getArray[0] → first value
    // getArray[1] → second value
    // getArray[2] → third value
    //
    // Therefore getArray[1] returns the SECOND value.

    return getArray[1];
}


// Passing myNewArray to the function
console.log(returSecondValue(myNewArray));


// We can also directly pass an array
// without creating a separate variable.

console.log(returSecondValue([100, 200, 300, 400]));


/*The Rest Operator collects multiple values into a single array.

👉 Rest = Collect*/

function addNumbers(...numbers) {
    console.log(numbers);
}

addNumbers(10, 20, 30, 40);

//[10, 20, 30, 40]

/*The Spread Operator expands/unpacks the elements of an array, object, or other iterable into individual values.

👉 Spread = Expand*/
const arr = [10, 20, 30];

console.log(...arr);

//10 20 30