var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'my_db'
});

exports.insert_data = function (name,pass,callback) {
    connection.connect();
    var sql='insert into'
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        callback(error,results);
        connection.end();
    });
}