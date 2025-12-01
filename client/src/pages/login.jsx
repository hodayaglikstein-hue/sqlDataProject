import { useState } from "react";
import { login } from "../scripts/usersapi";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await login(username, password);

    if (!user) {
      setError("Invalid username or password");
      return;
    } else {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>{" "}
      {error && <p>{error}</p>}
      <button onClick={() => navigate("/register")}>register</button>
    </div>
  );
}
