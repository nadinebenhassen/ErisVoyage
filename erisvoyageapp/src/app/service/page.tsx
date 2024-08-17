import React from 'react'
import Hero2 from '../Components/Hero2'
import Navbar from '../Components/Ui/navbar'
import VisaAssistanceComponent from '../Components/Ui/visa'
import EventComponent from '../Components/Ui/event'
import Footer from '../Components/Ui/Footer'
import SoireeGalaComponent from '../Components/Ui/gala'
import CroisiereComponent from '../Components/Ui/croisiere'

export const service = () => {
  return (
    <><Hero2 backgroundImage={'./assets/images/HommeCulturePointantGlobeDansBureau1.jpeg'} title={''} />
    <Navbar />
    <VisaAssistanceComponent />
    <CroisiereComponent />
    <SoireeGalaComponent />
    <EventComponent />
    <Footer /></>
    
    
    
    
    
  )
}
export default service;