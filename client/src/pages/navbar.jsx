import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  function onLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav>
      <button onClick={onLogout}>Logout</button>
      {/* <button onClick={() => navigate("/home/info")}>info</button> */}
      <br />
      <br />
      <Link to="/home"> Home </Link>
      {""}
      <Link to="/todo"> Todos </Link>
      {""}
      {/* <Link to="/userPosts"> MyPosts </Link>
      {""}
      <Link to="/allPosts"> AllPosts </Link> */}

      <br />
    </nav>
  );
}
export default Navbar;
