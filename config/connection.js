var mysql = require("mysql");
//var config;

var connection = { 
    mysql: mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  })

}

module.exports = connection

