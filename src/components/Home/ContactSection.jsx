import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

const inspiringQuotes = [
  "Your vision, our expertise – together we build excellence",
  "Great partnerships begin with a simple conversation",
  "Let's turn your ideas into inspiring reality"
];

const CTASection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspiringQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
   <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0">


      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center">
          {/* Animated Quote Section */}
          <div className="mb-8 min-h-[80px] flex items-center justify-center">
            <div className="relative">
              {inspiringQuotes.map((quote, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    idx === currentQuote
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 absolute inset-0 translate-y-4'
                  }`}
                >
                  <p className="text-xl sm:text-2xl font-light text-amber-400/90 italic">
                    "{quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
              <span className="text-xs font-bold tracking-[3px] uppercase text-amber-500">
                Ready to Start?
              </span>
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            We're here to listen, understand, and bring your vision to life with dedication and excellence. 
            Every great project starts with a conversation.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              onClick={handleContactClick}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Contact Information */}
          <div className="border-t border-slate-700/50 pt-12">
            <p className="text-sm text-slate-400 mb-8">
              Or reach out directly – we're always happy to hear from you
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Phone */}
              <a 
                href="tel:+918077382865"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50 hover:border-amber-500/50 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Call Us
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    +91 80773 82865
                  </div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:flowrashid38@gmail.com"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50 hover:border-amber-500/50 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Email Us
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 break-all px-2">
                    flowrashid38@gmail.com
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50 hover:border-amber-500/50 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Visit Us
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    Jasola Vihar, New Delhi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-12">
            <p className="text-sm text-slate-500 font-light">
              Committed to excellence • Dedicated to your success • Building trust since day one
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;