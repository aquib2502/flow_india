import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Award, Users, Building2, TrendingUp } from 'lucide-react';

const Button = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const mockData = {
  stats: [
    { value: "500+", label: "Projects Completed", icon: Building2 },
    { value: "25+", label: "Years Experience", icon: Award },
    { value: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "150+", label: "Expert Engineers", icon: Users }
  ]
};

const scrollToSection = (id) => {
  console.log('Scrolling to:', id);
};

// Professional, subtle animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  }
};

const statCardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 lg:px-10 pt-40 pb-20 relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="hero_video.mp4" type="video/mp4" />
        </video>
        {/* Professional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/20" />
      </div>

      {/* Subtle Floating Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)',
          willChange: 'transform',
          filter: 'blur(40px)'
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(148,163,184,0.25) 0%, transparent 70%)',
          willChange: 'transform',
          filter: 'blur(40px)'
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Content */}
      <motion.div
        className="max-w-4xl text-center z-10"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-block px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-semibold tracking-[2px] uppercase mb-8 shadow-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          Climate Control & MEP Experts
        </motion.div>

        {/* Title - Clean, professional fade in */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Engineering Excellence
          </span>
          <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(251,191,36,0.4)] filter brightness-110">
            For Modern Infrastructure
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/95 max-w-3xl mx-auto mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Delivering precision-engineered HVAC, electrical, plumbing, and fire protection solutions
          across commercial, industrial, and government sectors.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-5 justify-center items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="bg-white text-slate-900 border-none px-9 py-6 text-sm font-semibold inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-amber-50 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] h-auto rounded-sm shadow-xl group"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
              <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="text-white border-2 border-white/60 bg-white/5 backdrop-blur-sm px-9 py-6 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] h-auto rounded-sm"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section - Clean and Professional */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-24 max-w-6xl w-full z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {mockData.stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className="text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 rounded-sm group cursor-pointer"
              variants={statCardVariant}
              whileHover={{ 
                y: -6,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full mb-5 group-hover:from-amber-400/20 group-hover:to-amber-600/20 transition-all duration-300">
                <Icon className="w-7 h-7 text-amber-300/90" strokeWidth={1.5} />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent mb-3 tracking-tight">
                {stat.value}
              </div>
              
              <div className="text-sm text-white/75 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}