import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './adminDashboard/AdminDashboard';
import AdminHome from './adminDashboard/AdminHome'
import AllUsers from './adminDashboard/AllUsers'
import EmployeeOverview from './adminDashboard/EmployeeOverview'
import Billing from './adminDashboard/Billing'
import Profile from './adminDashboard/Profile'
import Settings from '../src/adminDashboard/Setting'
import SubAdminOverview from './adminDashboard/SubAdminOverview'
import FormManagement from './adminDashboard/FormManagement'
import EmployeeDashboard from './employeeDashboard/EmployeeDashboard'
import EmployeeHome from './employeeDashboard/EmployeeHome'
import RequestInbox from './employeeDashboard/RequestInbox'
import PendingRequests from './employeeDashboard/PendingRequests'
import CompletedRequests from './employeeDashboard/CompletedRequests'
// import Communication from './employeeDashboard/Communication'
import SubAdminDashboard from './subAdminDashboard/SubAdminDashboard'
import SubAdminHome from './subAdminDashboard/SubAdminHome'
import RequestFromAdmin from './subAdminDashboard/RequestFromAdmin'
import TeamsManagement from './subAdminDashboard/TeamsManagement'
import EmployeeWorkload from './subAdminDashboard/EmployeeWorkload'
import AssignForm from './subAdminDashboard/AssignForm'
import RequestTracking from './subAdminDashboard/RequestTracking'
import Communication from './subAdminDashboard/Communication'
import UserDashboard from './userDashboard/UserDashboard'
import UserHome from './userDashboard/UserHome'
import UserForm from './userDashboard/UserForm'
import UserPending from './userDashboard/UserPending'
import UserHistory from './userDashboard/UserHistory'
import UserCommunication from './userDashboard/UserCommunication'


const App = () => {
  return (
    <>

     <BrowserRouter>
    <Routes>

      {/*Landing page*/}
      <Route path="/" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    

      {/* Admin */}
      
        
        <Route path='admin' element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path='users' element={<AllUsers />} />
          <Route path='subAdmin' element={<SubAdminOverview />} />
          <Route path='employee' element={<EmployeeOverview />} />
          <Route path='billing' element={<Billing />} />
          <Route path='formManagement' element={<FormManagement />} />
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>


         {/* Employee */}
        <Route path='/employee' element={<EmployeeDashboard />}>
           <Route index element={<EmployeeHome />} />
           <Route path='completed' element={<CompletedRequests />} />
         <Route path='requests' element={<RequestInbox />} />
          <Route path='pending' element={<PendingRequests />} />
          {/* <Route path='communication' element={<Communication />} /> */}
        </Route>

           {/* Sub Admin */}
        <Route path='/subAdmin' element={<SubAdminDashboard/>}>
          <Route index element={<SubAdminHome />} />
          <Route path='requests' element={<RequestFromAdmin />} />
          <Route path='teams' element={<TeamsManagement />} />
          <Route path='workload' element={<EmployeeWorkload />} />
          <Route path='assign-form' element={<AssignForm />} />
          <Route path='request-tracking' element={<RequestTracking />} />
          <Route path='communication' element={<Communication />} />
        </Route>

         {/* User */}
        <Route path='/user' element={<UserDashboard />}>
          <Route index element={<UserHome />} />
          <Route path='form' element={<UserForm />} />
          <Route path='pending' element={<UserPending />} />
          <Route path='history' element={<UserHistory />} />
          <Route path='communication' element={<UserCommunication />} />
        </Route>


      </Routes>
    </BrowserRouter>

    {/*landing page */}

    
      {/* <Navbar/>*/}
      <Hero /> 
      <WhyChoose />
      <HowItWorks />
      <Reviews />
      <DemoSection />
      <Contact />
      <Footer />
      {/* <Signup/> */}
      
      
  
    </>
  );
};

export default App;
