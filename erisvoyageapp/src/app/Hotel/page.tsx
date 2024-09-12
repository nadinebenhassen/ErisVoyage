// 'use client'
// import React, { useState } from 'react';
// import Hero from '../Components/Hero2'; // Assuming you're using a Hero component
// import Footer from '../Components/Ui/Footer'; // Assuming you're using a Footer component

// // Define the structure of the hotel object
// interface Hotel {
//   title: string;
//   location: string;
//   image: string;
//   price: string;
//   link: string;
//   category: 'national' | 'international';
//   images?: string[]; // Optional, used for the hotel details view
//   accommodation?: string; // Optional, used for the hotel details view
//   services?: string[]; // Optional, used for the hotel details view
// }

// const hotels: Hotel[] = [
 
//   {
//     title: 'Sheraton Maldives Full Moon Resort',
//     location: 'Maldives',
//     image: 'assets/images/maldive.jfif',
//     price: '2000 TND',
//     link: '/hotel/sheraton-maldives',
//     category: 'international',
//   },
//   {
//     title: 'Sentido Bellevue Park',
//     location: 'Port El Kantaoui, Tunisia',
//     image: 'assets/images/bellvue.jfif',
//     price: '700 TND',
//     link: '/hotel/sentido-bellevue-park',
//     category: 'national',
//   },
//   {
//     title: 'Royal Kenz Hotel Thalasso & Spa',
//     location: 'Port El Kantaoui, Tunisia',
//     image: 'assets/images/kinz.jfif',
//     price: '600 TND',
//     link: '/hotel/royal-kenz',
//     category: 'national',
//   },
//   {
//     title: 'Resort & Spa Sidi Mansour',
//     location: 'Djerba, Tunisia',
//     image: 'assets/images/Gggggggggggggggggggggggggggg.jpeg',
//     price: '580 TND',
//     link: '/hotel/sidi-mansour',
//     category: 'national',
//   },
//   {
//     title: 'Anantara Tozeur Resort',
//     location: 'Tozeur, Tunisia',
//     image: 'assets/images/AnantaraTozeurVillaPool944X51011.jpeg',
//     price: '475 TND',
//     link: '/hotel/anantara-tozeur',
//     category: 'national',
//   },
//   {
//     title: 'Marhaba Palace',
//     location: 'Sousse, Tunisia',
//     image: 'assets/images/maraba.jpeg',
//     price: '490 TND',
//     link: '/hotel/marhaba-palace',
//     category: 'national',
//   },
//   {
//     title: 'Mövenpick Resort & Marine Spa Sousse',
//     location: 'Sousse, Tunisia',
//     image: 'assets/images/movanpik.jfif',
//     price: '650 TND',
//     link: '/hotel/movenpick-sousse',
//     category: 'national',
//   },
//   {
//     title: 'Royal Thalassa Monastir',
//     location: 'Monastir, Tunisia',
//     image: 'assets/images/royale talassa.jfif',
//     price: '600 TND',
//     link: '/hotel/royal-thalassa',
//     category: 'national',
//   },
//   {
//     title: 'Hasdrubal Thalassa & Spa',
//     location: 'Hammamet, Tunisia',
//     image: 'assets/images/hasburdal.jfif',
//     price: '540 TND',
//     link: '/hotel/hasdrubal-thalassa',
//     category: 'national',
//   },
//   {
//     title: 'Iberostar Averroes',
//     location: 'Hammamet, Tunisia',
//     image: 'assets/images/ibrosatar.jfif',
//     price: '580 TND',
//     link: '/hotel/iberostar-averroes',
//     category: 'national',
//   },
//   {
//     title: 'Sheraton Maldives Full Moon Resort',
//     location: 'Maldives',
//     image: 'assets/images/maldive.jfif',
//     price: '2000 TND',
//     link: '/hotel/sheraton-maldives',
//     category: 'international',
//   },
//   {
//     title: 'Hilton Sharm Waterfalls Resort',
//     location: 'Sharm El Sheikh, Egypt',
//     image: 'assets/images/hilton.jfif',
//     price: '1800 TND',
//     link: '/hotel/hilton-sharm',
//     category: 'international',
//   },
//   {
//     title: 'Atlantis The Palm',
//     location: 'Dubai, UAE',
//     image: 'assets/images/atlants.jfif',
//     price: '3500 TND',
//     link: '/hotel/atlantis-palm',
//     category: 'international',
//   },
//   // Add other international hotels here...
// ];

// const HotelComponent: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<'national' | 'international'>('national');
//   const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

//   const filteredHotels = hotels.filter(
//     (hotel: Hotel) => hotel.category === selectedCategory
//   );

//   return (
//   <>
//       <Hero backgroundImage={'assets/images/TunisieHeader313.jpeg'} title={'Réservations Hôtels en Ligne'} />
//       <div className="container mx-auto p-8 bg-white">
//         <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//             <input
//               type="date"
              
//               placeholder="Arrivée"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//             <input
//               type="date"
              
//               placeholder="Départ"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//             <input
//               type="text"
              
//               placeholder="Chambre & Occupation"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//             <input
//               type="text"
             
//               placeholder="Ville ou Hôtel"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//             <input
//               type="text"
             
//               placeholder="Nom"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//             <input
//               type="tel"
              
//               placeholder="Téléphone"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//             <input
//               type="email"
             
//               placeholder="Email"
//               className="p-2 rounded-lg border border-gray-300"
//             />
//           </div>
//           <div className="text-center">
//             <button
//               className="px-6 py-3 bg-green-800 text-white rounded-lg"
//             >
//               Je passe à l'agence
//             </button>
//           </div>
//         </div>
//       <div className="container mx-auto p-8 bg-white">

