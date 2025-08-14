import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Graph from "../components/Graph";

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/courses/${searchTerm}`);
    }
  };

  const handleNodeClick = (_, node) => {
    const courseId = "1"; // static for now
    const moduleIndex = node.id;
    const lessonIndex = 0;
    navigate(`/courses/${courseId}/module/${moduleIndex}/lesson/${lessonIndex}`);
  };

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-bl from-neutral-200 to-blue-900 flex flex-col items-center py-10 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <div className="max-w-[936px] w-full h-auto min-h-[15rem] flex justify-center items-center text-center text-white text-4xl sm:text-5xl md:text-6xl font-normal font-['Irish_Grover']">
        What Do You Wanna Learn?...
      </div>

      {/* Search Input */}
      <div className="max-w-[739px] w-full bg-white/80 backdrop-blur-md rounded-lg flex flex-col justify-center items-center gap-6 p-6 mt-6 shadow-lg">
        <div className="text-black text-2xl sm:text-3xl md:text-4xl font-normal font-['Irish_Grover'] text-center">
          Enter Name of Course
        </div>
        <input
          type="text"
          placeholder="Type a topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-3/4 h-12 px-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Search Button */}
      <div className="flex flex-wrap gap-6 mt-8 justify-center">
        <button
          className="w-48 sm:w-56 h-14 sm:h-16 bg-white text-blue-900 rounded-lg flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-normal font-['Irish_Grover'] hover:bg-blue-50 transition-colors duration-200 shadow-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(CoursesPage, {
  onRedirecting: () => <div>Loading...</div>,
});
