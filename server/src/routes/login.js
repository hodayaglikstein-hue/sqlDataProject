var express = require("express");
const loginUser = require("../services/loginUser");
var router = express.Router();

router.post("/", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    throw Error("Username and passsword are required");
  }

  if (username.length < 1 || password.length < 8) {
    throw Error("Username length or password length are wrong");
  }

  const success = loginUser(username, password);

  if (!success) {
    throw Error("Username or password are wrong");
  } else {
    console.log("logging in");
  }
});

module.exports = router;
