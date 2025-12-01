const todoActions = require("../repositories/todo");

function getTodos(user_id) {
  return todoActions.getTodos(user_id);
}
function addTodo(title, user_id) {
  return todoActions.addTodo(title, user_id);
}
function deleteTodo1(id) {
  return todoActions.deleteTodo(id);
}
function updateTodo(id) {
  return todoActions.updateTodo(id);
}

module.exports = { getTodos, addTodo, deleteTodo1, updateTodo };
