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

    window.addEventListener('scroll', handleScroll);
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
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-center"
        initial={false}
        animate={{
          paddingTop: isScrolled ? '0.75rem' : '1rem',
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <motion.div
          className="bg-white rounded-2xl w-full mx-4"
          initial={false}
          animate={{
            maxWidth: isScrolled ? '1024px' : '1280px',
            paddingTop: isScrolled ? '0.875rem' : '1.25rem',
            paddingBottom: isScrolled ? '0.875rem' : '1.25rem',
            boxShadow: isScrolled 
              ? '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.1)'
              : '0 4px 20px -4px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.08)'
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between">
              
              {/* Premium Brand Logo */}
              <motion.div
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => router.push('/')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Logo Container */}
                <div className="relative">
                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-br from-amber-400/40 to-amber-600/40 rounded-xl blur-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Main Logo */}
                  <motion.div 
                    className="relative w-10 h-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20"
                    whileHover={{ rotate: 6 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Inner Shine */}
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl" />

                    {/* Letter F */}
                    <span className="relative text-xl font-bold bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                      F
                    </span>

                    {/* Sparkle */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-amber-400 fill-amber-400" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Brand Name */}
                <div className="flex flex-col leading-none">
                  <div className="text-lg font-black tracking-tight text-slate-900">
                    FLOW INDIA
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                    PROJECTS
                  </div>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="relative px-5 py-2.5 text-[15px] font-medium text-slate-700 overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {/* Hover Background */}
                      <AnimatePresence>
                        {hoveredItem === item.id && !isActive && (
                          <motion.div
                            layoutId="navbar-hover"
                            className="absolute inset-0 bg-slate-50 rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Active Background */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl"
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Text */}
                      <span className={`relative z-10 tracking-wide transition-all duration-200 ${
                        isActive 
                          ? 'text-white font-semibold' 
                          : 'text-slate-700'
                      }`}>
                        {item.label}
                      </span>

                      {/* Active Underline */}
                      {isActive && (
                        <motion.span
                          className="absolute bottom-0 left-1/2 h-[2.5px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full shadow-lg shadow-amber-500/50"
                          initial={{ width: 0, x: '-50%' }}
                          animate={{ width: '50%', x: '-50%' }}
                          transition={{ 
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Contact CTA Button */}
                <motion.button
                  onClick={() => handleNavigation({ href: '/contact' })}
                  className="relative ml-2 px-6 py-2.5 text-[15px] font-semibold text-white rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Animated Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl blur-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)',
                    }}
                  />

                  {/* Button Text */}
                  <span className="relative z-10 flex items-center gap-2">
                    Contact
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </span>

                  {/* Shadow */}
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-amber-500/25" />
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
        </motion.div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute top-full mt-2 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="px-4 py-3 space-y-1">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`w-full px-4 py-3 text-left text-[15px] font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ 
                        delay: index * 0.05, 
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="tracking-wide">{item.label}</span>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.span
                          className="block mt-1.5 h-[2.5px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"
                          initial={{ width: 0 }}
                          animate={{ width: 40 }}
                          transition={{ delay: 0.15, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Mobile Contact Button */}
                <motion.button
                  onClick={() => handleNavigation({ href: '/contact' })}
                  className="relative w-full mt-2 px-6 py-3 text-[15px] font-semibold text-white rounded-xl overflow-hidden"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact Us
                    <span>→</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;