import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login";
import TodosPage from "./pages/todos";
import Home from "./pages/home";
import Layout from "./pages/layout"; // <-- new layout
import Posts from "./pages/allPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* Private pages with navbar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<TodosPage />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
