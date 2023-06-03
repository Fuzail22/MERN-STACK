let add = function (x, y) {
  return new Promise((resolve, reject) => {
    let sum = x + y;
    if (sum) {
      resolve(sum);
    } else {
      reject("error happened cannot add");
    }
  });
};
add(1, 2)
  .then((sum) => {
    console.log(sum);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("irrespective of resolve/reject");
  });
