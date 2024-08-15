'use client';
import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const VisaComponent = () => {


  const visaTypes = [
    {
      title: "VISA DE TOURISME",
      image: "/path/to/tourisme-image.jpg",
    },
    {
      title: "VISA D'AFFAIRES",
      image: "/path/to/affaires-image.jpg",
    },
    {
      title: "VISA D'ÉTUDIANT",
      image: "/path/to/etudiant-image.jpg",
    },
    {
      title: "VISA DE TRAVAIL",
      image: "/path/to/travail-image.jpg",
    },
  ];

  const styles: { [key: string]: CSSProperties } = {
    visaSection: {
      textAlign: 'center',
      padding: '20px',
    },
    visaTitle: {
      fontSize: '24px',
      color: '#36454F',
    },
    subtitle: {
      color: '#F4A950',
      fontStyle: 'italic',
    },
    visaCards: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    visaCard: {
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '12px',
      width: '240px',
      marginBottom: '20px',
    },
    visaImage: {
      width: '100%',
      borderRadius: '8px',
    },
    visaType: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#333',
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
  const navigate = useNavigate();
  const handleClick = () => {
   
    navigate('/contact');
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
        <button
          style={styles.visaButton}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
        >
          Demande de Visa
        </button>
      </div>
    </div>
  );
};

export default VisaComponent;
