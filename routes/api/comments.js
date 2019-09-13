var express = require("express");
var Comment = require("../../models/Comment");
var Article = require("../../models/Article");
var authToken = require("../../modules/authToken");
var router = express.Router();
