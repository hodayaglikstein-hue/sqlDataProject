const todoActions = require("../repositories/user");

async function addUser() {
  return await todoActions.addTodo();
}

module.exports = { addUser };
