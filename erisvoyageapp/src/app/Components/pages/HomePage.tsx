'use client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from '../Ui/Footer';
import Hero from '../Ui/Hero';
import Continent from '../Ui/Continent ';
import TypeVoyage from '../Ui/typevoyage';
import PourquoiNosChoix from '../Ui/pourquoinous';
import VisaComponent from '../Ui/visah';
import Navbar from '../Ui/navbar';
const HomePage = () => {
  return (
    <Router>
    <div>
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
        <Route path="/contact" element={<Frocontact />} />
      </Routes>
    */}
    </div>
    </Router>
  );
};

export default HomePage;



   



