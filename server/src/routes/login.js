var express = require("express");
const loginUser = require("../services/loginUser");
var router = express.Router();

router.post("/", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  console.log("h");

  if (!username || !password) {
    return Error("Username and passsword are required");
  }

  // if (username.length < 1 || password.length < 8) {
  //   throw Error("Username length or password length are wrong");
  // }

  const user = await loginUser(username, password);

  const success = user.success;

  if (!success) {
    console.log("Username or password are wrong");
    return;
  } else {
    console.log("logging in");
    res.json({ username: user.username, id: user.id });
  }
});

module.exports = router;
