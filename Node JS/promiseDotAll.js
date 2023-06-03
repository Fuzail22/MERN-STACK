let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("first promise");
    //reject("first error happened");
  }, 2000);
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("second promise");
    //reject("second error happened");
  });
});

let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("third promise");
    //reject("third error happened");
  }, 1000);
});
//all three should resolve to return true
Promise.all([promise1, promise2, promise3])
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("irrespective of resolve/reject");
  });
