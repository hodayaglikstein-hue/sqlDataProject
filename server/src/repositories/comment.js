var connection = require("../../db/connection.js");

async function getAllPostComments(post_id) {
  const sql = `SELECT * FROM comment WHERE post_id = ${post_id}`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}

async function getWriterName(user_id) {
  const sql = `SELECT username FROM user WHERE id = ${user_id}`;
  const [rows] = await connection.promise().query(sql);
  return rows[0].username;
}

async function getCommentById(id) {
  const sql = `SELECT * FROM comment WHERE id = ${id}`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}

async function createComment(user_id, post_id, title, body) {
  const sql = `INSERT INTO comment (user_id, post_id, title, body) VALUES (${user_id}, ${post_id}, "${title}", "${body}")`;
  await connection.promise().query(sql);
}

async function deleteComment(id) {
  const sql = `DELETE FROM comment WHERE id = ${id}`;
  await connection.promise().query(sql);
}

async function updateComment(col, value, id) {
  const sql = `UPDATE comment SET ${col} = "${value}" WHERE id=${id}`;
  await connection.promise().query(sql);
}

module.exports = {
  getAllPostComments,
  getCommentById,
  createComment,
  deleteComment,
  updateComment,
  getWriterName,
};
