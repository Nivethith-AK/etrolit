import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-page border-t border-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <img src="/logo.png" alt="ETROLIT logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">ETROLIT</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Empowering e-commerce platforms with cutting-edge AI engineering and project management solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-slate-600 text-sm font-medium">
              <li><button onClick={() => handleNavClick('hero')} className="hover:text-brand-600 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-brand-600 transition-colors">About</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-brand-600 transition-colors">Services</button></li>
              <li><button onClick={() => handleNavClick('portfolio')} className="hover:text-brand-600 transition-colors">Portfolio</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-brand-600 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-600 text-sm font-medium">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-600" />
                <span className="text-slate-700">support@etrolit.io</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-600" />
                <span className="text-slate-700">+94 77 686 9094</span>
              </li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div>
             <h3 className="text-slate-900 font-bold mb-4">Socials</h3>
             <div className="flex gap-4 mb-6">
                <a 
                  href="https://instagram.com/etrolit.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:bg-brand-600 hover:border-brand-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-white group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com/company/etrolit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:bg-brand-600 hover:border-brand-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-white group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/94776869094" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-white group"
                  aria-label="WhatsApp"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5 group-hover:scale-110 transition-transform"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045a11.871 11.871 0 001.592 5.96L0 24l6.117-1.605a11.782 11.782 0 005.926 1.603h.005c6.634 0 12.043-5.411 12.046-12.046a11.811 11.811 0 00-3.535-8.503z"/>
                  </svg>
                </a>
             </div>
             <div className="flex flex-col gap-2">
                <Link to="/privacy-policy" className="text-sm text-slate-600 hover:text-brand-600 font-medium w-fit">Privacy Policy</Link>
                <Link to="/terms-of-service" className="text-sm text-slate-600 hover:text-brand-600 font-medium w-fit">Terms of Service</Link>
                <Link to="/data-processing-agreement" className="text-sm text-slate-600 hover:text-brand-600 font-medium w-fit">Data Processing Agreement</Link>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-8 text-center text-slate-500 text-xs font-semibold">
          &copy; {new Date().getFullYear()} ETROLIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};