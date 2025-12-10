import React from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle,
  BarChart3,
  FileText,
  Play,
  ClipboardCheck,
  ListTodo,
} from "lucide-react";

const EmployeeHome = () => {

  const assignedRequests = [
    { form: "Aadhar Update", user: "Amit Sharma", status: "Assigned", time: "1 hr ago" },
    { form: "PAN Correction", user: "Neha Verma", status: "Pending", time: "3 hrs ago" },
    { form: "GST Registration", user: "Rahul Singh", status: "Completed", time: "1 day ago" },
  ];

  const card =
    "p-6 rounded-2xl bg-white/30 border border-purple-800/30  backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)] " +
    "hover:shadow-[0_0_35px_rgba(128,0,255,0.45)] transition-all duration-300";

  return (
    <div className="p-6 md:p-8 text-gray-800">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-purple-800">
          Employee Dashboard
        </h1>
        <p className="text-gray-800 mt-1">Your assigned form requests & daily workflow</p>
      </div>

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        {/* Assigned Requests */}
        <div className={card}>
          <ClipboardList size={38} className="text-indigo-800" />
          <div className="mt-3">
            <p className="text-sm text-black">Total Assigned</p>
            <h2 className="text-3xl font-bold">38</h2>
          </div>
        </div>

        {/* Pending Assigned */}
        <div className={card}>
          <Clock size={38} className="text-yellow-500" />
          <div className="mt-3">
            <p className="text-sm text-black">Pending</p>
            <h2 className="text-3xl font-bold">12</h2>
          </div>
        </div>

        {/* Completed Assigned */}
        <div className={card}>
          <CheckCircle size={38} className="text-green-500" />
          <div className="mt-3">
            <p className="text-sm text-black">Completed</p>
            <h2 className="text-3xl font-bold">26</h2>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* LEFT SECTION (LARGER) */}
        <div className="xl:col-span-3 space-y-8">

          {/* REQUEST OVERVIEW */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-indigo-600" /> Request Overview
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white/90 rounded-xl border border-purple-800/40 hover:bg-purple-300/10 transition-all">
                <p className="text-gray-800 text-sm">Today's Assigned</p>
                <h2 className="text-3xl font-bold mt-1">7</h2>
              </div>

              <div className="p-4 bg-white/90 rounded-xl border border-purple-800/40 hover:bg-purple-300/10 transition-all">
                <p className="text-gray-800 text-sm">Today's Completed</p>
                <h2 className="text-3xl font-bold mt-1">4</h2>
              </div>
            </div>
          </div>

          {/* ASSIGNED REQUEST LIST */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-blue-800" /> Assigned Requests
            </h3>

            <div className="space-y-4">
              {assignedRequests.map((req, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/90 rounded-xl border border-purple-800/20 hover:bg-purple-300/50 transition-all"
                >
                  <p className="font-medium">{req.form}</p>
                  <p className="text-sm text-gray-800">
                    {req.user} • {req.status}
                  </p>
                  <p className="text-xs text-gray-600">{req.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">

          {/* QUICK ACTIONS */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
              <ListTodo className="text-green-600" /> Quick Actions
            </h3>

            <div className="space-y-4">
              {/* Start Processing */}
              <button className="w-full flex items-center justify-between bg-white/90 hover:bg-purple-300/50 p-4 rounded-xl border border-purple-800/20 transition-all">
                <span className="font-medium">Start Processing</span>
                <Play className="text-indigo-600" />
              </button>

              {/* Update Status */}
              <button className="w-full flex items-center justify-between bg-white/90 hover:bg-purple-300/50 p-4 rounded-xl border border-purple-800/20 transition-all">
                <span className="font-medium">Update Request Status</span>
                <ClipboardCheck className="text-indigo-900" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmployeeHome;