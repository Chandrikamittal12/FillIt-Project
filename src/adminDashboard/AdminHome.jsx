// import { 
//   Users, FileText, CheckCircle, Clock, Calendar, 
//   UserPlus, Activity, BarChart3
// } from "lucide-react";

// const AdminHome = () => {
//   const recentUsers = [
//     { name: "Amit Sharma", email: "amit@gmail.com" },
//     { name: "Riya Patel", email: "riya@gmail.com" },
//     { name: "Deepak Verma", email: "deepak@gmail.com" },
//   ];

//   const recentEmployees = [
//     { name: "Karan Mehta", joined: "2 days ago" },
//     { name: "Neha Singh", joined: "4 days ago" },
//   ];

//   const activeEmployees = [
//     { name: "Harsh Gupta", role: "Form Handler" },
//     { name: "Sneha Rao", role: "Verification" },
//   ];

//   const cardStyles =
//     "p-6 rounded-2xl bg-white/40 border border-rose-900/40 " +
//     "backdrop-blur-xl shadow-[0_0_25px_rgba(138,0,255,0.25)] " +
//     "hover:shadow-[0_0_35px_rgba(138,0,255,0.45)] " +
//     "transition-all duration-300 cursor-pointer";

//   return (
//     <div className="p-6 md:p-8 text-gray-200">

//       {/* ---- HEADER ---- */}
//       <div className="mb-10">
//         <h1 className="text-3xl font-semibold text-purple-800 ">
//           Admin Dashboard
//         </h1>
//         <p className="text-gray-700 mt-1">Overview of system performance and activity</p>
//       </div>

//       {/* ---- TOP CARDS ---- */}
//       <div className="
//         grid grid-cols-1 sm:grid-cols-2 
//         lg:grid-cols-3 xl:grid-cols-5 
//         gap-5 mb-12
//       ">
//         {/* Total Users */}
//         <div className={cardStyles}>
//           <Users size={36} className="text-purple-600" />
//           <div className="mt-3">
//             <p className="text-sm text-gray-700">Total Users</p>
//             <h2 className="text-2xl text-black font-bold">1,240</h2>
//           </div>
//         </div>

//         {/* Form Requests */}
//         <div className={cardStyles}>
//           <FileText size={36} className="text-indigo-600" />
//           <div className="mt-3">
//             <p className="text-sm text-gray-700">Form Requests</p>
//             <h2 className="text-2xl text-black font-bold">890</h2>
//           </div>
//         </div>

//         {/* Completed */}
//         <div className={cardStyles}>
//           <CheckCircle size={36} className="text-green-400" />
//           <div className="mt-3">
//             <p className="text-sm text-gray-700">Completed</p>
//             <h2 className="text-2xl text-black font-bold">750</h2>
//           </div>
//         </div>

//         {/* Pending */}
//         <div className={cardStyles}>
//           <Clock size={36} className="text-yellow-400" />
//           <div className="mt-3">
//             <p className="text-sm text-gray-700">Pending</p>
//             <h2 className="text-2xl text-black font-bold">140</h2>
//           </div>
//         </div>

//         {/* Today's Requests */}
//         <div className={cardStyles}>
//           <Calendar size={36} className="text-pink-400" />
//           <div className="mt-3">
//             <p className="text-sm text-gray-700">Today’s Requests</p>
//             <h2 className="text-2xl text-black font-bold">26</h2>
//           </div>
//         </div>
//       </div>

//       {/* ---- LARGE GRID SECTION ---- */}
//       <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

//         {/* LEFT SIDE (3 columns) */}
//         <div className="xl:col-span-3 space-y-8">

//           {/* Revenue & Performance */}
//           <div className="
//             bg-white/40 p-6 rounded-2xl 
//             border border-rose-700/40 backdrop-blur-xl hover:shadow
//             shadow-[0_0_25px_rgba(130,0,255,0.25)]
            
//           ">
//             <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
//               <BarChart3 className="text-indigo-900" /> Analytics Summary
//             </h3>

//             <div className="grid sm:grid-cols-2 gap-6">
              
//               {/* Revenue */}
//               <div className="p-4 bg-white/30 rounded-xl border border-purple-800/20 hover:bg-rose-600/10 transition-all">
//                 <p className="text-gray-800 text-sm">Revenue</p>
//                 <h2 className="text-3xl font-bold text-black mt-1">$25,000</h2>
//               </div>

