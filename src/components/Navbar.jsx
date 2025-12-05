import React from 'react'
import { NavLink } from "react-router-dom"; 
import AdminDashboard from '../adminDashboard/AdminDashboard';
function Navbar() {
  return (
    <div className="bg-linear-to-b from-purple-300 via-rose-200 to-orange-100 text-gray-800 scroll-smooth font-serif animate-fade-in">
      
      {/* Header */}
      <header className="h-8 bg-linear-to-r from-rose-300  to-orange-300 animate-slide-down"></header>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 
        bg-linear-to-r from-white/70 via-white/60 to-white/70 
        backdrop-blur-xl shadow-xl rounded-b-2xl border-b border-purple-300 animate-slide-up">

        {/* Logo  */}
        <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
          Fill<span className="text-orange-700 font-extrabold">It</span>
        </div>

        <ul className="flex space-x-9 font-bold">
          <li><a href="#home" className="hover:text-purple-800 transition-all duration-300 hover:underline hover:underline-offset-4">Home</a></li>
          <li><a href="#why" className="hover:text-purple-800 transition-all duration-300 hover:underline hover:underline-offset-4">About</a></li>
          <li><a href="#works" className="hover:text-purple-800 transition-all duration-300 hover:underline hover:underline-offset-4">Process</a></li>
          <li><NavLink to="/admin" className="hover:text-purple-800 transition-all duration-300 hover:underline hover:underline-offset-4">Dashboard</NavLink></li>
           <li><a href="#contact" className="hover:text-purple-800 transition-all duration-300 hover:underline hover:underline-offset-4">Contact</a></li>
        </ul>

        <div className="space-x-4">

          {/* LOGIN BUTTON – now SAME effect as SignUp */}
          <NavLink to="/Login">
          <button className="
            px-4 py-2 w-25 h-10 
            bg-linear-to-r from-purple-500 to-orange-500 text-white 
            rounded-lg shadow-lg border border-transparent
            hover:from-purple-600 hover:to-orange-600 
            transition-all duration-300 
            hover:scale-110 hover:shadow-pink-400/50 
            active:scale-95
          ">
            Login
          </button>
          </NavLink>

          {/* SIGNUP BUTTON */}
          <NavLink to="/Signup">
          <button className="
            px-4 py-2 w-25 h-10 
            bg-linear-to-r from-purple-500 to-orange-500 text-white 
            rounded-lg shadow-lg 
            hover:from-purple-600 hover:to-orange-600 
            transition-all duration-300 
            hover:scale-110 hover:shadow-orange-400/50 
            active:scale-95
          ">
            Sign Up
          </button>
          </NavLink>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
