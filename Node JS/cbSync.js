function greet(Cb) {
  Cb();
  console.log("greeting!!");
}

function welcome() {
  console.log("welcome!!");
}

greet(welcome);
