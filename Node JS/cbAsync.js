function greet(Cb) {
  setTimeout(() => {
    Cb();
  }, 1000);
  console.log("greeting!!");
}

function welcome() {
  console.log("welcome!!");
}

greet(welcome);
