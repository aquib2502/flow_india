import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden border-t border-slate-200">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Top Section - Brand + Contact */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
            {/* Brand */}
            <div className="lg:max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg blur-md opacity-40" />
                  <div className="relative w-11 h-11 bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center text-lg font-bold rounded-lg shadow-lg">
                    F
                  </div>
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="text-lg font-bold tracking-wide text-slate-900">
                    FLOW INDIA
                  </div>
                  <div className="text-xs font-medium tracking-[0.2em] text-amber-600">
                    PROJECTS
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                Engineering Excellence for Modern Infrastructure. Delivering precision solutions across India.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-amber-600">Precision</span>
                <div className="w-1 h-1 rounded-full bg-amber-500" />
                <span className="font-semibold text-amber-600">Reliability</span>
                <div className="w-1 h-1 rounded-full bg-amber-500" />
                <span className="font-semibold text-amber-600">Innovation</span>
              </div>
            </div>

            {/* Contact Cards - Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 flex-1 max-w-3xl">
              <a 
                href="tel:+918077382865" 
                className="group flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Call Us
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
                  +91 80773 82865
                </div>
              </a>

              <a 
                href="mailto:flowrashid38@gmail.com" 
                className="group flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Email Us
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-200 break-all px-1">
                  flowrashid38@gmail.com
                </div>
              </a>

              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Visit Us
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
                  Jasola Vihar, Delhi
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Links + Copyright */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Quick Links */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
                {[
                  { label: 'About Us', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <React.Fragment key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    </button>
                    {index < 3 && (
                      <div className="hidden sm:block w-px h-4 bg-slate-300" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Copyright & Legal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-500">
                <p>© {currentYear} Flow India Projects</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-amber-600 transition-colors duration-200">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-amber-600 transition-colors duration-200">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
      
      </div>
    </footer>
  );
};

export default Footer;