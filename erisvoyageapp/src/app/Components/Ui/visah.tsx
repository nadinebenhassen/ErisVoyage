'use client';
import React, { CSSProperties } from 'react';
import Link from 'next/link';

const VisaComponent = () => {

  const visaTypes = [
    {
      title: "VISA DE TOURISME",
      image: "./assets/images/RoadWalletDestinationsMapTourism1.jpeg",
    },
    {
      title: "VISA D'AFFAIRES",
      image: "./assets/images/FlatLayVisaApplicationAssortment1.jpeg",
    },
    {
      title: "VISA D'ÉTUDIANT",
      image: "./assets/images/Photo1.jpeg",
    },
    {
      title: "VISA DE TRAVAIL",
      image: "./assets/images/Shutterstock517314946NewsItemSliderT15662127861.jpeg",
    },
  ];

  const styles: { [key: string]: CSSProperties } = {
    visaSection: {
      textAlign: 'center',
      padding: '20px',
    },
    visaTitle: {
     fontSize: '36px',
      color: '#2e7d32',
    },
    subtitle: {
      color: '#fbc02d', fontFamily: 'Cursive',
    },
    visaCards: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    visaCard: {
      backgroundColor: '#f5f5f5',
      padding: '20px', // Increased padding
      borderRadius: '12px',
      width: '450px', // Increased width
      marginBottom: '20px',
    },
    visaImage: {
      width: '100%',
      height:'80%',
      borderRadius: '8px',
    },
    visaType: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#333',
      fontFamily: 'Cursive'
    },
    visaButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    visaButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#45a049';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.visaButton.backgroundColor as string;
  };

  return (
    <div style={styles.visaSection}>
      <h2 style={styles.visaTitle}>
        VISAS VERS L'INCONNU : OUVRIR LES PORTES DE L'EXPLORATION, <br />
        <span style={styles.subtitle}>Créer des Connexions</span>
      </h2>
      <div style={styles.visaCards}>
        {visaTypes.map((visa, index) => (
          <div key={index} style={styles.visaCard}>
            <img src={visa.image} alt={visa.title} style={styles.visaImage} />
            <h3 style={styles.visaType}>{visa.title}</h3>
          </div>
        ))}
      </div>
      <div style={styles.visaButtonContainer}>
        <Link
          href={'/contact'}
          style={styles.visaButton}
        >
          Demande de Visa
        </Link>
      </div>
    </div>
  );
};

export default VisaComponent;
