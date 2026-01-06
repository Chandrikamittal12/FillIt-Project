import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-r from-white via-purple-200 to-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-600 mb-2">
          Get in Touch With <span className="text-purple-700"> Us</span>
        </h2>
        <p className="text-gray-700 text-lg">
          We’re here to help! Fill out the form below and we’ll connect with you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center  ">
        <form className="bg-white p-7 h-3/4 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
          
          {/* Name Field */}
          <div className="mb-3">
            <label className="block text-black font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-purple-400 rounded-lg 
                         focus:ring-2 focus:ring-purple-300 focus:border-purple-700 
                         outline-none transition"
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label className="block text-black font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-purple-400 rounded-lg 
                         focus:ring-2 focus:ring-purple-300 focus:border-purple-700
                         outline-none transition"
            />
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label className="block text-black font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-purple-400 rounded-lg 
                         focus:ring-2 focus:ring-purple-300 focus:border-purple-700
                         outline-none resize-none transition"
            ></textarea>
          </div>

          {/* Submit Button — Same as Login/Signup */}
          <button
  type="submit"
  className="px-6 py-2 rounded-full font-semibold text-white 
             bg-linear-to-r from-purple-600 to-indigo-600
             hover:from-purple-700 hover:to-indigo-700
             shadow-md hover:shadow-lg transition-all duration-200 text-base"
>
  Send Message
</button>

        </form>
      </div>
    </section>
  );
}
