'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 py-3 shadow-lg shadow-slate-900/5' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Premium Logo */}
            <div className="flex items-center gap-3 cursor-pointer group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center text-2xl font-bold transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 shadow-xl shadow-slate-900/20">
                  F
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-lg font-bold tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
                  FLOW INDIA
                </div>
                <div className="text-xs font-medium tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-amber-600">
                  PROJECTS
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                    activeSection === item.id
                      ? 'text-amber-700'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg opacity-0 group-hover:opacity-100" />
                  
                  {/* Active indicator */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 ${
                    activeSection === item.id ? 'w-8' : 'w-0 group-hover:w-8'
                  }`} />
                  
                  {/* Text */}
                  <span className="relative z-10 tracking-wide">{item.label}</span>
                </button>
              ))}
              
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-4 relative px-6 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm font-semibold rounded-lg overflow-hidden group shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/40 transition-all duration-300"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 tracking-wide">Get Started</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2.5 text-slate-900 transition-all duration-300 hover:scale-110 hover:bg-slate-100 rounded-lg active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-6 bg-white/95 backdrop-blur-2xl border-t border-slate-200/50 shadow-2xl shadow-slate-900/10">
            <div className="flex flex-col gap-2">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-3 text-left text-sm font-semibold rounded-lg transition-all duration-300 overflow-hidden group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Slide in animation line */}
                  <span className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-amber-700 transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  <span className="ml-3 tracking-wide">{item.label}</span>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 relative px-6 py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm font-semibold rounded-lg overflow-hidden group shadow-xl shadow-slate-900/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 tracking-wide">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[999] lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;