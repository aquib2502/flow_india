'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = ({ forceWhite = false }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const whiteNavbar = forceWhite || isScrolled;


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const handleNavigation = (item) => {
    if (item.isLink) {
      router.push(item.href);
      setMobileMenuOpen(false);
    } else {
      scrollToSection(item.id);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home', href: '/', isLink: true },
    { id: 'story', label: 'Our Story', href: '/aboutus', isLink: true },
    { id: 'services', label: 'Services', href: '/services', isLink: true },
    { id: 'contact', label: 'Contact Us', href: '/contact', isLink: true }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${whiteNavbar
        ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm py-3'
        : 'bg-white/80 backdrop-blur-sm py-5'
        }`}>


        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">

            {/* Premium Brand Logo */}
            <motion.div
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Logo Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/40 to-amber-600/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Main Logo */}
                <div className="relative w-11 h-11 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/30 transition-transform duration-300 group-hover:rotate-6">
                  {/* Inner Shine */}
                  <div className="absolute inset-[1px] bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl" />

                  {/* Letter F */}
                  <span className="relative text-2xl font-bold bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                    F
                  </span>

                  {/* Sparkle */}
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-amber-400 fill-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Brand Name */}
              <div className="flex flex-col leading-none">
                <div className="text-xl font-black tracking-tight text-slate-900">
                  FLOW INDIA
                </div>
                <div className="text-[11px] font-bold tracking-[0.2em] bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                  PROJECTS
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-5 py-2 text-[15px] font-semibold text-slate-700 transition-colors duration-200 hover:text-amber-700"
                >
                  {/* Hover Background */}
                  {hoveredItem === item.id && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}

                  {/* Active/Hover Indicator */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-amber-600 to-amber-700 rounded-full transition-all duration-200 ${activeSection === item.id || hoveredItem === item.id ? 'w-[60%]' : 'w-0'
                    }`} />

                  {/* Text */}
                  <span className="relative z-10 tracking-wide">
                    {item.label}
                  </span>
                </button>
              ))}

              {/* CTA Button */}
              <motion.button
                onClick={() => {
                  router.push('/contact');
                  setMobileMenuOpen(false);
                }}

                className="ml-3 px-6 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[15px] font-bold rounded-lg shadow-lg shadow-slate-900/25 transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/35"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started →
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-900 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {!mobileMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={24} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={24} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/98 backdrop-blur-sm border-t border-slate-200/80 shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 py-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`w-full px-4 py-3 text-left text-[15px] font-semibold rounded-lg transition-colors duration-200 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-amber-50 to-amber-100/80 text-amber-700'
                      : 'text-slate-700 hover:bg-amber-50/60'
                      }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active Indicator */}
                    {activeSection === item.id && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-600 to-amber-700 rounded-r-full" />
                    )}

                    <span className="tracking-wide">{item.label}</span>
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[15px] font-bold rounded-lg shadow-lg shadow-slate-900/25"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started →
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;