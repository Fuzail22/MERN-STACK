let arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(function (i) {
  console.log("insdide callback ");
  return i * 2;
});

console.log("outside callback " + doubleArr);
