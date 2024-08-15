'use client';
import Image from 'next/image';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Margin } from '@mui/icons-material';

export default function ContinentGrid() {
  const continents = [
    { name: 'Australia', image: 'assets/images/Australia.png', link: '/australia' },
    { name: 'Africa', image: 'assets/images/Africa.png', link: '/africa' },
    { name: 'Asia', image: 'assets/images/Asia.png', link: '/asia' },
    { name: 'Europe', image: 'assets/images/Europ.png', link: '/europe' },
    { name: 'South America', image: 'assets/images/SouthAmerica.png', link: '/south-america' },
    { name: 'North America', image: 'assets/images/Northamerica.png', link: '/north-america' },
  ];
  const container = document.getElementById('continents');
  continents.forEach((continent) => {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(${continent.image})`;
    div.style.backgroundPosition = '50% 50%';
    div.style.backgroundSize = 'cover';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.position = 'absolute';
    div.style.left = '50%';
    div.style.bottom = '0px';
    div.style.transform = 'translateX(-50%)';
    div.style.width = '195px';
    div.style.height = '169px';
    continents.forEach((continent) => {
      const div = document.createElement('div');
      div.style.backgroundImage = `url(${continent.image})`;
      div.style.backgroundPosition = '50% 50%';
      div.style.backgroundSize = 'cover';
      div.style.backgroundRepeat = 'no-repeat';
      div.style.position = 'absolute';
      div.style.left = '50%';
      div.style.bottom = '0px';
      div.style.transform = 'translateX(-50%)';
      div.style.width = '195px';
      div.style.height = '169px';
  
      div.innerHTML = `<a href="${continent.link}">${continent.name}</a>`;
      container?.appendChild(div);
    });
  });
  const handleClick = (link: string) => {
    // Handle navigation or any other action here
    window.location.href = link;
  };
  

  return (

    
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <span style={{ fontSize: '30px' }} className="m-[0_0_27px_19px] break-words text-[#315F44] text-[48px] leading-[1.333] font-['Poppins'] font-black uppercase">
  Sélectionner Votre Destination de Manière
</span>


                
      <Typography variant="h4" component="h2" style={{ color: '#D3A603',fontFamily:'bradely hand', marginBottom: '50px' }}>
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
