let arr = [2, 5, -1, -10, 7];
let filter = function (arr, callback) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    value = callback(arr[i]);
    if (value) output.push(value);
  }
  return output;
};

function getPositive(item) {
  return item > 0 ? item : "";
}
function getNegative(item) {
  return item < 0 ? item : "";
}
let positive = filter(arr, getPositive);
let negative = filter(arr, getNegative);

console.log(positive);
console.log(negative);
