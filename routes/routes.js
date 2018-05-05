var express = require("express");
const router = require('express').Router()
const controller = require('../controllers/burgers_controller.js')


router.get('/', (req,res, next) => {
    allBurgers = controller.allApi();
    allBurgers.then( (result) => {
    console.log(result)
    res.render('index', {burger: result})
    });
})

router.get('/burgers', (req,res, next) => {
    var all = controller.allApi()
    all.then( (result) => {
        res.json(result);
})
})

router.put('/burgers/:id', (req,res, next) => {
    var changeState = controller.update(req.body.state, req.params.id)
    changeState.then((fromResolve) => {console.log(fromResolve)})
    res.status(200).end();
})

router.post("/burgers", function(req, res, next) {
      var update = controller.insert(req.body.burger)
      update.then((fromResolve) => {console.log(fromResolve)})
      res.status(200).end();
});

module.exports = {
    route: router,
}