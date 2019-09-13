var express = require("express");
var User = require("../../models/User");
var jwt = require("jsonwebtoken");
var authToken = require;
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
