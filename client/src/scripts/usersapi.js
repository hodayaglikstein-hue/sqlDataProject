const url = "http://localhost:3000/users";

export async function login(username, password) {
  try {
    await fetch(`${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  } catch (err) {
    alert("failed to login");
  }
}
