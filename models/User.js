var bcrypt = require("bcrypt");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {},
  email: {},
  password: {},
  profilePicture: String,
  bio: String,
  followers: {},
  following: {},
  articlesId: {},
  commentsId: {}
});

var User = mongoose.model("User", userSchema);
module.exports = User;
