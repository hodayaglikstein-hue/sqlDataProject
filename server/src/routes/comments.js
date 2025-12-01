var express = require("express");
var router = express.Router({ mergeParams: true });
const commentsActions = require("../services/comment");

router.get("/", async function (req, res, next) {
  const comments = await commentsActions.sendAllPostComments(
    req.params.post_id
  );
  console.log("COMMENTS!!");
  console.log("comments1: " + comments);
  res.json(comments);
});

router.get(
  //
  "/:user_id/getname",
  async function (req, res, next) {
    if (typeof JSON.parse(req.params.user_id) !== "number") {
      throw Error("Id is wrong");
    }

    const name = await commentsActions.sendWriterName(req.params.user_id);
    res.json(name);
  }
);

router.post("/new", function (req, res, next) {
  if (!req.body.user_id || !req.body.title || !req.body.body) {
    throw Error("all required");
  }
  commentsActions.addComment(
    req.body.user_id,
    req.params.post_id,
    req.body.title,
    req.body.body
  );
});

router.delete("/:id", function (req, res, next) {
  if (typeof JSON.parse(req.params.id) !== "number") {
    throw Error("Id is wrong");
  }
  commentsActions.removeComment(req.params.id);
});

router.patch("/:id/update", function (req, res, next) {
  if (typeof JSON.parse(req.params.id) !== "number") {
    throw Error("Id is wrong");
  }
  if (!req.body.col || !req.body.value) {
    throw Error("NO");
  }
  commentsActions.changeCommentContent(
    req.body.col,
    req.body.value,
    req.params.id
  );
});

module.exports = router;
