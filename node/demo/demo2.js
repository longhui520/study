
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'think'
});
 
connection.connect();
 
connection.query('select * from tt_demo', function (error, results, fields) {
  if (error) throw error;
  console.log(JSON.stringify(results));
  console.log(JSON.stringify(fields));
});
