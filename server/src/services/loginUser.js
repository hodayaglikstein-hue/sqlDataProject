const findUser = require("../repositories/users");

async function loginUser(username, password) {
  const user = await findUser(username);

  if (!user) {
    throw Error("User isn't exist");
  }

  if (user.password !== password) {
    throw Error("Username or password are inccorrect");
  }

  return true;
}

module.exports = loginUser;
