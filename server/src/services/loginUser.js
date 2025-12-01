const findUser = require("../repositories/users");

async function loginUser(username, password) {
  const user = await findUser.findUser(username);
  console.log("hey2: ");
  console.log(user);

  if (!user) {
    console.log("User not found");
    return;
  }

  if (user.password !== password) {
    console.log("Username or password are inccorrect");
    return;
  }

  return { username: username, id: user.id, success: true };
}

module.exports = loginUser;
