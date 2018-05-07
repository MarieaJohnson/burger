// import burger.js

var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  burger.all(function (burgers_data) {
    console.log(burgers_data);
    res.render("index", { burgers_data });
  })
})

router.put("/burgers/update", function (req, res) {
  burger.update(req.body.burger_id, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burgerType, function (result) {
    console.log(res);
    res.redirect("/");
  });
})

module.exports = router;