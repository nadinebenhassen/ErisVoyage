'use client';
import React, { CSSProperties } from 'react';
import Link from 'next/link';

const OmraComponent = () => {

  const omraTypes = [
    {
      title: "OMRA DE RAMADAN",
      image: "./assets/images/PointRepereInternationalRefletantDiversesCulturesReligionsGenereesParIa3.jpeg",
    },
    {
      title: "OMRA RÉGULIÈRE",
      image: "./assets/images/PointRepereInternationalRefletantDiversesCulturesReligionsGenereesParIa8.jpeg",
    },
    {
      title: "OMRA VIP",
      image: "./assets/images/PointRepereInternationalRefletantDiversesCulturesReligionsGenereesParIa81.jpeg",
    },
    {
      title: "OMRA DE GROUPES",
      image: "./assets/images/PointRepereInternationalRefletantDiversesCulturesReligionsGenereesParIa82.jpeg",
    },
  ];

  const styles: { [key: string]: CSSProperties } = {
    omraSection: {
      textAlign: 'center',
      padding: '20px',
    },
    omraTitle: {
      fontSize: '36px',
      color: '#2e7d32',
    },
    subtitle: {
      color: '#fbc02d', 
      fontFamily: 'Cursive',
    },
    omraCards: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    omraCard: {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '12px',
      width: '450px',
      height:'400px',
      marginBottom: '20px',
    },
    omraImage: {
      width: '100%',
      height: '80%',
      borderRadius: '8px',
    },
    omraType: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#333',
      fontFamily: 'Cursive',
    },
    omraButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    omraButton: {
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
    e.currentTarget.style.backgroundColor = styles.omraButton.backgroundColor as string;
  };

  return (
    <div style={styles.omraSection}>
      <h2 style={styles.omraTitle}>
        OMRA VERS LA SPIRITUALITÉ : UNE EXPÉRIENCE SACRÉE, <br />
        <span style={styles.subtitle}>Un Voyage de Foi</span>
      </h2>
      <div style={styles.omraCards}>
        {omraTypes.map((omra, index) => (
          <div key={index} style={styles.omraCard}>
            <img src={omra.image} alt={omra.title} style={styles.omraImage} />
            <h3 style={styles.omraType}>{omra.title}</h3>
          </div>
        ))}
      </div>
      <div style={styles.omraButtonContainer}>
        <Link
          href={'/contact'}
          style={styles.omraButton}
        >
        Réservez
        </Link>
      </div>
    </div>
  );
};

export default OmraComponent;
