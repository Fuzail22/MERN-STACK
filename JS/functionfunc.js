function giveMeAddFunction() {
  function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(22, 11));
  return add;
}
let val = giveMeAddFunction();

console.log(val(23, 2));
console.log(val);
