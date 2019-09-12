var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  articleId: {},
  commentField: {},
  userId: {}
});

var Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
