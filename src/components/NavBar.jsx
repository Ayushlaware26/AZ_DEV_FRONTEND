import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle  } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth0();

  const navLinks = [
    { id: "dashboard", label: "Dashboard" },
    { id: "courses", label: "All Courses" },
    { id: "support", label: "Support" },
  ];

  return (
    <div className="relative">
      {/* Top navbar */}
      <nav className="bg-[#FDFEFF] shadow-lg fixed w-full z-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Sidebar toggle */}
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-[#4A46C5] hover:bg-[#E6E5FF] transition-colors duration-200"
              >
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              <span className="ml-4 text-xl font-semibold text-[#0F172A]">
                TextToLearn
              </span>
            </div>

            {/* User + Logout */}
            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center gap-3">
                  {user.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    <FaUserCircle  className="h-10 w-10 rounded-full bg-[#E6E5FF] p-1 text-[#4A46C5]" />
                  )}
                  <span className="text-[#0F172A] font-medium">{user.name}</span>
                  <button
                    onClick={() =>
                      logout({ returnTo: window.location.origin })
                    }
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 h-full bg-[#FDFEFF] shadow-lg transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 z-40`}
      >
        <div className="flex items-center p-4 border-b border-[#E6E5FF]">
          {user && user.picture ? (
            <img
              src={user.picture}
              alt={user.name}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <FaUserCircle  className="h-10 w-10 rounded-full bg-[#E6E5FF] p-1 text-[#4A46C5]" />
          )}
          <div className="ml-3 max-w-[150px]">
          <p className="font-medium text-[#0F172A] truncate">{user?.name || "User"}</p>
          <p className="text-sm text-[#0F172A]/70 truncate">{user?.email || ""}</p>
        </div>
        </div>
        <div className="py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="w-full text-left px-4 py-2 hover:bg-[#E6E5FF] text-[#0F172A] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
