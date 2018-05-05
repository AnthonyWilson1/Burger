const method = require('../config/orm.js')

module.exports = {
    insert: (param)=>method.insertOne(param),
    update: (param,param2)=>method.updateOne(param,param2),
    api: () => method.selectApi()
}
