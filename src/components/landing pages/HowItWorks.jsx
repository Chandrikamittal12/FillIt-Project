import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="process"
      className="py-20 text-center bg-linear-to-t from-orange-200 via-rose-200 to-orange-200 "
    >
      <h2 className="text-4xl font-extrabold mb-12 text-purple-700">
        How FillIt <span className="text-purple-900">Works</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-10">

        {/* Step 1 */}
        <div
          className="bg-white p-6  hover:border-2 border-purple-400 rounded-2xl shadow-md
          hover:shadow-2xl hover:bg-purple-50 hover:scale-105 
          transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-2 text-purple-700">1. Sign Up</h3>
          <p className="text-gray-800 text-md">Create your FillIt account instantly.</p>
        </div>

        {/* Step 2 */}
        <div
          className="bg-white p-6  hover:border-2 border-purple-400  rounded-2xl shadow-md
          hover:shadow-xl hover:bg-purple-50 hover:scale-105
          transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-2 text-purple-700">2. Book a Slot</h3>
          <p className="text-gray-800 text-md">Choose your time and submit.</p>
        </div>

        {/* Step 3 */}
        <div
          className="bg-white p-6  hover:border-2 border-purple-400  rounded-2xl shadow-md
          hover:shadow-xl hover:bg-purple-50 hover:scale-105
          transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-2 text-purple-700">3. Secure Filling</h3>
          <p className="text-gray-800 text-md">Verified staff fill your form.</p>
        </div>

        {/* Step 4 */}
        <div
          className="bg-white p-6  hover:border-2 border-purple-400  rounded-2xl shadow-md
          hover:shadow-xl hover:bg-purple-50 hover:scale-105
          transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-2 text-purple-700">4. Payment + PDF</h3>
          <p className="text-gray-800 text-md">Instant receipt and form PDF.</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
