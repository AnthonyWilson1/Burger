var express = require("express");
const router = require('express').Router()
const controller = require('../controllers/burgers_controller.js')


router.get('/', (req,res, next) => {
    allBurgers = controller.all(0)
    allBurgers.then( (result) => {
    res.render('index', {burger: result})
    })
})

// router2.get('/burgers', (req,res, next) => {
//     var all = controller.allApi()
//     all.then( (result) => {
//         res.json(result)
// })
// })

// router3.put('/burgers/:id', (req,res, next) => {
//     controller.update(req.params.id);
//     res.status(200).end();
// })

router.post("/burgers", function(req, res, next) {
     controller.insert(req.body.burger);
});

module.exports = {
    route: router,
}