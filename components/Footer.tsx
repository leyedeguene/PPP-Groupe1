
import React from 'react';
import { Logo, InstagramIcon, FacebookIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5V8.5L16 6.5L12 4.5Z" fill="#34D399"/>
                  <path d="M8 6.5L12 8.5V4.5L8 6.5Z" fill="#10B981"/>
                  <path d="M12 20.5V16.5L16 18.5L12 20.5Z" fill="#34D399"/>
                  <path d="M8 18.5L12 16.5V20.5L8 18.5Z" fill="#10B981"/>
                  <path d="M20 12.5H16L18 16.5L20 12.5Z" fill="#34D399"/>
                  <path d="M18 8.5L16 12.5H20L18 8.5Z" fill="#10B981"/>
                  <path d="M4 12.5H8L6 16.5L4 12.5Z" fill="#34D399"/>
                  <path d="M6 8.5L8 12.5H4L6 8.5Z" fill="#10B981"/>
                </svg>
                <span className="text-2xl font-bold text-white">goupe1</span>
            </div>
            <p className="text-gray-400">Recyclage intelligent, planète gagnante.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-400">contact@goupe1.com</p>
            <p className="text-gray-400">Liberté 1 - Dakar - Sénégal</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rejoignez-nous !</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><YoutubeIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Goupe1. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
