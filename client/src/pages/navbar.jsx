import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  function onLogout() {
    localStorage.clear();
    navigate("/login");
  }
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav>
      <button onClick={onLogout}>Logout</button>
      <Link to="/home"> Home </Link>
      <Link to="/todo"> Todos </Link>
      <Link to="/posts"> AllPosts </Link>
      <Link to={`/posts/${user.username}`}>My Posts</Link>
    </nav>
  );
}
export default Navbar;
