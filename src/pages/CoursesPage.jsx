import { useState, useCallback } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ReactFlow, MiniMap, Controls, Background } from "@xyflow/react";
import { useNavigate } from "react-router-dom";
import "@xyflow/react/dist/style.css";

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCourse, setShowCourse] = useState(false);
  const navigate = useNavigate();

  const nodes = [
    { id: "1", position: { x: 250, y: 0 }, data: { label: "Intro to DSA" } },
    { id: "2", position: { x: 100, y: 100 }, data: { label: "Arrays" } },
    { id: "3", position: { x: 400, y: 100 }, data: { label: "Linked Lists" } },
    { id: "4", position: { x: 250, y: 200 }, data: { label: "Trees" } },
    { id: "5", position: { x: 250, y: 300 }, data: { label: "Graphs" } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setShowCourse(true);
    }
  };

  // Handle node click -> navigate
  const handleNodeClick = useCallback((_, node) => {
    const courseId = "1"; // You can dynamically set this
    const moduleIndex = node.id; // or map id to module index
    const lessonIndex = 0; // choose appropriate lesson index
    navigate(`/courses/${courseId}/module/${moduleIndex}/lesson/${lessonIndex}`);
  }, [navigate]);

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-blue-950 to-indigo-700 flex flex-col items-center py-10 px-4 sm:px-8 md:px-16">
      {!showCourse ? (
        <>
          <div className="max-w-[936px] w-full h-auto min-h-[15rem] flex justify-center items-center text-center text-white text-4xl sm:text-5xl md:text-6xl font-normal font-['Irish_Grover']">
            What Do You Wanna Learn?...
          </div>

          <div className="max-w-[739px] w-full bg-white rounded-lg flex flex-col justify-center items-center gap-6 p-6 mt-6">
            <div className="text-black text-2xl sm:text-3xl md:text-4xl font-normal font-['Irish_Grover'] text-center">
              Enter Name of Course
            </div>
            <input
              type="text"
              placeholder="Type a topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-3/4 h-12 px-4 text-lg border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-6 mt-8 justify-center">
            <button
              className="w-48 sm:w-56 h-14 sm:h-16 bg-white rounded-lg flex justify-center items-center text-black text-2xl sm:text-3xl md:text-4xl font-normal font-['Irish_Grover']"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </>
      ) : (
        <div className="w-screen" style={{ height: "calc(95vh)" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            onNodeClick={handleNodeClick}
          >
          <Background />
          </ReactFlow>
        </div>
      )}
    </div>
  );
}

export default withAuthenticationRequired(CoursesPage, {
  onRedirecting: () => <div>Loading...</div>,
});
