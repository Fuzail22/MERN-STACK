let http = require("http");
let server = http.createServer(function (req, res) {
  res.write("Hi from your server\n");
  let userName = {
    name: "fuz",
    id: 1234,
  };
  res.write(JSON.stringify(userName));
  res.end(); //if respond doesn't end the page keeps waiting infinitely and doesn't laod.
});

server.listen(8082, () => {
  console.log("server started");
});
