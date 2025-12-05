import React from "react";
import { Home, ClipboardList, Users, Shield, Badge, Receipt } from "lucide-react";
import Sidebar from "../components/pages/Sidebar";
import Header from "../components/pages/Header";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
    const options = [
        {
            label: "Dashboard",
            icon: <Home size={18} />,
            path: "/admin"
        },
        {
            label: "Users",
            icon: <Users size={18} />,
            path: "/admin/users"
        },
        {
            label: "Sub Admin",
            icon: <Shield size={18} />,
            path: "/admin/subAdmin"
        },
        {
            label: "Employee",
            icon: <Badge size={18} />,
            path: "/admin/employee"
        },
        {
            label: "Form Management",
            icon: <ClipboardList size={18} />,
            path: "/admin/formManagement"
        },
        {
            label: "Billing",
            icon: <Receipt size={18} />,
            path: "/admin/billing"
        },
    ];

    return (
        <section
            className="
                min-h-screen 
                flex
                text-gray-300
                bg-linear-to-br
                from-purple-800/10 via-rose-300/50  to-purple-800/40
                backdrop-blur-xl
            "
        >
            <Sidebar options={options} />

            {/* Main Content */}
            <div className="flex-1 flex-col p-5">
                <Header />
                <div className="mt-5">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};
    

export default AdminDashboard;
