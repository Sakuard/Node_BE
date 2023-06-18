'use strinct';
console.log('import db_mssql.js ...');

const sql = require('mssql/msnodesqlv8');
const config = require('./config')

const CommonQuery = async (params) => {
  // console.log(`Exec CommonQuery ...`)
  // console.log(params)
  try {
    let pool = await sql.connect(config.newSetting);
    let results = await pool.request().query(`select*from ${params}`);
    return results.recordsets;
  } catch (err) {
    console.log(err);
  }
}


module.exports = { CommonQuery };
