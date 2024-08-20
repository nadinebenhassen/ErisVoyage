import React from 'react';
import Link from 'next/link';
import Hero from '../Components/Hero2';
import Footer from '../Components/Ui/Footer';

interface Circuit {
  id: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  price: number;
  season: string;
  imageUrl: string;
}

const CircuitComponent: React.FC<{ circuit: Circuit }> = ({ circuit }) => {
  return (
    <Link href={`/circuit/${circuit.id}`} passHref>
      <div className="max-w-md mx-auto bg-gray-200 rounded-lg shadow-lg overflow-hidden md:max-w-2xl my-4 cursor-pointer">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={circuit.imageUrl}
              alt={circuit.title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-600 font-bold">
              {circuit.season}
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
              {circuit.title}
            </h2>
            <p className="mt-2 text-gray-600">{circuit.description}</p>
            <p className="mt-2 text-gray-800 font-bold">{circuit.location}</p>
            <p className="mt-2 text-gray-800">{circuit.duration}</p>
            <p className="mt-2 text-gray-900 font-bold">{circuit.price} TND</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CircuitsPage: React.FC = () => {
  const circuits = [
    {
      id: '1',
      title: 'Circuit Sud Tunisien',
      description: 'À la découverte de Tozeur et le Sahara de Témainé',
      duration: '6 Jours/5 Nuits',
      location: 'Douz, Tunisie',
      price: 1417,
      season: 'Hiver 2024',
      imageUrl: 'assets/images/images11.jpeg',
    },
    { id:'2',
        title: 'Sahara El Bey',
              description: 'À la découverte de Sahara El Bey',
              duration: '4 Jours/3 Nuits',
              location: 'Douz, Tunisie',
              price: 655,
              season: 'Hiver 2024',
              imageUrl: './assets/images/SaharaTunisia1.jpeg',
            },
            {id:'3',
              title: 'Circuit Nord',
              description: 'À la découverte du Nord et le Sahara de Témainé',
              duration: '6 Jours/5 Nuits',
              location: 'Douz, Tunisie',
              price: 279,
              season: 'Hiver 2024',
              imageUrl: 'assets/images/Ac635Bd480Bb371E84Bad9423Fe73Eeaff45Dd011.jpeg',
            },
            {id:'4',
              title: 'Le Nord-Ouest',
              description: 'À la découverte du Sahara El Bey',
              duration: '5 Jours/4 Nuits',
              location: 'Tabarka-Tunis-Testour-Dougga',
              price: 450,
              season: 'Hiver 2024',
              imageUrl: './assets/images/Bejaaa2.jpeg',
            },
            {id:'5',
              title: 'La Perle du Nord',
              description: 'À la découverte du Nord',
              duration: '3 Jours/2 Nuits',
              location: 'Tabarka-Ain Draham',
              price: 790,
              season: 'Hiver 2024',
              imageUrl: './assets/images/NeigeJendouba1.jpeg',
            },
  ];

  return (
    <>
      <Hero backgroundImage={'./assets/images/TunisieHeader31.jpeg'} title={''} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div className="bg-gray-100 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700">Découverte Intense:</h1>
          <h2 className="text-2xl text-gray-600">
            PLONGEZ DANS LES CIRCUITS FASCINANTS DE LA TUNISIE
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {circuits.map((circuit, index) => (
            <CircuitComponent key={index} circuit={circuit} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CircuitsPage;