//         <h2 className="text-3xl font-bold text-green-800 uppercase mb-8 text-center">Nos Hôtels</h2>

//         {/* Category Selection */}
//         <div className="mb-8 text-center">
//           <button
//             onClick={() => setSelectedCategory('national')}
//             className={`px-4 py-2 mx-2 rounded-full ${
//               selectedCategory === 'national' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'
//             }`}
//           >
//             Hôtel National
//           </button>
//           <button
//             onClick={() => setSelectedCategory('international')}
//             className={`px-4 py-2 mx-2 rounded-full ${
//               selectedCategory === 'international' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'
//             }`}
//           >
//             Hôtel International
//           </button>
//         </div>

//         {/* Display Hotels */}
//         {!selectedHotel ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredHotels.map((hotel: Hotel, index: number) => (
//               <a
//                 href="#"
//                 key={index}
//                 className="bg-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 onClick={() => setSelectedHotel(hotel)}
//               >
//                 <img
//                   src={hotel.image}
//                   alt={hotel.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">{hotel.title}</h3>
//                   <p className="text-green-800 font-bold">{hotel.location}</p>
//                   <p className="text-xl font-bold text-green-800">
//                     À partir de {hotel.price}
//                   </p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
//             <h2 className="text-3xl font-bold text-green-800 uppercase mb-4">{selectedHotel.title}</h2>
//             <p className="text-gray-600 mb-4">{selectedHotel.location}</p>

//             <div className="w-full mb-8">
//               <img
//                 src={selectedHotel.image}
//                 alt={selectedHotel.title}
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//               {selectedHotel.images?.slice(1).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={selectedHotel.title}
//                   className="w-full h-32 object-cover rounded-lg"
//                 />
//               ))}
//             </div>

//             <h3 className="text-2xl font-bold text-green-800 mb-4">Hébergement</h3>
//             <p className="text-gray-600 mb-8">{selectedHotel.accommodation}</p>

//             <h3 className="text-2xl font-bold text-green-800 mb-4">Services & Équipements</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <ul className="text-gray-600">
//                 {selectedHotel.services?.map((service, index) => (
//                   <li key={index}>{service}</li>
//                 ))}
//               </ul>
//             </div>

//             <button
//               onClick={() => setSelectedHotel(null)}
//               className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg"
//             >
//               Retour
//             </button>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//     </>
//   );

// }
// export default HotelComponent;


'use client'
import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero2'; // Assuming you're using a Hero component
import Footer from '../Components/Ui/Footer'; // Assuming you're using a Footer component
import axios from 'axios';

// Define the structure of the hotel object
interface Hotel {
  _id?: string; // Assuming MongoDB will generate this for each hotel
  title: string;
  location: string;
  image: string;
  price: string;
  link: string;
  category: 'national' | 'international';
  images?: string[]; // Optional, used for the hotel details view
  accommodation?: string; // Optional, used for the hotel details view
  services?: string[]; // Optional, used for the hotel details view
}

const HotelComponent: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'national' | 'international'>('national');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  // Fetch hotels from the backend
  useEffect(() => {
    // Replace '/api/hotels' with the actual backend endpoint to fetch hotels
    axios.get('http://localhost:3002/hotels')
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  const filteredHotels = hotels.filter(
    (hotel: Hotel) => hotel.category === selectedCategory
  );

  return (
    <>
      <Hero backgroundImage={'assets/images/TunisieHeader313.jpeg'} title={'Réservations Hôtels en Ligne'} />
      <div className="container mx-auto p-8 bg-white">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <input
              type="date"
              placeholder="Arrivée"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="date"
              placeholder="Départ"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Chambre & Occupation"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Ville ou Hôtel"
              className="p-2 rounded-lg border border-gray-300"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="Nom"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border border-gray-300"
            />
          </div>
          <div className="text-center">
            <button className="px-6 py-3 bg-green-800 text-white rounded-lg">
              Je passe à l'agence
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-green-800 uppercase mb-8 text-center">Nos Hôtels</h2>

        {/* Category Selection */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setSelectedCategory('national')}
            className={`px-4 py-2 mx-2 rounded-full ${
              selectedCategory === 'national' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Hôtel National
          </button>
          <button
            onClick={() => setSelectedCategory('international')}
            className={`px-4 py-2 mx-2 rounded-full ${
              selectedCategory === 'international' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Hôtel International
          </button>
        </div>

        {/* Display Hotels */}
        {!selectedHotel ? (
          filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map((hotel: Hotel, index: number) => (
                <a
                  href="#"
                  key={index}
                  className="bg-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">{hotel.title}</h3>
                    <p className="text-green-800 font-bold">{hotel.location}</p>
                    <p className="text-xl font-bold text-green-800">
                      À partir de {hotel.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Aucun hôtel trouvé dans cette catégorie.</p>
          )
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-green-800 uppercase mb-4">{selectedHotel.title}</h2>
            <p className="text-gray-600 mb-4">{selectedHotel.location}</p>

            <div className="w-full mb-8">
              <img
                src={selectedHotel.image}
                alt={selectedHotel.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {selectedHotel.images && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {selectedHotel.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={selectedHotel.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            <h3 className="text-2xl font-bold text-green-800 mb-4">Hébergement</h3>
            <p className="text-gray-600 mb-8">{selectedHotel.accommodation}</p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">Services & Équipements</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ul className="text-gray-600">
                {selectedHotel.services?.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedHotel(null)}
              className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg"
            >
              Retour
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HotelComponent;

