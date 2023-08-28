const config  = require("config");
const mysql = require("mysql");
const mysql_connection = mysql.createConnection({
    host    : config.get("mysql-config.host"),
    port    : config.get("mysql-config.port"),
    database: config.get("mysql-config.database"),
    user    : config.get("mysql-config.user"),
    password: config.get("mysql-config.password"),
})
mysql_connection.connect();

function getConnection(){
    if(!mysql_connection) mysql_connection.connect();
    return mysql_connection;
}
module.exports = {
    getConnection:getConnection
}