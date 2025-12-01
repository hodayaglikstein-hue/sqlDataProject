import { useEffect } from "react";
import { getUserPosts } from "../scripts/postsapi";
import { useState } from "react";

function UserPosts() {
  const [posts, setPosts] = useState([]);
  async function fetchPosts() {
    const data = await getUserPosts(user.username, user.id);
    const parsedData = JSON.parse(data);
    setPosts(parsedData);
  }

  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    async function firstFetch() {
      fetchPosts();
    }
    firstFetch();
  }, []);

  // JSON.parse(localStorage.getItem("currentUser")).id;

  return (
    <>
      <h1>{user.username}'s, Posts</h1>
      <div id="all-post-container">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post-container">
              <h2>{post.title}</h2>
              <h3>{post.body}</h3>
              <h4>Post Id: {post.id}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserPosts;
