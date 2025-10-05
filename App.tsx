
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ProjectIdeasPage from './pages/ProjectIdeasPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import BackToTopButton from './components/BackToTopButton';
import { Page } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    const handleNavigate = useCallback((page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'gallery':
                return <GalleryPage />;
            case 'project-ideas':
                return <ProjectIdeasPage />;
            case 'about':
                return <AboutPage />;
            case 'pricing':
                return <PricingPage />;
            case 'faq':
                return <FAQPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <>
            <Header onNavigate={handleNavigate} currentPage={currentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
            <FloatingWhatsAppButton />
            <BackToTopButton />
        </>
    );
};

export default App;