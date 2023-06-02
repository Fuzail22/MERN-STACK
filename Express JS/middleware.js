let express = require("express");
let app = express();

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let logTime = (req, res, next) => {
  date = new Date();
  time = date.getTime();
  let ctime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let cDay = date.getDate();
  let cMonth = date.getMonth() + 1;
  let cYear = date.getFullYear();
  let cDate = " " + cDay + "/" + cMonth + "/" + cYear;
  console.log("Request time was " + ctime + cDate);
  // res.end();
  next();
};
let reqUrl = (req, res, next) => {
  console.log("Request url was " + req.originalUrl);
  next();
};
app.use(logTime);
// app.use(reqUrl);
// app.get("/", (req, res, next) => {
//   console.log("get happend");
//   res.write("Basic Route");
//   res.end();
// });
app.listen(8084, () => {
  console.log("server started @ 8084");
});
