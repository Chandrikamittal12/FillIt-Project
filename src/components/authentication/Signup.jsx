import React, { useState } from "react";

function Signup() {
  const [step, setStep] = useState(1);

  const stepClass = (num) =>
    `w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-semibold
    ${step === num ? "border-purple-600 text-purple-600" : "border-gray-400 text-gray-500"}`;

  const lineClass = () =>
    "w-12 h-[2px] bg-gray-400";

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-300 via-purple-300 to-purple-400 flex items-center justify-center px-4 py-10">
      <div className="bg-linear-to-br from-orange-300  to-rose-300 p-6 rounded-2xl h-3/4 shadow-xxl  w-full max-w-xl  border border-purple-300/70">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-center text-rose-900   mb-1">FillIt</h1>
        <p className="text-center text-gray-700 mb-6 text-md">
          Fast, secure & smart exam form filling portal.
        </p>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-col items-center ">
            <div className={stepClass(1)}>1</div>
            <p className="text-xs  mt-1">Role</p>
          </div>

          <div className={lineClass()}></div>

          <div className="flex flex-col items-center">
            <div className={stepClass(2)}>2</div>
            <p className="text-xs mt-1">Location</p>
          </div>

          <div className={lineClass()}></div>

          <div className="flex flex-col items-center">
            <div className={stepClass(3)}>3</div>
            <p className="text-xs mt-1">Account</p>
          </div>
        </div>

        {/* Step Heading */}
        <h2 className="text-xl font-semibold text-black text-center mb-4">
          {step === 1 && "Select Your Role"}
          {step === 2 && "Location Details"}
          {step === 3 && "Account Setup"}
        </h2>

        {/* ------------ STEP 1 ------------ */}
        {step === 1 && (
          <div className="space-y-4">

            <label className="font-medium text-purple-600">Select Role *</label>
            <select className="w-full border-2 border-purple-900 px-3 py-2 rounded-lg">
              <option className="text-md font-extrabold">Select Role</option>
              <option className="text-md ">User</option>
              <option className="text-md ">Employee</option>
              <option className="text-md ">Manager</option>
              <option className="text-md ">Admin</option>
            </select>

            <button
              onClick={() => setStep(2)}
              className="w-40 text-center bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700 transition"
            >
              Next
            </button>
          </div>
        )}

        {/* ------------ STEP 2 ------------ */}
        {step === 2 && (
          <div className="space-y-4">

            <div>
              <label className="font-medium text-purple-600 ">Country * </label >
              <select className="w-full border-2  px-3 py-2 rounded-lg">
                <option className="font-bold">Select Country</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-purple-600">State *</label>
              <select className="w-full border-2  px-3 py-2 rounded-lg">
                <option className="font-bold">Select State</option>
                <option>Madhya Pradesh</option>
                <option>Uttar Pradesh</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-purple-600">City *</label>
              <select className="w-full border-2  px-3 py-2 rounded-lg">
                <option className="font-bold">Select City</option>
                <option>Indore</option>
                <option>Bhopal</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-purple-600">Gender *</label>
              <select className="w-full border-2  px-3 py-2 rounded-lg">
                <option className="font-bold">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2  bg-purple-600 text-white rounded-lg  hover:bg-purple-600 hover:text-white"
              >
                Previous
              </button>

              <button
                onClick={() => setStep(3)}
                className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* ------------ STEP 3 ------------ */}
        {step === 3 && (
          <div className="space-y-4">

            {/* Name Row */}
            <label className="font-medium text-purple-600">Full Name *</label>
            <div className="flex gap-4 ">
              <input
                type="text"
                placeholder="Example: John Doe"
                className="w-full bg-purple-50 text-gray-700 placeholder-gray-500
               hover:border-purple-400
              focus:outline-none focus:ring-2 focus:ring-purple-400 px-3 py-2 rounded-lg"
                required
              />
            
            </div>

            {/* Email + Mobile */}
            <div className=" flex gap-4">
              <div className="flex flex-col w-3/4 ">
            <label className="font-medium text-purple-600">Contact Details *</label>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Ex-Johndoe123@gmail.com"
                className="w-full bg-purple-50 text-gray-700 placeholder-gray-500
               hover:border-purple-400
              focus:outline-none focus:ring-2 focus:ring-purple-400 px-3 py-2 rounded-lg"
                required
              />
              </div>
               </div>
               <div className=" flex flex-col">
            <label className="font-medium text-purple-600">Contact Details *</label>
              <input
                type="text"
                placeholder="Ex: +1234567890"
                className="w-full bg-purple-50 text-gray-700 placeholder-gray-500
               hover:border-purple-400
              focus:outline-none focus:ring-2 focus:ring-purple-400  px-3 py-2 rounded-lg"
                required
              />
           </div>
           </div>
            {/* Password */}
            <label className="font-medium text-purple-600">Password Setup *</label>
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-purple-50 text-gray-700 placeholder-gray-500
               hover:border-purple-400
              focus:outline-none focus:ring-2 focus:ring-purple-400 px-3 py-2 rounded-lg"
                required
              />
            </div>

            {/* T&C */}
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="bg-rose-900" required />
              <span className="text-gray-900 text-sm">I accept Terms & Conditions</span>
            </label>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2  bg-purple-600 text-white rounded-lg  hover:bg-purple-600 hover:text-white"
              >
                Previous
              </button>

              <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Create Account
              </button>
            </div>
          </div>
        )}
          {/* Login */}
        <p className="text-center text-purple-800 mt-6 text-sm"> Exsisting User?{" "}
          <a href="/Login" className="font-md  font-bold underline">
            Login
          </a>
        </p>
      </div>
      
    </div>
  );
}

export default Signup;
