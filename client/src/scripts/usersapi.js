const url = "http://localhost:3000/login";

export async function login(username, password) {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    alert("failed to login " + err);
  }
}
