'use strinct';
const http = require('http');
const cors = require('./cors');
const env = require('./config/config');
require('./trade');
require('./config/db_mssql');

const start = function(routes) {
  const requestListener = async function(req, res) {

    const path = req.url.toLowerCase();
    const ip = req.headers.origin;
    console.log(`request from IP: ${ip}, request API: ${path}`);
    // Setting CORS
    cors.handleCors(req, res, cors.whiteLists)

    if (typeof routes[path] === 'function') {
      // console.log(`Executed ${path}`)
      let result = await routes[path]();
      res.writeHead(200, {'content-type': 'application/json'});
      res.end(JSON.stringify(result));
      return res;
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
