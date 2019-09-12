var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  articleId: { type: Schema.Types.ObjectId, ref: "Article", required: true },
  commentField: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
});

var Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
