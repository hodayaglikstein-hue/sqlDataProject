import { updatePost } from "../scripts/postsapi";

function UpdatePost(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    const col = e.target.elements.col.value;
    const value = e.target.elements.body.value;
    try {
      const success = await updatePost(col, value, props.post_id);
      if (!success) {
        throw Error("Something went wrong with updating the post");
      }
      await props.fetchPosts();
    } catch (err) {
      console.log("error - " + err);
    }
    e.target.elements.col.value = "title";
    e.target.elements.body.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="col">What to update:</label>
        <select id="col" name="col">
          <option value="title">Title</option>
          <option value="body">Body</option>
        </select>
        <label htmlFor="body">Value:</label>
        <textarea id="body" name="body" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UpdatePost;
