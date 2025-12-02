var connection = require("../../db/connection.js");

async function getTodos(user_id) {
  const sql = `SELECT * FROM todo WHERE user_id = ${user_id}`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}
async function addTodo(title, user_id) {
  return await connection
    .promise()
    .query(`insert into todo (title, user_id) values('${title}', ${user_id})`);
}
function deleteTodo(id) {
  return connection.promise().query(`delete from todo where id=${id}`);
}

async function updateTodo(id) {
  const isCompleted = await getCompletedById(id);
  let setCompleted = 0;
  isCompleted === 1 ? (setCompleted = 0) : (setCompleted = 1);
  getCompletedById(id);
  const [rows] = await connection
    .promise()
    .query(`update todo set completed=${setCompleted} where id=${id}`);
  return await getTodoById(id);
}

async function getCompletedById(id) {
  const [rows] = await connection
    .promise()
    .query(`SELECT completed FROM todo WHERE id=${id}`);
  return rows[0].completed;
}

async function getTodoById(id) {
  const sql = `SELECT * FROM todo where id = ${id}`;
  const [rows] = await connection.promise().query(sql);
  return rows;
}

module.exports = { getTodos, addTodo, deleteTodo, updateTodo };
