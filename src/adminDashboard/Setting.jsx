import React, { useState } from "react";

const Settings = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-white/30 text-black p-6">
      <h1 className="text-3xl font-semibold mb-6 text-purple-700">
        Settings
      </h1>

      <div className="w-full flex-col items-end max-w-3xl space-y-10">

        {/* Account Settings */}
        <section className="p-6 rounded-2xl bg-linear-to-br from-white/10 via-rose-300/30 to-purple-400/30  border-transparent bg-clip-padding relative shadow-[0_0_25px_rgba(255,120,0,0.15)] before:absolute before:inset-0 before:rounded-2xl before:p-2 border-2 before:bg-linear-to-r before:from-orange-500 before:via-rose-500 before:to-purple-600 before:-z-10">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-black">Full Name</label>
              <input
                type="text"
                placeholder="Admin Name"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-purple-600 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-black">Email Address</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-purple-600 outline-none"
              />
            </div>

            <button className="px-5 py-2 rounded-lg bg-linear-to-r from-indigo-400  to-purple-600 hover:opacity-90 transition">
              Save Changes
            </button>
          </div>
        </section>

        {/* Change Password */}
        <section className="p-6 rounded-2xl bg-linear-to-br from-white/30 via-purple-400 to-rose-400 border border-transparent bg-clip-padding relative shadow-[0_0_25px_rgba(255,120,0,0.15)] before:absolute before:inset-0 before:rounded-2xl before:p-2 before:bg-linear-to-r before:from-orange-500 before:via-rose-500 before:to-purple-600 before:-z-10">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-black">Current Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-gray-800 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-black">New Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-gray-800 outline-none"
              />
            </div>

            <button className="px-5 py-2 rounded-lg bg-linear-to-r from-indigo-400  to-purple-500 hover:opacity-90 transition ">
              Update Password
            </button>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="p-6 rounded-2xl bg-linear-to-br from-rose/30 via-white/10 to-purple/20 border border-transparent bg-clip-padding relative shadow-[0_0_25px_rgba(255,120,0,0.15)] before:absolute before:inset-0 before:rounded-2xl before:p-2px before:bg-linear-to-r before:from-orange-500 before:via-rose-500 before:to-purple-600 before:-z-10">
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>

          <div className="space-y-4 text-gray-800">

            {/* Email */}
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <button
                onClick={() => setEmailNotification(!emailNotification)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  emailNotification
                    ? "bg-linear-to-r from-orange-400 via-rose-500 to-purple-600"
                    : "bg-gray-800"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    emailNotification ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* SMS */}
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <button
                onClick={() => setSmsNotification(!smsNotification)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  smsNotification
                    ? "bg-linear-to-r from-orange-400 via-rose-500 to-purple-600"
                    : "bg-gray-700"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    smsNotification ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  darkMode
                    ? "bg-linear-to-r from-orange-400 via-rose-500 to-purple-600"
                    : "bg-gray-800"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="p-6 rounded-2xl bg-rose-300/30 border border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.25)]">
          <h2 className="text-xl font-semibold mb-4 text-black">Danger Zone</h2>

          <div className="flex items-center justify-between">
            <span>Delete Account</span>
            <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span>Logout</span>
            <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-blue-800 hover:text-white">
              Logout
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Settings;
