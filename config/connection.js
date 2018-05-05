var mysql = require("mysql");
//var config;
// var connection; 

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = { 
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"

};
}

module.exports = connection

