const http = require('http');
const cors = require('./cors');
const env = require('./config/config');
const test = require('./test');
const server = require('./server');
const sql = require('./db_setting');

const req = {
  '/test': test.test,
  '/server/test2': test.test2
}

server.start(req);
