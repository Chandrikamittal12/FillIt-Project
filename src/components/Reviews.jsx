import React from "react";

const Reviews = () => {
  return (
    <section
      id="review"
      className="py-20 text-center bg-linear-to-t from-white via-purple-200 to-indigo-50"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-purple-800">
        What Our  <span className="text-purple-900">Users</span> Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 px-30">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl border border-indigo-200 shadow-md 
                        hover:shadow-2xl hover:scale-105 transition-all duration-300 
                        hover:border-purple-400">
                            <img
            src="..\public\User1.avif"
            alt="User 1"
            className="w-15 h-15 rounded-full mx-auto mb-4 object-cover shadow-xl border"
          />
                             <h4 className="font-semibold text-gray-900">– Aditi Sharma –</h4>
          <p className="italic text-gray-700 mb-6 text-lg">
            “FillIt saved me hours!”
          </p>
         
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl border border-indigo-200 shadow-md 
                        hover:shadow-2xl hover:scale-105 transition-all duration-300 
                        hover:border-purple-400">
                            <img
            src="../public/User1.avif"
            alt="user2"
            className="w-15 h-15 rounded-full mx-auto mb-4 object-cover shadow-xl border"
          />
           <h4 className="font-semibold text-gray-900">– Sakshi Verma – </h4>
          <p className="italic text-gray-700 mb-6 text-lg">
            “Super fast and secure!”
          </p>
         
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl border border-indigo-200 shadow-md 
                        hover:shadow-2xl hover:scale-105 transition-all duration-300 
                        hover:border-purple-400">
                             <img
            src="../public/User1.avif"
            alt="user3"
            className="w-15 h-15 rounded-full mx-auto mb-4 object-cover shadow-xl border"
          />
                            <h4 className="font-semibold text-gray-900">– Sneha Patel – </h4>
          <p className="italic text-gray-700 mb-6 text-lg">
            “Best way to fill forms online.”
          </p>
          
        

      </div>
      </div>
        < div className="mt-16  flex justify-center items-center">
  < button
    className="px-6 py-4 rounded-full font-semibold text-white 
               bg-linear-to-r from-purple-600 to-indigo-600
               shadow-md hover:shadow-xl 
               transition-all duration-300 
               hover:scale-105 hover:from-purple-700 hover:to-indigo-700"
  >
    Share Your Experience
  </button>
</div>

    </ section>
  );
};

export default Reviews;
