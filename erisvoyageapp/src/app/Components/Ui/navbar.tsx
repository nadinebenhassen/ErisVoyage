'use client';
import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between', // Centre les éléments horizontalement et ajoute un espace entre les éléments
      alignItems: 'center',
      padding: '20px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Couleur avec transparence
      color: '#fff',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000, // Assure que la navbar reste au-dessus des autres éléments
    },
    logo: {
      width: '40px', // Taille de l'image de logo
      height: '40px', // Taille de l'image de logo
      marginRight: '20px', // Espace entre le logo et les liens
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center', // Centre les liens horizontalement
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      padding: '10px',
      transition: 'color 0.3s, text-decoration 0.3s', // Ajoute une transition douce
    },
    linkHover: {
      textDecoration: 'underline',
      color: '#f4a950', // Couleur au survol
    },
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.textDecoration = 'underline';
    (e.target as HTMLAnchorElement).style.color = '#f4a950';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.textDecoration = 'none';
    (e.target as HTMLAnchorElement).style.color = '#fff';
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="\assets\Cx011.png" alt="Logo" style={styles.logo} /> {/* Ajoutez votre image de logo ici */}
      </div>
      <div style={styles.navLinks}>
        <Link
          href="/"
          style={styles.link}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Home
        </Link>
        <Link
          href="/services"
          style={styles.link}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Services
        </Link>
        <Link
          href="/visa"
          style={styles.link}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Visa
        </Link>
        <Link
          href="/omra"
          style={styles.link}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Omra
        </Link>
        <Link
          
          href="/contact"
          style={styles.link}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Contact
        </Link>
        <Link
          href="/blog"
          style={styles.link}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;