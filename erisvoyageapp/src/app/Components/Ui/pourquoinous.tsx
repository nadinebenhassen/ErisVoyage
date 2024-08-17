'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';


export default function PourquoiNosChoix() {
  const choix = [
    { 
      name: 'Nos Voyages', 
      image: './assets/images/PexelsOleksandrP20704851.jpeg', 
      link: '/voyages', 
      topChoice: true 
    },
    { 
      name: 'Nos Hôtels', 
      image: './assets/images/ChelseaGates0653Wy0NrcUnsplash1.jpeg', 
      link: '/hotels', 
      discount: '15%' 
    },
    { 
      name: 'Nos Circuits', 
      image: './assets/images/ConceptionInterieureTraditionnelleMaison.jpeg', 
      link: '/circuits', 
      topChoice: true 
    },
    { 
      name: 'Nos Croisières', 
      image: './assets/images/AlonsoReyesLwfdBz4D6Neunsplash14.jpeg', 
      link: '/croisieres', 
      discount: '15%' 
    },
  ];

  const pourquoiNous = [
    { text: 'De bons avis toujours vérifiés', icon:<CheckCircleOutlineIcon/> },
    { text: 'Départs 100% garantis', icon: < VerifiedUserIcon/>},
    { text: 'Un interlocuteur unique', icon: <InterpreterModeIcon/> },
    { text: 'Des voyages bien pensés', icon: <TipsAndUpdatesIcon/> },
    { text: 'Un prix juste à tout prix', icon:< PriceCheckIcon/> },
  ];

  const handleClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" style={{ color: '#2e7d32', marginBottom: '10px' }}>
        POURQUOI NOUS Choisir
      </Typography>
      
      {/* Pourquoi Nous Choisir Section */}
      <Box
        style={{
          marginBottom: '40px',
          padding: '20px',
          background: 'linear-gradient(to right, #f5e0c2, #edd5b4)',
          borderRadius: '10px',
          maxWidth: '90%',  // Adjust the width of the beige box
          margin: '0 auto', // Center the box
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {pourquoiNous.map((item, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Card
                style={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  textAlign: 'center',
                }}
              >
                <Icon
                  style={{
                    fontSize: '40px',
                    color: '#fbc02d',
                    marginBottom: '10px',
                  }}
                >
                  {item.icon}
                </Icon>
                <Typography variant="h6" component="div" style={{ color: '#2e7d32' }}>
                  {item.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Nos Choix Section */}
      <Typography variant="h4" component="h2" style={{ color: '#2e7d32', marginBottom: '10px',padding: '40px 20px'}}>
        LAISSEZ-VOUS ENVOÛTER : AVENTURES DIVERSES POUR
      </Typography>
      <Typography variant="h4" component="h2" style={{ color: '#fbc02d', fontFamily: 'Cursive', marginBottom: '40px' }}>
        Pour Tous les Enthousiastes
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {choix.map((choix, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ButtonBase onClick={() => handleClick(choix.link)} style={{ width: '100%' }}>
              <Card style={{ borderRadius: '20px', backgroundColor: '#f5f5f5', padding: '20px', width: '100%', minHeight: '350px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <img src={choix.image} alt={choix.name} style={{ borderRadius: '15px', maxHeight: '250px', width: '100%' }} />
                </div>
                <Typography variant="h6" component="div" style={{ fontFamily: 'Cursive', color: '#616161' }}>
                  {choix.name}
                </Typography>
              </Card>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
