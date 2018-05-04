const con = require('./connection.js')
const pool = con.mysql

var methods = {
selectAll: function (valOfDev) { 
    return new Promise ((resolve,reject) => {
        var queryString = 'SELECT * FROM burgers WHERE devoured = ?;'
        pool.query(queryString,[valOfDev], function (error, results) {
        if (error) reject(error)
        resolve(results)
        })
    })
},
insertOne: function(valOfBurger) {
    return new Promise ((resolve,reject) => {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES (?);'
    pool.query(queryString, [valOfBurger], function (error, results) {
    if (error) reject(error)
    resolve(`Inserted ${valOfBurger} into burgers.`)
        })
    })
},
updateOne: function(valOfId) {
    return new Promise ((resolve,reject) => {
    var queryString = 'UPDATE burgers SET devoured = 1 WHERE id = ?'
    pool.query(queryString,[valOfId], function (error, results) {
    if (error) reject(error)
    resolve(`Inserted ${valOfId} into burgers.`)
        })
    })
},
selectApi: function () { 
    return new Promise ((resolve,reject) => {
        var queryString = 'SELECT * FROM burgers;'
        pool.query(queryString, function (error, results) {
        if (error) reject(error)
        resolve(results)
        })
    })
},
}

module.exports = methods