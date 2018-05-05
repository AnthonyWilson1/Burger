var express = require("express");
var commands = require('../models/burger.js')


module.exports = {
    all: (param) => {
         return commands.all(param)
    },
    allApi: () => {
        return commands.api()
    },
    update: (param,param2) => {
         return commands.update(param,param2);
    },
    insert: (param,param2) => {
        return commands.insert(param);
   },
}

