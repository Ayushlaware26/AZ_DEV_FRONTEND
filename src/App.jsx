import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login / Signup page */}
        <Route path="/" element={<LoginPage />} />

        {/* Course list after login */}
        <Route path="/courses" element={<CoursesPage />} />

        {/* Lesson view */}
        <Route
          path="/courses/:courseId/module/:moduleIndex/lesson/:lessonIndex"
          element={<LessonPage />}
        />
      </Routes>
    </Router>
  );
}
