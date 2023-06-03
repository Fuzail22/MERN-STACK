function cheese() {
  console.log("put some cheese");
}
function patty(cheese) {
  console.log("add some veggies");
  cheese();
}
function buns(paaty) {
  console.log("add two buns");
  paaty(cheese);
}
function makeBurger(buns) {
  setTimeout(function () {
    buns(patty);
    console.log("burger ready");
  }, 2000);
}

makeBurger(buns);
