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
  const created = await todoActions.addTodo(req.body.title, req.params.user_id);
  res.send(created);
});

router.delete("/:todo_id/delete", async function (req, res, next) {
  await todoActions.deleteTodo1(req.params.todo_id);
  res.send("success");
});

router.patch("/:todo_id/update", async function (req, res, next) {
  const updated = await todoActions.updateTodo(req.params.todo_id);
  res.send(updated);
});

module.exports = router;
