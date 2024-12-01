import React, { useState, useContext, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { Context } from "../context/gemini.context";
import { FaMessage, FaPlus } from "react-icons/fa6";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const context = useContext(Context);
  const [storedPrompt, setStoredPrompts] = useState<string[]>([]);
  const { onSent, prevPrompt, setRecentPrompt, newChat, setPrevPrompt } =
    context;

  useEffect(() => {
    const savedPrompts = localStorage.getItem(" ");
    if (savedPrompts) {
      const parsedPrompts = JSON.parse(savedPrompts);
      setStoredPrompts(parsedPrompts);
      setPrevPrompt(parsedPrompts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedPrompts", JSON.stringify(prevPrompt));
    setStoredPrompts(prevPrompt);
  }, [prevPrompt]);

  const loadPrompt = async (prompt: string) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const deletePrompt = (prompt: string) => {
    const updatedPrompts = storedPrompt.filter((item) => item !== prompt);
    localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));
    setStoredPrompts(updatedPrompts);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 right-4  z-50 text-white bg-gray-800 p-2 rounded-full shadow-lg md:hidden">
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 h-full bg-gray-800 text-white flex flex-col transition-transform duration-300 md:translate-x-0`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 ">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none hover:text-gray-400 md:hidden">
            &times;
          </button>
        </div>
        {/* New Chat */}
        <div className="flex flex-col gap-4 p-4">
          <div
            onClick={() => newChat()}
            className="mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-700 cursor-pointer bg-gray-300 rounded-full">
            <FaPlus className="text-2xl" />
            <p>New Chat</p>
          </div>
        </div>

        <div className="flex flex-col animate-fadeIn duration-1000 p-4">
          <p className="mt-7 mb-5">Recent</p>

          {storedPrompt.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 p-2 pr-4 rounded-full text-slate-700 bg-gray-200 hover:bg-gray-300 focus:ring focus:ring-blue-300">
              <div
                onClick={() => loadPrompt(item)}
                className="flex items-center gap-2 cursor-pointer">
                <FaMessage className="text-lg" />
                <span>{item.slice(0, 18)}...</span>
              </div>
              <button
                onClick={() => deletePrompt(item)}
                className="text-red-500 hover:text-red-700">
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 p-4 absolute bottom-0 w-full">
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
          {/* <Link
            to="/settings"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
            <FaCog className="text-xl" />
            <span>Settings</span>
          </Link> */}
          <a
            target="_blank"
            href="https://support.google.com/gemini/?hl=en#topic=15280100"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700">
            <FaQuestionCircle className="text-xl" />
            <span>Help</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
