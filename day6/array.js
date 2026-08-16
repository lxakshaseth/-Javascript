const marvel_heros = ["thor" , " iron_man", "spider_man"]
const dc_heros = ["salman_khan", "amir khna", "sharukh khan"]


// Marvel heroes array
// DC heroes array


const roommate = ["Akshat", "aditya "," Ayush", " Adarsh"]

// Roommate names array


// push() adds the complete dc_heros array as a single element
// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// concat() combines two arrays and returns a new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// Spread operator (...) combines multiple arrays into one array
const all_new_Heros = [...marvel_heros, ...dc_heros, ...roommate]
console.log(all_new_Heros);


// flat(Infinity) converts nested arrays into a single-level array
const another_array = [ 1,2,3,4,5,[56,7,8,5,3,],56,[65,[6567]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Checks whether the given value is an array
console.log(Array.isArray("Akshat"))

// Converts an iterable/string into an array
console.log(Array.from("Ankit"))
console.log(Array.from("Akshat"))

// Objects without an iterable/array-like structure return an empty array
console.log(Array.from({name :"Akshat"}))


// Three scores
let score1  =10
let score2 = 2000
let score3 = 300

// Adds all three scores
console.log("sum "+ (score1+score2+score3));


// Array.of() creates an array from the given values
console.log(Array.of(score1,score2,score3));