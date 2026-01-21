import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Wind, Zap, Droplets, Flame, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const mockData = {
  services: [
    {
      icon: Wind,
      title: 'HVAC Systems',
      description: 'Complete climate control solutions for optimal comfort and energy efficiency.',
      points: [
        'Central Air Conditioning',
        'Ventilation Design',
        'Temperature Control',
        'Energy Management'
      ],
      color: 'from-blue-500 to-cyan-500',
      lightColor: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-500/10',
      hoverShadow: 'group-hover:shadow-blue-500/20'
    },
    {
      icon: Zap,
      title: 'Electrical Systems',
      description: 'Comprehensive electrical engineering and installation services.',
      points: [
        'Power Distribution',
        'Lighting Design',
        'Emergency Systems',
        'Load Calculations'
      ],
      color: 'from-amber-500 to-yellow-500',
      lightColor: 'from-amber-50 to-yellow-50',
      iconBg: 'bg-amber-500/10',
      hoverShadow: 'group-hover:shadow-amber-500/20'
    },
    {
      icon: Droplets,
      title: 'Plumbing Infrastructure',
      description: 'Advanced plumbing solutions for residential and commercial properties.',
      points: [
        'Water Supply Systems',
        'Drainage Solutions',
        'Fixture Installation',
        'Pipe Network Design'
      ],
      color: 'from-blue-600 to-indigo-600',
      lightColor: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-indigo-500/10',
      hoverShadow: 'group-hover:shadow-indigo-500/20'
    },
    {
      icon: Flame,
      title: 'Fire Protection',
      description: 'State-of-the-art fire safety and protection systems.',
      points: [
        'Sprinkler Systems',
        'Fire Alarms',
        'Smoke Detection',
        'Emergency Response'
      ],
      color: 'from-red-500 to-orange-500',
      lightColor: 'from-red-50 to-orange-50',
      iconBg: 'bg-red-500/10',
      hoverShadow: 'group-hover:shadow-red-500/20'
    }
  ]
};

const PremiumServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Subtle background decoration - no animation to prevent flicker */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-amber-600">
              OUR SERVICES
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Comprehensive{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                MEP Solutions
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-amber-200/60 to-amber-300/60 -z-0 blur-sm" />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            From concept to completion, we deliver integrated engineering services 
            that power modern infrastructure.
          </motion.p>
        </div>

        {/* Service Cards Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {mockData.services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full p-6 sm:p-7 lg:p-8 bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1">
                  
                  {/* Gradient overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <motion.div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${service.iconBg} flex items-center justify-center transition-all duration-300 ${service.hoverShadow} group-hover:shadow-lg`}
                        animate={
                          isHovered && !prefersReducedMotion
                            ? { scale: 1.05, rotate: 3 }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <IconComponent 
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${
                            isHovered 
                              ? 'text-slate-900' 
                              : 'text-slate-700'
                          }`}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-600 mb-5 group-hover:text-slate-700 transition-colors duration-200">
                      {service.description}
                    </p>

                    {/* Points List */}
                    <ul className="space-y-2.5">
                      {service.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 
                            className={`flex-shrink-0 w-4 h-4 mt-0.5 transition-all duration-300 ${
                              isHovered 
                                ? 'text-slate-900 scale-110' 
                                : 'text-slate-400'
                            }`}
                            strokeWidth={2.5}
                          />
                          <span className="leading-relaxed group-hover:text-slate-900 transition-colors duration-200">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent bar */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            Need a custom solution? We're here to help.
          </p>
          <motion.button 
            onClick={() => router.push('/services')}
            className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Shine effect */}
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
            
            <span className="relative z-10">Explore All Services</span>
            <motion.div
              className="relative z-10"
              animate={{ x: hoveredIndex === 'cta' ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;