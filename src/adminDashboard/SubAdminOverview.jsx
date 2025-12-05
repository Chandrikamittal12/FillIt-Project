import { useState } from "react";
import { Search, Eye, Pencil, Trash2, PlusCircle } from "lucide-react";

const SubAdminOverview = () => {
  const [search, setSearch] = useState("");

  const todaysRequests = 18;

  const subAdmins = [
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@mail.com",
      phone: "9876543210",
      assigned: 15,
      completed: 5,
      pending: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@mail.com",
      phone: "9123456780",
      assigned: 20,
      completed: 16,
      pending: 4,
      status: "On Leave",
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@mail.com",
      phone: "9988776655",
      assigned: 8,
      completed: 7,
      pending: 1,
      status: "Resigned",
    },
    {
      id: 4,
      name: "Rupali Sharma",
      email: "rupali@mail.com",
      phone: "9876567810",
      assigned: 12,
      completed: 5,
      pending: 8,
      status: "Active",
    },
    {
      id: 5,
      name: "Mina Verma",
      email: "Mina@mail.com",
      phone: "9870067810",
      assigned: 10,
      completed: 9,
      pending: 1,
      status: "Active",
    }
  ];

  const filteredAdmins = subAdmins.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 text-black">

      {/* HEADER */}
      <div className="flex justify-between w-full items-center flex-wrap gap-4">

        <div className="flex flex-col items-start w-full gap-6 flex-wrap">

          <h1 className="text-3xl font-extrabold text-purple-700 ">
            SUB ADMIN MANAGEMENT
          </h1>

          <div className="flex justify-between items-center w-full">

            {/* TODAY REQUEST CARD */}
            <div
              className="
              px-6 py-3 rounded-xl 
              bg-white/50 border border-rose-700/40 backdrop-blur-md hover:shadow-xxl
              shadow-[0_0_25px_rgba(138,61,234,0.3)]
            "
            >
              <p className="text-sm text-gray-800">Today's Requests</p>
              <h3 className="text-xl font-bold text-purple-600">
                {todaysRequests}
              </h3>
            </div>

            {/* SEARCH */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-800" size={18} />
              <input
                type="text"
                placeholder="Search Sub Admin..."
                className="
                bg-white/50 text-gray-800 pl-10 pr-4 py-2 
                w-64 rounded-xl outline-none border border-purple-700/50
                focus:ring-2 focus:ring-indigo-500/40 shadow-lg shadow-indigo-500/50 transition
              "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

      </div>

      {/* TABLE CARD */}
      <div
        className="
          bg-white/60 p-6 rounded-2xl 
          border border-rose-800/40 backdrop-blur-xl
          shadow-[0_0_35px_rgba(138,51,234,0.25)]
        "
      >
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-xl font-semibold bg-linear-to-r from-orange-600 to-purple-600 text-transparent bg-clip-text">
            Sub Admin Overview
          </h2>

          {/* CREATE BUTTON */}
          <button
            className="
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium
            bg-linear-to-r from-purple-700/50 to-indigo-700/40
            border border-purple-700/40
            hover:from-purple-800/70 hover:to-indigo-800/70 
            transition text-black shadow-lg hover:shadow-purple-400
          "
          >
            <PlusCircle size={18} />
            Create Sub Admin
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-800">
            <thead className="bg-rose-400/30 text-black">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Assigned</th>
                <th className="py-3 px-4 text-left">Completed</th>
                <th className="py-3 px-4 text-left">Pending</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Performance</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAdmins.map((admin) => {
                const performance = Math.round((admin.completed / admin.assigned) * 100);

                const performanceColor =
                  performance < 60
                    ? "bg-red-600/30 text-red-600"
                    : performance <= 90
                    ? "bg-yellow-600/30 text-green-800"
                    : "bg-green-600/30 text-indigo-800";

                return (
                  <tr
                    key={admin.id}
                    className="border-t border-gray-800/40 hover:bg-purple-500/30 transition"
                  >
                    <td className="py-3 px-4">{admin.id}</td>
                    <td className="py-3 px-4 font-medium">{admin.name}</td>
                    <td className="py-3 px-4">{admin.email}</td>
                    <td className="py-3 px-4">{admin.phone}</td>

                    <td className="py-3 px-4">{admin.assigned}</td>
                    <td className="py-3 px-4 text-green-600">{admin.completed}</td>
                    <td className="py-3 px-4 text-yellow-400">{admin.pending}</td>

                    {/* STATUS */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap
                        ${
                          admin.status === "Active"
                            ? "bg-green-600/20 text-green-600"
                            : admin.status === "On Leave"
                            ? "bg-yellow-600/20 text-indigo-800"
                            : "bg-red-600/20 text-red-600"
                        }
                      `}
                      >
                        {admin.status}
                      </span>
                    </td>

                    {/* PERFORMANCE */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${performanceColor}`}
                      >
                        {performance}%
                      </span>
                    </td>

                    {/* ACTIONS */}
                    <td className="py-3 px-4 flex gap-3">
                      <button className="p-2 rounded-lg bg-green-600/40 text-green-600 hover:bg-green-600/30 transition shadow">
                        <Pencil size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-red-600/40 text-red-600 hover:bg-red-600/30 transition shadow">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filteredAdmins.length === 0 && (
                <tr>
                  <td colSpan="10" className="py-4 text-center text-gray-800 italic">
                    No sub-admin found
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

export default SubAdminOverview;
