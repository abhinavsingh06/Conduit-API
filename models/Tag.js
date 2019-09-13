var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  articleId: [{ type: Schema.Types.ObjectId, ref: "Article", required: true }],
  tagContent: { type: String, required: true }
});

var Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
