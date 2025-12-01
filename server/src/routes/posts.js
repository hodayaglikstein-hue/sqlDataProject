var express = require("express");
var router = express.Router();
const postActions = require("../services/post");

router.get("/", function (req, res, next) {
  const posts = postActions.sendAllPosts();
  res.json(posts);
});

router.get("/:user_id", function (req, res, next) {
  if (typeof JSON.parse(req.params.user_id) !== "number") {
    throw Error("Id is wrong");
  }
  const posts = postActions.sendPosts(req.params.user_id);
  res.json(posts);
});

router.post("/new", function (req, res, next) {
  if (!req.body.user_id || !req.body.title || !req.body.body) {
    throw Error("all required");
  }
  postActions.addPosts(req.body.user_id, req.body.title, req.body.body);
});

router.delete("/:id", function (req, res, next) {
  if (typeof JSON.parse(req.params.id) !== "number") {
    throw Error("Id is wrong");
  }
  postActions.removePost(req.params.id);
});

router.patch("/:id/update", function (req, res, next) {
  if (typeof JSON.parse(req.params.id) !== "number") {
    throw Error("Id is wrong");
  }
  if (!req.body.col || !req.body.value) {
    throw Error("NO");
  }
  postActions.changePostContent(req.body.col, req.body.value, req.params.id);
});

module.exports = router;
