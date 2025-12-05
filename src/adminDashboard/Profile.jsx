import { useState } from "react";
import { Camera, Mail, User, Phone, MapPin, Lock } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Chandrika Mittal",
    email: "chandrikamittal@example.com",
    phone: "9770317851",
    address: "Indore, Madhya Pradesh",
  });

  const [passwords, setPasswords] = useState({
    old: "",
    newPass: "",
    confirm: "",
  });

  return (
    <section className="p-6 space-y-12 min-h-screen text-gray-300 ">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold mb-3 text-purple-700">
        Profile Settings
      </h1>

      {/* TOP SECTION CARD GRADIENT */}
      <div className="p-2 rounded-2xl bg-linear-to-r from-rose-300   to-purple-500 shadow-[0_0_25px_rgba(128,0,255,0.25)]">
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-8 flex gap-10 items-center">

          {/* Avatar */}
          <div className="relative w-32 h-32">
            <img
              src="https://i.ibb.co/4pDNDk1/avatar.png"
              className="w-32 h-32 rounded-full object-cover border border-purple-700/30"
              alt="avatar"
            />

            {/* Upload Button */}
            <button className="absolute bottom-1 right-1 bg-linear-to-r from-purple-500 to-indigo-500 p-2 rounded-full hover:scale-110 transition">
              <Camera size={16} />
            </button>
          </div>

          {/* Basic Info */}
          <div>
            <h2 className="text-xl text-black font-semibold">{profile.name}</h2>
            <p className="text-black">{profile.email}</p>
            <p className="text-black mt-1 text-sm">Member since 2024</p>
          </div>

        </div>
      </div>

      {/* PROFILE DETAILS FORM */}
      <div
        className="p-2 rounded-2xl bg-linear-to-r from-purple-400 via-rose-400  to-indigo-400 shadow-lg"
      >
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-8 space-y-8">

          {/* Field Component */}
          {[
            {
              label: "Name",
              icon: <User size={16} />,
              type: "text",
              value: profile.name,
              key: "name",
            },
            {
              label: "Email",
              icon: <Mail size={16} />,
              type: "email",
              value: profile.email,
              key: "email",
            },
            {
              label: "Phone Number",
              icon: <Phone size={16} />,
              type: "text",
              value: profile.phone,
              key: "phone",
            },
          ].map((field) => (
            <div className="flex flex-col gap-2" key={field.key}>
              <label className="text-black flex items-center gap-2">
                {field.icon} {field.label}
              </label>
              <input
                type={field.type}
                className="bg-white text-gray-600 p-3 rounded-xl outline-none border border-purple-900/20 focus:ring-2 focus:ring-purple-500 transition"
                value={field.value}
                onChange={(e) =>
                  setProfile({ ...profile, [field.key]: e.target.value })
                }
              />
            </div>
          ))}

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label className="text-black flex items-center gap-2">
              <MapPin size={16} /> Address
            </label>
            <textarea
              className="bg-white text-gray-800 p-3 rounded-xl outline-none border border-purple-900/20 focus:ring-2 focus:ring-purple-500 transition"
              rows="2"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* PASSWORD CHANGE CARD */}
      <div
        className="p-2 rounded-2xl bg-linear-to-r from-indigo-500 via-rose-400 to-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.25)]"
      >
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-8 space-y-6">

          <h2 className="text-xl font-semibold text-black flex items-center gap-2">
            <Lock size={20} /> Change Password
          </h2>

          {/* Old Password */}
          <div className="flex flex-col gap-2">
            <label className="text-black">Old Password</label>
            <input
              type="password"
              className="bg-white text-gray-800 p-3 rounded-xl outline-none border border-purple-900/20 focus:ring-2 focus:ring-purple-500 transition"
              value={passwords.old}
              onChange={(e) =>
                setPasswords({ ...passwords, old: e.target.value })
              }
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-800">New Password</label>
            <input
              type="password"
              className="bg-white text-black p-3 rounded-xl outline-none border border-purple-900/20 focus:ring-2 focus:ring-purple-500 transition"
              value={passwords.newPass}
              onChange={(e) =>
                setPasswords({ ...passwords, newPass: e.target.value })
              }
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-black">Confirm Password</label>
            <input
              type="password"
              className="bg-white  text-black p-3 rounded-xl outline-none border border-purple-900/20 focus:ring-2 focus:ring-purple-500 transition"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
          </div>

          {/* Save Button */}
          <button className="mt-4 bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-xl text-white hover:scale-105 transition-all shadow-lg">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
