import React from "react";

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="py-20 bg-linear-to-t from-white via-purple-200 to-white text-center"
    >
      <h2 className="text-4xl font-extrabold text-purple-600 mb-4">
        Why Choose <span className="text-purple-800">FillIt?</span>
      </h2>

      <p className="text-gray-800 max-w-2xl mx-auto mb-12">
        Smart, fast & secure way to fill your forms with AI accuracy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10  rounded-3xl">
        {/* Card 1 */}
        <div
          className="p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-rose-400  
          bg-white hover:bg-pink-50 
          hover:shadow-xxl hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            AI Assistant
          </h3>
          <p className="text-gray-600">Smart suggestions for faster filling.</p>
        </div>

        {/* Card 2 */}
        <div
          className="p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-rose-400 
          bg-white hover:bg-pink-50 
          hover:shadow-xxl hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Mobile Friendly
          </h3>
          <p className="text-gray-600">Works perfectly on phones.</p>
        </div>

        {/* Card 3 */}
        <div
          className="p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-rose-400  
          bg-white hover:bg-pink-50 
          hover:shadow-xxl hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-4">🏫</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Govt & College Forms
          </h3>
          <p className="text-gray-600">Supports all major applications.</p>
        </div>

        {/* 4 */}
        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-rose-400 
          bg-white hover:bg-pink-50 
          hover:shadow-xxl hover:scale-105 transition-all duration-300">
          <div className=" text-4xl mb-4">📤</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Easy Document Upload</h3>
          <p className="text-gray-600">
            Upload your documents quickly and securely without any hassle.
          </p>
        </div>

        {/* 5 */}
        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-rose-400 
          bg-white hover:bg-pink-50 
          hover:shadow-xxl hover:scale-105 transition-all duration-300 ">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Secure Payment</h3>
          <p className="text-gray-600">
            Your transactions are encrypted and protected at every step.
          </p>
        </div>

        {/* 6 */}
        <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-2 border-rose-400 
          bg-white hover:bg-pink-50 
          hover:shadow-xxl hover:scale-105 transition-all duration-300">
          <div className=" text-4xl mb-4">📜</div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Track & Get Receipt</h3>
          <p className="text-gray-600">
            Track your form status in real time and download instant receipts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
