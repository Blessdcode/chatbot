import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full shadow-lg md:hidden">
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 h-full bg-gray-800 text-white flex flex-col transition-transform duration-300 md:translate-x-0`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none hover:text-gray-400 md:hidden">
            &times;
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 p-4">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
            <FaCog className="text-xl" />
            <span>Settings</span>
          </Link>
          <Link
            to="/help"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
            <FaQuestionCircle className="text-xl" />
            <span>Help</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
