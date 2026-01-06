import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Signup1 from './changes/Signup1';
//landing Page import
import Navbar from "./components/landing pages/Navbar";
import Hero from "./components/landing pages/Hero";
import WhyChoose from "./components/landing pages/WhyChoose";
import HowItWorks from "./components/landing pages/HowItWorks.jsx";
import Reviews from "./components/landing pages/Reviews.jsx";
import DemoSection from "./components/landing pages/DemoSection";
import Footer from "./components/landing pages/Footer";
import Contact from "./components/landing pages/Contact";
//Authentication import
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ForgotPassword from "./components/authentication/ForgetPassword";
import VerifyEmail from "./components/authentication/VerifyEmail";
//Admin Panel import
import AdminDashboard from "./adminDashboard/AdminDashboard";
import AdminHome from "./adminDashboard/AdminHome";
import AllUsers from "./adminDashboard/AllUsers";
import EmployeeOverview from "./adminDashboard/EmployeeOverview";
import Billing from "./adminDashboard/Billing";
import Profile from "./adminDashboard/Profile";
import Settings from "../src/adminDashboard/Setting";
import SubAdminOverview from "./adminDashboard/SubAdminOverview";
import FormManagement from "./adminDashboard/FormManagement";
//Employee Panel import
import EmployeeDashboard from "./employeeDashboard/EmployeeDashboard";
import EmployeeHome from "./employeeDashboard/EmployeeHome";
import RequestInbox from "./employeeDashboard/RequestInbox";
import PendingRequests from "./employeeDashboard/PendingRequests";
import CompletedRequests from "./employeeDashboard/CompletedRequests";
// import Communication from './employeeDashboard/Communication'

//Sub Admin Panel import
import SubAdminDashboard from "./subAdminDashboard/SubAdminDashboard";
import SubAdminHome from "./subAdminDashboard/SubAdminHome";
import RequestFromAdmin from "./subAdminDashboard/RequestFromAdmin";
import TeamsManagement from "./subAdminDashboard/TeamsManagement";
import EmployeeWorkload from "./subAdminDashboard/EmployeeWorkload";
import AssignForm from "./subAdminDashboard/AssignForm";
import RequestTracking from "./subAdminDashboard/RequestTracking";
import Communication from "./subAdminDashboard/Communication";
//User Panel import
import UserDashboard from "./userDashboard/UserDashboard";
import UserHome from "./userDashboard/UserHome";
import UserForm from "./userDashboard/UserForm";
import UserPending from "./userDashboard/UserPending";
import UserHistory from "./userDashboard/UserHistory";
import UserCommunication from "./userDashboard/UserCommunication";
//redux changes import
import Counter from "./changes/counter";
import Profile1 from "./changes/Profile1.jsx";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          {/*Landing page*/}
           <Route path="/" element={<Navbar />}>
          {/* <Route index element={<Hero />} />
          <Route path="why-choose" element={<WhyChoose />} />
          <Route path="process" element={<HowItWorks />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="demo" element={<DemoSection />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} /> 
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>

          {/* Admin */}
          <Route path="admin" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<AllUsers />} />
            <Route path="subAdmin" element={<SubAdminOverview />} />
            <Route path="employee" element={<EmployeeOverview />} />
            <Route path="billing" element={<Billing />} />
            <Route path="formManagement" element={<FormManagement />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Employee */}
          <Route path="/employee" element={<EmployeeDashboard />}>
            <Route index element={<EmployeeHome />} />
            <Route path="completed" element={<CompletedRequests />} />
            <Route path="requests" element={<RequestInbox />} />
            <Route path="pending" element={<PendingRequests />} />
            {/* <Route path='communication' element={<Communication />} >*/}
          </Route>

          {/* Sub Admin */}
          <Route path="/subAdmin" element={<SubAdminDashboard />}>
            <Route index element={<SubAdminHome />} />
            <Route path="requests" element={<RequestFromAdmin />} />
            <Route path="teams" element={<TeamsManagement />} />
            <Route path="workload" element={<EmployeeWorkload />} />
            <Route path="assign-form" element={<AssignForm />} />
            <Route path="request-tracking" element={<RequestTracking />} />
            <Route path="communication" element={<Communication />} />
          </Route>

          {/* User */}
          <Route path="/user" element={<UserDashboard />}>
            <Route index element={<UserHome />} />
            <Route path="form" element={<UserForm />} />
            <Route path="pending" element={<UserPending />} />
            <Route path="history" element={<UserHistory />} />
            <Route path="communication" element={<UserCommunication />} />
          </Route>
        </Routes>
     </BrowserRouter>

      {/* redux changes call */}
      {/* <Counter /> 
    <Profile1 /> */}
      {/* <Signup1/> */}
      {/* <Hero/>
      <WhyChoose /> 
      <HowItWorks />
      <Reviews />
      <DemoSection />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
