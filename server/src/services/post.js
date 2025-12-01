const posts = require("../repositories/post");

function sendAllPosts() {
  posts.getAllPosts();
}

function sendPosts(user_id) {
  posts.getPostsById(user_id);
}

function addPosts(user_id, title, body) {
  posts.createPost(user_id, title, body);
}

function removePost(id) {
  posts.deletePost(id);
}

function changePostContent(col, value, id) {
  if ((col !== "title" && col !== "body") || value === "") {
    throw Error("invaild col");
  }
  posts.updatePost(col, value, id);
}

module.exports = {
  sendAllPosts,
  sendPosts,
  addPosts,
  removePost,
  changePostContent,
};
