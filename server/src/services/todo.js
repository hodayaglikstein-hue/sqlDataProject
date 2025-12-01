const todoActions = require("../repositories/todo");

async function getTodos() {
  return await todoActions.getTodos();
}

async function addTodo() {
  return await todoActions.addTodo();
}
async function deleteTodo() {
  return await todoActions.deleteTodo();
}
async function updateTodo() {
  return await todoActions.updateTodo();
}

module.exports = { getTodos, addTodo, deleteTodo, updateTodo };
