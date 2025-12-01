// import { BrowserRouter, Route, Routes } from "react-router";
// import "./App.css";
// import LoginPage from "./pages/login";
// import TodosPage from "./pages/todos";
// import Home from "./pages/home";
// import Navbar from "./pages/navbar";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* Public route */}
//           <Route path="/login" element={<LoginPage />} />

//           {/* All pages that need the navbar */}
//           <Route element={<Navbar />}>
//             <Route path="/home" element={<Home />} />
//             <Route path="/todo" element={<TodosPage />} />
//             {/* <Route path="/userPosts" element={<UserPostsPage />} /> */}
//             {/* <Route path="/allPosts" element={<AllPostsPage />} /> */}
//           </Route>
//           {/* <Route path="/login" element={<LoginPage />} />
//           <Route path="/todo" element={<TodosPage />} />
//           <Route path="/home" element={<Home />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login";
import TodosPage from "./pages/todos";
import Home from "./pages/home";
import Layout from "./pages/layout"; // <-- new layout

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
