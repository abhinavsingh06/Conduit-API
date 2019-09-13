var express = require("express");
var Article = require("../../models/Article");
var User = require("../../models/User");
var Tag = require("../../models/Tag");
var Comment = require("../../models/Comment");
var authToken = require("../../modules/authToken");
var router = express.Router();

//display articles
router.get("/", (req, res, next) => {
  Article.find({}, (err, allArticles) => {
    if (err) return res.json({ msg: "Couldn't fetch articles" });
    return res.json({ allArticles });
  });
});

//display particular article
router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  Article.findById(id, (err, article) => {
    if (err) return res.json({ msg: "cannot fetch article" });
    return res.json({ article });
  });
});

//update an article
router.put("/update/:id", (req, res, next) => {
  var id = req.params.id;
  var loggedInUser = req.userid;

  Article.findById(id, (err, article) => {
    if (err) return res.json({ msg: "Could not find the article" });
    if (loggedInUser == article.userid) {
      Article.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
        (err, updatedArticle) => {
          if (err) return res.json({ msg: "could not update article" });
          return res.json({ updatedArticle });
        }
      );
    } else {
      return res.json({ msg: "You are not authorized to edit this article" });
    }
  });
});
