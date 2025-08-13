import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { courseId, moduleIndex, lessonIndex } = useParams();

  return (
    <div>
      <h1>Lesson View</h1>
      <p>Course ID: {courseId}</p>
      <p>Module Index: {moduleIndex}</p>
      <p>Lesson Index: {lessonIndex}</p>
    </div>
  );
}
