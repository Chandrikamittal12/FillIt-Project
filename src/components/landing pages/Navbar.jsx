import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import DemoSection from "./DemoSection";
import Contact from "./Contact";
import Footer from "./Footer";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // reusable nav button (sirf underline logic add ki)
  const NavButton = ({ id, label }) => (
    <li className="relative group">
      <button
        onClick={() => scrollToSection(id)}
        className={`relative pb-2 transition-colors duration-300
          ${
            activeSection === id
              ? "text-purple-800"
              : "text-gray-800 hover:text-purple-800"
          }`}
      >
        {label}

        {/* HOVER-ONLY linear UNDERLINE */}
        <span
          className="absolute left-0 -bottom-1 h-[3px] w-0 opacity-0 rounded-full
        bg-linear-to-r from-purple-600 via-blue-500 to-rose-500
        transition-all duration-300 ease-out
        group-hover:w-full group-hover:opacity-100"
        />
      </button>
    </li>
  );

  return (
    <>
      <div className="bg-linear-to-b from-purple-300 via-rose-200 to-orange-100 text-gray-800 scroll-smooth font-serif animate-fade-in">
        <header className="h-8 bg-linear-to-r from-rose-300 to-orange-300 animate-slide-down"></header>

        <nav
          className="flex justify-between items-center px-10 py-4 
          bg-linear-to-r from-white/30 via-white/70 to-white/30 
          backdrop-blur-xl shadow-xl rounded-b-2xl border-b border-purple-300 animate-slide-up"
        >
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-4xl font-bold bg-linear-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent"
          >
            Fill<span className="text-orange-700 font-extrabold">It</span>
          </div>

          {/* NAV LINKS */}
          <ul className="flex space-x-9 font-bold">
            <NavButton id="home" label="Home" />
            <NavButton id="why" label="About" />
            <NavButton id="process" label="Process" />

            {/* <li>
              <NavLink to="/admin" className="hover:text-purple-800 transition-all duration-300">
                AdDashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/employee" className="hover:text-purple-800 transition-all duration-300">
                EmpDashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/subAdmin" className="hover:text-purple-800 transition-all duration-300">
                SubDashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" className="hover:text-purple-800 transition-all duration-300">
                UserDashboard
              </NavLink>
            </li> */}

            <NavButton id="contact" label="Contact" />
              <NavButton id="demo" label="Demo" />
          </ul>

          {/* AUTH BUTTONS */}
          <div className="space-x-4">
            <NavLink to="/login">
              <button className="px-4 py-2 bg-linear-to-r w-25 from-purple-500 to-orange-500 text-white rounded-lg">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="px-4 py-2 w-25 bg-linear-to-r from-purple-500 to-orange-500 text-white rounded-lg">
                Sign Up
              </button>
            </NavLink>
          </div>
        </nav>
      </div>

      {/* CHILD ROUTES */}
      <Outlet />

      {/* Landing Page Sections */}
      <section id="home">
        <Hero />
      </section>
      <section id="why">
        <WhyChoose />
      </section>
      <section id="process">
        <HowItWorks />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="demo">
        <DemoSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default Navbar;

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import Hero from "./Hero";
// import WhyChoose from "./WhyChoose";
// import HowItWorks from "./HowItWorks";
// import Reviews from "./Reviews";
// import DemoSection from "./DemoSection";
// import Contact from "./Contact";
// import Footer from "./Footer";

// function Navbar() {
//   const [activeSection, setActiveSection] = useState("home");
//   const location = useLocation();

//   // Scroll to section
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(id);
//     }
//   };

//   // Update active section on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "why", "process", "reviews", "demo", "contact"];
//       let current = "home";

//       sections.forEach((id) => {
//         const el = document.getElementById(id);
//         if (el) {
//           const top = el.getBoundingClientRect().top;
//           if (top <= 80) current = id;
//         }
//       });

//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="bg-linear-to-b from-purple-300 via-rose-200 to-orange-100 text-gray-800 scroll-smooth font-serif animate-fade-in">
//         <header className="h-8 bg-linear-to-r from-rose-300 to-orange-300 animate-slide-down"></header>

//         <nav className="flex justify-between items-center px-10 py-4
//           bg-linear-to-r from-white/70 via-white/60 to-white/70
//           backdrop-blur-xl shadow-xl rounded-b-2xl border-b border-purple-300 animate-slide-up">

//           {/* Logo */}
//           <div
//             onClick={() => scrollToSection("home")}
//             className="cursor-pointer text-4xl font-bold bg-linear-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent"
//           >
//             Fill<span className="text-orange-700 font-extrabold">It</span>
//           </div>

//           {/* NAV LINKS */}
//           <ul className="flex space-x-9 font-bold">
//             {[
//               { label: "Home", id: "home" },
//               { label: "About", id: "why" },
//               { label: "Process", id: "process" },
//               { label: "Demo", id: "demo" },
//               { label: "Contact", id: "contact" },
//             ].map((item) => (
//               <li key={item.id} className="relative group">
//                 <button
//                   onClick={() => scrollToSection(item.id)}
//                   className={`transition-all duration-300 ${
//                     activeSection === item.id
//                       ? "text-purple-800 font-bold"
//                       : "text-gray-700 hover:text-purple-800"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//                 <span
//                   className={`absolute left-0 bottom--4px h-2px w-0 bg-linear-to-r from-blue-500 via-pink-500 to-purple-600
//                     rounded-full transition-all duration-300
//                     ${activeSection === item.id ? "w-full" : "group-hover:w-full"}`}
//                 ></span>
//               </li>
//             ))}

//             {/* Dashboard Links */}
//             {[
//               { label: "AdDashboard", to: "/admin" },
//               { label: "EmpDashboard", to: "/employee" },
//               { label: "SubDashboard", to: "/subAdmin" },
//               { label: "UserDashboard", to: "/user" },
//             ].map((item) => (
//               <li key={item.to} className="relative group">
//                 <NavLink
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `transition-all duration-300 ${
//                       isActive
//                         ? "text-purple-800 font-bold"
//                         : "text-gray-700 hover:text-purple-800"
//                     }`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//                 <span
//                   className={`absolute left-0 bottom--4px h-2px w-0 bg-linear-to-r from-blue-500 via-pink-500 to-purple-600
//                     rounded-full transition-all duration-300
//                     ${location.pathname === item.to ? "w-full" : "group-hover:w-full"}`}
//                 ></span>
//               </li>
//             ))}
//           </ul>

//           {/* AUTH BUTTONS */}
//           <div className="space-x-4">
//             <NavLink to="/login">
//               <button className="px-4 py-2 bg-linear-to-r from-purple-500 to-orange-500 text-white rounded-lg">
//                 Login
//               </button>
//             </NavLink>
//             <NavLink to="/signup">
//               <button className="px-4 py-2 bg-linear-to-r from-purple-500 to-orange-500 text-white rounded-lg">
//                 Sign Up
//               </button>
//             </NavLink>
//           </div>
//         </nav>
//       </div>

//       {/* CHILD ROUTES */}
//       <Outlet />

//       {/* Landing Page Sections */}
//       <section id="home"><Hero /></section>
//       <section id="why"><WhyChoose /></section>
//       <section id="process"><HowItWorks /></section>
//       <section id="reviews"><Reviews /></section>
//       <section id="demo"><DemoSection /></section>
//       <section id="contact"><Contact /></section>
//       <Footer />
//     </>
//   );
// }

// export default Navbar;
