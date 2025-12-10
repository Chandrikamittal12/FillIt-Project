import React, { useState } from "react";
import { Search, CheckCircle, Clock, FileText, AlertTriangle } from "lucide-react";

const RequestTracking = () => {
  const [query, setQuery] = useState("");

  const requests = [
    {
      id: "REQ-10021",
      user: "Amit Sharma",
      formName: "Government ID Verification",
      type: "Government",
      requestedOn: "12 Aug 2024 • 2:40 PM",
      status: "Missing Docs",
      stages: {
        requiredDocs: true,
        missingDocs: true,
        assigned: false,
        inReview: false,
        completed: false,
        rejected: false,
      },
    },
    {
      id: "REQ-10022",
      user: "Rekha Patel",
      formName: "UPSC Verification",
      type: "UPSC",
      requestedOn: "12 Aug 2024 • 11:20 AM",
      status: "In Review",
      stages: {
        requiredDocs: true,
        missingDocs: false,
        assigned: true,
        inReview: true,
        completed: false,
        rejected: false,
      },
    },
    {
      id: "REQ-10025",
      user: "Deepak Verma",
      formName: "Private Company Background Check",
      type: "Private",
      requestedOn: "11 Aug 2024 • 5:10 PM",
      status: "Completed",
      stages: {
        requiredDocs: true,
        missingDocs: false,
        assigned: true,
        inReview: true,
        completed: true,
        rejected: false,
      },
    },
  ];

  const statusColors = {
    "Pending": "text-yellow-400",
    "Missing Docs": "text-red-400",
    "Assigned": "text-blue-400",
    "In Review": "text-purple-400",
    "Completed": "text-green-400",
    "Rejected": "text-red-500",
  };

  const filtered = requests.filter((r) =>
    r.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white/30 text-gray-800 p-6">
      <h2 className="text-2xl font-semibold mb-6">Request Tracking</h2>

      {/* Search */}
      <div className="max-w-md mb-6 bg-white/30 px-4 py-2 rounded-xl border border-purple-300/60 hover:border hover:border-purple-400 shadow-2xl shadow-purple-500/30 flex items-center gap-2">
        <Search size={18} className="text-gray-800" />
        <input
          type="text"
          placeholder="Search request by ID..."
          className="bg-transparent outline-none w-full text-sm text-gray-800 placeholder-gray-800"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Tracking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((req, index) => (
          <div
            key={index}
            className="bg-white/30 p-5 rounded-2xl border border-purple-800/20 shadow-[0_0_25px_rgba(128,0,255,0.2)]"
          >
            {/* Header */}
            <h3 className="text-lg font-semibold">{req.id}</h3>
            <p className="text-sm text-gray-700">
              {req.formName} • <span className="text-gray-600">{req.type}</span>
            </p>

            {/* User + Date */}
            <p className="mt-2 text-sm text-gray-800">
              Requested By: <span className="text-gray-700">{req.user}</span>
            </p>
            <p className="text-sm text-gray-800">
              Requested On: <span className="text-gray-700">{req.requestedOn}</span>
            </p>

            {/* Status */}
            <p className="mt-2 text-sm">
              Status:{" "}
              <span className={`font-medium ${statusColors[req.status]}`}>
                {req.status}
              </span>
            </p>

            {/* Tracking Timeline */}
            <div className="mt-5">
              <div className="space-y-4">

                {/* Required Docs */}
                <StageItem
                  active={req.stages.requiredDocs}
                  label="Required Docs Submitted"
                  icon={<FileText size={18} />}
                />

                {/* Missing Docs */}
                <StageItem
                  active={req.stages.missingDocs}
                  label="Missing Docs"
                  icon={<AlertTriangle size={18} />}
                />

                {/* Assigned */}
                <StageItem
                  active={req.stages.assigned}
                  label="Assigned to Employee"
                  icon={<Clock size={18} />}
                />

                {/* In Review */}
                <StageItem
                  active={req.stages.inReview}
                  label="In Review"
                  icon={<Clock size={18} />}
                />

                {/* Completed */}
                <StageItem
                  active={req.stages.completed}
                  label="Completed"
                  icon={<CheckCircle size={18} />}
                />

                {/* Rejected */}
                <StageItem
                  active={req.stages.rejected}
                  label="Rejected"
                  icon={<AlertTriangle size={18} />}
                />

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const StageItem = ({ active, label, icon }) => (
  <div className="flex items-center gap-3">
    <div
      className={`p-2 rounded-full ${
        active
          ? "bg-purple-700 text-white shadow-[0_0_10px_rgba(128,0,255,0.5)]"
          : "bg-[#1e1e24] text-white"
      }`}
    >
      {icon}
    </div>
    <p className={`text-sm ${active ? "text-gray-800" : "text-gray-800"}`}>
      {label}
    </p>
  </div>
);

export default RequestTracking;