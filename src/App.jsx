import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import AllCourses from "./pages/AllCourses";
import Support from "./pages/Support";
import LessonPage from "./pages/LessonPage";
import Graph from "./components/Graph"; // import your graph component
import Navbar from "./components/Navbar";

// Layout with Navbar
function MainLayout() {
  return (
    <>
      <Navbar />
      <main >
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
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/support" element={<Support />} />

          {/* Dynamic route for individual graph pages */}
          <Route path="/courses/:search" element={<Graph />} />

          <Route
            path="/courses/:courseId/module/:moduleIndex/lesson/:lessonIndex"
            element={<LessonPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
