
import React from 'react';
import { Logo, UserIcon } from './icons';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLoginClick, onLogoutClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-600 hidden sm:inline">
                  Bonjour, {user.prenom}
                </span>
                <button 
                  onClick={onLogoutClick}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600 transition-colors"
              >
                <UserIcon className="w-5 h-5" />
                <span>Connexion</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
