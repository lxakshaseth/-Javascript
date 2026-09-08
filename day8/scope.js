// var c = 500;

let a = 200;

if (true) {
    // This 'a' is a new variable with block scope.
    // It shadows the outer 'a' inside this block.
    let a = 100;

    // 'b' is also block-scoped and can only be accessed inside this if block.
    const b = 20;

    // console.log("INNER : ",a);
    // Would print: 100
}

// The outer 'a' is still 200.
// console.log("OUTER : ", a);


// Function 'one' creates its own function scope.
function one(){
    const username = "Akshat";

    // Function 'two' is nested inside 'one'.
    // Due to lexical scoping, 'two' can access variables
    // declared in its parent function 'one'.
    function two(){
        const website = "js.com";

        // 'username' is not declared inside 'two',
        // so JavaScript looks in the outer scope and finds it in 'one'.
        console.log(username);
    }

    // 'website' belongs to 'two', so it cannot be accessed here.
    // console.log(website);

    // Calling the nested function.
    two();
}

// Calling function 'one'.
one();


if (true){
    // 'username' is block-scoped to this if block.
    const username = "Ankush"

    if (username === "Ankush"){
        // 'website' is block-scoped to this inner if block.
        const website = " youtube "

        // Both username and website are accessible here.
        // console.log(username + website);

    }

    // 'website' cannot be accessed here because
    // it was declared inside the inner if block.
    // console.log(website);

}

// 'username' cannot be accessed here because
// it was declared inside the if block.
// console.log(username);



console.log("+++++++++++++++++++++interesting+++++++++++++++++++++++++++++");

// Function declaration is hoisted.
// Therefore, addone() can be called before its declaration.
console.log(addone(5))

// Function declaration
function addone (num ){
    return num + 1

}

// Function expression
// 'addTwo' is declared using const.
// const variables are not accessible before initialization.
addTwo(5) 

const addTwo = function (num ){
    return num + 2
}