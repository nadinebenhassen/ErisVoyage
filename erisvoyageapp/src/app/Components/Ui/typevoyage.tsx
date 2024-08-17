'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

export default function TypeVoyag() {
  const voyages = [
    { name: 'Voyage de Noce', image: './assets/images/PexelsAsadPhotoMaldives25490711.jpeg', link: '/honeymoon' },
    { name: 'Voyage Historique', image: './assets/images/section.jpeg', link: '/historical' },
    { name: 'Voyage de Nature', image: './assets/images/nature.jpg', link: '/nature' },
    { name: 'Voyage pour Shopping', image: './assets/images/PexelsPatWhelen62209731.jpeg', link: '/shopping' },
  ];

  const handleClick = (link: string) => {
    // Handle navigation or any other action here
    window.location.href = link;
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" style={{ color: '#2e7d32', marginBottom: '10px' }}>
        DÉCOUVREZ NOS DIFFÉRENTS
      </Typography>
      <Typography variant="h4" component="h2" style={{ color: '#fbc02d', fontFamily: 'Cursive', marginBottom: '40px' }}>
        Types De Voyages
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {voyages.map((voyage, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ButtonBase onClick={() => handleClick(voyage.link)} style={{ width: '100%' }}>
              <Card style={{ borderRadius: '20px', backgroundColor: '#f5f5f5', padding: '20px', width: '100%', minHeight: '300px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', height: '200px', overflow: 'hidden' }}>
                  <img src={voyage.image} alt={voyage.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                </div>
                <CardContent>
                  <Typography variant="h6" component="div" style={{ fontFamily: 'Cursive', color: '#616161' }}>
                    {voyage.name}
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
