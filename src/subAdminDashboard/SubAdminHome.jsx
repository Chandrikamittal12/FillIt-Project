import React from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  UserPlus,
  Activity,
  BarChart3,
  FolderPlus,
  ClipboardCheck
} from "lucide-react";

const SubAdminHome = () => {

  const recentRequests = [
    { user: "Amit Sharma", form: "PAN Update", status: "Pending", time: "2 hrs ago" },
    { user: "Riya Patel", form: "Bank KYC", status: "In Review", time: "5 hrs ago" },
    { user: "Deepak Verma", form: "Aadhar Correction", status: "Completed", time: "1 day ago" },
  ];

  const teams = [
    { name: "Verification Team", members: 5 },
    { name: "Document Team", members: 3 },
    { name: "Review Team", members: 4 },
  ];

  const card =
    "p-6 rounded-2xl bg-white/30 border border-purple-800/30 " +
    "backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)] " +
    "hover:shadow-[0_0_35px_rgba(128,0,255,0.45)] transition-all duration-300";

  return (
    <div className="p-6 md:p-8 text-gray-800">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-purple-800">
          Sub-Admin Dashboard
        </h1>
        <p className="text-gray-800 mt-1">Overview of requests & team workflow</p>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 mb-12">

        {/* Monthly Pending */}
        <div className={card}>
          <Clock size={36} className="text-yellow-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-800">Monthly Pending</p>
            <h2 className="text-2xl font-bold">120</h2>
          </div>
        </div>

        {/* Monthly Completed */}
        <div className={card}>
          <CheckCircle size={36} className="text-green-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-800">Monthly Completed</p>
            <h2 className="text-2xl font-bold">310</h2>
          </div>
        </div>

        {/* In Review */}
        <div className={card}>
          <Activity size={36} className="text-indigo-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-800">In Review</p>
            <h2 className="text-2xl font-bold">58</h2>
          </div>
        </div>

        {/* Today Pending */}
        <div className={card}>
          <Clock size={36} className="text-orange-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-800">Today Pending</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>

        {/* Today Completed */}
        <div className={card}>
          <CheckCircle size={36} className="text-green-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-800">Today Completed</p>
            <h2 className="text-2xl font-bold">14</h2>
          </div>
        </div>

        {/* Recent Requests */}
        <div className={card}>
          <Calendar size={36} className="text-red-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-800">Recent Requests</p>
            <h2 className="text-2xl font-bold">26</h2>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* LEFT SECTION */}
        <div className="xl:col-span-3 space-y-8">

          {/* ANALYTICS SUMMARY */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-indigo-800" /> Request Overview
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white/90 rounded-xl border border-purple-800/30 hover:bg-purple-300/30 transition-all">
                <p className="text-gray-800 text-sm">Total Requests</p>
                <h2 className="text-3xl font-bold mt-1">488</h2>
              </div>

              <div className="p-4 bg-white/90 rounded-xl border border-purple-800/30 hover:bg-purple-300/30 transition-all">
                <p className="text-gray-800 text-sm">Completion Rate</p>
                <h2 className="text-3xl font-bold mt-1">72%</h2>
              </div>
            </div>
          </div>

          {/* RECENT REQUESTS */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-indigo-800" /> Recent Requests
            </h3>

            <div className="space-y-4">
              {recentRequests.map((req, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/90 rounded-xl border border-purple-800/30 hover:bg-purple-300/30 transition-all"
                >
                  <p className="font-medium">{req.user}</p>
                  <p className="text-sm text-gray-800">{req.form} • {req.status}</p>
                  <p className="text-xs text-gray-700">{req.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">

          {/* TEAMS OVERVIEW */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="text-indigo-600" /> Teams Overview
            </h3>

            <div className="space-y-4">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/90 rounded-xl border border-purple-800/30 hover:bg-purple-300/30 transition-all"
                >
                  <p className="font-medium">{team.name}</p>
                  <p className="text-sm text-gray-800">{team.members} Members</p>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white/30 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="text-green-500" /> Quick Actions
            </h3>

            <div className="space-y-4">

              <button className="w-full flex items-center justify-between bg-white/30 hover:bg-purple-300/30 p-4 rounded-xl border border-purple-800/30 transition-all">
                <span className="font-medium">Create New Form</span>
                <FolderPlus className="text-indigo-800" />
              </button>

              <button className="w-full flex items-center justify-between bg-white/30 hover:bg-purple-300/30 p-4 rounded-xl border border-purple-800/30 transition-all">
                <span className="font-medium">Assign Request</span>
                <ClipboardCheck className="text-indigo-700" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SubAdminHome;