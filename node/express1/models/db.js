var mysql = require('mysql');
var pool = mysql.createPool({
    connnectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'node1'
});

exports.query = function (sql, params, callback) {
    pool.query(sql,params,function(errors,results,fields){
        if(error) throw error;
        callback(error,results);
    });
}