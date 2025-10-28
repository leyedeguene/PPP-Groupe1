
import React from 'react';
import { SearchIcon, WasteIcon } from '../components/icons';
import { WasteType } from '../types';

const wasteTypes = [
  { type: WasteType.PAPIERS, color: 'blue-500' },
  { type: WasteType.VERRES, color: 'emerald-500' },
  { type: WasteType.PLASTIQUES, color: 'yellow-500' },
  { type: WasteType.ORGANIQUES, color: 'orange-700' },
  { type: WasteType.ELECTRONIQUES, color: 'red-500' },
  { type: WasteType.METALLIQUES, color: 'gray-500' },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Trouvez votre point de collecte le plus proche
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Localisez facilement le point de collecte le plus proche pour déposer vos déchets recyclables en toute simplicité.
            </p>
            <div className="relative max-w-lg mx-auto md:mx-0">
              <input 
                type="text" 
                placeholder="Entrez votre adresse..."
                className="w-full pl-4 pr-12 py-4 text-lg border-2 border-gray-200 rounded-full focus:ring-emerald-500 focus:border-emerald-500 transition"
              />
              <button className="absolute inset-y-0 right-0 flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full m-1 hover:bg-emerald-600 transition">
                <SearchIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
                <span className="text-gray-600">Points de dépôts</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                <span className="text-gray-600">Centres de recyclage</span>
              </div>
            </div>
          </div>
          <div>
            <img src="https://i.imgur.com/GzB9o9q.png" alt="Carte du Sénégal avec les points de collecte" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Waste Sorting Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faites le bon geste !</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Triez vos déchets selon leur type :</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {wasteTypes.map(({ type, color }) => (
              <div key={type} className={`p-6 rounded-2xl shadow-lg bg-${color} bg-opacity-10 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300`}>
                <div className={`w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-4`}>
                    <img src={`https://i.imgur.com/${
                        {
                            'Papiers': 'jD5Qk1l.png',
                            'Verres': 'p9b0lYh.png',
                            'Plastiques': '2j3gH0h.png',
                            'Organiques': 'f3h4k1i.png',
                            'Électroniques': 's6j7h8g.png',
                            'Métalliques': 't9r8e7w.png'
                        }[type]
                    }`} alt={type} className="w-16 h-16"/>
                </div>
                <h3 className={`font-semibold text-xl text-gray-700`}>{type}</h3>
              </div>
            ))}
          </div>
          <button className="mt-12 px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors shadow-lg">
            Voir les horaires de collecte
          </button>
        </div>
      </section>

      {/* Guides and Tutorials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img src="https://i.imgur.com/13BvJ95.png" alt="Aperçu de tutoriel vidéo" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Consulter les guides et tutoriels sur le recyclage</h2>
            <p className="text-lg text-gray-600 mb-8">
              Apprenez à trier efficacement vos déchets grâce à nos guides pratiques et tutoriels dédiés au recyclage responsable.
            </p>
            <button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors shadow-lg">
              Voir tous les guides
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
