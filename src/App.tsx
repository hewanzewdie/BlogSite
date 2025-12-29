import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";
import Layoutx from "./components/Layoutx";

function App() {
  return (
    <Routes>
      <Route element={<Layoutx />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:category/:id" element={<BlogDetails />} />
        <Route
          path="/my-blogs"
          element={
            <ProtectedRoute>
              <MyBlogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
