var express = require("express");
var router = express.Router();
const postActions = require("../services/post");

router.get("/", async function (req, res, next) {
  const posts = await postActions.sendAllPosts();
  res.json(posts);
});

router.get("/byuser/:user_id", async function (req, res, next) {
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

router.delete("/:id", async function (req, res, next) {
  if (typeof JSON.parse(req.params.id) !== "number") {
    throw Error("Id is wrong");
  }
  try {
    await postActions.removePost(req.params.id);
    return true;
  } catch (err) {
    return false;
  }
});

router.delete("/:post_id/all", function (req, res, next) {
  if (typeof JSON.parse(req.params.post_id) !== "number") {
    throw Error("Id is wrong");
  }
  postActions.removePostComments(req.params.post_id);
});

router.patch("/:id/update", async function (req, res, next) {
  if (typeof JSON.parse(req.params.id) !== "number") {
    throw Error("Id is wrong");
  }
  if (!req.body.col || !req.body.value) {
    throw Error("NO");
  }
  try {
    await postActions.changePostContent(
      req.body.col,
      req.body.value,
      req.params.id
    );
    res.json(true);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

module.exports = router;
