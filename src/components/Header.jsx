import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, User, Settings, LogOut, CreditCard } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => alert("Search clicked!");
  const handleOptionClick = (option) => {
    alert(`${option} clicked!`);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between relative">
      {/* Left Section: Logo + Navigation */}
      <div className="flex items-center space-x-6">
        <span className="text-2xl font-bold text-blue-600 cursor-pointer">TS</span>
        <nav className="hidden md:flex space-x-6 ">
          {["Products", "Community", "Markets", "News", "Brokers"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => alert(`${item} clicked!`)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Section: Search + Profile Menu */}
      <div className="flex items-center space-x-4 relative" ref={menuRef}>
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            onClick={handleSearch}
            className="bg-gray-100 text-gray-800 rounded-full py-2 px-4 pl-10 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Menu Button (Profile Avatar) */}
        <button
          onClick={toggleMenu}
          className="flex items-center focus:outline-none"
        >
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full border-2 border-blue-500 hover:opacity-90 transition-opacity"
          />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-52 border border-gray-200 overflow-hidden animate-fadeIn">
            {/* Profile Info */}
            <div className="px-4 py-3 border-b border-gray-200 flex items-center space-x-3 bg-gray-50">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">USER_NAME</p>
                <p className="text-sm text-gray-500">USER_ID@trader.com</p>
              </div>
            </div>

            {/* Menu Options */}
            <ul className="py-2 text-gray-700">
              <li
                onClick={() => handleOptionClick("Profile")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <User className="w-4 h-4 mr-2 text-blue-600" /> Profile
              </li>
              <li
                onClick={() => handleOptionClick("Account")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <CreditCard className="w-4 h-4 mr-2 text-blue-600" /> Account
              </li>
              <li
                onClick={() => handleOptionClick("Settings")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <Settings className="w-4 h-4 mr-2 text-blue-600" /> Settings
              </li>
              <li
                onClick={() => handleOptionClick("Logout")}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
