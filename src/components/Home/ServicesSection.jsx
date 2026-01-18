import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Wind, Zap, Droplets, Flame, ArrowRight, Sparkles } from 'lucide-react';

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
      lightColor: 'from-blue-50 to-cyan-50'
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
      lightColor: 'from-amber-50 to-yellow-50'
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
      lightColor: 'from-blue-50 to-indigo-50'
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
      lightColor: 'from-red-50 to-orange-50'
    }
  ]
};

const PremiumServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Premium Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-amber-600">
              OUR SERVICES
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                MEP Solutions
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-amber-200/50 to-amber-300/50 -z-0 blur-sm" />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg leading-relaxed text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From concept to completion, we deliver integrated engineering services 
            that power modern infrastructure.
          </motion.p>
        </motion.div>

        {/* Premium Service Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {mockData.services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-8 lg:p-10 bg-white border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Premium Icon Container */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150`} />
                    <motion.div 
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                      animate={isHovered ? { rotate: 6, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                        <IconComponent 
                          className={`w-8 h-8 transition-all duration-500 ${
                            isHovered 
                              ? 'text-white scale-110' 
                              : 'text-slate-700'
                          }`}
                          strokeWidth={2.5}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-[15px] leading-relaxed text-slate-600 mb-6 group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Premium List */}
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-700 group/item"
                        initial={false}
                        animate={isHovered ? {
                          opacity: 1,
                          x: 0
                        } : {
                          opacity: 1,
                          x: 0
                        }}
                        transition={{
                          delay: isHovered ? i * 0.05 : 0,
                          duration: 0.3
                        }}
                      >
                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-br ${service.color} shadow-sm`} />
                        <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  {/* <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`} />
                  </button> */}
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full transform translate-x-12 -translate-y-12`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <motion.button 
            onClick={() => router.push('/services')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative z-10">Explore All Services</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;