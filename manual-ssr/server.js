const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("Hello there!");
});

server.listen(8000, () => console.log("Listening fot requests on 8000 port"));
