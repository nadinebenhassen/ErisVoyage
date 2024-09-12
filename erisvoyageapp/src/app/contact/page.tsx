'use client'
import React from 'react';
import Navbar from '../Components/Ui/navbar';
import Footer from '../Components/Ui/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Frocontact from '../Components/Ui/formcontatct';
import Hero2 from '../Components/Hero2';




const styles = {
  main: {
    padding: '50px 20px', // Plus de padding pour un effet plus espacé
    textAlign: 'center'as const,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '3em',
    marginBottom: '20px',
    fontFamily: "adelia",
    color: '#315F44',
    letterSpacing: '2px', // Ajout de l'espacement des lettres pour un effet plus soigné
  },
  titre: {
    fontSize: '3em',
    marginBottom: '40px',
    fontFamily: "Grey Qo" ,
    textAlign: 'center'as const,
    color: '#C59A00',
  },
  description: {
    fontSize: '1.2em',
    margin: '0 auto 30px auto',
    padding: '20px',
    maxWidth: '900px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    backgroundColor: '#fff',
    lineHeight: '1.8', // Plus d'espacement entre les lignes pour améliorer la lisibilité
  },
  contactInfo: {
    marginTop: '40px',
    padding: '30px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    backgroundColor: '#fff',
    display: 'inline-block',
    width: '80%', // Élément plus large pour occuper l'espace
  },
  contactItem: {
    fontSize: '1.2em',
    margin: '15px 0',
    display: 'flex',
    alignItems: 'center', // Aligner l'icône avec le texte
    gap: '10px', // Espace entre l'icône et le texte
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
  mapContainer: {
    marginTop: '50px',
    border: '8px solid #4CAF50',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'inline-block',
    width: '50%', // Pleine largeur pour le conteneur de la carte
  },
  iframe: {
    width: '100%',
    height: '450px',
    border: '0',
  },
  socialIcons: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Plus d'espace entre les icônes
  },
  icon: {
    fontSize: '2.5rem',
    color: '#4CAF50',
    cursor: 'pointer',
  },
};
const handleNotification = (message: string) => {
  alert(message); // You can replace this with your preferred notification system
};
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2
        backgroundImage="./assets/images/CaptureDcran202402211356311.png" // Background Image correction
        title=""
      />
      <main style={styles.main}>
        <h1 style={styles.title}>Pour plus d'information, n'hésitez pas</h1>
        <p style={styles.titre}>à nous contacter</p>
        <p style={styles.description}>
          <strong>Eris Travel & Events</strong> incarne l'essence du voyage et de la découverte. Avec une passion inégalée pour créer des expériences uniques et mémorables, nous sommes bien plus qu'une simple agence de voyage. Nous sommes les architectes de vos rêves, les maîtres d'œuvre de vos aventures. Parcourez le monde avec nous et laissez-nous vous guider à travers des destinations enchanteresses, des cultures vibrantes et des événements inoubliables. Bienvenue chez Eris, où chaque voyage est une ode à l'exploration et à l'émerveillement.
        </p>
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <PhoneIcon style={styles.icon} />
            <span><strong>Phone:</strong> +216 53 129 147</span>
          </div>
          <div style={styles.contactItem}>
            <MarkunreadIcon style={styles.icon} />
            <span><strong>Email:</strong> <a href="mailto:eris-travel@hotmail.com" style={styles.link}>eris-travel@hotmail.com</a></span>
          </div>
          <div style={styles.contactItem}>
            <InstagramIcon style={styles.icon} />
            <span><strong>Instagram:</strong> <a href="https://www.instagram.com/eris_travel_events" target="_blank" rel="noopener noreferrer" style={styles.link}>@eris_travel_events</a></span>
          </div>
          <div style={styles.contactItem}>
            <LocationOnIcon style={styles.icon} />
            <span><strong>Address:</strong> Éris Travel & Events, Immeuble Mallouli RDC, Av. des orangers, Sousse, Sousse, Tunisia</span>
          </div>
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
      <Frocontact onNotify={handleNotification} />;       
   
      <Footer />
    </div>
  );
};

export default Contact;
