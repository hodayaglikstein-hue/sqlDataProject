import { useEffect } from "react";
import { useState } from "react";
import { getComments } from "../scripts/commentsapi";
import CommentsData from "./CommentData";
import { getWriterName } from "../scripts/commentsapi";

function Comments(props) {
  const [comments, setComments] = useState([]);

  async function fetchComments(post_id) {
    try {
      const data = await getComments(post_id);
      const parsedData = JSON.parse(data);
      const commentsWithNames = await Promise.all(
        parsedData.map(async (comment) => {
          const writer = await getWriterName(post_id, comment.user_id);
          return { ...comment, writer: JSON.parse(writer) };
        })
      );
      setComments(commentsWithNames);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  }

  useEffect(() => {
    async function firstFetch() {
      await fetchComments(props.post_id);
    }
    firstFetch();
  }, []);
  return (
    <>
      <div className="comments-container">
        <CommentsData comments={comments} />
      </div>
    </>
  );
}

export default Comments;
