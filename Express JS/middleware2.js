let express = require("express");
let app = express();
let bodyParser = require("body-parser");

let users = [
  {
    id: 123,
    name: "priya",
  },
  {
    id: 456,
    name: "bose",
  },
];

app.use(bodyParser.json()); //if we don't use this the posted raw data gets recorded as null

app.get("/", (req, res) => {
  res.send(users).status(200);
  res.end();
});

app.get(/^\/user\/(\d+)$/, (req, res) => {
  let searchedUser = users.find((user) => {
    return user.id == req.params[0];
  });
  res.send(searchedUser).status(200);
  res.end();
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  let isUserAlreadyAdded = users.find((user) => {
    return user.id == newUser.id;
  });
  if (isUserAlreadyAdded) {
    res.status(400).send("User id exists");
    res.end();
  } else {
    users.push(newUser);
    res.send("user added").status(200);
    res.end();
  }
});

app.delete("/user/:id", (req, res) => {
  //let userToBeDeleted = req.params.id;
  users = users.filter((user) => {
    return user.id != req.params.id;
  });
  res.send("user deleted").status(200);
  res.end();
});

//app.use(express.static("html")); /*used to expose the folder in the server */
app.get("/file", (req, res) => {
  //res.sendFile("index.html");//file can't be sent in this way even after exposing the parent folder this is wrong"
  //res.sendFile(__dirname + "/test.txt");
  //res.sendFile(__dirname + "/index.html");
  res.sendFile("/index.html", { root: "." });
});
app.listen(8085, () => {
  console.log("server started @ 8085");
});
