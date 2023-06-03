function* powerOfThree() {
  let count = 1;
  while (true) {
    yield Math.pow(3, count), count; // yield otherwise the pause the program continues execution from here on the next call
    count++;
    // if (count == 10) return Math.pow(3, count);
  }
}

let it = powerOfThree();
for (i = 0; i < 10; i++) {
  console.log(it.next());
}
console.log(it.next());
// console.log(it.next());