//               {/* Team Performance */}
//               <div className="p-4 bg-white/30 rounded-xl border border-purple-800/20 hover:bg-rose-600/10 transition-all">
//                 <p className="text-gray-800 text-sm">Team Performance</p>
//                 <h2 className="text-3xl text-black font-bold mt-1">25%</h2>
//               </div>

//             </div>
//           </div>

//           {/* Recent Users */}
//           <div className="
//             bg-white/40 p-6 rounded-2xl 
//             border border-rose-700/30 backdrop-blur-xl
//             shadow-[0_0_25px_rgba(128,0,255,0.25)]
//           ">
//             <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
//               <Users className="text-indigo-600" /> Recent Users
//             </h3>

//             <div className="space-y-4">
//               {recentUsers.map((user, index) => (
//                 <div key={index} className="
//                   p-4 bg-white/30 rounded-xl border border-purple-800/20
//                   hover:bg-rose-600/30 transition-all
//                 ">
//                   <p className="font-medium text-black">{user.name}</p>
//                   <p className="text-sm text-gray-900">{user.email}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* RIGHT SIDE (Active + New Employees) */}
//         <div className="space-y-8">

//           {/* New Employees */}
//           <div className="
//             bg-white/30 p-6 rounded-2xl 
//             border border-rose-700/30 backdrop-blur-xl
//             shadow-[0_0_25px_rgba(138,0,255,0.25)]
//           ">
//             <h3 className="text-xl font-semibold mb-4 flex items-center text-black gap-2">
//               <UserPlus className="text-indigo-900" /> Recently Joined
//             </h3>

//             <div className="space-y-4">
//               {recentEmployees.map((emp, index) => (
//                 <div 
//                   key={index}
//                   className="
//                     p-4 bg-white/30 rounded-xl 
//                     border border-purple-800/20
//                     hover:bg-rose-500/20 transition-all
//                   "
//                 >
//                   <p className="font-medium text-black">{emp.name}</p>
//                   <p className="text-sm text-gray-700">{emp.joined}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Active Employees */}
//           <div className="
//             bg-white/30 p-6 rounded-2xl 
//             border border-rose-900/30 backdrop-blur-xl
//             shadow-[0_0_25px_rgba(138,0,255,0.25)]
//           ">
//             <h3 className="text-xl font-semibold mb-4 flex items-center text-black gap-2">
//               <Activity className="text-indigo-700" /> Active Employees
//             </h3>

//             <div className="space-y-4">
//               {activeEmployees.map((emp, index) => (
//                 <div 
//                   key={index}
//                   className="
//                     p-4 bg-white/30 rounded-xl 
//                     border border-purple-800/20
//                     hover:bg-rose-500/20 transition-all
//                   "
//                 >
//                   <p className="font-medium text-black">{emp.name}</p>
//                   <p className="text-sm text-gray-700">{emp.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminHome;
//2nd
// import {
//   Users,
//   FileText,
//   CheckCircle,
//   Clock,
//   Calendar,
//   UserPlus,
//   Activity,
//   BarChart3,
// } from "lucide-react";

// const AdminHome = () => {
//   const recentUsers = [
//     { name: "Amit Sharma", email: "amit@gmail.com" },
//     { name: "Riya Patel", email: "riya@gmail.com" },
//     { name: "Deepak Verma", email: "deepak@gmail.com" },
//   ];

//   const recentEmployees = [
//     { name: "Karan Mehta", joined: "2 days ago" },
//     { name: "Neha Singh", joined: "4 days ago" },
//   ];

//   const activeEmployees = [
//     { name: "Harsh Gupta", role: "Form Handler" },
//     { name: "Sneha Rao", role: "Verification" },
//   ];

//   const statCard =
//     "rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition-all";

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 md:p-10">

//       {/* ===== HEADER ===== */}
//       <div className="mb-10">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Admin Dashboard
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Monitor users, requests & system activity
//         </p>
//       </div>

//       {/* ===== STATS ===== */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
//         <div className={`${statCard} border-l-4 border-purple-600`}>
//           <Users className="text-purple-600" />
//           <p className="text-sm text-gray-500 mt-2">Total Users</p>
//           <h2 className="text-2xl font-bold text-gray-800">1,240</h2>
//         </div>

//         <div className={`${statCard} border-l-4 border-indigo-600`}>
//           <FileText className="text-indigo-600" />
//           <p className="text-sm text-gray-500 mt-2">Form Requests</p>
//           <h2 className="text-2xl font-bold text-gray-800">890</h2>
//         </div>

