var express = require("express");
const todoActions = require("../services/todo");
var router = express.Router();

router.get("/:user_id", async function (req, res) {
  try {
    const todos = await todoActions.getTodos(req.params.user_id);
    res.json(todos);
  } catch (error) {
    console.log("error1");
  }
});

router.post("/:user_id/new", async function (req, res, next) {
  console.log("title1: " + req.body.title);
  await todoActions.addTodo(req.body.title, req.params.user_id);
  res.send("succses");
});

router.delete("/:id/delete", async function (req, res, next) {
  await todoActions.deleteTodo1(req.params.id);
  res.send("success");
});

router.patch("/:id/update", async function (req, res, next) {
  await todoActions.updateTodo(req.params.id);
  res.send("success");
});

module.exports = router;
