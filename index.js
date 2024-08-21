// what do  web servers do
// req means request
// the first parameter represents the incoming request
// res means  responce  it send back

const http = require("http");

const server = http.createServer((req, res) => {
    
  res.write("Welcome to our home page");
  res.end();

});
server.listen(5000);
