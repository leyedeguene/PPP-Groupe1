
import React from 'react';
import { User, Role, StatData, WasteType } from '../types';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Mock Data
const citizenStats: StatData[] = [
  { name: 'Plastique', tonnes: 0.2 },
  { name: 'Verre', tonnes: 0.5 },
  { name: 'Papier', tonnes: 0.8 },
  { name: 'Métal', tonnes: 0.1 },
];

const agentStats: StatData[] = [
  { name: 'Lundi', tonnes: 1.2 },
  { name: 'Mardi', tonnes: 1.5 },
  { name: 'Mercredi', tonnes: 0.8 },
  { name: 'Jeudi', tonnes: 2.1 },
  { name: 'Vendredi', tonnes: 1.7 },
];

const managerStats: StatData[] = [
  { name: 'Jan', tonnes: 120 },
  { name: 'Fev', tonnes: 150 },
  { name: 'Mar', tonnes: 180 },
  { name: 'Avr', tonnes: 210 },
  { name: 'Mai', tonnes: 250 },
  { name: 'Juin', tonnes: 230 },
];

const CitizenView: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord Citoyen</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Signaler un dépôt sauvage</h3>
        <p className="text-gray-600 mb-4">Aidez-nous à garder notre ville propre.</p>
        <button className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">Signaler</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Demander un ramassage</h3>
        <p className="text-gray-600 mb-4">Planifiez une collecte à votre domicile.</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Demander</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Mes Éco-points</h3>
        <p className="text-gray-600 mb-4">Vous avez <span className="font-bold text-emerald-600">1,250</span> points.</p>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">Voir les récompenses</button>
      </div>
    </div>
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-4">Mes contributions (en tonnes)</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={citizenStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tonnes" fill="#34D399" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  </div>
);

const AgentView: React.FC = () => (
    <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord Agent</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Ma tournée du jour</h3>
        <p className="text-gray-600 mb-4">Voir l'itinéraire optimisé.</p>
        <button className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">Voir la carte</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Signalements à traiter</h3>
        <p className="text-gray-600 mb-4"><span className="font-bold text-red-600">3</span> nouveaux signalements.</p>
        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Consulter</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Messagerie</h3>
        <p className="text-gray-600 mb-4">Discuter avec les citoyens et le manager.</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Ouvrir le chat</button>
      </div>
    </div>
     <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-4">Collecte hebdomadaire (en tonnes)</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={agentStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tonnes" fill="#3B82F6" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  </div>
);

const ManagerView: React.FC = () => (
    <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord Manager</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Gérer les agents</h3>
        <p className="text-gray-600 mb-4">Ajouter, supprimer, affecter.</p>
        <button className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">Gérer</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Campagnes</h3>
        <p className="text-gray-600 mb-4">Gérer les campagnes de sensibilisation.</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Gérer</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Zones de collecte</h3>
        <p className="text-gray-600 mb-4">Créer et gérer les zones.</p>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">Gérer</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-lg mb-2">Rapports</h3>
        <p className="text-gray-600 mb-4">Exporter en PDF / Excel.</p>
        <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600">Exporter</button>
      </div>
    </div>
     <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-4">Collecte globale mensuelle (en tonnes)</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={managerStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKsy="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tonnes" fill="#8B5CF6" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  </div>
);

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {

  const renderContent = () => {
    switch (user.role) {
      case Role.CITOYEN:
        return <CitizenView />;
      case Role.AGENT:
        return <AgentView />;
      case Role.MANAGER:
        return <ManagerView />;
      default:
        return <p>Rôle utilisateur non reconnu.</p>;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenue, {user.prenom} {user.nom}
          </h1>
          <p className="text-gray-500">Vous êtes connecté en tant que : <span className="font-semibold text-emerald-600">{user.role}</span></p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
