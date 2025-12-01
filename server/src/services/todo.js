const todoActions = require("../repositories/todo");

function getTodos(user_id) {
  return todoActions.getTodos(user_id);
}
function addTodo(title, user_id) {
  return todoActions.addTodo(title, user_id);
}
function deleteTodo1(id) {
  console.log("two: " + id);

  return todoActions.deleteTodo(id);
}
async function updateTodo(id) {
  return await todoActions.updateTodo(id);
}

module.exports = { getTodos, addTodo, deleteTodo1, updateTodo };
