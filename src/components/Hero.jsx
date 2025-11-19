import React, { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ORIGINAL HERO SECTION — unchanged */}
      <section
        id="home"
         className="flex flex-col items-center text-center px-6 py-24 
      bg-linear-to-b from-purple-300 via-rose-200 to-orange-200 
      animate-fadeIn"
    >

        <h1 className="text-5xl font-extrabold mb-7 
      bg-linear-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent 
      leading-tight">
        Focus on Your Exam, Leave the Forms to  
        <span className="text-orange-700 "> FillIt</span>
      </h1>


        <p className="text-lg text-gray-700 max-w-2xl mb-9">
        Say goodbye to long queues and confusing forms. Let AI-powered FillIt
        handle your college and government forms — fast, secure, and stress-free!
      </p>


        <div className="space-x-7">
          <button className="px-6 py-3 rounded-lg text-white font-semibold 
          bg-linear-to-r from-purple-600 to-orange-500 
          shadow-lg 
          hover:from-purple-700 hover:to-orange-600 
          transition-all duration-300 
          hover:scale-110 hover:shadow-orange-400/50 
          active:scale-95
">
            Get Started
          </button>

          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 rounded-lg font-semibold border 
          border-purple-500 text-purple-700 
          hover:text-white
          hover:bg-linear-to-r hover:from-purple-600 hover:to-orange-500 
          hover:border-transparent 
          transition-all duration-300 
          hover:scale-110 hover:shadow-purple-400/50 
          active:scale-95"
          >
            Get Demo
          </button>
        </div>
      </section>

      {/* YOUTUBE MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur flex justify-center items-center z-50"
        >
          {/* TRANSPARENT POPUP WITHOUT BACKGROUND BOX */}
          <div className="relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            {/* VIDEO */}
            <iframe
              className="w-[90vw] md:w-[60vw] h-[55vw] md:h-[30vw] rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/t0Q2otsqC4I?autoplay=1"
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
