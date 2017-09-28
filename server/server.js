const http = require('http');
const port = process.env.PORT || '3000';

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Grazers!\n');
});

server.listen(port, () => {
  console.log(`Test server running on port ${port}`);
});
