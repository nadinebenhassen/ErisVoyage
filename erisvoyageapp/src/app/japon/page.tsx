import React from 'react';
import Hero from '../Components/Hero2';
import Footer from '../Components/Ui/Footer';

const travelPackages = [
  {
    title: 'JAPAN - Princess Diamond',
    destination: 'Kyoto - Tokyo - Yokohama - Kagoshima - Busan - Corée du Sud - Akita - Aomori',
    image: 'assets/images/TunisieHeader311.jpeg',
    price: '14270DT',
    departureDate: '08 Juin 2024',
    returnDate: '22 Juin 2024',
    location: 'Japon/Tunisie',
  },
  {
    title: 'Tokyo',
    destination: 'Tokyo',
    image: 'assets/images/tokyo.jfif',
    price: '14270DT',
    departureDate: '08 Juin 2024',
    returnDate: '22 Juin 2024',
    location: 'Japon (Tokyo)',
  },
  // Add more travel packages as needed
];

const JapanTravelCollection = () => {
  return (
    <>
      <Hero backgroundImage={'assets/images/TunisieHeader313.jpeg'} title={'Découverte intense'} />
      <div className="container mx-auto p-8 bg-white">
        <h2 className="text-3xl font-bold text-green-800 uppercase mb-8 text-center">
          Embarquez pour une Odyssée Culturelle : Explorez l'Asie avec Nous.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-6"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-green-800 font-bold">{pkg.location}</p>
                <p className="mb-4">{pkg.destination}</p>
                <p>Départ: {pkg.departureDate}</p>
                <p>Retour: {pkg.returnDate}</p>
                <p className="text-xl font-bold text-green-800">
                  À partir de {pkg.price} / par personne
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JapanTravelCollection;
