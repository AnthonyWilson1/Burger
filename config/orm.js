const con = require('./connection.js')
const pool = con;

var methods = {
insertOne: function(valOfBurger) {
    return new Promise ((resolve,reject) => {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES (?);'
    pool.query(queryString, [valOfBurger], function (error, results) {
    if (error) {reject(error) } else{
    resolve(`Inserted ${valOfBurger} into burgers.`)
    }
    })
    })
},
updateOne: function(valOfState,valOfId) {
    return new Promise ((resolve,reject) => {
    var queryString = 'UPDATE burgers SET devoured = (?) WHERE id = (?);'
    pool.query(queryString,[valOfState,valOfId], function (error, results) {
    if (error) {reject(error) } else{
    resolve(`Inserted ${valOfState} & ${valOfId} into burgers.`)
    }
    })
    })
},
selectApi: function () { 
    return new Promise ((resolve,reject) => {
        var queryString = 'SELECT * FROM burgers;'
        pool.query(queryString, function (error, results) {
        if (error) {reject(error) } else{
        resolve(results)
        }
        })
    })
},
}

module.exports = methods