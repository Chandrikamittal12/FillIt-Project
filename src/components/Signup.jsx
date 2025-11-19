import React, { useState } from "react";

function Signup() {
  const [step, setStep] = useState(1);

  const stepClass = (num) =>
    `w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-semibold
    ${step === num ? "border-purple-600 text-purple-600" : "border-gray-400 text-gray-500"}`;

  const lineClass = () =>
    "w-12 h-[2px] bg-gray-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-1">FillIt</h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Fast, secure & smart exam form filling portal.
        </p>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className={stepClass(1)}>1</div>
            <p className="text-xs mt-1">Role</p>
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
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          {step === 1 && "Select Your Role"}
          {step === 2 && "Location Details"}
          {step === 3 && "Account Setup"}
        </h2>

        {/* ------------ STEP 1 ------------ */}
        {step === 1 && (
          <div className="space-y-4">

            <label className="font-medium text-gray-700">Select Role *</label>
            <select className="w-full border px-3 py-2 rounded-lg">
              <option value="">Choose Role</option>
              <option>Student</option>
              <option>Employee</option>
              <option>Admin</option>
            </select>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700 transition"
            >
              Next
            </button>
          </div>
        )}

        {/* ------------ STEP 2 ------------ */}
        {step === 2 && (
          <div className="space-y-4">

            <div>
              <label className="font-medium text-gray-700">Country *</label>
              <select className="w-full border px-3 py-2 rounded-lg">
                <option>Select Country</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700">State *</label>
              <select className="w-full border px-3 py-2 rounded-lg">
                <option>Select State</option>
                <option>Madhya Pradesh</option>
                <option>Uttar Pradesh</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700">City *</label>
              <select className="w-full border px-3 py-2 rounded-lg">
                <option>Select City</option>
                <option>Indore</option>
                <option>Bhopal</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700">Gender *</label>
              <select className="w-full border px-3 py-2 rounded-lg">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2 border rounded-lg text-gray-700"
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
            <label className="font-medium text-gray-700">Full Name *</label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
              {/* <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border px-3 py-2 rounded-lg"
                required
              /> */}
            </div>

            {/* Email + Mobile */}
            <label className="font-medium text-gray-700">Contact Details *</label>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-1/2 border px-3 py-2 rounded-lg"
                required
              />
            </div>

            {/* Password */}
            <label className="font-medium text-gray-700">Password Setup *</label>
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>

            {/* T&C */}
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" required />
              <span className="text-gray-600 text-sm">I accept Terms & Conditions</span>
            </label>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2 border rounded-lg text-gray-700"
              >
                Previous
              </button>

              <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Create Account
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Signup;
