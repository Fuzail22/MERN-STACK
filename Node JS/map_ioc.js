let arr = [2, 4, 1, 6, 5];
function square(item) {
  return item * item;
}
let arr2 = [10, 45, 15, 20, 100];
function divideBy5(item) {
  return item / 5;
}

function squareRoot(item) {
  return Math.sqrt(item);
}
arr.map(square);
console.log(arr.map(square));
console.log(arr2.map(divideBy5));
console.log(arr2.map(squareRoot));
