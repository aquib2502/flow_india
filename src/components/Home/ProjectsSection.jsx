import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const mockData = {
  projects: [
    {
      title: "Corporate Office Complex",
      description: "Complete MEP infrastructure for a 12-story commercial building with advanced climate control systems.",
      category: "Commercial",
      image: "corporate-office.jpg"
    },
    {
      title: "Luxury Residential Tower",
      description: "Integrated electrical and plumbing solutions for high-end residential development.",
      category: "Residential",
      image: "project2.jpg"
    },
    {
      title: "Healthcare Facility",
      description: "Critical MEP systems for a modern healthcare center with backup power infrastructure.",
      category: "Healthcare",
      image: "project3.jpg"
    },
    {
      title: "Industrial Warehouse",
      description: "Heavy-duty electrical distribution and ventilation for large-scale industrial operations.",
      category: "Industrial",
      image: "project4.jpg"
    },
    {
      title: "Educational Campus",
      description: "Comprehensive HVAC and fire protection systems for educational institutions.",
      category: "Education",
      image: "project5.jpg"
    },
    {
      title: "Retail Plaza",
      description: "Energy-efficient MEP design for multi-tenant retail and entertainment complex.",
      category: "Retail",
      image: "project6.jpg"
    }
  ]
};

const ProjectsSection = () => {
  const router = useRouter();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block text-xs font-bold tracking-[3px] uppercase text-amber-600 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PROJECTS
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 tracking-tight mb-4">
            Infrastructure that{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Inspires
              </span>
              <motion.span 
                className="absolute bottom-2 left-0 right-0 h-3 bg-amber-500/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          
          <motion.p
            className="text-base text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering excellence across diverse sectors with precision engineering
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mockData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white overflow-hidden transition-all duration-500 border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-2xl"
              variants={fadeInUp}
              whileHover={{ y: -12 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-[320px] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 overflow-hidden">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <motion.div
                    className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 text-xs font-bold tracking-wider uppercase shadow-lg border border-slate-200/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  {project.description}
                </p>

                {/* View Details Link */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-amber-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Bottom Border Accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            onClick={() => router.push('/projects')}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-base rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shine Effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            <span className="relative z-10">Explore All Projects</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;