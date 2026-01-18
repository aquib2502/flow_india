import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { text: "ISO Certified Excellence" },
  { text: "24/7 Project Support" },
  { text: "Sustainable Solutions" },
  { text: "Expert Engineering Team" }
];

export default function FlowIndiaAboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Premium Dark Background with Subtle Texture */}
      <div className="absolute inset-0 bg-slate-950"></div>
      
      {/* Premium Gradient Mesh - Subtle and Sophisticated */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-950/30 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-orange-950/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Refined Ambient Glow */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle Moving Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/40 rounded-full shadow-lg shadow-amber-500/50"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-bold tracking-[4px] uppercase text-amber-500 mb-4">
            ABOUT US
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Precision Engineering,{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Delivered with Confidence
            </span>
          </h2>
        </motion.div>

        {/* Two Large Cards - Overlapping Layout */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Card 1 - Image Card (Bottom Layer, Slightly Rotated) */}
          <motion.div
            className="relative lg:absolute lg:left-0 lg:top-0 lg:w-[55%] z-10"
            initial={{ opacity: 0, x: -80, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative group"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl">
                <img
                  src="about_hero.jpg"
                  alt="Flow India Projects Engineering Excellence"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Refined Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-950/20 to-transparent" />
                
                {/* Premium Border Accent */}
                <div className="absolute inset-0 border border-amber-500/20 rounded-3xl" />
                
                {/* Subtle Corner Details */}
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-amber-500/40" 
                     style={{ borderRadius: '1.5rem 0 0 0' }} />
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 - Content Card (Top Layer, Slightly Rotated) */}
          <motion.div
            className="relative lg:absolute lg:right-0 lg:top-16 lg:w-[55%] z-20 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 80, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative group"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-amber-500/20 shadow-2xl p-10 lg:p-14">
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-600/5 to-transparent rounded-bl-full" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                  </div>
                  
                  <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                    Founded in 2022, Flow India Projects brings together professional engineers 
                    dedicated to delivering world-class MEP solutions.
                  </p>
                  
                  <p className="text-lg text-gray-400 leading-relaxed mb-10">
                    We combine technical mastery with innovative approaches to create sustainable, 
                    efficient infrastructure systems across climate control, electrical, plumbing, and fire protection.
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-5 mb-10">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-amber-500 rounded-full"
                          whileHover={{ scale: 2 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-gray-300 text-base group-hover/item:text-white transition-colors">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.a
                    href="/AboutUs"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 text-base font-semibold rounded-xl shadow-lg shadow-amber-600/20 group/btn"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More About Us
                    <svg 
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Spacer for mobile to prevent overlap */}
          <div className="h-[500px] lg:h-[650px]"></div>
        </div>
      </div>
    </section>
  );
}