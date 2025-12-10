import React from "react";
import Sidebar from "../components/pages/Sidebar";
import Header from "../components/pages/Header";
import { Outlet } from "react-router-dom";

import {
  Home,
  ClipboardList,
  CheckCircle,
  Clock,
  Inbox,
  FileText,
  MessageCircle,
  BarChart3,
  UserCheck
} from "lucide-react";

function EmployeeDashboard() {
  const options = [
    {
      label: "Dashboard",
      icon: <Home size={18} />,
      path: "/employee",
    },
    {
      label: "Request Inbox",
      icon: <Inbox size={18} />,
      path: "/employee/requests",
    },
    {
      label: "Pending",
      icon: <Clock size={18} />,
      path: "/employee/pending",
    },
    {
      label: "Completed Work",
      icon: <CheckCircle size={18} />,
      path: "/employee/completed",
    },
    {
      label: "Communication",
      icon: <MessageCircle size={18} />,
      path: "/employee/communication",
    },
    
  ];

  return (
    <>
      <section className="min-h-screen bg-linear-to-br from-purple-800/10 via-rose-300/50 to-purple-8/4000 text-gray-200 flex">
        <Sidebar options={options} />
        <div className="flex-1 flex-col p-5">
          <Header />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default EmployeeDashboard;