//         <div className={`${statCard} border-l-4 border-green-500`}>
//           <CheckCircle className="text-green-500" />
//           <p className="text-sm text-gray-500 mt-2">Completed</p>
//           <h2 className="text-2xl font-bold text-gray-800">750</h2>
//         </div>

//         <div className={`${statCard} border-l-4 border-yellow-500`}>
//           <Clock className="text-yellow-500" />
//           <p className="text-sm text-gray-500 mt-2">Pending</p>
//           <h2 className="text-2xl font-bold text-gray-800">140</h2>
//         </div>

//         <div className={`${statCard} border-l-4 border-pink-500`}>
//           <Calendar className="text-pink-500" />
//           <p className="text-sm text-gray-500 mt-2">Today</p>
//           <h2 className="text-2xl font-bold text-gray-800">26</h2>
//         </div>
//       </div>

//       {/* ===== MAIN GRID ===== */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

//         {/* LEFT SIDE */}
//         <div className="xl:col-span-2 space-y-8">

//           {/* ANALYTICS */}
//           <div className="bg-white rounded-2xl p-6 shadow-md">
//             <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
//               <BarChart3 className="text-indigo-600" />
//               Analytics Overview
//             </h3>

//             <div className="grid sm:grid-cols-2 gap-6">
//               <div className="p-5 bg-indigo-50 rounded-xl">
//                 <p className="text-sm text-gray-500">Revenue</p>
//                 <h2 className="text-3xl font-bold text-indigo-700 mt-1">
//                   $25,000
//                 </h2>
//               </div>

//               <div className="p-5 bg-purple-50 rounded-xl">
//                 <p className="text-sm text-gray-500">Team Performance</p>
//                 <h2 className="text-3xl font-bold text-purple-700 mt-1">
//                   25%
//                 </h2>
//               </div>
//             </div>
//           </div>

//           {/* RECENT USERS */}
//           <div className="bg-white rounded-2xl p-6 shadow-md">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
//               <Users className="text-indigo-600" />
//               Recent Users
//             </h3>

//             <div className="space-y-4">
//               {recentUsers.map((user, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-between items-center p-4 rounded-xl border hover:bg-gray-50 transition"
//                 >
//                   <div>
//                     <p className="font-medium text-gray-800">{user.name}</p>
//                     <p className="text-sm text-gray-500">{user.email}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-8">

//           {/* NEW EMPLOYEES */}
//           <div className="bg-white rounded-2xl p-6 shadow-md">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
//               <UserPlus className="text-indigo-600" />
//               Recently Joined
//             </h3>

//             {recentEmployees.map((emp, i) => (
//               <div
//                 key={i}
//                 className="p-4 mb-3 rounded-xl border hover:bg-gray-50 transition"
//               >
//                 <p className="font-medium text-gray-800">{emp.name}</p>
//                 <p className="text-sm text-gray-500">{emp.joined}</p>
//               </div>
//             ))}
//           </div>

//           {/* ACTIVE EMPLOYEES */}
//           <div className="bg-white rounded-2xl p-6 shadow-md">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
//               <Activity className="text-indigo-600" />
//               Active Employees
//             </h3>

//             {activeEmployees.map((emp, i) => (
//               <div
//                 key={i}
//                 className="p-4 mb-3 rounded-xl border hover:bg-gray-50 transition"
//               >
//                 <p className="font-medium text-gray-800">{emp.name}</p>
//                 <p className="text-sm text-gray-500">{emp.role}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  Calendar,
  UserPlus,
  Activity,
  BarChart3,
} from "lucide-react";

