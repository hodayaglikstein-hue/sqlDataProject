const url = "http://localhost:3000/posts";
// /posts/:post_id/comments

export async function getComments(post_id) {
  try {
    const res = await fetch(`${url}/${post_id}/comments`);
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to fetch comments: " + err);
  }
}
export async function getWriterName(post_id, user_id) {
  try {
    const res = await fetch(`${url}/${post_id}/comments/${user_id}/getname`);
    const data = await res.json();
    return JSON.stringify(data);
  } catch (err) {
    alert("failed to fetch writer name: " + err);
  }
}
