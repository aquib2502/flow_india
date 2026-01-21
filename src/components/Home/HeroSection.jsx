import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Button = ({ children, className, onClick, variant = 'primary' }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const scrollToSection = (id) => {
  console.log('Scrolling to:', id);
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Enhanced Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="hero_video.mp4" type="video/mp4" />
        </video>
        
        {/* Multi-layer Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/70 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-amber-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Elegant Ambient Orbs with Tailwind Animations */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl bg-gradient-to-br from-amber-500/30 via-amber-600/20 to-transparent"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 blur-3xl bg-gradient-to-tr from-slate-500/25 via-slate-600/15 to-transparent"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -25, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48"
        style={{ y, opacity }}
      >
        <div className="text-center space-y-8 sm:space-y-10">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-white/95">
              Premium Engineering Solutions
            </span>
          </motion.div>

          {/* Main Heading - Refined Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                Engineered for
              </span>
              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-100 bg-clip-text text-transparent filter drop-shadow-[0_4px_24px_rgba(251,191,36,0.35)]">
                Excellence
              </span>
            </h1>

            {/* Subtitle with Professional Tone */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Delivering world-class HVAC, MEP, and infrastructure solutions
              <span className="block mt-2 text-white/75 text-sm sm:text-base md:text-lg">
                Trusted by industry leaders across commercial, industrial & government sectors
              </span>
            </p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pt-4"
          >
            {/* Primary Button - Premium Gold */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white text-sm sm:text-base font-semibold rounded-xl overflow-hidden shadow-[0_8px_32px_-8px_rgba(251,191,36,0.6)] transition-all duration-300"
              whileHover={{ y: -2, boxShadow: "0 12px 48px -8px rgba(251,191,36,0.8)" }}
              whileTap={{ y: 0 }}
            >
              {/* Shimmer Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-amber-400/50 via-amber-500/50 to-amber-400/50" />
              
              <span className="relative flex items-center justify-center gap-2.5 whitespace-nowrap">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            {/* Secondary Button - Glass Morphism */}
            <motion.button
              onClick={() => scrollToSection('services')}
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-xl text-white text-sm sm:text-base font-semibold rounded-xl border-2 border-white/30 overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] transition-all duration-300"
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,1)", color: "rgb(15,23,42)" }}
              whileTap={{ y: 0 }}
            >
              <span className="relative flex items-center justify-center gap-2.5 whitespace-nowrap z-10">
                Explore Services
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-12 sm:pt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-white/60 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
              <span className="font-medium">500+ Projects Delivered</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-pulse" />
              <span className="font-medium">25+ Years Excellence</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)] animate-pulse" />
              <span className="font-medium">ISO Certified</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}