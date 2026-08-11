//map 
//create new array by performin some operation 
//on each array element

let arr = [45, 56, 23]
let a = arr.map((value, index , array) => {
    console.log(value , index , array)
    return value +1
})
console.log(a)