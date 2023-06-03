let add = function (x, y) {
  return new Promise((resolve, reject) => {
    let sum = x + y;
    if (sum) {
      setTimeout(() => {
        resolve(sum);
      }, 3000);
    } else {
      reject("error happened cannot add");
    }
  });
};
let rand = async () => {
  let sum2 = await add(3, 5);
  console.log(sum2);
};
rand();
console.log("waiting");
