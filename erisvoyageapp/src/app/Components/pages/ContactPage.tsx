import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Ui/navbar'
import Hero from '../Ui/Hero'
import Footer from '../Ui/Footer'

export const ContactPage = () => {
  return (

    <div>
    < Navbar />
    <Hero
        backgroundImage=".\public\assets\CaptureDcran202402211356311.png"
        title=""
      />

     <Footer />
 
    </div>
   
  )
}
