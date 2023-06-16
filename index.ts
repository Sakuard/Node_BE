// const http = require('http');
import cors from './cors';
// const cors = require('./cors');
import env from './config';
// const env = require('./config/config');
import test from './test';
// const test = require('./test');
import server from './server';
// const server = require('./server');
// import sql from './db_setting';
// const sql = require('./db_setting');

const req = {
  '/test': test.test,
  '/server/test2': test.test2
}

server.start(req);
