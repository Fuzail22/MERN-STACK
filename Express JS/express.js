let express = require("express");
let expressApp = express();

expressApp.get("/", (req, res) => {
  res.write("this is my base route");
  res.end(); //if not mentioned the browser keeps waiting for completion and doesn't load
}); //parent route

expressApp.get("/grocery", (req, res) => {
  res.write("this is my grocery route");
  res.end(); //if not mentioned the browser keeps waiting for completion and doesn't load
}); //grocery route

expressApp.get("/clothing", (req, res) => {
  res.write("this is my clothing route");
  res.end(); //if not mentioned the browser keeps waiting for completion and doesn't load
}); // clothing
expressApp.get("/user", (req, res) => {
  res.write("this is my user's route");
  res.end(); //if not mentioned the browser keeps waiting for completion and doesn't load
});

// expressApp.get("/user/:i/:j", (req, res) => {
//   res.write("this is my user " + req.params.i);
//   res.end(); //if not mentioned the browser keeps waiting for completion and doesn't load
// });

expressApp.get(
  /^\/user\/(\d+)$/ /*RE for user id should only be digits*/,
  (req, res) => {
    res.write("this is my user " + req.params[0]);
    res.end(); //if not mentioned the browser keeps waiting for completion and doesn't load
  }
);

expressApp.listen(8083, () => {
  console.log("server started");
});
