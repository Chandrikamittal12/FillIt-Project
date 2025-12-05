import React, { useState } from "react";
import {
  Mail,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Search,
  Phone,
  Edit,
  Slash,
} from "lucide-react";

const AllUsers = () => {
  const [query, setQuery] = useState("");

  const users = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      phone: "9876543210",
      joined: "12 Aug 2024",
      totalRequests: 12,
      completed: 9,
      pending: 3,
      bookings: 4,
      isBlocked: false,
    },
    {
      id: 2,
      name: "Riya Patel",
      email: "riya@gmail.com",
      phone: "9090909090",
      joined: "01 Sept 2024",
      totalRequests: 8,
      completed: 8,
      pending: 0,
      bookings: 2,
      isBlocked: false,
    },
    {
      id: 3,
      name: "Deep Verma",
      email: "deep@gmail.com",
      phone: "9123456789",
      joined: "23 July 2024",
      totalRequests: 15,
      completed: 12,
      pending: 3,
      bookings: 5,
      isBlocked: true,
    },
    {
      id: 4,
      name: "Avni Sharma",
      email: "avni@gmail.com",
      phone: "9770317851",
      joined: "12 Aug 2025",
      totalRequests: 15,
      completed: 10,
      pending: 5,
      bookings: 4,
      isBlocked: false,
    },
    {
      id: 5,
      name: "Ajay Verma",
      email: "ajay@gmail.com",
      phone: "6260784656",
      joined: "12 Aug 2025",
      totalRequests: 25,
      completed: 15,
      pending: 10,
      bookings: 7,
      isBlocked: false,
    }
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()) ||
      u.phone.includes(query)
  );

  return (
    <div className="p-6 text-gray-800/60 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-purple-600 ">
          All USERS
        </h1>

        {/* SEARCH */}
        <div className="relative w-full md:w-72">
          <Search
            size={18}
            className="absolute left-3 top-3 text-indigo-500"
          />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white text-black border border-purple-700/90 rounded-xl pl-10 pr-4 py-2 
            outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-600 transition shadow-xxl shadow-purple-500/5"
          />
        </div>
      </div>

      {/* TABLE WRAPPER */}
      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl 
      border border-purple-700/40 shadow-[0_0_25px_rgba(148,51,234,0.25)] overflow-x-auto">

        <table className="w-full min-w-[1100px] border-collapse">
          <thead>
            <tr className="text-black text-left border-b border-purple-700/20 text-sm">
              <th className="py-3 px-5">User</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Joined</th>
              <th className="p-3">Requests</th>
              <th className="p-3">Completed</th>
              <th className="p-3">Pending</th>
              <th className="p-3">Bookings</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Block</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center p-6 text-gray-800">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-800/50 hover:bg-purple-400/30 transition "
                >
                  {/* USER */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-linear-to-br from-orange-500/30 via-rose-500/30 to-purple-600/20 
                      w-10 h-10 flex items-center justify-center text-black rounded-xl text-sm font-semibold shadow-[0_0_10px_rgba(178,85,247,0.3)]">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="p-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Mail size={16} /> {user.email}
                    </div>
                  </td>

                  {/* PHONE */}
                  <td className="p-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Phone size={16} /> {user.phone}
                    </div>
                  </td>

                  {/* JOINED */}
                  <td className="p-4 text-gray-700">
                    <div className="flex items-center gap-2 text-nowrap">
                      <Calendar size={16} /> {user.joined}
                    </div>
                  </td>

                  {/* REQUESTS */}
                  <td className="p-4 text-indigo-600 font-medium">
                    <div className="flex items-center gap-2">
                      <FileText size={16} /> {user.totalRequests}
                    </div>
                  </td>

                  {/* COMPLETED */}
                  <td className="p-4 text-green-500 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} /> {user.completed}
                    </div>
                  </td>

                  {/* PENDING */}
                  <td className="p-4 text-red-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {user.pending}
                    </div>
                  </td>

                  {/* BOOKINGS */}
                  <td className="p-4 text-blue-600 font-medium">
                    {user.bookings}
                  </td>

                  {/* EDIT BUTTON */}
                  <td className="p-4">
                    <button className="p-2 bg-linear-to-br from-purple-600/20 to-indigo-600/20 
                    text-purple-900/90 rounded-lg hover:from-indigo-500/50 hover:to-indigo-500/50 transition shadow-xxl">
                      <Edit size={16} />
                    </button>
                  </td>

                  {/* BLOCK BUTTON */}
                  <td className="p-4">
                    <button
                      className={`p-2 rounded-lg transition flex items-center justify-center shadow 
                      ${
                        user.isBlocked
                          ? "bg-red-900/20 text-red-600 hover:bg-red-800/40"
                          : "bg-gray-800/30 text-gray-800 hover:bg-red-800/40 hover:text-red-600"
                      }`}
                    >
                      <Slash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
