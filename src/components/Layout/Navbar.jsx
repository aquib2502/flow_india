'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = ({ forceWhite = false }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item) => {
    router.push(item.href);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Us', href: '/aboutus' },
    { id: 'services', label: 'Services', href: '/services' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] flex justify-center transition-all duration-300 ${
        isScrolled ? 'pt-2' : 'pt-4'
      }`}>
        <div
          className={`bg-white rounded-2xl w-full mx-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'max-w-[900px] py-2.5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]' 
              : 'max-w-[1100px] py-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]'
          }`}
        >
          <div className="px-5 sm:px-7">
            <div className="flex items-center justify-between">
              
              {/* Premium Brand Logo */}
              <div
                className="flex items-center gap-2.5 cursor-pointer group"
                onClick={() => router.push('/')}
              >
                {/* Logo Container */}
                <div className="relative">
                  {/* Glow Effect - Only on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/40 group-hover:to-amber-600/40 rounded-xl blur-md transition-all duration-300" />

                  {/* Main Logo */}
                  <div className="relative w-9 h-9 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:rotate-6 transition-transform duration-300">
                    {/* Inner Shine */}
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl" />

                    {/* Letter F */}
                    <span className="relative text-lg font-bold bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                      F
                    </span>

                    {/* Sparkle */}
                    <Sparkles className="absolute -top-1 -right-1 w-2.5 h-2.5 text-amber-400 fill-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>

                {/* Brand Name */}
                <div className="flex flex-col leading-none">
                  <div className="text-base font-black tracking-tight text-slate-900">
                    FLOW INDIA
                  </div>
                  <div className="text-[9px] font-bold tracking-[0.2em] bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                    PROJECTS
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1.5">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="relative px-4 py-2 text-sm font-medium text-slate-700 overflow-hidden rounded-xl transition-transform duration-150 hover:scale-105 active:scale-95"
                    >
                      {/* Hover Background */}
                      <div className={`absolute inset-0 bg-slate-50 rounded-xl transition-opacity duration-200 ${
                        hoveredItem === item.id && !isActive ? 'opacity-100' : 'opacity-0'
                      }`} />

                      {/* Active Background */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl" />
                      )}

                      {/* Text */}
                      <span className={`relative z-10 tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-white font-semibold' : 'text-slate-700'
                      }`}>
                        {item.label}
                      </span>

                      {/* Active Underline */}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full shadow-md shadow-amber-500/50" />
                      )}
                    </button>
                  );
                })}

                {/* Contact CTA Button */}
                <button
                  onClick={() => handleNavigation({ href: '/contact' })}
                  className="relative ml-1.5 px-5 py-2 text-sm font-semibold text-white rounded-xl overflow-hidden group transition-transform duration-150 hover:scale-105 active:scale-95"
                >
                  {/* Static Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                  {/* Button Text */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    Contact
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>

                  {/* Shadow */}
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-amber-500/25" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-slate-900 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {!mobileMenuOpen ? (
                  <Menu size={22} strokeWidth={2.5} />
                ) : (
                  <X size={22} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full mt-2 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`w-full px-4 py-2.5 text-left text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="tracking-wide">{item.label}</span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <span className="block mt-1.5 w-10 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-md shadow-amber-500/50" />
                    )}
                  </button>
                );
              })}

              {/* Mobile Contact Button */}
              <button
                onClick={() => handleNavigation({ href: '/contact' })}
                className="relative w-full mt-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden"
              >
                {/* Static Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us
                  <span>→</span>
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[999] lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;