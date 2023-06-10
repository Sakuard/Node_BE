console.log(`import db_setting.js`)
const SysDbsetting = require('./config');

const SysDB = SysDbsetting.SysDB;

var Connection = require('tedious').Connection;  
var config = {  
    server: SysDB.Server,  //update me
    port: SysDB.PORT,
    authentication: {
        type: 'default',
        options: {
            userName: SysDB.Name, //update me
            password: SysDB.Password  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: SysDB.Database,  //update me
        trustServerCertificate: true
    }
};
var connection = new Connection(config);  
connection.on('connect', function(err) {
  if(err) {
    console.log(`Err:${err}`);
  } else {
    // execQuery();
  }
});

connection.connect();

const Request = require('tedious').Request;
// const TYPES = require('tedious').TYPES;

function execQuery() {
  console.log('exec execQuery')
  request = new Request(`select*from account;`, function(err, rowCnt) {
    if(err) {
      console.log(`This is query error...`)
      console.log(err);
    } else {
      console.log(`${rowCnt} rows`);
      connection.close();
    };
  });
  request.on('row', function(columns) {
    columns.forEach(function(column) {
      console.log(column.value)
    });
  })
  connection.execSql(request);
}