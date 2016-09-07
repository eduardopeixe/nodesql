var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'userTest',
  password: '1234',
  database: 'auth'
});
connection.connect();

connection.query('select * from users', function(err, result) {
  console.log(result);
});
