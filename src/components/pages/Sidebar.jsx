import { useState, useEffect } from "react";
import { Menu, User, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect Screen Size */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsOpen(false);
      } else {
        setIsMobile(false);
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed top-4 left-4 z-50 
            bg-linear-to-r from-orange-700 via-rose-500 to-purple-700
            p-3 rounded-xl border border-white/40 shadow-xxl md:hidden
          "
        >
          <Menu className="text-white" />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen p-5 flex flex-col justify-between
          bg-linear-to-b
          from-purple-600 via-indigo-500  to-purple-700
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(255,115,0,0.35)]
          border-r border-white/40
          transition-all duration-300

          ${isOpen ? "w-64" : "w-20"}
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
        `}
      >
        {/* Top Section */}
        <div>
          {/* Logo + Toggle */}
          <div
            className={`flex items-center ${
              isOpen ? "justify-between" : "justify-center"
            } mb-10`}
          >
            {isOpen && (
              <h1
                className="
                  text-3xl font-extrabold tracking-wide 
                  bg-linear-to-r from-orange-400 via-rose-500  to-purple-900 
                  bg-clip-text text-transparent
                "
              >
                FillIt
              </h1>
            )}

            <Menu
              className="cursor-pointer text-white/90 hover:text-orange-700 transition"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Main Nav Items */}
          <div className="space-y-2 mt-6 pb-10 border-b border-white/10">
            {props.options.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="
                  group w-full flex items-center gap-3
                  px-3 py-3 rounded-xl
                  text-white hover:text-white 
                  hover:bg-white/40
                  transition relative
                "
                onClick={() => isMobile && setIsOpen(false)}
              >
                <span className="text-white/90 group-hover:text-indigo-900">
                  {item.icon}
                </span>

                {isOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Secondary Options */}
          <div className="space-y-3 mt-10 ">
            <NavLink
              to={"/admin/profile"}
              onClick={() => isMobile && setIsOpen(false)}
              className="flex items-center gap-3 text-white hover:text-orange-700   transition px-2 py-2"
            >
              <User size={18} />
              {isOpen && <span className="text-sm  transition hover:font-bold">Profile</span>}
            </NavLink>

            <NavLink
              to={"/admin/settings"}
              onClick={() => isMobile && setIsOpen(false)}
              className="flex items-center gap-3 text-white  hover:text-orange-700  transition px-2 py-2"
            >
              <Settings size={18}  />
              {isOpen && <span className="text-sm hover:font-bold">Settings</span>}
            </NavLink>

            <button
              className="flex items-center gap-3 text-red-300 hover:text-orange-700 transition px-2 py-2"
              onClick={() => isMobile && setIsOpen(false)}
            >
              <LogOut size={18} />
              {isOpen && <span className="text-sm hover:font-bold">Logout</span>}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`
          text-center text-white/90 text-xs
          transition-all duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        >
          © 2025 Fillit
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
