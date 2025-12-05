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

const App = () => {
  return (
    <>

     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>

      {/* Admin */}
      <Routes>
        
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
      </Routes>
    </BrowserRouter>
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
