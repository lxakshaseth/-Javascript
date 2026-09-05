console.log("G");
console.log("W");
console.log("Q");
console.log("W");
console.log("R");
console.log("F");
console.log("F");
console.log("D");

console.log("next line");

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

// myFunction();

// //add two numbers
// function addTwonumbers(number1, number2){
//     console.log(number1+number2);

// }
// addTwonumbers(40,90);
// addTwonumbers(40,"4");
// addTwonumbers("4",9);


myFunction ();
function addTwonumbers(number1, number2){
    //let result = number1 + number2;
    console.log("all the code before return statement will be executed");
    //return result;

    return number1 + number2;

    // after return statement no code will be executed
    consoloe.log("this is after return statement");
}

const result = addTwonumbers(40,90);
console.log("result :" , result);


console.log("loginUserMessage");

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Gaurav"))

console.log(loginUserMessage())
//h
//when we don't pass any value to the function then it will return undefined