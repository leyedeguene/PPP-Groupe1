
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { User, Role } from './types';

// Mock user data
const mockUsers: { [key in Role]: User } = {
  [Role.CITOYEN]: { id: '1', nom: 'Ba', prenom: 'Aïcha', email: 'aicha.ba@email.com', telephone: '771234567', role: Role.CITOYEN },
  [Role.AGENT]: { id: '2', nom: 'Diop', prenom: 'Moussa', email: 'moussa.diop@email.com', telephone: '778901234', role: Role.AGENT },
  [Role.MANAGER]: { id: '3', nom: 'Ndiaye', prenom: 'Fatou', email: 'fatou.ndiaye@email.com', telephone: '775678901', role: Role.MANAGER },
};

enum Page {
    HOME,
    LOGIN,
    DASHBOARD
}

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const handleLogin = useCallback((role: Role) => {
        setCurrentUser(mockUsers[role]);
        setCurrentPage(Page.DASHBOARD);
    }, []);

    const handleLogout = useCallback(() => {
        setCurrentUser(null);
        setCurrentPage(Page.HOME);
    }, []);

    const goToLogin = useCallback(() => {
        setCurrentPage(Page.LOGIN);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case Page.LOGIN:
                return <LoginPage onLogin={handleLogin} />;
            case Page.DASHBOARD:
                if (currentUser) {
                    return <Dashboard user={currentUser} />;
                }
                // Fallback to login if no user
                setCurrentPage(Page.LOGIN)
                return <LoginPage onLogin={handleLogin} />;
            case Page.HOME:
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header user={currentUser} onLoginClick={goToLogin} onLogoutClick={handleLogout} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
