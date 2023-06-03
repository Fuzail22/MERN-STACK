function giveMeAddFunction() {
  let val1 = 20;
  function add(num1, num2) {
    console.log("val1 in outerscope is " + val1);
    return num1 + num2;
  }
  return add;
}
let val = giveMeAddFunction();

console.log(val(23, 2));
console.log(val);
