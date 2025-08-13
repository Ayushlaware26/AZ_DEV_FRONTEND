import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage";
import Navbar from "./components/Navbar";

// Layout with Navbar
function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders child routes here */}
      </main>
    </>
  );
}

// Layout without Navbar (for login/signup pages)
function AuthLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Navbar */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>

        {/* Routes with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/courses" element={<CoursesPage />} />
          <Route
            path="/courses/:courseId/module/:moduleIndex/lesson/:lessonIndex"
            element={<LessonPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
