import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* ------------ About Section ------------- */}
        <div className="md:col-span-1">
          {/* Logo Styled */}
          <h3 className="text-5xl font-extrabold mb-4 bg-linear-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
            Fill<span className="text-indigo-200">It</span>
          </h3>

          <p className="text-sm leading-6 text-gray-400">
            Automating form filling through AI — secure, accurate, and fast.
            Simplify your paperwork with confidence.
          </p>
        </div>

        {/* ------------ Quick Links ------------- */}
        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2 hover:text-indigo-400 transition">
              <FaHome className="text-indigo-400 text-lg" />
              <a href="#hero" className="hover:text-indigo-400">Home</a>
            </li>

            <li className="flex items-center gap-2 hover:text-indigo-400 transition">
              <FaInfoCircle className="text-indigo-400 text-lg" />
              <a href="#why" className="hover:text-indigo-400">About</a>
            </li>

            <li className="flex items-center gap-2 hover:text-indigo-400 transition">
              <GiProgression className="text-indigo-400 text-lg" />
              <a href="#works" className="hover:text-indigo-400">Process</a>
            </li>

            <li className="flex items-center gap-2 hover:text-indigo-400 transition">
              <FaPhoneAlt className="text-indigo-400 text-lg" />
              <a href="#contact" className="hover:text-indigo-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* ------------ Help Desk Section ------------- */}
        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Help Desk</h4>

          <p className="text-sm text-gray-300">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-300 mt-2">✉️ support@fillit.com</p>
        </div>

        {/* ------------ Social Network Section ------------- */}
        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Social Network</h4>

          <div className="flex gap-5 text-2xl">

            {/* Stylish Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-purple-400 hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-purple-400 hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-purple-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-purple-400 hover:scale-110 transition"
            >
              <FaTwitter />
            </a>

          </div>
        </div>
      </div>

      {/* ---------- Horizontal Line ---------- */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2025 <span className="font-semibold text-indigo-400">FillIt</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
