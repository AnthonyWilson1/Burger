var mysql = require("mysql");
//var config;
var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = { 
    mysql: mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  })

}
}

module.exports = connection

