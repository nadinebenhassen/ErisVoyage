'use client';
import Link from 'next/link';
import React from 'react';

const AsieComponent = () => {
  const countries = [
    { name: 'Japon', image: './assets/images/japan.jpeg', link: '/japon' },
    { name: 'Corée du sud', image: './assets/images/chorea.jpeg', link: '/coree-du-sud' },
    { name: 'Chine', image: './assets/images/chine.jpeg', link: '/chine' },
    { name: 'Malisie', image: './assets/images/malisie.jpeg', link: '/malaisie' },
    { name: 'Thailande', image: './assets/images/thailande.jpeg', link: '/thailande' },
    { name: 'Inde', image: './assets/images/inde.jpeg', link: '/inde' },
    { name: 'Philipine', image: './assets/images/philipine.jpeg', link: '/philippines' },
    { name: 'Balie', image: './assets/images/balie.jpeg', link: '/bali' },
    { name: 'Taiwane', image: './assets/images/taiwane.jpeg', link: '/taiwan' },
    // Add more countries as needed
  ];

  return (
    <div className="p-8">
      <h2 className="text-center text-yellow-400 text-3xl font-bold mb-8">Les plus belles destinations asiatiques</h2>
      <div className="grid grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-bold">{country.name}</h3>
              <div className="mt-4 space-x-4">
                <Link className="bg-green-600 px-4 py-2 rounded" href={country.link}>Voyage Organisé</Link>
                <Link className="bg-green-600 px-4 py-2 rounded" href={`${country.link}/surmesure`}>Voyage Sur Mesure</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsieComponent;
