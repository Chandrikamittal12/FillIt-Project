import { 
  Users, FileText, CheckCircle, Clock, Calendar, 
  UserPlus, Activity, BarChart3
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

  const cardStyles =
    "p-6 rounded-2xl bg-white/40 border border-rose-900/40 " +
    "backdrop-blur-xl shadow-[0_0_25px_rgba(138,0,255,0.25)] " +
    "hover:shadow-[0_0_35px_rgba(138,0,255,0.45)] " +
    "transition-all duration-300 cursor-pointer";

  return (
    <div className="p-6 md:p-8 text-gray-200">

      {/* ---- HEADER ---- */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-purple-800 ">
          Admin Dashboard
        </h1>
        <p className="text-gray-700 mt-1">Overview of system performance and activity</p>
      </div>

      {/* ---- TOP CARDS ---- */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-5 
        gap-5 mb-12
      ">
        {/* Total Users */}
        <div className={cardStyles}>
          <Users size={36} className="text-purple-600" />
          <div className="mt-3">
            <p className="text-sm text-gray-700">Total Users</p>
            <h2 className="text-2xl text-black font-bold">1,240</h2>
          </div>
        </div>

        {/* Form Requests */}
        <div className={cardStyles}>
          <FileText size={36} className="text-indigo-600" />
          <div className="mt-3">
            <p className="text-sm text-gray-700">Form Requests</p>
            <h2 className="text-2xl text-black font-bold">890</h2>
          </div>
        </div>

        {/* Completed */}
        <div className={cardStyles}>
          <CheckCircle size={36} className="text-green-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-700">Completed</p>
            <h2 className="text-2xl text-black font-bold">750</h2>
          </div>
        </div>

        {/* Pending */}
        <div className={cardStyles}>
          <Clock size={36} className="text-yellow-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-700">Pending</p>
            <h2 className="text-2xl text-black font-bold">140</h2>
          </div>
        </div>

        {/* Today's Requests */}
        <div className={cardStyles}>
          <Calendar size={36} className="text-pink-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-700">Today’s Requests</p>
            <h2 className="text-2xl text-black font-bold">26</h2>
          </div>
        </div>
      </div>

      {/* ---- LARGE GRID SECTION ---- */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* LEFT SIDE (3 columns) */}
        <div className="xl:col-span-3 space-y-8">

          {/* Revenue & Performance */}
          <div className="
            bg-white/40 p-6 rounded-2xl 
            border border-rose-700/40 backdrop-blur-xl hover:shadow
            shadow-[0_0_25px_rgba(130,0,255,0.25)]
            
          ">
            <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-indigo-900" /> Analytics Summary
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Revenue */}
              <div className="p-4 bg-white/30 rounded-xl border border-purple-800/20 hover:bg-rose-600/10 transition-all">
                <p className="text-gray-800 text-sm">Revenue</p>
                <h2 className="text-3xl font-bold text-black mt-1">$25,000</h2>
              </div>

              {/* Team Performance */}
              <div className="p-4 bg-white/30 rounded-xl border border-purple-800/20 hover:bg-rose-600/10 transition-all">
                <p className="text-gray-800 text-sm">Team Performance</p>
                <h2 className="text-3xl text-black font-bold mt-1">25%</h2>
              </div>

            </div>
          </div>

          {/* Recent Users */}
          <div className="
            bg-white/40 p-6 rounded-2xl 
            border border-rose-700/30 backdrop-blur-xl
            shadow-[0_0_25px_rgba(128,0,255,0.25)]
          ">
            <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
              <Users className="text-indigo-600" /> Recent Users
            </h3>

            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="
                  p-4 bg-white/30 rounded-xl border border-purple-800/20
                  hover:bg-rose-600/30 transition-all
                ">
                  <p className="font-medium text-black">{user.name}</p>
                  <p className="text-sm text-gray-900">{user.email}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (Active + New Employees) */}
        <div className="space-y-8">

          {/* New Employees */}
          <div className="
            bg-white/30 p-6 rounded-2xl 
            border border-rose-700/30 backdrop-blur-xl
            shadow-[0_0_25px_rgba(138,0,255,0.25)]
          ">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-black gap-2">
              <UserPlus className="text-indigo-900" /> Recently Joined
            </h3>

            <div className="space-y-4">
              {recentEmployees.map((emp, index) => (
                <div 
                  key={index}
                  className="
                    p-4 bg-white/30 rounded-xl 
                    border border-purple-800/20
                    hover:bg-rose-500/20 transition-all
                  "
                >
                  <p className="font-medium text-black">{emp.name}</p>
                  <p className="text-sm text-gray-700">{emp.joined}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Employees */}
          <div className="
            bg-white/30 p-6 rounded-2xl 
            border border-rose-900/30 backdrop-blur-xl
            shadow-[0_0_25px_rgba(138,0,255,0.25)]
          ">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-black gap-2">
              <Activity className="text-indigo-700" /> Active Employees
            </h3>

            <div className="space-y-4">
              {activeEmployees.map((emp, index) => (
                <div 
                  key={index}
                  className="
                    p-4 bg-white/30 rounded-xl 
                    border border-purple-800/20
                    hover:bg-rose-500/20 transition-all
                  "
                >
                  <p className="font-medium text-black">{emp.name}</p>
                  <p className="text-sm text-gray-700">{emp.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminHome;