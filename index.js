// what do  web servers do
// req means request
// the first parameter represents the incoming request
// res means  responce  it send back

const http = require("http");

const server = http.createServer((req, res) => {
  //    property tht gets the url //
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "./about") {
    res.end("here is our short history");
  }
  res.end(
    <h1>Opps!</h1>,
    <p>We cant to seem to find the page you are looking for</p>
  );
});
server.listen(5000);
