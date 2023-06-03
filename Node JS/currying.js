let add = function (x) {
  return function (y) {
    return x + y;
  };
};

let output = add(5)(2);
console.log(output);
