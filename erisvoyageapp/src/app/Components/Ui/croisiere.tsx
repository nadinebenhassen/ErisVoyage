import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CroisiereComponent = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-yellow-400 text-4xl">
          EXPLOREZ LES MERS : NOS DESTINATIONS EXCLUSIVES
        </h2>
        <h1 className="text-green-700 text-4xl font-cursive mt-2">Croisières</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Croisière Card 1 */}
        <Link href="/croisiere/mediterranee" className="block bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:scale-105 transition duration-300">
          <Image
            src="/assets/images/ColinLloydJxyph6ZgbtAunsplash14.jpeg"
            alt="Croisière Image 1"
            width={400}
            height={250}
            className="object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-teal-800 text-xl font-bold">Croisière Méditerranée</h3>
            <p className="text-gray-600 mt-2">Navire : Méditerranée Explorer</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4 flex-grow">
              <p>Départ le : <strong>15 juin 2024</strong></p>
              <p>Retour le : <strong>25 juin 2024</strong></p>
            </div>
            <p className="text-teal-800 mt-4 text-lg font-bold">À PARTIR DE <strong>1 200 DT</strong> / par personne</p>
          </div>
        </Link>

        {/* Croisière Card 2 */}
        <Link href="/croisiere/caraibes" className="block bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:scale-105 transition duration-300">
          <Image
            src="/assets/images/image2.jpeg"
            alt="Croisière Image 2"
            width={400}
            height={250}
            className="object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-teal-800 text-xl font-bold">Croisière Caraïbes</h3>
            <p className="text-gray-600 mt-2">Navire : Caraïbes Adventurer</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4 flex-grow">
              <p>Départ le : <strong>1 août 2024</strong></p>
              <p>Retour le : <strong>10 août 2024</strong></p>
            </div>
            <p className="text-teal-800 mt-4 text-lg font-bold">À PARTIR DE <strong>1 500 DT</strong> / par personne</p>
          </div>
        </Link>

        {/* Croisière Card 3 */}
        <Link href="/croisiere/baltique" className="block bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:scale-105 transition duration-300">
          <Image
            src="/assets/images/image.jpeg"
            alt="Croisière Image 3"
            width={400}
            height={250}
            className="object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-teal-800 text-xl font-bold">Croisière Baltique</h3>
            <p className="text-gray-600 mt-2">Navire : Baltique Voyager</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4 flex-grow">
              <p>Départ le : <strong>5 septembre 2024</strong></p>
              <p>Retour le : <strong>15 septembre 2024</strong></p>
            </div>
            <p className="text-teal-800 mt-4 text-lg font-bold">À PARTIR DE <strong>1 800 DT</strong> / par personne</p>
          </div>
        </Link>
      </div>
      {/* <div className="p-4">
            <h3 className="text-teal-800 text-xl font-bold">Croisière Asie</h3>
            <p className="text-gray-600 mt-2">Navire : Asie Discoverer</p>
            <p className="text-yellow-500 mt-1 font-semibold">★★★★★</p>
            <div className="mt-4">
              <p>Départ le : <strong>10 octobre 2024</strong></p>
              <p>Retour le : <strong>20 octobre 2024</strong></p>
            </div>
            <p className="text-teal-800 mt-4 text-lg font-bold">À PARTIR DE <strong>2 000 EUR</strong> / par personne</p>
          </div>
        </div>
      </div> */}
      <div className="text-center mt-8">
        <Link
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-md hover:bg-teal-800 transition duration-300"
          href="/contact"
        >
          Réserver
        </Link>
      </div>
    </div>
  );
};

export default CroisiereComponent;
