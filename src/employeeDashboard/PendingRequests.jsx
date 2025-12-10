import React, { useState } from "react";
import { Search, Clock, FileWarning } from "lucide-react";

const PendingRequests = () => {
  const [query, setQuery] = useState("");

  const pendingData = [
    {
      id: "REQ-1001",
      form: "Aadhar Update",
      user: "Amit Sharma",
      status: "Pending",
      date: "10 Nov 2024",
    },
    {
      id: "REQ-1004",
      form: "PAN Correction",
      user: "Riya Patel",
      status: "Pending",
      date: "11 Nov 2024",
    },
    {
      id: "REQ-1011",
      form: "Bank KYC",
      user: "Mahesh Yadav",
      status: "Pending",
      date: "13 Nov 2024",
    },
  ];

  return (
    <div className="p-6 md:p-8 text-gray-800">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-purple-700 flex items-center gap-3">
          <FileWarning className="text-purple-700" /> Pending Requests
        </h1>
        <p className="text-gray-800 mt-1">All requests assigned to you but not completed yet</p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center bg-white/30 border border-purple-300 rounded-xl p-3 shadow-[0_0_20px_rgba(128,0,255,0.25)]">
          <Search size={20} className="text-gray-800" />
          <input
            type="text"
            placeholder="Search pending requests..."
            className="bg-transparent outline-none text-gray-900 ml-3 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* PENDING REQUEST TABLE */}
      <div className="bg-rose-300/30 rounded-2xl border border-purple-300/20 
      backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)] overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-rose-300 text-black text-sm">
            <tr>
              <th className="p-4">Request ID</th>
              <th className="p-4">Form Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Status</th>
              <th className="p-4">Assigned Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {pendingData
              .filter(
                (req) =>
                  req.id.toLowerCase().includes(query.toLowerCase()) ||
                  req.form.toLowerCase().includes(query.toLowerCase()) ||
                  req.user.toLowerCase().includes(query.toLowerCase())
              )
              .map((req, index) => (
                <tr
                  key={index}
                  className="border-b border-purple-300/30 hover:bg-purple-400/30 transition-all"
                >
                  <td className="p-4 font-medium">{req.id}</td>
                  <td className="p-4">{req.form}</td>
                  <td className="p-4">{req.user}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-red-800 flex items-center gap-1 w-fit">
                      <Clock size={14} /> Pending
                    </span>
                  </td>
                  <td className="p-4">{req.date}</td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default PendingRequests;