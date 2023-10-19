const http = require('http');

const port = process.env.PORT || 8080;
const customMessage = "Hello we are batch1 Group 2 and tgis is our first cicd deployment";
const customMessage = " cicd deployment 2";
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello, World!</h1><p>${customMessage}</p>`);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
