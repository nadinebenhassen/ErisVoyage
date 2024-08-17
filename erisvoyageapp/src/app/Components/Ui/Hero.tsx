import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface HeroProps {
  backgroundImage: string;
  title: string;
}

export default function Hero({ backgroundImage, title }: HeroProps) {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          height: 400,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}></div>
        
        {/* Text Overlay */}
        <div style={{ zIndex: 1 }}>
          <h1 style={{ fontFamily: 'Cursive', fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
        </div>
        
        {/* Search Bar with Button */}
        <div style={{ 
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '50px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '600px',
          padding: '5px',
        }}>
          <input
            type='text'
            className='form-control'
            placeholder='Où souhaitez-vous partir?'
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              padding: '15px 20px',
              fontSize: '1.1rem',
              borderRadius: '50px 0 0 50px', // Round left corners
              backgroundColor: 'transparent',
            }}
          />
          <IconButton
            style={{
              padding: '15px 30px',
              backgroundColor: '#fbc02d',
              color: '#ffffff',
              borderRadius: '0 50px 50px 0', // Round right corners
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            aria-label="search"
          >
            J'y vais
          </IconButton>
        </div>
      </div>
      {/* <img className="group-502" src="assets\vectors\Group5025_x2.svg" /> */}
      
    </header>
  );
}
