import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/Whychoose";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import DemoSection from "./components/DemoSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>

     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/signup" element={<Signup/>}/> */}
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
      <Signup/>
      
      
  
    </>
  );
};

export default App;
