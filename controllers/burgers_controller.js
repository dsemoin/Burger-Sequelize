//Import express and burger.js 
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all routes and set up logic 
router.get("/", function (req, res) {
  burger.findAll().then(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  // This is to delete a burger
  if (req.body._method === "DELETE") {
    burger.destroy({
      where: {
      name: req.body.name
      }
    }).then(function (result) {
      // Send back the ID of the new quote
      res.redirect('/');
    });
  } else {
    burger.create({
      name: req.body.name
    }).then(function (result) {
      // Send back the ID of the new quote
      res.redirect('/');
    });
  }
});

router.post("/api/burgers/:id", function (req, res) {
  burger.update(
    {devoured: true},
    {where: {id:req.params.id}}
  ).then(
      res.redirect('/')
  );
});
// Export routes
module.exports = router;