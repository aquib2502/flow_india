'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Award } from 'lucide-react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const AboutUs = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const qualityPoints = [
    'Meeting customer requirements through continuous improvement',
    'Sustaining organizational excellence through visionary leadership',
    'Adherence to all contractual obligations and industry standards',
    'Compliance with statutory regulations and codes of practice',
    'Maintaining a clean environment and safe workplace',
    'High performance through training and resource allocation',
    'Continual improvement in working methods'
  ];

  const sectors = [
    { label: 'Commercial Buildings', focus: 'Retail & Office Spaces' },
    { label: 'Industrial Facilities', focus: 'Manufacturing Units' },
    { label: 'Government Projects', focus: 'Public Infrastructure' },
    { label: 'Hospitality Sector', focus: 'Hotels & Resorts' }
  ];

  return (
  <>


      {/* Hero Section */}
      <section className="relative min-h-dvh flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-slate-950">
        <motion.div 
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-20 end-0 size-96 sm:size-[600px] bg-amber-600/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className="absolute bottom-0 start-0 size-80 sm:size-[500px] bg-slate-800/50 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 0.95, 1],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-start">
            <motion.div 
              className="inline-block px-4 py-2 border border-amber-600/30 text-amber-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8 sm:mb-12 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Established 2022
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-10 text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Redefining
              <br />
              <span className="text-amber-600">Engineering Standards</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto lg:ms-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premier provider of engineering solutions and specialist in project management, 
              delivering excellence across Electro-Mechanical systems since 2022.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:sticky lg:top-32">
                <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-6 sm:mb-8">
                  About Company
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.05] text-slate-900 mb-6 sm:mb-10 tracking-tight">
                  Engineering Solutions Built on Excellence
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-slate-900"></div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700">
                FLOW INDIA PROJECT is a premier provider of engineering solutions and a specialist in 
                project management. Established in 2022, the company offers expertise primarily in 
                Electro-Mechanical activities.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700">
                FLOW INDIA PROJECT manages projects across various sectors, including HVAC, plumbing 
                and drainage, fire fighting and protection, as well as electrical works, including low 
                voltage systems.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700">
                As a leading Mechanical and Electrical Engineering Contractor, we have successfully 
                completed numerous significant projects across commercial buildings, industrial buildings, 
                residential buildings, educational institutions, and various government organizations.
              </p>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-8 sm:pt-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
              >
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group border border-slate-200 p-6 sm:p-8 transition-all duration-500 hover:border-slate-900 hover:shadow-lg"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {sector.label}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500">{sector.focus}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-slate-50 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 end-0 size-64 sm:size-96 bg-amber-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-4 sm:mb-6">
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Message from Our CEO
            </h2>
          </motion.div>

          <motion.div 
            className="bg-white border border-slate-200 p-6 sm:p-10 lg:p-16 shadow-sm relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-0 start-0 w-1 sm:w-2 h-full bg-slate-900"></div>
            
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 lg:gap-12 items-start">
              <div className="flex flex-col items-center md:items-start shrink-0 w-full md:w-auto">
                <div className="size-24 sm:size-32 bg-slate-900 flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  ER
                </div>
                <div className="text-center md:text-start">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">
                    Engineer Mohd Rashid
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-5 sm:space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700">
                <p>
                  At FLOW INDIA PROJECT, we are committed to providing top-tier engineering solutions 
                  and project management since our founding in 2022. Our expertise spans across HVAC, 
                  plumbing, fire protection, and electrical systems, with a track record of successful projects.
                </p>
                <p>
                  We are dedicated to excellence and innovation, ensuring that every project reflects our 
                  commitment to quality.
                </p>
                <p className="text-slate-900 font-semibold">
                  Thank you for your trust in FLOW INDIA PROJECT.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-slate-900 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-0 start-1/4 size-64 sm:size-96 bg-amber-600/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className="absolute bottom-0 end-1/4 size-64 sm:size-96 bg-slate-700/30 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-4 sm:mb-6">
              Our Direction
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Vision & Mission
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Vision */}
            <motion.div 
              variants={fadeInUp}
              className="group border border-white/10 p-8 sm:p-10 lg:p-14 backdrop-blur-sm bg-white/5 transition-all duration-500 hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="size-10 sm:size-12 border-2 border-amber-600 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300 shrink-0">
                  <Target className="size-5 sm:size-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300">
                We strive to become the foremost global company recognized for excellence, quality, 
                performance, and reliability in Electro-Mechanical services.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              variants={fadeInUp}
              className="group border border-white/10 p-8 sm:p-10 lg:p-14 backdrop-blur-sm bg-white/5 transition-all duration-500 hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="size-10 sm:size-12 border-2 border-amber-600 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300 shrink-0">
                  <TrendingUp className="size-5 sm:size-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300">
                <p>
                  Our goal is to emerge as a worldwide leader in MEP projects and to be the top choice 
                  for our clients by consistently delivering top-notch, value-added projects punctually.
                </p>
                <p>
                  We are dedicated to ongoing innovation, growth, and the integration of cutting-edge 
                  technologies in our processes and materials to boost efficiency and cost-effectiveness.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-6 sm:mb-8">
                Quality Assurance
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.05] text-slate-900 mb-6 sm:mb-10 tracking-tight">
                Commitment to Quality Excellence
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-slate-900 mb-8 sm:mb-10"></div>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 mb-8 sm:mb-10">
                FIP Enterprises is dedicated to meeting customer requirements through the continuous 
                improvement of its Quality Management System. We are committed to sustaining organizational 
                excellence through visionary leadership and innovative efforts.
              </p>
              <motion.div 
                className="inline-flex items-center gap-3 border-2 border-slate-900 px-5 sm:px-6 py-3 sm:py-4 font-bold text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award className="size-4 sm:size-5" />
                <span className="text-xs sm:text-sm tracking-wider uppercase">ISO Certified</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="border border-slate-200 p-8 sm:p-10 lg:p-12 bg-slate-50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-slate-200">
                <Shield className="size-6 sm:size-7 text-slate-900 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Quality Policy</h3>
              </div>
              <motion.div 
                className="space-y-4 sm:space-y-5"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
              >
                {qualityPoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-start gap-4 group"
                  >
                    <div className="size-1.5 bg-slate-900 mt-2.5 shrink-0 group-hover:bg-amber-600 transition-colors duration-300"></div>
                    <span className="text-sm sm:text-base leading-relaxed text-slate-700">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-slate-950 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 sm:size-[800px] bg-amber-600/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '25+', label: 'Happy Clients' },
              { value: '3+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="text-center border-t-2 border-amber-600 pt-6 sm:pt-8"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-slate-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
          
  </>  
);
};

export default AboutUs;