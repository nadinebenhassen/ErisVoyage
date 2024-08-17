'use client';
import React from 'react';
import Footer from './Components/Ui/Footer';
import Hero from './Components/Ui/Hero';
import ContinentGrid from './Components/Ui/Continent ';
import TypeVoyage from './Components/Ui/typevoyage';
import PourquoiNosChoix from './Components/Ui/pourquoinous';
import VisaComponent from './Components/Ui/visah';
import Navbar from './Components/Ui/navbar';
import OmraComponent from './Components/Ui/omra';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero
        backgroundImage="https://mdbootstrap.com/img/new/slides/041.webp"
        title="Pour Colorer Votre Monde"
      />
      <ContinentGrid />
      <TypeVoyage />
      <PourquoiNosChoix />
      <VisaComponent />
      <OmraComponent/>
      <Footer />
    </div>
  );
};

export default HomePage;
