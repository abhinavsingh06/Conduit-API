var express = require("express");
var Comment = require("../../models/Comment");
var Article = require("../../models/Article");
var authToken = require("../../modules/authToken");
var router = express.Router();

//read comments using article id
router.get("/:articleId", (req, res, next) => {
  var id = req.params.articleId;
  Comment.find({ articleId: id }, (err, comments) => {
    if (err) return res.json({ msg: "could not find comments" });
    res.json({ comments });
  });
});

router.use(authToken.authToken);

//add comments
router.post("/add/:articleId", (req, res, next) => {
  var id = req.params.articleId;
  req.body.articleId = id;
  req.body.userId = req.userid;
  Comment.create(req.body, (err, newComment) => {
    if (err) return res.json();
  });
});
