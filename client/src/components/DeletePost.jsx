import { deletePost } from "../scripts/postsapi";

function DeletePost(props) {
  async function handleDelete() {
    try {
      const success = await deletePost(props.post_id);
      if (!success) {
        throw Error("Something went wrong with updating the post");
      }
      await props.fetchPosts();
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default DeletePost;
