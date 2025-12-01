var connection = require("../../db/connection.js");

async function getAllPosts() {
  const sql = `SELECT * FROM post`;
  const [rows] = await connection.promise().query(sql);
  console.table(rows);
  return rows;
}

async function getPostsById(user_id) {
  const sql = `SELECT * FROM post WHERE user_id = ${user_id}`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}

async function createPost(user_id, title, body) {
  const sql = `INSERT INTO post (user_id, title, body) VALUES (${user_id}, "${title}", "${body}")`;
  await connection.promise().query(sql);
}

async function deletePost(id) {
  const sql = `DELETE FROM post WHERE id = ${id}`;
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
};
