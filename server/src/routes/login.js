var express = require("express");
const loginUser = require("../services/loginUser");
var router = express.Router();

router.post("/", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return Error("Username and passsword are required");
  }

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
