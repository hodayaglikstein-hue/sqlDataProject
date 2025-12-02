import { useState } from "react";
import Comments from "./Comments";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";

function PostData(props) {
  const [commentShow, setCommentShow] = useState(false);
  const [commentPostId, setCommentPostId] = useState(null);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      {props.posts.map((post) => (
        <div key={post.id}>
          <div className="post-container">
            <h2
              onClick={() => {
                setCommentShow(!commentShow);
                setCommentPostId(post.id);
              }}
            >
              {post.writer} - {post.title}
            </h2>
            <h3>{post.body}</h3>
            <h4>Post Id: {post.id}</h4>

            {commentShow && post.id === commentPostId && (
              <Comments post_id={post.id} />
            )}

            {user.id === post.user_id && (
              <>
                <UpdatePost post_id={post.id} fetchPosts={props.fetchPosts} />
                <DeletePost post_id={post.id} fetchPosts={props.fetchPosts} />
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default PostData;
