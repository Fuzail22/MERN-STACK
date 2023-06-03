let http = require("http");
let server = http.createServer((req, res) => {
  let inp = {
    name: "fuz",
    id: 123,
  };
  switch (req.url) {
    case "/grocery":
      res.write("this is grocery route");
      break;
    case "/clothing":
      res.write("this is clothing route");
      break;
    default:
      res.write("this is home route");
  }
  res.end();
});

server.listen(8082, () => {
  console.log("server started");
});
