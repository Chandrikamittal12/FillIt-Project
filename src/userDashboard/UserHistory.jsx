
import React, { useState } from "react";
import {
  Search,
  BadgeCheck,
  Clock,
  XCircle,
  Calendar,
  FileCheck,
} from "lucide-react";

export default function UserHistory() {
  const [query, setQuery] = useState("");

  // SAMPLE DATA (Replace with API response)
  const history = [
    {
      id: "FRM-1024",
      name: "Aadhar Update Form",
      date: "12 Nov 2025",
      status: "Completed",
    },
    {
      id: "FRM-2041",
      name: "PAN Application Form",
      date: "10 Nov 2025",
      status: "Pending",
    },
    {
      id: "FRM-3081",
      name: "Income Certificate Form",
      date: "05 Nov 2025",
      status: "Rejected",
    },
    {
      id: "FRM-4410",
      name: "Driving License Form",
      date: "28 Oct 2025",
      status: "Completed",
    },
  ];

  const filtered = history.filter((item) =>
    (item.name + item.id + item.status)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <span className="flex items-center gap-1 bg-green-400/30 text-green-500 border border-green-500 px-3 py-1 rounded-lg text-xs">
            <BadgeCheck size={14} /> Completed
          </span>
        );
      case "Pending":
        return (
          <span className="flex items-center gap-1 bg-yellow-400/50 text-yellow-600 border border-yellow-500 px-3 py-1 rounded-lg text-xs">
            <Clock size={14} /> Pending
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 bg-red-500/50 text-red-600 border border-red-500 px-3 py-1 rounded-lg text-xs">
            <XCircle size={14} /> Rejected
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-rose-300/30 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-purple-800">History</h1>
        <p className="text-gray-800">Track all your past form requests.</p>

        {/* SEARCH BAR */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-3 text-gray-800" />
          <input
            type="text"
            placeholder="Search by form name, request id, status..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/30 text-gray-800 pl-12 pr-4 py-3 rounded-xl 
                       border border-purple-700 hover:border-2 hover:border-purple-700 outline-none
                       shadow-purple-500/20 focus:shadow-purple-500/40 transition-all"
          />
        </div>

        {/* HISTORY LIST */}
        <div className="space-y-5">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="bg-rose-300/40 p-5 rounded-2xl border border-purple-500/20 
                         shadow-[0_0_25px_rgba(128,0,255,0.15)]
                         hover:shadow-purple-500 hover:bg-purple-400/40
                         transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-black">{item.name}</h3>
                {getStatusBadge(item.status)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                <p className="flex items-center gap-2">
                  <FileCheck size={16} className="text-indigo-900" />
                  <span>Form ID: {item.id}</span>
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={16} className="text-indigo-900" />
                  Date: {item.date}
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={16} className="text-indigo-900" />
                  Status: {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-900 mt-10">No records found.</p>
        )}
      </div>
    </div>
  );
}
