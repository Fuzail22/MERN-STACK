function display() {
  console.log("hello timeup");
}
function close() {
  clearInterval(inter);
}

console.log("just like that second function call");

let inter = setInterval(display, 4000);
setTimeout(close, 9000w); //putting this before setInterval doesn't let the setInterval work when they have same time
