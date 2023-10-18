const http = require('http');

const port = process.env.PORT || 8080;
const customMessage = "My Node.js App!";

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello, World!</h1><p>${customMessage}</p>`);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
