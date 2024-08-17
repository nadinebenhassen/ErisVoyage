'use client';
import React, { CSSProperties } from 'react';
import Link from 'next/link';

const EventComponent = () => {
  const styles: { [key: string]: CSSProperties } = {
    eventSection: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#f5f5f5',
    },
    eventTitle: {
      fontSize: '40px',
      color: '#fbc02d',
      marginBottom: '20px',
    },
    subtitle: {
      color: '#2e7d32',
      fontFamily:'Cursive',
      fontSize: '30px',
      marginBottom: '30px',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      maxWidth: '1200px',
      padding: '20px',
    },
    text: {
      flex: '1',
      textAlign: 'left',
      lineHeight: '1.8',
      color: '#333',
      marginRight: '20px',
      fontSize:'24px',
    },
    image: {
      flex: '1',
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '8px',
    },
    formContainer: {
      marginTop: '40px',
      textAlign: 'left',
    },
    formTitle: {
      color: '#fbc02d',
      fontSize: '40px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    textarea: {
      gridColumn: 'span 2',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      minHeight: '100px',
    },
    submitButton: {
      gridColumn: 'span 2',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '15px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '18px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.eventSection}>
      <h2 style={styles.eventTitle}>
        Organisateur de Séminaires et de Conférences <br />
        <span style={styles.subtitle}>Pour Entreprises</span>
      </h2>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={{ color: '#2e7d32',
      fontFamily: 'Cursive',
      fontSize: '30px',
      marginBottom: '26px',}}>Pourquoi faire appel à notre agence événementielle pour organiser votre séminaire en Tunisie?</p>
          <p>
            Éris Travel & Events s'engage à fournir des prestations de qualité pour vos événements d'entreprise en Tunisie. 
            Notre équipe spécialisée prend en charge votre demande dès le premier contact, en répondant à toutes vos questions 
            et en assurant une planification minutieuse. Grâce à notre connaissance approfondie du terrain et à notre vaste réseau de 
            partenaires, nous vous proposons les meilleures salles de séminaires qui répondent à vos critères spécifiques.
          </p>
        </div>
        <img
          src="./assets/images/ConferencesSeminairesPetitDej1.jpeg"
          alt="Conférences et Séminaires"
          style={styles.image}
        />
      </div>

      <div style={styles.formContainer}>
        <h3 style={styles.formTitle}>
          Soumettez votre demande ici et bénéficiez de notre expertise
        </h3>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Nom"
              style={styles.input}
            
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Prénom"
              style={styles.input}
           
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Portable"
              style={styles.input}
            
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Société"
              style={styles.input}
             
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Service"
              style={styles.input}
            
            />
          </div>
          <textarea
            placeholder="Décrivez vos besoins..."
            style={styles.textarea}
          />
          <button type="submit" style={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventComponent;
