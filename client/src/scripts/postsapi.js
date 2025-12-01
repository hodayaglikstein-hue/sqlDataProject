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

export async function getUserPosts(username, user_id) {
  try {
    const res = await fetch(`${url}/${username}/${user_id}`);
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
