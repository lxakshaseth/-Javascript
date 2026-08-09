//DATES

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());
console.log("object type")


console.log("+++++++++++++++")
console.log(typeof myDate);

let myCreatedDate = new Date (2026 , 7, 9)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear);
console.log(newDate.getHours);


//$P{newDate.getDay()} and the time


newDate.toLocaleString('default',{
    weekday: "long",
})