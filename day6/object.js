 // singleton 
// The Singleton pattern restricts the instantiation of a class or object to a single instance across your entire application 
 
// Object literals 
 
const mySym = Symbol ("key1") 
 
const JSuser = { 
    name : "Akshat", 
    [mySym] : "mykey1", 
    age : 19, 
    location : "pune", 
    email:"akshat@test.com", 
    isLogghedIn : false, 
    lastLoginDyas: ["monday", " saturday"] 
} 
 
// Bad practice: Accessing object properties one by one
console.log(JSuser.name); 
console.log(JSuser.age); 
console.log(JSuser.location); 
console.log(JSuser.email); 
console.log(JSuser.isLogghedIn); 
console.log(JSuser.lastLoginDyas); 
 
// Bracket notation can also be used to access object properties
console.log(JSuser["age"] ,["email"]); 

// Accessing the Symbol property and checking its value type
console.log(typeof JSuser[mySym]); 
 
// Accessing the Symbol property
console.log(JSuser[mySym]) 
 
// Adding a new property to the object
JSuser.emnail = "akshatkumar@test.com" 

// freeze() prevents adding, deleting, or modifying properties of the object
Object.freeze(JSuser) 
 
// This change will not work because the object is frozen
JSuser.email ="AKSHATAA@#gmnah.com" 

// Displaying the object after freeze
console.log(JSuser); 
 
 
// This property cannot be added because the object is already frozen
JSuser.greeting = function(){ 
    console.log("Hello JS user"); 
} 
 
// Checking the greeting property
console.log(JSuser.greeting); 

// Checking the type of greeting
console.log(typeof JSuser.greeting); 
 
// Calling the greeting function
JSuser.greeting();