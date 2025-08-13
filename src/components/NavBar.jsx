import { useState } from "react";
import { FaBars, FaTimes, FaUser, FaCog, FaGlobe, FaEllipsisV } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { id: "dashboard", label: "Dashboard" },
    { id: "analytics", label: "Analytics" },
    { id: "customers", label: "Customers" },
    { id: "orders", label: "Orders" },
    { id: "inventory", label: "Inventory" },
    { id: "marketing", label: "Marketing" },
    { id: "reports", label: "Reports" },
    { id: "integrations", label: "Integrations" },
    { id: "support", label: "Support" },
    { id: "finance", label: "Finance" },
    { id: "settings", label: "Settings" },
    { id: "help", label: "Help & Documentation" },
    { id: "feedback", label: "Feedback" }
  ];

  const profileMenuItems = [
    { id: "profile", label: "Profile", icon: <FaUser className="text-[#4A46C5]" /> },
    { id: "settings", label: "Settings", icon: <FaCog className="text-[#4A46C5]" /> },
    { id: "language", label: "Language", icon: <FaGlobe className="text-[#4A46C5]" /> }
  ];

  return (
    <div className="relative">
      <nav className="bg-[#FDFEFF] shadow-lg fixed w-full z-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-[#4A46C5] hover:bg-[#E6E5FF] transition-colors duration-200"
              >
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              <span className="ml-4 text-xl font-semibold text-[#0F172A]">CompanyName</span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-[#E6E5FF] transition-colors duration-200">
                <IoNotifications size={24} className="text-[#4A46C5]" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!isProfileOpen)}
                  className="p-2 rounded-full hover:bg-[#E6E5FF] transition-colors duration-200"
                >
                  <FaEllipsisV size={20} className="text-[#4A46C5]" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#FDFEFF] rounded-md shadow-lg py-1">
                    {profileMenuItems.map((item) => (
                      <button
                        key={item.id}
                        className="flex items-center w-full px-4 py-2 text-[#0F172A] hover:bg-[#E6E5FF] transition-colors duration-200"
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed left-0 top-16 h-full bg-[#FDFEFF] shadow-lg transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-40`}
      >
        <div className="flex items-center p-4 border-b border-[#E6E5FF]">
          <FaUser className="h-8 w-8 rounded-full bg-[#E6E5FF] p-1 text-[#4A46C5]" />
          <div className="ml-3">
            <p className="font-medium text-[#0F172A]">John Doe</p>
            <p className="text-sm text-[#0F172A]/70">Admin</p>
          </div>
        </div>
        <div className="py-4">
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
