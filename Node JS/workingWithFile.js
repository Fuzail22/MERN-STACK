let fs = require("fs");
fs.open("test.txt", "a", function (err, fd) {
  if (err) {
    console.log(err);
    return;
  }
  fs.write(
    fd,
    "second time additional data added",
    function (err, written, str) {
      console.log(written);
      console.log(str);
    }
  );
});
