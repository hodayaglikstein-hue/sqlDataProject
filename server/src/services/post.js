const posts = require("../repositories/post");

async function sendAllPosts() {
  return await posts.getAllPosts();
}

async function sendPosts(user_id) {
  return await posts.getPostsById(user_id);
}

async function sendWriterName(user_id) {
  return await posts.getWriterName(user_id);
}

async function addPosts(user_id, title, body) {
  return await posts.createPost(user_id, title, body);
}

async function removePost(id) {
  await posts.deletePost(id);
}

async function removePostComments(post_id) {
  await posts.deletePostComments(post_id);
}

async function changePostContent(col, value, id) {
  if ((col !== "title" && col !== "body") || value === "") {
    throw Error("invaild col");
  }
  await posts.updatePost(col, value, id);
}

module.exports = {
  sendAllPosts,
  sendPosts,
  addPosts,
  removePost,
  changePostContent,
  sendWriterName,
  removePostComments,
};
