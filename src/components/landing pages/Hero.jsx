import React, { useState } from "react";
import img from "../../assets/hero-portal.jpeg";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">

        {/* FULL WIDTH BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        />

        {/* SOFT linear TINT (LIGHT, NOT HIDING IMAGE) */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-200/60 via-rose-100/50 to-orange-100/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl px-6">

          <span className="inline-block mb-6 px-5 py-1.5 text-m font-semibold rounded-full border-2 border-black bg-white/80 text-purple-700 backdrop-blur">
             🎓 Trusted Exam & Form Assistance Platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-1100 drop-shadow">
            Focus on Your Exam, <br />
            <span className="bg-linear-to-r from-indigo-600 via-purple-900 to-orange-600 bg-clip-text text-transparent">
              Leave the Forms to FillIt
            </span>
          </h1>

          <p className="text-gray-900 text-lg sm:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm">
            FillIt helps students complete college and government forms
            accurately and on time — without queues, confusion, or stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-3.5 rounded-xl border-2 border-purple-400 text-white font-semibold bg-linear-to-r from-purple-600 to-orange-500 shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3.5  rounded-xl font-semibold border border-purple-500 text-purple-700 bg-white/80 hover:bg-linear-to-r hover:from-purple-600 hover:to-orange-500 hover:text-white transition hover:scale-105"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* DEMO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>
            <iframe
              className="w-[90vw] md:w-[60vw] h-[55vw] md:h-[30vw] rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/t0Q2otsqC4I?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Demo"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;




// old home page
// import React, { useState } from "react";

//  const Hero = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* ORIGINAL HERO SECTION — unchanged */}
//       <section
//         id="/"
//          className="flex flex-col items-center text-center px-6 py-24 
//       bg-linear-to-b from-purple-300 via-rose-200 to-orange-200 
//       animate-fadeIn"
//     >

//         <h1 className="text-5xl font-extrabold mb-7 
//       bg-linear-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent 
//       leading-tight">
//         Focus on Your Exam, Leave the Forms to  
//         <span className="text-orange-700 "> FillIt</span>
//       </h1>


//         <p className="text-lg text-gray-700 max-w-2xl mb-9">
//         Say goodbye to long queues and confusing forms. Let AI-powered FillIt
//         handle your college and government forms — fast, secure, and stress-free!
//       </p>


//         <div className="space-x-7">
//           <button className="px-6 py-3 rounded-lg text-white font-semibold 
//           bg-linear-to-r from-purple-600 to-orange-500 
//           shadow-lg 
//           hover:from-purple-700 hover:to-orange-600 
//           transition-all duration-300 
//           hover:scale-110 hover:shadow-orange-400/50 
//           active:scale-95
// ">
//             Get Started
//           </button>

//           <button
//             onClick={() => setOpen(true)}
//             className="px-6 py-3 rounded-lg font-semibold border 
//           border-purple-500 text-purple-700 
//           hover:text-white
//           hover:bg-linear-to-r hover:from-purple-600 hover:to-orange-500 
//           hover:border-transparent 
//           transition-all duration-300 
//           hover:scale-110 hover:shadow-purple-400/50 
//           active:scale-95"
//           >
//             Get Demo
//           </button>
//         </div>
//       </section>

//       {/* YOUTUBE MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur flex justify-center items-center z-50"
//         >
//           {/* TRANSPARENT POPUP WITHOUT BACKGROUND BOX */}
//           <div className="relative">
//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400"
//             >
//               ✕
//             </button>

//             {/* VIDEO */}
//             <iframe
//               className="w-[90vw] md:w-[60vw] h-[55vw] md:h-[30vw] rounded-xl shadow-2xl"
//               src="https://www.youtube.com/embed/t0Q2otsqC4I?autoplay=1"
//               title="Demo Video"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;



