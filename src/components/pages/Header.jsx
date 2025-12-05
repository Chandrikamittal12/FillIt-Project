import React, { useState } from "react";
import { Bell, MoreVertical, User, Settings, LogOut } from "lucide-react";

const Header = ({ username = "Chandrika" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        w-full 
        bg-linear-to-r from-purple-500 via-indigo-600 to-purple-700
        backdrop-blur-xl
        shadow-[0_0_25px_rgba(255,115,0,0.35)]
        px-4 md:px-6 py-3 
        flex items-center justify-between
        sticky top-0 z-50
        border-b border-white/10
      "
    >
      {/* Left Section */}
      <div className="flex flex-col">
        <h2 className="text-lg md:text-xl font-semibold text-white drop-shadow">
          Welcome, {username}
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6 relative">

        {/* Notification */}
        <Bell
          className="cursor-pointer text-white/90 hover:text-indigo-700 transition"
          size={22}
        />

        {/* Logo (Gradient Circle) */}
        <div
          className="
            text-xl md:text-2xl font-bold 
            text-white tracking-wide hidden sm:flex
            rounded-full h-10 w-10 items-center justify-center
            bg-linear-to-tr from-purple-600 via-rose-300 to-rose-600
            shadow-[0_0_15px_rgba(255,115,0,0.55)]
          "
        >
          F
        </div>

        {/* Menu (3 Dots) */}
        <MoreVertical
          className="cursor-pointer text-white/90 hover:text-indigo-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          size={22}
        />

        {/* Dropdown */}
        {menuOpen && (
          <div
            className="
              absolute right-0 top-12 
              bg-linear-to-br from-indigo-900/70 via-purple-900/60 to-rose-900/60
              backdrop-blur-xl
              p-4 rounded-xl shadow-xl
              w-40 sm:w-48
              animate-fadeIn space-y-3
              border border-white/10
            "
          >
            <button className="flex items-center gap-2 text-white/90 hover:text-orange-700 transition">
              <User size={18} /> Profile
            </button>

            <button className="flex items-center gap-2 text-white/90 hover:text-orange-700 transition">
              <Settings size={18} /> Settings
            </button>

            <button className="flex items-center gap-2 text-rose-400 hover:text-orange-700 transition">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
