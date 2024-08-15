'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

export default function ContinentGrid() {
  const continents = [
    { name: 'Australia', image: 'path_to_australia_image', link: '/australia' },
    { name: 'Africa', image: 'path_to_africa_image', link: '/africa' },
    { name: 'Asia', image: 'path_to_asia_image', link: '/asia' },
    { name: 'Europe', image: 'path_to_europe_image', link: '/europe' },
    { name: 'South America', image: 'path_to_south_america_image', link: '/south-america' },
    { name: 'North America', image: 'path_to_north_america_image', link: '/north-america' },
  ];

  const handleClick = (link: string) => {
    // Handle navigation or any other action here
    window.location.href = link;
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" style={{ color: '#2e7d32', marginBottom: '10px' }}>
        Sélectionnez Votre Destination de Manière
      </Typography>
      <Typography variant="h4" component="h2" style={{ color: '#fbc02d', fontFamily: 'Cursive', marginBottom: '40px' }}>
        Fluide et Rapide
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {continents.map((continent, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ButtonBase onClick={() => handleClick(continent.link)} style={{ width: '100%' }}>
              <Card style={{ borderRadius: '20px', backgroundColor: '#f5f5f5', padding: '20px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <img src={continent.image} alt={continent.name} style={{ maxHeight: '150px' }} />
                </div>
                <CardContent>
                  <Typography variant="h6" component="div" style={{ fontFamily: 'Cursive', color: '#616161' }}>
                    {continent.name}
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
