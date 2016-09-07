var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'userTest',
  password: '1234',
  database: 'auth'
});
connection.connect();

var user = {
  username  : 'testUser',
  name      : 'test user',
  password  : '1234'
};

var query = connection.query('insert into users set ?', user, function (err, result){
  if(err){
    console.log(err);
    return;
  }
    console.log(result);
});
