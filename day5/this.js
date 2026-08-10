 "use strict";

console.log(this);; // global object

//this is inside a function

function x(){
    //the value depend on strict or non strict mode
    console.log(this);
}

x();
window.x();

//this is strict mode - (this substitution)

//if the value of this undefined or null
//thiskeyword will be replaced with global object
//only in non strict mode

//this keyword value depend on how this is called window

/*this is a JavaScript keyword that refers to the object associated with
 is called. Arrow functions don't have their own this; they inherit it 
 from the surrounding scope. */

 const user = {
    name: "Akshat",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();