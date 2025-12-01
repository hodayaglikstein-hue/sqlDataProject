const url = "http://localhost:3000/todo";

export async function getTodos(user_id) {
  try {
    const res = await fetch(`${url}/${user_id}`);
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to load todos" + err);
  }
}

export async function addTodo(user_id, title) {
  try {
    const res = await fetch(`${url}/${user_id}/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        title,
      }),
    });
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to add todo" + err);
  }
}

export async function deleteTodo(todo_id) {
  try {
    await fetch(`${url}/${todo_id}/delete`, { method: "DELETE" });
  } catch (err) {
    alert("failed to delete todo" + err);
  }
}

export async function updateTodo(todo_id) {
  try {
    const res = await fetch(`${url}/${todo_id}/update`, { method: "PATCH" });
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to update todo" + err);
  }
}
