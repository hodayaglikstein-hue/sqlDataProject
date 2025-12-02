import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login";
import TodosPage from "./pages/todos";
import Home from "./pages/home";
import Layout from "./pages/layout"; // <-- new layout
import Posts from "./pages/allPosts";
import UserPosts from "./pages/userPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<TodosPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:username" element={<UserPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
