import React, { useState } from "react";
import {
  ClipboardList,
  CheckCircle,
  Clock,
  FileWarning,
  Calendar,
  User,
  ChevronRight,
} from "lucide-react";

const UserHome = () => {
  const [selectedSlot, setSelectedSlot] = useState("");

  const recentRequests = [
    { id: "REQ-2001", form: "Aadhar Update", date: "20 Nov 2025", status: "Completed" },
    { id: "REQ-2008", form: "PAN Correction", date: "19 Nov 2025", status: "Pending" },
    { id: "REQ-2012", form: "Bank KYC", date: "18 Nov 2025", status: "Docs Needed" },
    { id: "REQ-2015", form: "Voter ID Apply", date: "17 Nov 2025", status: "Completed" },
    { id: "REQ-2019", form: "Driving License Update", date: "16 Nov 2025", status: "Pending" },
  ];

  const statusBadge = (status) => {
    const base = "px-3 py-1 rounded-full text-xs flex items-center gap-1 font-medium";
    if (status === "Completed")
      return <span className={`${base} bg-green-500/20 text-green-500`}><CheckCircle size={12}/>Completed</span>;
    if (status === "Pending")
      return <span className={`${base} bg-yellow-500/20 text-yellow-500`}><Clock size={12}/>Pending</span>;
    return <span className={`${base} bg-red-500/20 text-red-500`}><FileWarning size={12}/>Docs Needed</span>;
  };

  const bookSlot = () => alert(`Slot booked for ${selectedSlot}`);

  return (
    <div className="min-h-screen bg-white/50 text-gray-800 p-6 flex justify-center">
      <div className="w-full max-w-7xl space-y-10">

        {/* ----- TOP STATUS CARDS ----- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Total Requests */}
          <div className="bg-blue-600/30 p-5 rounded-2xl shadow 2xl shadow-blue-600 hover:shadow-blue-600 hover-shadow-2xl hover:scale-[1.04] transition cursor-pointer backdrop-blur-lg">
            <div className="flex justify-between items-center">
              <p className="text-m opacity-80 text-black">Total Requests</p>
              <ClipboardList size={22} className="text-blue-900" />
            </div>
            <h1 className="text-4xl font-bold text-black mt-3">24</h1>
            <p className="text-xs text-gray-800 opacity-70 mt-1">Updated just now</p>
          </div>

          {/* Completed */}
          <div className="glass-card p-5 rounded-2xl shadow 2xl shadow-green-800 hover:shadow-green-600 hover-shadow-2xl bg-green-500/50 border border-green-500/20 hover:scale-[1.04] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-m text-black">Completed</p>
              <CheckCircle size={22} className="text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-black mt-3">18</h1>
            <p className="text-xs text-gray-500 mt-1">All-time</p>
          </div>

          {/* Pending */}
          <div className="glass-card p-5 rounded-2xl shadow 2xl shadow-yellow-700 hover:shadow-yellow-600 hover-shadow-2xl bg-yellow-500/50 border border-yellow-500/20 hover:scale-[1.04] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-m text-black">Pending</p>
              <Clock size={22} className="text-yellow-500" />
            </div>
            <h1 className="text-4xl font-bold text-black mt-3">5</h1>
            <p className="text-xs text-gray-500 mt-1">Awaiting action</p>
          </div>

          {/* Docs Needed */}
          <div className="bg-linear-to-br from-red-300 to-red-300 p-5 rounded-2xl  shadow 2xl shadow-red-700 hover:shadow-red-600 hover-shadow-2xl bg-red-500/50 border border-red-500/20 hover:scale-[1.04] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-m text-black">Document Needed</p>
              <FileWarning size={22} className="text-red-600" />
            </div>
            <h1 className="text-4xl font-bold mt-3">1</h1>
            <p className="text-xs text-gray-700 opacity-80 mt-1">Needs attention</p>
          </div>
        </div>

        {/* ----- MAIN GRID ----- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SIDE: Recent Requests */}
          <div className="lg:col-span-9 space-y-4">
            <h2 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              Recent Requests <ChevronRight className="text-purple-800" />
            </h2>

            {recentRequests.map((req) => (
              <div
                key={req.id}
                className="bg-rose-400/30 p-5 rounded-2xl border border-purple-800/20 shadow hover:bg-purple-600/30 hover:scale-[1.01] transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{req.form}</h3>
                    <p className="text-xs text-gray-800 mt-1">{req.date}</p>
                  </div>
                  {statusBadge(req.status)}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Profile + Slot */}
          <div className="lg:col-span-3 space-y-6">

            {/* PROFILE CARD */}
            <div className="bg-purple-300/30 p-6 rounded-2xl border border-purple-700/20 text-center hover:shadow-purple-600 shadow-lg hover:bg-purple-500/30 hover:scale-[1.02] transition">
              <User size={40} className="mx-auto text-purple-600" />
              <h3 className="mt-3 text-2xl font-semibold">Welcome, Chandrika</h3>
              <p className="text-xs text-gray-800">User Dashboard</p>
            </div>

            {/* SLOT BOOKING */}
            <div className="bg-rose-300/30 p-6 rounded-2xl border border-purple-700/20 shadow-lg hover:shadow-purple-600 hover:scale-[1.02] transition">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-indigo-800" />
                <h3 className="font-semibold text-black text-lg">Book a Slot</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-900">Select Date</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-2 bg-white/70  border border-purple-600/20 rounded-lg outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-900">Select Time Slot</label>
                  <select
                    className="w-full mt-1 p-2 bg-white/70 border border-purple-600/20 rounded-lg outline-none"
                    onChange={(e) => setSelectedSlot(e.target.value)}
                  >
                    <option className="text-gray-600"value="">Choose slot</option>
                    <option value="9AM - 10AM">9AM - 10AM</option>
                    <option value="10AM - 11AM">10AM - 11AM</option>
                    <option value="2PM - 3PM">2PM - 3PM</option>
                  </select>
                </div>

                <button
                  disabled={!selectedSlot}
                  onClick={bookSlot}
                  className="w-full hover:shadow hover:shadow-gray-600 transition p-2 rounded-lg font-semibold disabled:bg-linear-to-br from-indigo-600 to-blue-400 "
                >
                  Book Slot
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default UserHome;
