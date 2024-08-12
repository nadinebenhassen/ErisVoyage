import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
        <Image src="/assets/Cx011.png" alt="Eris Travel & Events" width={150} height={150} style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <h3>Contactez Nous</h3>
          <p>Éris Travel & Events, Immeuble Mallouli RDC,<br />
            Av. des orangers, Sousse, Sousse, Tunisia<br />
            +216 53 129 147<br />
            <a href="mailto:eris-travel@hotmail.com">eris-travel@hotmail.com</a>
          </p>
        </div>
        <div>
          <h3>Informations Utiles</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="/about">A propos de nous</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>
        <div>
          <h3>Suivez-nous</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
          <FacebookIcon />
          <InstagramIcon />
          <MarkunreadIcon />
          <YouTubeIcon />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '1rem', fontSize: '0.8rem' }}>
        <p>COPYRIGHT© ÉRIS | Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
