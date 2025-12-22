import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-700/50 via-rose-600/20 to-purple-700/50 text-gray-800 px-4 sm:px-6">
      <div className="  bg-linear-to-br from-rose-400/40 via-purple-500/40 to-rose-300 rounded-xl shadow-purple-300/30 p-6 sm:p-8 w-full max-w-lg border border-purple-300">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-1 text-purple-900">
          Forgot Password
        </h2>
        <p className="text-center text-gray-800 mb-8 text-sm">
          Reset your password in 3 simple steps
        </p>

        {/* STEPS INDICATOR – SAME AS SIGNUP */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">
          {[1, 2, 3].map((num) => {
            const isCompleted = step > num;
            const isCurrent = step === num;

            return (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                    text-white font-semibold transition-all duration-300
                    ${isCurrent 
                      ? "bg-purple-600 shadow-[0_0_10px_rgba(128,0,255,0.6)]" 
                      : isCompleted 
                      ? "bg-blue-600 border border-blue-400" 
                      : "bg-black border border-gray-600"
                    }
                  `}
                >
                  {num}
                </div>
                <p className="text-[10px] sm:text-xs text-gray-800 mt-2">
                  {num === 1 && "Send OTP"}
                  {num === 2 && "Verify OTP"}
                  {num === 3 && "Reset Password"}
                </p>
              </div>
            );
          })}
        </div>

        {/* STEP 1 – EMAIL */}
        {step === 1 && (
          <div className="space-y-5">
            <label className="block text-gray-800 text-l">Email Address *</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full p-3 rounded-md bg-white/30 border border-purple-300 text-gray-800 focus:border-purple-800 focus:outline-none"
            />

            <button
              onClick={nextStep}
              className="w-full py-3 rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
            >
              Send OTP
            </button>

            <p className="text-center text-gray-800 text-sm mt-6">
              Remembered your password?{" "}
              <Link to="/login" className="text-purple-800">Login</Link>
            </p>
          </div>
        )}

        {/* STEP 2 – OTP */}
        {step === 2 && (
          <div>
            <p className="bg-white text-green-600 border border-green-800 p-2 rounded-md text-center text-xs mb-5">
              OTP sent to your email.
            </p>

            <p className="text-center text-gray-800">Enter 5-digit OTP</p>

            <div className="flex justify-center gap-2 sm:gap-3 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold rounded-md bg-white border border-gray-700 text-gray-800 focus:border-purple-500"
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="w-full mt-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
            >
              Verify OTP
            </button>

            <div className="flex justify-between mt-4 text-xs text-gray-800 px-1">
              <span>Didn’t get the OTP?</span>
              <span>Resend in 42s</span>
            </div>

            <button
              onClick={prevStep}
              className="w-full mt-5 py-2 rounded-md border border-gray-800 text-gray-800 hover:text-white hover:bg-[#1f1f23] transition"
            >
              Back
            </button>
          </div>
        )}

        {/* STEP 3 – NEW PASSWORD */}
        {step === 3 && (
          <div className="space-y-6">
            <p className="bg-white text-green-500 border border-green-700 p-2 rounded-md text-center text-xs">
              OTP verified successfully.
            </p>

            <div>
              <label className="block text-gray-800 text-sm mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-3 rounded-md bg-white border border-gray-800 text-gray-800 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 text-sm mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full p-3 rounded-md bg-white border border-gray-800 text-gray-800 focus:border-purple-500"
              />
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-5 py-2 rounded-md border border-gray-800 text-gray-800 hover:text-white hover:bg-[#1f1f23] transition"
              >
                Back
              </button>

              <button className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:scale-105 transition">
                Reset Password
              </button>
            </div>

            <p className="text-center text-gray-800 text-sm mt-6">
              Remembered your password?{" "}
              <Link to="/login" className="text-purple-900">Login</Link>
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ForgotPassword;