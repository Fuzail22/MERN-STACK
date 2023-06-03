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
  res.redirect("/");
  //res.end();
});

expressApp.listen(8082);
