const dummyCourses = [
  { id: "1", title: "AI Fundamentals" },
  { id: "2", title: "Web Development" }
];

export default function CoursesPage() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {dummyCourses.map(course => (
          <li key={course.id}>
            <a href={`/courses/${course.id}/module/0/lesson/0`}>
              {course.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
