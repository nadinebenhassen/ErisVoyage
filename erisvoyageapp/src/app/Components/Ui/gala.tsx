import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SoireeGalaComponent = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-yellow-500 text-4xl ">
          LUMIÈRE SUR L'ÉLÉGANCE : UNE COLLECTION D'ÉVÉNEMENTS
        </h2>
        <h1 className="text-green-700 text-4xl font-cursive mt-2">Soirée et Gala</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Event Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/assets/images/N1.jpeg"
            alt="Event Image 1"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="text-green-700 text-xl font-bold">SOIRÉE REGENCY HAMMAMET</h3>
            <p className="text-gray-600 mt-2">HÔTEL : HAMMAMET SERAIL</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4">
              <p>Départ le : <strong>24 février 2024</strong></p>
              <p>Retour le : <strong>26 février 2024</strong></p>
            </div>
            <p className="text-green-700 mt-4 text-lg font-bold">À PARTIR DE <strong>69 TND</strong> / par personne</p>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/assets/images/N2.jpeg"
            alt="Event Image 2"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="text-green-700 text-xl font-bold">SOIRÉE SERAIL HAMMAMET</h3>
            <p className="text-gray-600 mt-2">HÔTEL : HAMMAMET SERAIL</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4">
              <p>Départ le : <strong>24 février 2024</strong></p>
              <p>Retour le : <strong>26 février 2024</strong></p>
            </div>
            <p className="text-green-700 mt-4 text-lg font-bold">À PARTIR DE <strong>84 TND</strong> / par personne</p>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/assets/images/N3.jpeg"
            alt="Event Image 3"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="text-green-700 text-xl font-bold">RÉVEILLON HAMMAMET</h3>
            <p className="text-gray-600 mt-2">HÔTEL : HAMMAMET SERAIL</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4">
              <p>Départ le : <strong>24 février 2024</strong></p>
              <p>Retour le : <strong>26 février 2024</strong></p>
            </div>
            <p className="text-green-700 mt-4 text-lg font-bold">À PARTIR DE <strong>90 TND</strong> / par personne</p>
          </div>
        </div>

        {/* Event Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/assets/images/N1.jpeg"
            alt="Event Image 4"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="text-green-700 text-xl font-bold">SOIRÉE REGENCY HAMMAMET</h3>
            <p className="text-gray-600 mt-2">HÔTEL : HAMMAMET SERAIL</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4">
              <p>Départ le : <strong>24 février 2024</strong></p>
              <p>Retour le : <strong>26 février 2024</strong></p>
            </div>
            <p className="text-green-700 mt-4 text-lg font-bold">À PARTIR DE <strong>90 TND</strong> / par personne</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
      <Link className="bg-green-600 text-white font-bold py-3 px-8 rounded-md hover:bg-teal-800 transition duration-300" href="/contact">
     
     Réserver
               
             
             </Link>
      </div>
    </div>
  );
};

export default SoireeGalaComponent;
