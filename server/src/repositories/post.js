var connection = require("../../db/connection.js");

async function getAllPosts() {
  const sql = `SELECT * FROM post`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}

async function getPostsById(user_id) {
  const sql = `SELECT * FROM post WHERE user_id = ${user_id}`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}

async function getWriterName(user_id) {
  const sql = `SELECT username FROM user WHERE id = ${user_id}`;
  const [rows] = await connection.promise().query(sql);
  return rows[0].username;
}

async function createPost(user_id, title, body) {
  const sql = `INSERT INTO post (user_id, title, body) VALUES (${user_id}, "${title}", "${body}")`;
  return await connection.promise().query(sql);
}

async function deletePost(id) {
  deletePostComments(id);
  const sql = `DELETE FROM post WHERE id = ${id}`;
  await connection.promise().query(sql);
}

async function deletePostComments(post_id) {
  const sql = `DELETE FROM comment WHERE post_id = ${post_id}`;
  await connection.promise().query(sql);
}

async function updatePost(col, value, id) {
  const sql = `UPDATE post SET ${col} = "${value}" WHERE id=${id}`;
  await connection.promise().query(sql);
}

module.exports = {
  getAllPosts,
  getPostsById,
  createPost,
  deletePost,
  updatePost,
  getWriterName,
  deletePostComments,
};
