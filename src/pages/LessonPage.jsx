import { useParams } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function LessonPage() {
  const { courseId, moduleIndex, lessonIndex } = useParams();

  const dummyLessons = {
    "1": [
      { module: "Introduction to AI", lessons: ["What is AI?", "AI History"] },
      { module: "Machine Learning", lessons: ["Supervised Learning", "Unsupervised Learning"] }
    ],
    "2": [
      { module: "HTML & CSS", lessons: ["HTML Basics", "CSS Basics"] },
      { module: "JavaScript", lessons: ["JS Basics", "DOM Manipulation"] }
    ]
  };

  const courseModules = dummyLessons[courseId] || [];
  const moduleTitle = courseModules[moduleIndex]?.module || "Unknown Module";
  const lessonTitle = courseModules[moduleIndex]?.lessons[lessonIndex] || "Unknown Lesson";

  return (
    <div>
      <h1>Lesson View</h1>
      <p><strong>Course ID:</strong> {courseId}</p>
      <p><strong>Module:</strong> {moduleTitle}</p>
      <p><strong>Lesson:</strong> {lessonTitle}</p>
    </div>
  );
}

export default withAuthenticationRequired(LessonPage, {
  onRedirecting: () => <div>Loading...</div>,
});
