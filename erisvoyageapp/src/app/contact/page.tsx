import React from 'react';
import Navbar from '../Components/Ui/navbar';
import Hero from '../Components/Ui/Hero';
import Footer from '../Components/Ui/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Frocontact from '../Components/Ui/formcontatct';
import Hero2 from '../Components/Hero2';
import { fontGrid } from '@mui/material/styles/cssUtils';

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '4em',
    marginBottom: '20px',
    fontFamily: "adelia" ,
    textAlign: 'center'as const,
    color: '#315F44',

  },
  titre: {
    fontSize: '4em',
    marginBottom: '20px',
    fontFamily: "Grey Qo" ,
    textAlign: 'right'as const,
    color: ' #C59A00'


  },
  description: {
    fontSize: '1.2em',
    margin: '0 auto',
    padding: '15px',
    maxWidth: '800px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    backgroundColor: '#fff',
    lineHeight: '1.5',
  },
  contactInfo: {
    marginTop: '20px',
    padding: '20px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    backgroundColor: '#fff',
    display: 'inline-block',
  },
  contactItem: {
    fontSize: '1.1em',
    margin: '10px 0',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
  mapContainer: {
    marginTop: '20px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'inline-block',
  },
  iframe: {
    width: '100%',
    height: '450px',
    border: '0',
  },
  socialIcons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '2rem',
    color: '#4CAF50',
    cursor: 'pointer',
  },
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2
        backgroundImage="/assets/CaptureDcran202402211356311.png" // Corrected the image path
        title=""
      />
      <main>
        <h1 style={styles.title}>pour plus d'information n'hésitez pas</h1>
        <p style={styles.titre}>à nous contacter</p>
        <p style={styles.description}>
          <strong>Eris Travel & Events</strong> incarne l'essence du voyage et de la découverte. Avec une passion inégalée pour créer des expériences uniques et mémorables, nous sommes bien plus qu'une simple agence de voyage. Nous sommes les architectes de vos rêves, les maîtres d'œuvre de vos aventures. Parcourez le monde avec nous et laissez-nous vous guider à travers des destinations enchanteresses, des cultures vibrantes et des événements inoubliables. Bienvenue chez Eris, où chaque voyage est une ode à l'exploration et à l'émerveillement.
        </p>
        <div style={styles.contactInfo}>
          <p style={styles.contactItem}><strong>
          <PhoneIcon style={styles.icon} />Phone:</strong> +216 53 129 147</p>
          <p style={styles.contactItem}><strong>
          <MarkunreadIcon style={styles.icon} />Email:</strong> <a href="mailto:eris-travel@hotmail.com" style={styles.link}>eris-travel@hotmail.com</a></p>
          <p style={styles.contactItem}><strong>
          <InstagramIcon style={styles.icon} />Instagram:</strong> <a href="https://www.instagram.com/eris_travel_events" target="_blank" rel="noopener noreferrer" style={styles.link}>@eris_travel_events</a></p>
          <p style={styles.contactItem}><strong>
          <LocationOnIcon style={styles.icon} /> Address:</strong> Éris Travel & Events, Immeuble Mallouli RDC, Av. des orangers, Sousse, Sousse, Tunisia</p>
        </div>
        <div style={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51757.419144429725!2d10.58091783474453!3d35.828433119966014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302755fa3934935%3A0x190d1e991beb2025!2s%C3%89ris%20Travel%20%26%20Events!5e0!3m2!1sfr!2stn!4v1723724575604!5m2!1sfr!2stn"
            style={styles.iframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </main>
      <Frocontact />

      <Footer />
    </div>
  );
};

export default Contact;
