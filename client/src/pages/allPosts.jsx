import { useEffect } from "react";
import { getAllPosts, getWriterName } from "../scripts/postsapi";
import { useState } from "react";
import PostData from "../components/PostData";
import AddPostButton from "../components/AddPost";

function Posts() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const data = await getAllPosts();
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
      <h1>Posts</h1>
      <div>
        <AddPostButton setPosts={setPosts} fetchPosts={fetchPosts} />
      </div>
      <div id="all-post-container">
        <PostData posts={posts} />
      </div>
    </>
  );
}

export default Posts;
