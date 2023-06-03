function* getPrices() {
  yield "$1000";
  yield "$5000";

  return "$2000";
}

let it = getPrices();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
