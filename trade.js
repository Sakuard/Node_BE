'use strinct';
console.log(`import trade.js ...`)

const { CommonQuery } = require('./config/db_mssql')

const GetAccountData = () => {
  const TableFunctionName = 'dbo.Trade_GetAccountData()'
  return CommonQuery(TableFunctionName);
}


exports.DoTradeLogin = function(params) {
  console.log(params)
}

// const DoTradeLogin = (params) => {
//   console.log(params)
// }



module.exports = { GetAccountData };