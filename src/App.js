import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homeComponents/Home";
import Members from "./components/membersComponents/Members";
import About from "./components/aboutComponents/About";
import Contact from "./components/contactComponents/Contact";
import Footer from "./components/footerComponents/Footer";

import './App.css'

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
