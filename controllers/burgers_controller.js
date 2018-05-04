var express = require("express");
var commands = require('../models/burger.js')


module.exports = {
    all: (param) => {
         return commands.all(param)
    },
    // allFalse: (param) => {
    //     commands.all(param)
    // },
    allApi: () => {
        return api
    },
    update: (param) => {
         commands.update(param);
    },
    insert: (param) => {
        commands.insert(param);
   },
}

