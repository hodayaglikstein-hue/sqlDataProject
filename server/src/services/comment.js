const comment = require("../repositories/comment");

function sendAllPostComments(post_id) {
  console.log("postid: " + post_id);
  comment.getAllPostComments(post_id);
}

function sendCommentById(id) {
  comment.getCommentById(id);
}

function addComment(user_id, post_id, title, body) {
  comment.createComment(user_id, post_id, title, body);
}

function removeComment(id) {
  comment.deleteComment(id);
}

function changeCommentContent(col, value, id) {
  if ((col !== "title" && col !== "body") || value === "") {
    throw Error("invaild col");
  }
  comment.updateComment(col, value, id);
}

module.exports = {
  sendAllPostComments,
  sendCommentById,
  addComment,
  removeComment,
  changeCommentContent,
};
