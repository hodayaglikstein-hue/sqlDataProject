const url = "http://localhost:3000/posts";

export async function getAllPosts() {
  try {
    const res = await fetch(`${url}`);
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to fetch posts: " + err);
  }
}

export async function getUserPosts(user_id) {
  try {
    const res = await fetch(`${url}/byuser/${user_id}`);
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to fetch user posts: " + err);
  }
}

export async function getWriterName(user_id) {
  try {
    const res = await fetch(`${url}/name/${user_id}/getname`);
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to fetch writer name: " + err);
  }
}

export async function addPost(user_id, title, body) {
  try {
    const res = await fetch(`${url}/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        title,
        body,
      }),
    });
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to fetch post creation: " + err);
  }
}

export async function updatePost(col, value, post_id) {
  try {
    return await fetch(`${url}/${post_id}/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        col,
        value,
      }),
    });
  } catch (err) {
    alert("failed to fetch post update: " + err);
  }
}

export async function deletePost(post_id) {
  try {
    return await fetch(`${url}/${post_id}`, { method: "DELETE" });
  } catch (err) {
    alert("failed to fetch post delete: " + err);
  }
}
