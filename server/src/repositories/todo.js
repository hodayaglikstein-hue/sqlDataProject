var connection = require("../../db/connection.js");

function getTodos(username) {
  const sql = `SELECT * FROM user`;
  const res = connection.promise().query(sql);
  return res;
}
function addTodo(title) {
  return connection
    .promise()
    .query(`insert into todo (title) values('${title}'`);
}
function deleteTodo(id) {
  return connection.promise().query(`delete from todo where id= ${id}`);
}

function updateTodo(id) {
  return connection
    .promise()
    .query(`update todo set completed=1 where id=${id}`);
}

module.exports = { getTodos, addTodo, deleteTodo, updateTodo };
