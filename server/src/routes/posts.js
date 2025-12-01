var express = require("express");
var router = express.Router();
const postActions = require("../services/post");

router.get("/", async function (req, res, next) {
  const posts = await postActions.sendAllPosts();
  res.json(posts);
});

router.get("/username/:user_id", async function (req, res, next) {
  console.log("here");
  if (typeof JSON.parse(req.params.user_id) !== "number") {
    throw Error("Id is wrong");
  }
  const posts = await postActions.sendPosts(req.params.user_id);
  res.json(posts);
});

router.get("/:username/:user_id/getname", async function (req, res, next) {
  if (typeof JSON.parse(req.params.user_id) !== "number") {
    throw Error("Id is wrong");
  }

  const name = await postActions.sendWriterName(req.params.user_id);
  res.json(name);
});

router.post("/new", async function (req, res, next) {
  if (!req.body.user_id || !req.body.title || !req.body.body) {
    throw Error("all required");
  }
  const created = await postActions.addPosts(
    req.body.user_id,
    req.body.title,
    req.body.body
  );
  res.json(created);
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
