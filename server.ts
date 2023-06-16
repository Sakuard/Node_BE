import http, { IncomingMessage, ServerResponse } from 'http';
// const http = require('http');
import cors from './cors';
// const cors = require('./cors');
import env from './config';
// const env = require('./config/config');

interface Routes {
  [key: string]: (req: IncomingMessage, res: ServerResponse) => void;
}

const start = function(routes: Routes) {
  const requestListener = function(req: IncomingMessage, res: ServerResponse) {
    console.log(`..`)
    // Setting CORS
    const path = req.url ?? ''
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

// module.exports = { start };
export default { start };
