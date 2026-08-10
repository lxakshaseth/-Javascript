//where variable and function declaration  are moved or hoisted to the top of the scope before exection


console.log(age);  //undefined
var age = 25;
console.log(age);  //defined

//jo v key word variable key word ke duara bnega waah top pr shift ho jayega
// in short variable ki declaration top pr shift kr jayegi current scope ke andar and we are able to print variable


saymyname("Akshat");
function saymyname(fullname){
    console.log(fullname)
}

//using let or constant key word



// console.log(dnr);  // ReferenceError: Cannot access 'dnr' before initialization
let dnr = 100;
console.log(dnr);



//console.log(lunch);  //ReferenceError: Cannot access 'lunch' before initialization
const lunch = 60;
 console.log(lunch);



 //function call stack

 //stack is a data structure that follow LIFO priciple 

//  let greet = function(){
//     console.log("how are you")
//  }

//  greet();


// function greetMe(greet , fullName){
//     console.log("hello", fullName);
//     greet ();
// }

//  function greet(){
//     console.log("how are you")
//  }

//  greetMe(greet , "Aksaht");

function solve(number){
    return function(number){
        return number*number;
    }
}
let ans = solve(65);

let finalAns= ans(11);
console.log(finalAns);