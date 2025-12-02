import { useEffect } from "react";
import { getUserPosts, getWriterName } from "../scripts/postsapi";
import { useState } from "react";
import PostData from "../components/PostData";
import AddPostButton from "../components/AddPost";

function UserPosts() {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  async function fetchPosts() {
    try {
      const data = await getUserPosts(user.id);
      const parsedData = JSON.parse(data);
      const postsWithNames = await Promise.all(
        parsedData.map(async (post) => {
          const writer = await getWriterName(post.user_id);
          return { ...post, writer: JSON.parse(writer) };
        })
      );
      setPosts(postsWithNames);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  }

  useEffect(() => {
    async function firstFetch() {
      fetchPosts();
    }
    firstFetch();
  }, []);

  return (
    <>
      <h1>{user.username}'s Posts</h1>
      <div>
        <AddPostButton setPosts={setPosts} fetchPosts={fetchPosts} />
      </div>
      <div id="all-post-container">
        <PostData posts={posts} fetchPosts={fetchPosts} />
      </div>
    </>
  );
}

export default UserPosts;
