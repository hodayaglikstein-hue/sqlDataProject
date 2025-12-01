var express = require("express");
const todoActions = require("../services/todo");
var router = express.Router();

router.get("/:user_id", async function (req, res) {
  try {
    const todos = await todoActions.getTodos(req.params.user_id);
    res.json(todos);
  } catch (error) {
    console.log("error");
  }
});

router.post("/:user_id/new", function (req, res, next) {
  todoActions.addTodo(req.body.title, req.params.user_id);

  res.send("succses");
});

router.delete("/:user_id/delete", function (req, res, next) {
  todoActions.deleteTodo(req.body.id);
  res.send("success");
});

router.patch("/:user_id/update", function (req, res, next) {
  todoActions.updateTodo(req.body.completed);
  res.send("success");
});

module.exports = router;
