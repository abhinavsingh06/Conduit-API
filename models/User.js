var bcrypt = require("bcrypt");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, match: /@/, unique: true },
  password: { type: String, required: true },
  profilePicture: String,
  bio: String,
  followers: { type: [] },
  following: { type: [] },
  articlesId: { type: [Schema.Types.ObjectId], ref: "Article" },
  commentsId: { type: [Schema.Types.ObjectId], ref: "Comment" }
});

userSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("User", userSchema);
module.exports = User;
