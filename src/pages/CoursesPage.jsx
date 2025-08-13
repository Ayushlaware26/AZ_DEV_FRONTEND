import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";

function CoursesPage() {
  const { logout } = useAuth0();

  const dummyCourses = [
    { id: "1", title: "AI Fundamentals" },
    { id: "2", title: "Web Development" }
  ];

  return (
    <div>
      <h1>Courses</h1>

      {/* Logout Button */}
      <button
        onClick={() =>
          logout({ returnTo: window.location.origin })
        }
        style={{ marginBottom: "20px" }}
      >
        Logout
      </button>

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

export default withAuthenticationRequired(CoursesPage, {
  onRedirecting: () => <div>Loading...</div>,
});
