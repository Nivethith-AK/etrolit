import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Layout';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DataProcessingAgreementPage } from './pages/DataProcessingAgreementPage';
import { DemoHubPage } from './pages/DemoHubPage';
import { BookDemoPage } from './pages/BookDemoPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to avoid triggering scroll listeners
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-page text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo" element={<DemoHubPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/data-processing-agreement" element={<DataProcessingAgreementPage />} />
            <Route path="/terms" element={<TermsPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;