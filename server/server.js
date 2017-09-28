const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || '3000';

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Grazers!\n');
});

server.listen(port, hostname, () => {
  console.log(`Test server running at ${hostname}:${port}`);
});
