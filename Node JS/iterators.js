function multiplesOfTen(start = 0, end = Infinity, steps = 0) {
  let multiples = 10;
  let nextIndex = 0;
  result = 0;
  return {
    next: function () {
      if (nextIndex < end) {
        result = result + multiples;
        nextIndex = nextIndex + steps;
        return {
          value: result,
          done: false,
        };
      } else {
        return {
          value: result,
          done: true,
        };
      }
    },
  };
}

const multiples = multiplesOfTen(0, 5, 1);
// console.log(multiples.next());
// console.log(multiples.next());
// console.log(multiples.next());
// console.log(multiples.next());
// console.log(multiples.next());
// console.log(multiples.next());
// console.log(multiples.next());
let it = multiples.next();
while (!it.done) {
  console.log(it.value);
  it = multiples.next();
}