const AdminHome = () => {
  const recentUsers = [
    { name: "Amit Sharma", email: "amit@gmail.com" },
    { name: "Riya Patel", email: "riya@gmail.com" },
    { name: "Deepak Verma", email: "deepak@gmail.com" },
  ];

  const recentEmployees = [
    { name: "Karan Mehta", joined: "2 days ago" },
    { name: "Neha Singh", joined: "4 days ago" },
  ];

  const activeEmployees = [
    { name: "Harsh Gupta", role: "Form Handler" },
    { name: "Sneha Rao", role: "Verification" },
  ];

  const statCard =
    "rounded-2xl p-6 bg-white/80 backdrop-blur-xl border border-gray-200 " +
    "shadow-[0_8px_25px_rgba(0,0,0,0.12)] " +
    "hover:scale-[1.03] hover:shadow-[0_12px_35px_rgba(124,58,237,0.35)] " +
    "transition-all duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 md:p-10">

      {/* ===== HEADER ===== */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-700 mt-1">
          Monitor users, requests & system activity
        </p>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <div className={`${statCard} border-l-4 border-purple-600`}>
          <Users className="text-purple-600" />
          <p className="text-sm text-gray-600 mt-2">Total Users</p>
          <h2 className="text-2xl font-bold text-gray-900">1,240</h2>
        </div>

        <div className={`${statCard} border-l-4 border-indigo-600`}>
          <FileText className="text-indigo-600" />
          <p className="text-sm text-gray-600 mt-2">Form Requests</p>
          <h2 className="text-2xl font-bold text-gray-900">890</h2>
        </div>

        <div className={`${statCard} border-l-4 border-green-500`}>
          <CheckCircle className="text-green-500" />
          <p className="text-sm text-gray-600 mt-2">Completed</p>
          <h2 className="text-2xl font-bold text-gray-900">750</h2>
        </div>

        <div className={`${statCard} border-l-4 border-yellow-500`}>
          <Clock className="text-yellow-500" />
          <p className="text-sm text-gray-600 mt-2">Pending</p>
          <h2 className="text-2xl font-bold text-gray-900">140</h2>
        </div>

        <div className={`${statCard} border-l-4 border-pink-500`}>
          <Calendar className="text-pink-500" />
          <p className="text-sm text-gray-600 mt-2">Today</p>
          <h2 className="text-2xl font-bold text-gray-900">26</h2>
        </div>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="xl:col-span-2 space-y-8">

          {/* ANALYTICS */}
          <div className="
            bg-white/80 backdrop-blur-xl 
            rounded-2xl p-6 border border-gray-300
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            hover:shadow-[0_10px_40px_rgba(99,102,241,0.35)]
            transition-all duration-300
          ">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-6">
              <BarChart3 className="text-indigo-600" />
              Analytics Overview
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 bg-indigo-100/60 rounded-xl hover:bg-indigo-200/60 transition">
                <p className="text-sm text-gray-700">Revenue</p>
                <h2 className="text-3xl font-bold text-indigo-700 mt-1">
                  $25,000
                </h2>
              </div>

              <div className="p-5 bg-purple-100/60 rounded-xl hover:bg-purple-200/60 transition">
                <p className="text-sm text-gray-700">Team Performance</p>
                <h2 className="text-3xl font-bold text-purple-700 mt-1">
                  25%
                </h2>
              </div>
            </div>
          </div>

          {/* RECENT USERS */}
          <div className="
            bg-white/80 backdrop-blur-xl 
            rounded-2xl p-6 border border-gray-300
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            transition-all
          ">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="text-indigo-600" />
              Recent Users
            </h3>

            <div className="space-y-4">
              {recentUsers.map((user, i) => (
                <div
                  key={i}
                  className="
                    p-4 rounded-xl border border-gray-200 
                    hover:border-indigo-400 hover:bg-indigo-50/50
                    hover:shadow-md transition-all
                  "
                >
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* NEW EMPLOYEES */}
          <div className="
            bg-white/80 backdrop-blur-xl 
            rounded-2xl p-6 border border-gray-300
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          ">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <UserPlus className="text-indigo-600" />
              Recently Joined
            </h3>

            {recentEmployees.map((emp, i) => (
              <div
                key={i}
                className="
                  p-4 mb-3 rounded-xl border border-gray-200
                  hover:border-purple-400 hover:bg-purple-50/50
                  transition-all
                "
              >
                <p className="font-medium text-gray-900">{emp.name}</p>
                <p className="text-sm text-gray-600">{emp.joined}</p>
              </div>
            ))}
          </div>

          {/* ACTIVE EMPLOYEES */}
          <div className="
            bg-white/80 backdrop-blur-xl 
            rounded-2xl p-6 border border-gray-300
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          ">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="text-indigo-600" />
              Active Employees
            </h3>

            {activeEmployees.map((emp, i) => (
              <div
                key={i}
                className="
                  p-4 mb-3 rounded-xl border border-gray-200
                  hover:border-green-400 hover:bg-green-50/50
                  transition-all
                "
              >
                <p className="font-medium text-gray-900">{emp.name}</p>
                <p className="text-sm text-gray-600">{emp.role}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminHome;

