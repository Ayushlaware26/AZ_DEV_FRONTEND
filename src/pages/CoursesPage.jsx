import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-blue-950 to-indigo-700 flex flex-col items-center py-10 px-4 sm:px-8 md:px-16">
      
      {/* Heading */}
      <div className="max-w-[936px] w-full h-auto min-h-[8rem] flex justify-center items-center text-center text-white text-4xl sm:text-5xl md:text-6xl font-normal font-['Irish_Grover']">
        What Do You Wanna Learn?...
      </div>

      {/* Input Box */}
      <div className="max-w-[739px] w-full bg-white rounded-lg flex flex-col justify-center items-center gap-6 p-6 mt-6">
        <div className="opacity-50 text-black text-2xl sm:text-3xl md:text-4xl font-normal font-['Irish_Grover'] text-center">
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

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 mt-8 justify-center">
        <button
          className="w-48 sm:w-56 h-14 sm:h-16 bg-white rounded-lg flex justify-center items-center text-black text-2xl sm:text-3xl md:text-4xl font-normal font-['Irish_Grover']"
          onClick={() => console.log("Search:", searchTerm)}
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
