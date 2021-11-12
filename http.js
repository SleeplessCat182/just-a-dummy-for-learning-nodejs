const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our a short history");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p> We can't find that page !!! 404 </p>
        <a href ="/">Back to homepage </a>
  `);
  }
});

server.listen(5000);
