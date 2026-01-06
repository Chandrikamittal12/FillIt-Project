import React from "react";

const DemoSection = () => {
  return (
    <section
      id="demo"
      className="py-20  bg-linear-to-t from-orange-200 via-rose-200 to-orange-200 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-6 bg-linear-to-r from-purple-700 to-indigo-900 bg-clip-text text-transparent">
        Experience FillIt in Action
      </h2>

      <p className="text-gray-800 mb-10 max-w-2xl mx-auto">
        Watch our quick demo to see how FillIt makes form filling fast, easy, and secure.
      </p>

      {/* Educational Demo Video */}
      <div className="flex justify-center mb-16">
        <iframe
          className="w-full md:w-2/4 h-80 rounded-2xl shadow-lg border border-purple-200 hover:scale-[1.02] transition-all duration-300"
          src="https://www.youtube.com/embed/26U_seo0a1g?rel=0&showinfo=0"
          title="Educational Video"
          allowFullScreen
        ></iframe>
      </div>

      
    </section>
  );
};

export default DemoSection;
