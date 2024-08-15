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
        
        
      </div>
    </header>
  );
}
