import React, { useState } from "react";
import { Search, PlusCircle, Pencil, Trash2, FileText } from "lucide-react";

const FormManagement = () => {
  const [search, setSearch] = useState("");

  const forms = [
    {
      id: 1,
      title: "Employee Registration Form",
      startDate: "05 Jan 2025",
      endDate: "25 Jan 2025",
      documents: ["Aadhar", "Resume", "Photo"],
    },
    {
      id: 2,
      title: "Leave Application Form",
      startDate: "01 Feb 2025",
      endDate: "28 Feb 2025",
      documents: ["Attendance Report"],
    },
    {
      id: 3,
      title: "Asset Allocation Form",
      startDate: "10 Mar 2025",
      endDate: "20 Mar 2025",
      documents: ["ID Card", "Confirmation Letter"],
    },
     {
      id: 4,
      title: " NEET Exam Form",
      startDate: "07 Dec 2025",
      endDate: "28 Dec 2025",
      documents: ["12th Marksheet", "Photo ID", "Passport Size Photo"],
    },
    {
      id: 5,
      title: " UG Exam Form",
      startDate: "01 Nov 2025",
      endDate: "28 Dec 2025",
      documents: ["12th Marksheet", "Photo ID", "Adhar Card","10th Marksheet"],
    }
  ];

  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 text-gray-800 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-semibold text-purple-700">
          Form Management
        </h1>

        {/* SEARCH */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-blue-800" />
          <input
            type="text"
            placeholder="Search form..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              bg-white text-black 0 pl-10 pr-4 py-2 rounded-xl 
              outline-none w-64 border border-rose-800/30 hover:border-purple-500
              focus:ring-2 focus:ring-purple-500 transition-all
            "
          />
        </div>

        {/* CREATE BUTTON */}
        <button
          className="
            flex items-center gap-2 px-4 py-2 rounded-xl
            bg-linear-to-r from-purple-700/40 to-rose-700/40 
            hover:from-rose-700/40 hover:to-indigo-600/40
            text-black transition
          "
        >
          <PlusCircle size={18} />
          Create New Form
        </button>
      </div>

      {/* TABLE CARD */}
      <div
        className="
          bg-white/30 backdrop-blur-xl 
          p-6 rounded-2xl 
          border border-rose-500/30 shadow-2xl shadow-purple-500/30
          
        "
      >
        <h2 className="text-xl font-semibold mb-5 bg-linear-to-b from-orange-500 via-rose-600 to-purple-600 text-transparent bg-clip-text">Forms Overview</h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-800">
            
            <thead className="bg-rose-400/30 text-gray-800">
              <tr>
                <th className="py-3 px-4 text-left">Form Title</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Required Documents</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredForms.map((form) => (
                <tr
                  key={form.id}
                  className="
                    border-t border-white/10 
                    hover:bg-purple-400/30 transition
                  "
                >
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <FileText size={18} className="text-indigo-600" />
                    {form.title}
                  </td>

                  <td className="py-3 px-4 text-gray-800">{form.startDate}</td>
                  <td className="py-3 px-4 text-gray-800">{form.endDate}</td>

                  {/* DOCUMENTS */}
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {form.documents.map((doc, idx) => (
                        <span
                          key={idx}
                          className="
                            text-xs px-3 py-1 rounded-lg 
                            bg-blue-600/20 text-red-700 
                            border border-blue-700/30
                          "
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="py-3 px-4 flex gap-3">
                    <button
                      className="
                        p-2 rounded-lg bg-green-600/20 text-green-500 
                        hover:bg-green-700/30 transition
                      "
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="
                        p-2 rounded-lg bg-red-700/20 text-red-600 
                        hover:bg-red-700/30 transition
                      "
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredForms.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-center text-gray-800 italic"
                  >
                    No forms found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default FormManagement;
