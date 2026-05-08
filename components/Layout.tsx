import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pendingSectionRef = useRef<string | null>(null);

  const scrollToSection = (sectionId: string): boolean => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    }

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }

    return false;
  };

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = 0;
    let isNavigating = false;

    const handleScroll = () => {
      if (isNavigating) return; // Skip scroll handling during navigation
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) > 20) {
        lastScrollY = scrollY;
        setScrolled(scrollY > 20);
      }
    };

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Pause scroll handling during navigation
    const handleNavigationStart = () => {
      isNavigating = true;
    };
    const handleNavigationEnd = () => {
      isNavigating = false;
    };

    // Listen to route changes
    window.addEventListener('hashchange', handleNavigationStart, false);
    setTimeout(handleNavigationEnd, 0);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', handleNavigationStart);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/' || !pendingSectionRef.current) return;

    const sectionId = pendingSectionRef.current;
    let attempts = 0;
    const maxAttempts = 20;

    const tryScroll = () => {
      if (scrollToSection(sectionId)) {
        pendingSectionRef.current = null;
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  }, [location.pathname]);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      pendingSectionRef.current = sectionId;
      navigate('/');
    } else {
      scrollToSection(sectionId);
    }
  };

  const NavItem: React.FC<{ label: string; sectionId: string; mobile?: boolean }> = ({ label, sectionId, mobile }) => (
    <button
      onClick={() => handleNavClick(sectionId)}
      className={`group relative px-4 py-2 transition-all ${
        mobile 
          ? 'w-full text-left hover:bg-slate-100 rounded-xl py-3' 
          : ''
      }`}
    >
      <span className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
        mobile ? 'text-slate-900 text-base' : 'text-slate-700 group-hover:text-slate-900'
      }`}>
        {label}
      </span>
      {!mobile && <span className="absolute inset-0 z-0 scale-75 rounded-full bg-slate-200/50 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 shadow-sm"></span>}
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none" style={{contain: 'layout style paint'}}>
       <header
          className={`pointer-events-auto transition-all duration-500 ease-in-out flex flex-col ${
            isMenuOpen 
              ? 'w-full max-w-5xl bg-white/95 backdrop-blur-3xl border border-slate-300 shadow-2xl shadow-slate-400/20 rounded-[32px] py-2' 
              : scrolled
                ? 'w-full max-w-5xl bg-white/75 backdrop-blur-xl border border-slate-300/50 shadow-lg shadow-slate-400/10 rounded-[50px] py-2' 
                : 'w-full max-w-7xl bg-white/40 backdrop-blur-lg border border-slate-200/50 shadow-md shadow-slate-300/10 rounded-2xl py-3' 
          }`}
          style={{willChange: 'background-color, backdrop-filter', transform: 'translateZ(0)'}}
       >
          <div className="flex justify-between items-center h-14 sm:h-16 px-4 sm:px-6 shrink-0">
            <div className="flex flex-col cursor-pointer group" onClick={() => handleNavClick('hero')}>
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 sm:w-10 sm:h-10 shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                    <img
                      src="/logo.png?v=3"
                      alt="ETROLIT logo"
                      className="w-full h-full object-contain block"
                      loading="eager"
                      decoding="sync"
                      fetchpriority="high"
                      width={44}
                      height={44}
                    />
                  </div>
                  <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600">
                      ETROLIT
                  </span>
                </div>
            </div>

            <nav className="hidden md:flex gap-2 items-center">
                <NavItem label="Home" sectionId="hero" />
                <NavItem label="About" sectionId="about" />
                <NavItem label="Services" sectionId="services" />
                <NavItem label="Portfolio" sectionId="portfolio" />
                <NavItem label="Contact" sectionId="contact" />
            </nav>

            <div className="md:hidden">
                 <button
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
                 className={`p-2 rounded-full transition-colors ${isMenuOpen ? 'text-slate-900 bg-slate-100' : 'text-slate-800 hover:text-slate-900 hover:bg-slate-100'}`}
                 >
                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                 </button>
            </div>
          </div>

          <div 
             className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
               isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
             }`}
          >
             <div className="px-6 pb-6 pt-2 flex flex-col space-y-1">
                  <div className="h-px w-full bg-slate-200 mb-4"></div>
                  <NavItem label="Home" sectionId="hero" mobile />
                  <NavItem label="About" sectionId="about" mobile />
                  <NavItem label="Services" sectionId="services" mobile />
                  <NavItem label="Portfolio" sectionId="portfolio" mobile />
                  <NavItem label="Contact" sectionId="contact" mobile />
             </div>
          </div>
       </header>
    </div>
  );
};