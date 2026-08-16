// const tinderUser = new Object()

// Creating an empty object using object literal syntax
const tinderUser = {}

// Adding properties to the tinderUser object
tinderUser.id = "123addf"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Creating a nested object
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname : " Akshat",
            lastname : " Gupta"

        }
    }
}

// Accessing nested object properties
console.log(regularUser.fullname.userfullname);

// Creating multiple objects
const obj1 = { 1 : " a" , 2 : " b"}
const obj2 = { 3 : " c", 4 : " d"}
const obj3 = { 5 : " e", 6 : "f"}

// Object.assign() combines multiple objects into one object
const obj = Object.assign({}, obj1, obj2, obj3)
console.log(obj);


// Data received from database
const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email :" hh@gmail.com"
    },
]

// Accessing email of the second user
users[1].email

// Printing the tinderUser object
console.log(tinderUser);

// Object.keys() returns an array containing all object keys
console.log(Object.keys(tinderUser));

// Object.values() returns an array containing all object values
console.log(Object.values(tinderUser));

// Object.entries() returns an array of key-value pairs
console.log(Object.entries(tinderUser));

// hasOwnProperty() checks whether the object contains the given property
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Time: 4:21