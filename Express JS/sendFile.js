let express = require("express");
let app = express();

//app.use(express.static("html")); /*used to expose the folder in the server */
app.get("/", (req, res) => {
  //res.sendFile("index.html");//file can't be sent in this way even after exposing the parent folder this is wrong"
  //res.sendFile(__dirname + "/test.txt");
  //res.sendFile(__dirname + "/index.html");
  res.sendFile("/index.html", { root: "." });
  //res.end();//file is not transmitted if we use this after sendFile
});
app.listen(8086, () => {
  console.log("server started @ 8086");
});
