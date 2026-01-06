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

// import React, { useState } from "react";
// import { Bell, MoreVertical, User, Settings, LogOut } from "lucide-react";

// const Header = ({ username = "Chandrika" }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header
//       className="
//         w-full sticky top-0 z-50
//         px-4 md:px-6 py-3
//         flex items-center justify-between
//         bg-gradient-to-r from-purple-700 via-indigo-700 to-rose-700
//         backdrop-blur-xl
//         border-b border-white/10
//         shadow-[0_8px_30px_rgba(99,102,241,0.45)]
//       "
//     >
//       {/* LEFT */}
//       <div>
//         <h2 className="text-lg md:text-xl font-semibold text-white drop-shadow">
//           Welcome, <span className="text-rose-200">{username}</span>
//         </h2>
//         <p className="text-xs text-white/70">
//           Have a productive day 🚀
//         </p>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-4 md:gap-6 relative">

//         {/* Notification */}
//         <div className="relative">
//           <Bell
//             size={22}
//             className="
//               text-white/90 cursor-pointer
//               hover:text-rose-300
//               transition-all duration-200
//             "
//           />
//           <span className="absolute -top-1 -right-1 h-2 w-2 bg-rose-400 rounded-full" />
//         </div>

//         {/* PROFILE LOGO */}
//         <div
//           className="
//             hidden sm:flex items-center justify-center
//             h-10 w-10 rounded-full
//             bg-gradient-to-tr from-purple-500 via-pink-400 to-rose-500
//             text-white font-bold text-lg
//             shadow-[0_0_18px_rgba(255,115,0,0.6)]
//           "
//         >
//           {username.charAt(0)}
//         </div>

//         {/* MENU ICON */}
//         <MoreVertical
//           size={22}
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="
//             text-white/90 cursor-pointer
//             hover:text-rose-300
//             transition-all duration-200
//           "
//         />

//         {/* DROPDOWN */}
//         {menuOpen && (
//           <div
//             className="
//               absolute right-0 top-14
//               w-44 sm:w-52
//               p-3 rounded-2xl
//               bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-rose-900/70
//               backdrop-blur-xl
//               border border-white/10
//               shadow-[0_10px_40px_rgba(0,0,0,0.6)]
//               animate-[fadeIn_0.25s_ease-out]
//             "
//           >
//             <button
//               className="
//                 w-full flex items-center gap-3
//                 px-3 py-2 rounded-xl
//                 text-white/90
//                 hover:bg-white/10 hover:text-rose-200
//                 transition
//               "
//             >
//               <User size={18} /> Profile
//             </button>

//             <button
//               className="
//                 w-full flex items-center gap-3
//                 px-3 py-2 rounded-xl
//                 text-white/90
//                 hover:bg-white/10 hover:text-rose-200
//                 transition
//               "
//             >
//               <Settings size={18} /> Settings
//             </button>

//             <div className="h-px bg-white/10 my-2" />

//             <button
//               className="
//                 w-full flex items-center gap-3
//                 px-3 py-2 rounded-xl
//                 text-rose-400
//                 hover:bg-rose-500/20 hover:text-rose-300
//                 transition
//               "
//             >
//               <LogOut size={18} /> Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

