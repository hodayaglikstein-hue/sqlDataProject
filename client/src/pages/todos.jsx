import { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../scripts/todosapi";
function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const user_id = JSON.parse(localStorage.getItem("currentUser")).id;

  useEffect(() => {
    async function fetchTodos(user_id) {
      const data = await getTodos(user_id);
      setTodos(JSON.parse(data));
    }
    fetchTodos(user_id);
  }, []);

  async function fetchTodos(user_id) {
    const data = await getTodos(user_id);
    setTodos(JSON.parse(data));
  }

  async function handleToggle(todoId) {
    const updated = await updateTodo(todoId);
    setTodos((prev) => prev.map((t) => (t.id === todoId ? updated : t)));
    fetchTodos(user_id);
  }
  async function handleAddTodo() {
    if (!newTitle.trim()) return alert("Please enter a todo title");

    const created = await addTodo(user_id, newTitle);
    setTodos((prev) => [...prev, created]);
    setNewTitle("");
    fetchTodos(user_id);
  }
  async function handleDelete(todoId) {
    await deleteTodo(todoId);
    setTodos((prev) => prev.filter((t) => t.id !== todoId));
  }

  return (
    <div>
      <h3> Todos</h3>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed === 1}
              onChange={() => handleToggle(t.id)}
            />{" "}
            {t.title}
            <button onClick={() => handleDelete(t.id)}>-</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          placeholder="New todo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>+</button>
      </div>
    </div>
  );
}
export default TodosPage;
