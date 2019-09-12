var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  tag: { type: String },
  commentsId: { type: [Schema.Types.ObjectId], ref: "Comment" },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  fovourites: { type: Schema.Types.ObjectId, ref: "User" }
});

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
