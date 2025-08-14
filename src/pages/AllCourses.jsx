// src/pages/AllCourses.jsx
import React from "react";

const AllCourses = () => {
  // Hard-coded courses list
  const courses = [
    { id: 1, title: "Data Structures and Algorithms" },
    { id: 2, title: "Web Development with React" },
    { id: 3, title: "Introduction to AI" },
    { id: 4, title: "Python Programming" },
  ];

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-2">Some description about {course.title}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
