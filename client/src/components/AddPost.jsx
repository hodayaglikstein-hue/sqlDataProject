import { addPost } from "../scripts/postsapi";

function AddPostButton(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  async function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    if (title && body) {
      const created = await addPost(user.id, title, body);
      props.setPosts((prev) => [...prev, created]);
      await props.fetchPosts();
    }
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
  }

  return (
    <>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input type="text" id="title" />
        <label htmlFor="body">Post Title:</label>
        <textarea id="body" />
        <button>Add New Post</button>
      </form>
    </>
  );
}

export default AddPostButton;
