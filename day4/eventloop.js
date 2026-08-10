
//Event loop is a mechanism that help js execute asynchronous code without blocking the main thread
//it check call stack is empty , if found empty then add next call stack in queue

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");