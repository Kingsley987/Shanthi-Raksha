import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ReportPage from './pages/ReportPage';
import CommunityPage from './pages/CommunityPage';
import CrisisPage from './pages/CrisisPage';
import CommunicationsPage from './pages/CommunicationsPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import AIVerificationPage from './pages/AIVerificationPage';
import SecurityPage from './pages/SecurityPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Simple routing function
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'report':
        return <ReportPage />;
      case 'community':
        return <CommunityPage />;
      case 'crisis':
        return <CrisisPage />;
      case 'communications':
        return <CommunicationsPage />;
      case 'events':
        return <EventsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'ai-verification':
        return <AIVerificationPage />;
      case 'security':
        return <SecurityPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <SignUpPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  // Override the window history API to handle navigation
  React.useEffect(() => {
    const handleNavigation = (event: PopStateEvent) => {
      const path = window.location.pathname;
      if (path === '/') setCurrentPage('home');
      else setCurrentPage(path.substring(1));
    };

    // Intercept link clicks to handle routing
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        event.preventDefault();
        const href = anchor.getAttribute('href') as string;
        window.history.pushState({}, '', href);
        
        const pageName = href === '/' ? 'home' : href.substring(1);
        setCurrentPage(pageName);
      }
    };

    window.addEventListener('popstate', handleNavigation);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <AuthProvider>
      <Layout>
        {renderPage()}
      </Layout>
    </AuthProvider>
  );
}

export default App;