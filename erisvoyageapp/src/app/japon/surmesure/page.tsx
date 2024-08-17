import Hero from '@/app/Components/Hero2';
import Footer from '@/app/Components/Ui/Footer';
import React from 'react';


const japanImages = {
  tokyo: 'assets/images/tokyo.jfif',
  asakusa: 'assets/images/asakusa.jfif',
  shibuya: 'assets/images/shibuya.jfif',
  kyoto: 'assets/images/Koyoto.jfif',
  kinkakuji: 'assets/images/Kinkakuji.jfif',
  arashiyama: 'assets/images/arashiyama.jfif',
  nara: 'assets/images/nara.jpg',
  mountFuji: 'assets/images/mountFuji.jfif',
  osaka: 'assets/images/osaka.jfif',
  dotonbori: 'assets/images/dornobi.jfif',
};

const JapanTravelProgram = () => {
  return (
    <><Hero backgroundImage={'assets/images/japan.jpeg'} title={'Idée de voyage a personnaliser au japon'} />
    <div className="container mx-auto p-8">
          {/* <h2 className="text-center text-yellow-400 text-3xl font-bold mb-8">Programme de Voyage au Japon</h2> */}
          <div className="space-y-8">

              {/* Day 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Jour 1: Tokyo - Découverte de la ville</h3>
                  <p>Commencez votre aventure à Tokyo, la capitale dynamique du Japon.</p>
                  <ul className="list-disc pl-6 mt-4">
                      <li><strong>Visite du quartier Asakusa</strong> - Explorez le temple Senso-ji.</li>
                      <li><strong>Shibuya</strong> - Traversez le célèbre carrefour de Shibuya.</li>
                      <li><strong>Tour de Tokyo</strong> - Profitez d'une vue panoramique depuis la tour de Tokyo.</li>
                  </ul>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                      <img src={japanImages.asakusa} alt="Asakusa" className="w-full h-40 object-cover rounded-lg" />
                      <img src={japanImages.shibuya} alt="Shibuya" className="w-full h-40 object-cover rounded-lg" />
                      <img src={japanImages.tokyo} alt="Tour de Tokyo" className="w-full h-40 object-cover rounded-lg" />
                  </div>
              </div>

              {/* Day 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Jour 2: Kyoto - Histoire et tradition</h3>
                  <p>Découvrez la beauté historique de Kyoto.</p>
                  <ul className="list-disc pl-6 mt-4">
                      <li><strong>Kinkaku-ji (Pavillon d'Or)</strong> - Admirez le célèbre temple recouvert de feuilles d'or.</li>
                      <li><strong>Bambouseraie d'Arashiyama</strong> - Promenez-vous dans la forêt de bambous.</li>
                      <li><strong>Quartier de Gion</strong> - Explorez le quartier des geishas.</li>
                  </ul>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                      <img src={japanImages.kinkakuji} alt="Kinkaku-ji" className="w-full h-40 object-cover rounded-lg" />
                      <img src={japanImages.arashiyama} alt="Arashiyama" className="w-full h-40 object-cover rounded-lg" />
                      <img src={japanImages.kyoto} alt="Gion" className="w-full h-40 object-cover rounded-lg" />
                  </div>
              </div>

              {/* Day 3 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Jour 3: Nara & Mont Fuji</h3>
                  <p>Explorez Nara et le Mont Fuji, symboles culturels du Japon.</p>
                  <ul className="list-disc pl-6 mt-4">
                      <li><strong>Parc de Nara</strong> - Rencontrez les célèbres cerfs en liberté.</li>
                      <li><strong>Temple Todai-ji</strong> - Découvrez le grand Bouddha de Nara.</li>
                      <li><strong>Mont Fuji</strong> - Admirez la majesté du Mont Fuji depuis la Cinquième Station.</li>
                  </ul>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                      <img src={japanImages.nara} alt="Nara" className="w-full h-40 object-cover rounded-lg" />
                      <img src={japanImages.mountFuji} alt="Mont Fuji" className="w-full h-40 object-cover rounded-lg" />
                  </div>
              </div>

              {/* Day 4 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Jour 4: Osaka - La ville gastronomique</h3>
                  <p>Plongez dans l'atmosphère animée d'Osaka.</p>
                  <ul className="list-disc pl-6 mt-4">
                      <li><strong>Château d'Osaka</strong> - Visitez ce château historique.</li>
                      <li><strong>Dotonbori</strong> - Promenez-vous le long de cette rue célèbre pour ses enseignes lumineuses et sa cuisine de rue.</li>
                  </ul>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                      <img src={japanImages.osaka} alt="Château d'Osaka" className="w-full h-40 object-cover rounded-lg" />
                      <img src={japanImages.dotonbori} alt="Dotonbori" className="w-full h-40 object-cover rounded-lg" />
                  </div>
              </div>

              {/* Add more days as needed */}
          </div>
      </div>
      <Footer/></>
  );
};

export default JapanTravelProgram;
