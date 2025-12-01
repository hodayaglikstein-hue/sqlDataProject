const comment = require("../repositories/comment");

async function sendAllPostComments(post_id) {
  return await comment.getAllPostComments(post_id);
}

function sendCommentById(id) {
  comment.getCommentById(id);
}

async function sendWriterName(user_id) {
  return await comment.getWriterName(user_id);
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
  sendWriterName,
};
