var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  tag: {},
  commentsId: {},
  userId: {},
  fovourites: {}
});

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
