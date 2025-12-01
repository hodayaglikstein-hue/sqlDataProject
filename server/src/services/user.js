const userActions = require("../repositories/users");

async function addUser(username, email) {
  return await userActions.addUser(username, email);
}

module.exports = { addUser };
