var express = require("express");
const userActions = require("../services/user");
var router = express.Router();

router.post("/", function (req, res, next) {
  userActions.addUser(req.body.username, req.body.email);

  res.send("succses");
});

module.exports = router;
