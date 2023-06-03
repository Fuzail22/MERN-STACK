let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10000);
    reject("error happened");
  }, 1000);
});
promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("irrespective of resolve/reject");
  });
promise1.catch((err) => {
  console.log(err);
});
