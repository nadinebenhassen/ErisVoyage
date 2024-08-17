import React from 'react';
import Hero from '../Components/Hero2'; // Assuming you're using a Hero component
import Footer from '../Components/Ui/Footer'; // Assuming you're using a Footer component

const hotels = [
  {
    title: 'Sentido Bellevue Park',
    location: 'Port El Kantaoui, Tunisia',
    image: 'assets/images/sentido_bellevue.jpeg',
    price: '700 TND',
    link: '/hotel/sentido-bellevue-park', // Example link
  },
  {
    title: 'Royal Kenz Hotel Thalasso & Spa',
    location: 'Port El Kantaoui, Tunisia',
    image: 'assets/images/royal_kenz.jpeg',
    price: '600 TND',
    link: '/hotel/royal-kenz', // Example link
  },
  {
    title: 'Resort & Spa Sidi Mansour',
    location: 'Djerba, Tunisia',
    image: 'assets/images/sidi_mansour.jpeg',
    price: '580 TND',
    link: '/hotel/sidi-mansour', // Example link
  },
  {
    title: 'Anantara Tozeur Resort',
    location: 'Tozeur, Tunisia',
    image: 'assets/images/anantara_tozeur.jpeg',
    price: '475 TND',
    link: '/hotel/anantara-tozeur', // Example link
  },
  {
    title: 'Marhaba Palace',
    location: 'Sousse, Tunisia',
    image: 'assets/images/marhaba_palace.jpeg',
    price: '490 TND',
    link: '/hotel/marhaba-palace', // Example link
  },
  {
    title: 'Mövenpick Resort & Marine Spa Sousse',
    location: 'Sousse, Tunisia',
    image: 'assets/images/movenpick_sousse.jpeg',
    price: '650 TND',
    link: '/hotel/movenpick-sousse', // Example link
  },
  {
    title: 'Royal Thalassa Monastir',
    location: 'Monastir, Tunisia',
    image: 'assets/images/royal_thalassa.jpeg',
    price: '600 TND',
    link: '/hotel/royal-thalassa', // Example link
  },
  {
    title: 'Hasdrubal Thalassa & Spa',
    location: 'Hammamet, Tunisia',
    image: 'assets/images/hasdrubal_thalassa.jpeg',
    price: '540 TND',
    link: '/hotel/hasdrubal-thalassa', // Example link
  },
  {
    title: 'Iberostar Averroes',
    location: 'Hammamet, Tunisia',
    image: 'assets/images/iberostar_averroes.jpeg',
    price: '580 TND',
    link: '/hotel/iberostar-averroes', // Example link
  },
];

const HotelComponent = () => {
  return (
    <><Hero backgroundImage={'assets/images/TunisieHeader313.jpeg'} title={'Réservations Hôtels en Ligne'} /><div className="container mx-auto p-8 bg-white">
          <h2 className="text-3xl font-bold text-green-800 uppercase mb-8 text-center">Nos Hôtels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel, index) => (
                  <a href={hotel.link} key={index} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <img src={hotel.image} alt={hotel.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                          <h3 className="text-2xl font-bold mb-2">{hotel.title}</h3>
                          <p className="text-green-800 font-bold">{hotel.location}</p>
                          <p className="text-xl font-bold text-green-800">À partir de {hotel.price}</p>
                      </div>
                  </a>
              ))}
          </div>
      </div>
      <Footer />
      </>
  );
};

export default HotelComponent;
