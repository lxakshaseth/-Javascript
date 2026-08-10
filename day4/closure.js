// A closure function is a function that remeber access variable from its outer variable , even after outer function has finished executing

console.log("example")

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
