'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section - Larger */}
            <div className="lg:col-span-5">
              {/* Premium Logo */}
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 text-white flex items-center justify-center text-2xl font-bold rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    F
                  </div>
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="text-xl font-bold tracking-wide text-white">
                    FLOW INDIA
                  </div>
                  <div className="text-xs font-medium tracking-[0.2em] text-amber-400">
                    PROJECTS
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-300 mb-8 max-w-md">
                Engineering Excellence for Modern Infrastructure. Delivering precision-engineered solutions across commercial, industrial, and government sectors.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <a href="mailto:flowrashid38@gmail.com" className="group flex items-center gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">flowrashid38@gmail.com</span>
                </a>
                
                <a href="tel:+918077382865" className="group flex items-center gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+91 80773 82865</span>
                </a>
                
                <div className="group flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Jasola Vihar, New Delhi</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'About Us', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              </h4>
              <div className="space-y-3">
                {['HVAC Systems', 'Electrical', 'Plumbing', 'Fire Protection'].map((service) => (
                  <div key={service} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white relative inline-block">
                Stay Updated
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              </h4>
              <p className="text-sm text-slate-400 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all duration-300"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105 active:scale-95">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Facebook, href: '#' },
                    { icon: Instagram, href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="group w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25"
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
              <p>© {currentYear} Flow India Projects. All rights reserved.</p>
              <div className="hidden md:block w-1 h-1 rounded-full bg-slate-600" />
              <div className="flex gap-6">
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Precision</span>
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <span>Reliability</span>
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <span>Innovation</span>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-6 -top-6 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group"
        >
          <ArrowRight className="w-5 h-5 text-white -rotate-90 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;