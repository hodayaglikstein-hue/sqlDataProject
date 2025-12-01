import { useState } from "react";
import Comments from "./Comments";

function PostData(props) {
  const [commentShow, setCommentShow] = useState(false);
  const [commentPostId, setCommentPostId] = useState(null);

  return (
    <>
      {props.posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2
            onClick={() => {
              setCommentShow(!commentShow);
              setCommentPostId(post.id);
            }}
          >
            {post.title}
          </h2>
          <h3>{post.body}</h3>
          <h4>Post Id: {post.id}</h4>
          <h4>User Id: {post.user_id}</h4>
          <h4>Writer: {post.writer}</h4>

          {commentShow && post.id === commentPostId && (
            <Comments post_id={post.id} />
          )}
        </div>
      ))}
    </>
  );
}

export default PostData;
