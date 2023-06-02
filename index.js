const http = require('http');
const cors = require('./cors');
const env = require('./config');

const requestListener = function (req, res) {
  // Set CORS headers
  handleCors(req, res, whiteLists)

  const path = req.url
  
  // Handle your API endpoint here
  if (req.url === "/test" && req.method === "GET") {
    console.log(`Executed '/test'`)
    res.writeHead(200);
    res.end('Response from API endpoint');
    return;
  }

  res.writeHead(404);
  res.end();
}

const server = http.createServer(requestListener);
server.listen(8080, () => {
  console.log(`Server is running on port: ${env.PORT}`);
});
