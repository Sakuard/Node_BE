const http = require('http');

const requestListener = function (req, res) {
  const whiteLists = [
    'http://127.0.0.1:5173',
    'http://localhost:5173'
  ]
  // Set CORS headers
  // console.log(req)
  // console.log(res)
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');
  // Handle Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
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
  console.log('Server is running on port 8080');
});
