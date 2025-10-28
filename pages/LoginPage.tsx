
import React from 'react';
import { Logo } from '../components/icons';
import { Role } from '../types';

interface LoginPageProps {
  onLogin: (role: Role) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-8">
            <Logo />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Connectez-vous à votre compte</h2>
        <p className="text-center text-gray-500 mb-8">Pour continuer, veuillez vous connecter.</p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required 
              defaultValue="test@goupe1.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="password"className="text-sm font-medium text-gray-700">Mot de passe</label>
            <input 
              id="password" 
              name="password" 
              type="password"
              autoComplete="current-password"
              required
              defaultValue="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button 
            type="submit"
            onClick={(e) => {
                e.preventDefault();
                onLogin(Role.CITOYEN)
            }}
            className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou connectez-vous en tant que</span>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                    onClick={() => onLogin(Role.AGENT)}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    Agent de collecte
                </button>
                 <button
                    onClick={() => onLogin(Role.MANAGER)}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    Manager
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
