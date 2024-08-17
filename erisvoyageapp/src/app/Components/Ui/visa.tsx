'use client';
import React, { CSSProperties } from 'react';
import Link from 'next/link';

const VisaAssistanceComponent = () => {

  const styles: { [key: string]: CSSProperties } = {
    visaSection: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#f5f5f5',
    },
    visaTitle: {
      fontSize: '4xl', // Increased font size
      color: '#fbc02d',
      marginBottom: '20px',
    },
    subtitle: {
      color: '#2e7d32',
      fontFamily: 'Cursive',
      fontSize: '24px', // Increased font size
      marginBottom: '30px', // Increased margin
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      marginTop: '20px',
      gap: '20px',
      flexWrap: 'wrap',
    },
    content: {
      textAlign: 'justify',
      lineHeight: '1.8', // Increased line height
      color: '#333',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '0 20px', // Added padding for better readability
    },
    list: {
      paddingLeft: '20px',
      marginTop: '20px', // Increased margin
    },
    listItem: {
      marginBottom: '15px', // Increased margin bottom
      fontSize: '18px', // Increased font size
    },
    image: {
      borderRadius: '8px',
      flex: '1',
      maxWidth: '600px',
    marginLeft:'50px',
      height: '700px',
     
    },
    visaButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px', // Increased margin top
    },
    visaButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '15px 30px', // Increased padding
      border: 'none',
      borderRadius: '8px', // Increased border radius
      cursor: 'pointer',
      fontSize: '18px', // Increased font size
      textDecoration: 'none', // Ensures no underline
    },
  };

  return (
    <div style={styles.visaSection}>
      <h2 className="text-yellow-500 text-4xl ">
        Ouvrez les Portes du Monde avec Notre <br />
        <span className="text-green-700 text-4xl font-cursive mt-2">Assistance Visa Expertise</span>
      </h2>
      <div style={{ ...styles.contentContainer, flexDirection: 'row' }}>
        <img src="./assets/images/GlobalResidenceIndexLpdaW746WawUnsplash1.jpeg" alt="Visa Assistance" style={styles.image} />
        <div style={styles.content}>
          <p>Éris TRAVEL s’efforce afin de vous :</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>- Chercher un RDV à temps</li>
            <li style={styles.listItem}>- Vous assister pour payer les frais de visa chez la banque de l’ambassade</li>
            <li style={styles.listItem}>- Préparer le dossier de visa : Résa Hôtel + Résa Billet + assurance</li>
            <li style={styles.listItem}>- Préparer le formulaire visa correctement rempli</li>
            <li style={styles.listItem}>- Vous conseiller et vérifier votre dossier personnel avant dépôt</li>
            <li style={styles.listItem}>- Suivre le dossier jusqu’à la date réponse pour vous avertir en cas de manque de papier ou de demande de documents complémentaires</li>
          </ul>
          <p>Assistance visa :</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>- USA</li>
            <li style={styles.listItem}>- Canada</li>
            <li style={styles.listItem}>- Angleterre</li>
            <li style={styles.listItem}>- Dubaï</li>
            <li style={styles.listItem}>- États Schengen : France, Italie, Espagne, etc.</li>
          </ul>
          <p>Il suffit de passer à l’agence avec une copie de la première page de votre passeport ou de l’envoyer :</p>
          <p>- Par mail : eris-travel@hotmail.com</p>
          <p>Un chargé vous rappellera dans les 24h.</p>
        </div>
      </div>
      <div style={styles.visaButtonContainer}>
        <Link href={'/contact'} style={styles.visaButton}>
          Réserver
        </Link>
      </div>
    </div>
  );
};

export default VisaAssistanceComponent;
