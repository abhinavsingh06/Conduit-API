var express = require("express");
var User = require("../../models/User");
var jwt = require("jsonwebtoken");
var authToken = require("../../modules/authToken");
var router = express.Router();

/* GET users listing. */
router.post("/register", (req, res, next) => {
  User.create(req.body, (err, newUser) => {
    if (err) return res.json(err);
    return res.json({ newUser });
  });
});

//login
router.post("/login", (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({email},(err,user)=>{
    if()
  })
});

module.exports = router;
