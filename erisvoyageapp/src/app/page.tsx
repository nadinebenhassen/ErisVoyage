'use client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Frocontact from './Components/Ui/formcontatct';
import React from 'react';
import Footer from './Components/Ui/Footer';
import Hero from './Components/Ui/Hero';
import Continent from './Components/Ui/Continent ';
import TypeVoyage from './Components/Ui/typevoyage';
import PourquoiNosChoix from './Components/Ui/pourquoinous';
import VisaComponent from './Components/Ui/visah';
import Navbar from './Components/Ui/navbar';
import { ContactPage } from './Components/pages/ContactPage';
const HomePage = () => {
  return (
    <Router>
     <div
      style={{
        backgroundImage: `url('assets/images/Background.jpeg')`,        
      }}>
    < Navbar />
    <Hero
        backgroundImage="https://mdbootstrap.com/img/new/slides/041.webp"
        title="Pour Colorer Votre Monde"
      />
     <Continent />
     <TypeVoyage />
     <PourquoiNosChoix />
     <VisaComponent />
     <Footer />
     
       {/* <Routes>
        <Route path="/" element={<VisaComponent />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes> */}
    
    </div>
    </Router>
  );
};

export default HomePage;



   


