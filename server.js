const http = require('http');
const cors = require('./cors');
const env = require('./config');

const start = function(routes) {
  const requestListener = function(req, res) {
    console.log(`..`)
    // Setting CORS
    const path = req.url
    console.log(path);
    cors.handleCors(req, res, cors.whiteLists)

    if (typeof routes[path] === 'function') {
      console.log(`Executed ${path}, is a function`)
      routes[path](req, res);
      return;
    }

    res.writeHead(404);
    res.end();
  }

  const server = http.createServer(requestListener);
  server.listen(8080, () => {
    console.log(`Server is running on port: ${env.PORT}`);
  });
}

module.exports = { start };
