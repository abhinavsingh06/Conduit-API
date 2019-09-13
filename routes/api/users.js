var express = require("express");
var User = require("../../models/User");
var jwt = require("jsonwebtoken");
var authToken = require("../../modules/authToken");
var router = express.Router();

//register
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

  User.findOne({ email }, (err, user) => {
    if (err) return res.json({ msg: "User not found" });
    if (!user) return res.json({ msg: "User not registered" });
    if (!user.validatePassword(password))
      returnres.json({ msg: "Incorrect password" });
    var token = jwt.sign({ userId: user._id }, process.env.secret);
    return res.json({ token });
  });
});

router.use(authToken.authToken);

module.exports = router;
