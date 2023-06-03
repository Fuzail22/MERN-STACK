let fs = require("fs");
fs.readFile("./test.txt", function (err, data) {
  console.log(data);
  console.log(err);
});
fs.readFile("./test.txt", "ascii", function (err, data) {
  console.log(data);
  console.log(err);
});
//note the below callback gets response fast that y its printed first
fs.readFile("./test2.txt", "utf-8", function (err, data) {
  console.log(data);
  console.log(err);
});
