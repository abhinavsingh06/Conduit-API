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
