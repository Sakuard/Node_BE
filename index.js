'use strinct';
const cors = require('./cors');
const test = require('./test');
const server = require('./server');
const db_mssql = require('./config/db_mssql')
const trade = require('./trade')

const req = {
  '/test': test.test,
  '/server/test2': test.test2,
  '/server/cq': db_mssql.CommonQuery,
  '/sys/trade/login': trade.DoTradeLogin,
  '/trade/account/getdata': trade.GetAccountData
}

server.start(req);
