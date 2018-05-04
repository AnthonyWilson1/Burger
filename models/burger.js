const method = require('../config/orm.js')

module.exports = {
    all: (param)=>method.selectAll(param),
    insert: (param)=>method.insertOne(param),
    update: (param)=>method.updateOne(param),
    api: () => method.selectApi()
}
