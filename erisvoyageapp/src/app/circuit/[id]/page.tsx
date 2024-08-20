'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero2';
import Footer from '../../Components/Ui/Footer';
import { useParams } from 'next/navigation';

interface Day {
  day: string;
  description: string;
}

interface Circuit {
  id: string;
  title: string;
  details: string;
  images: string[];
  inclusions: string[];
  days: Day[];
}

const circuitData: Circuit[] = [
  {
    id: '1',
    title: 'Circuit Sud Tunisien',
    details: 'À la découverte de Tozeur et le Sahara de Témainé...',
    images: [
      '/assets/images/images11.jpeg',
      '/assets/images/Image01.png',
      '/assets/images/AnantaraResortTozeur1.jpeg',
      '/assets/images/RestaurantElbey1.jpeg',
    ],
    inclusions: [
      '6 NUITS DEMI-PENSION...',
      'Transport en véhicule 4×4...',
    ],
    days: [
      { day: 'Jour 1', description: 'TUNIS – TOZEUR: Arrivée à l’aéroport international de Tozeur...' },
      { day: 'Jour 2', description: 'TAMERZA – CHEBIKA – ONG JEMAL...' },
      // Add more day details here
    ],
  },
  // Add more circuits here
];

const CircuitProgram: React.FC = () => {
  const { id } = useParams();
  
  const [circuit, setCircuit] = useState<Circuit | null>(null);

  useEffect(() => {
    if (id) {
      const foundCircuit = circuitData.find(c => c.id === id);
      setCircuit(foundCircuit || null);
    }
  }, [id]);

  if (!circuit) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Hero backgroundImage={'/assets/images/TunisieHeader31.jpeg'} title={''} />
      <div className="bg-gray-100 py-8">
        <div className="text-center mb-8">
          <h1 className="text-center text-xl md:text-3xl text-gray-700 font-semibold mb-6">
          {circuit.title}</h1>
          <h2 className="text-2xl text-gray-600">{circuit.details}</h2>
        </div>
        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {circuit.images.map((image: string, index: number) => (
            <img key={index} src={image} alt={`image ${index + 1}`} className="h-40 w-full object-cover" />
          ))}
        </div>
        <div className="flex justify-center mb-8">
        <div className="text-left px-8">
          <h3  className="text-yellow-600 font-bold text-2xl mb-2">Inclus</h3>
          <ul className="list-disc ml-8 mb-8">
            {circuit.inclusions.map((inclusion: string, index: number) => (
              <li key={index}>{inclusion}</li>
            ))}
          </ul>
          {circuit.days.map((day: Day, index: number) => (
            <div key={index} className="mb-6">
              <h4 className="text-yellow-600 font-bold text-2xl mb-2">{day.day}</h4>
              <p className="text-gray-700 mb-4">{day.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default CircuitProgram;





<div className="flex justify-center mb-8">



<div className="text-left max-w-5xl mx-auto">
  {/* Inclus Section */}
  <h4 className="text-gray-800 font-bold text-lg mb-2">Inclus</h4>
  <ul className="text-gray-700 mb-6 list-disc pl-6">
    <li>06 nuits en demi-pension à l’hôtel Mouradi Tozeur*** ou Palm Beach 4*</li>
    <li>Transfert privé Tunis – Tozeur – Tembaine – Tunis</li>
    <li>Excursions en 4X4 avec guide</li>
    <li>Dîner spécial du Nouvel An</li>
    <li>... (add more items as needed)</li>
  </ul>

  {/* Non Inclus Section */}
  <h4 className="text-gray-800 font-bold text-lg mb-2">Non Inclus</h4>
  <ul className="text-gray-700 mb-6 list-disc pl-6">
    <li>Assurances</li>
    <li>Dépenses personnelles</li>
    <li>... (add more items as needed)</li>
  </ul>

  
</div>
</div>