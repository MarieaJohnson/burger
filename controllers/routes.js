var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render("index", {burger_data});
  })
})

router.put("/burgers/update", function(req, res){
  burger.update(req.body.burger_id, function(result){
    console.log(res);
    res.redirect("/");
  });
});

router.post("/burgers/create", function(requ,res){
  burger.create(req.body._name);
})

module.exports = router;