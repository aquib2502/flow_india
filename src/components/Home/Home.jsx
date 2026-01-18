'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PremiumServicesSection from './ServicesSection';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

// Mock Data
const mockData = {
  stats: [
    { value: '50+', label: 'Projects Completed' },
    { value: '25+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ],
  features: [
    { icon: '✓', text: 'Licensed Engineers' },
    { icon: '✓', text: 'ISO Certified' },
    { icon: '✓', text: '24/7 Support' },
    { icon: '✓', text: 'Quality Assured' }
  ],
  services: [
    {
      icon: '❄️',
      title: 'HVAC Systems',
      description: 'Complete climate control solutions for optimal comfort and energy efficiency.',
      points: [
        'Central Air Conditioning',
        'Ventilation Design',
        'Temperature Control',
        'Energy Management'
      ]
    },
    {
      icon: '⚡',
      title: 'Electrical Systems',
      description: 'Comprehensive electrical engineering and installation services.',
      points: [
        'Power Distribution',
        'Lighting Design',
        'Emergency Systems',
        'Load Calculations'
      ]
    },
    {
      icon: '💧',
      title: 'Plumbing Infrastructure',
      description: 'Advanced plumbing solutions for residential and commercial properties.',
      points: [
        'Water Supply Systems',
        'Drainage Solutions',
        'Fixture Installation',
        'Pipe Network Design'
      ]
    },
    {
      icon: '🔥',
      title: 'Fire Protection',
      description: 'State-of-the-art fire safety and protection systems.',
      points: [
        'Sprinkler Systems',
        'Fire Alarms',
        'Smoke Detection',
        'Emergency Response'
      ]
    }
  ],
  projects: [
    {
      title: 'Commercial Complex',
      category: 'COMMERCIAL',
      description: 'Complete MEP solution for 50,000 sq.ft commercial space'
    },
    {
      title: 'Industrial Facility',
      category: 'INDUSTRIAL',
      description: 'Advanced HVAC and electrical systems for manufacturing unit'
    },
    {
      title: 'Government Building',
      category: 'GOVERNMENT',
      description: 'Comprehensive infrastructure for public sector project'
    }
  ],
  trustFactors: [
    {
      title: 'Expert Engineering Team',
      description: 'Our certified engineers bring decades of combined experience in MEP design and implementation.'
    },
    {
      title: 'Quality First Approach',
      description: 'We use premium materials and follow international standards to ensure long-lasting solutions.'
    },
    {
      title: 'Timely Project Delivery',
      description: 'Committed to meeting deadlines without compromising on quality or safety standards.'
    },
    {
      title: 'Comprehensive Support',
      description: 'From design to maintenance, we provide end-to-end support for all your MEP needs.'
    }
  ]
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-amber-50 to-white text-slate-900 overflow-x-hidden antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 lg:px-10 pt-40 pb-20 bg-gradient-to-b from-amber-50 via-white to-slate-50 relative overflow-hidden">
        {/* Floating Background */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50 bg-[radial-gradient(circle,rgba(251,191,36,0.15)_0%,transparent_70%)]"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="max-w-4xl text-center z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-5 py-2 bg-slate-900 text-white text-xs font-semibold tracking-[1.5px] uppercase mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Climate Control & MEP Experts
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-slate-900 tracking-tight">
            Engineering Excellence
            <br />
            <span className="bg-gradient-to-r from-slate-700 via-amber-600 to-amber-700 bg-clip-text text-transparent">
              For Modern Infrastructure
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto mb-10">
            Delivering precision-engineered HVAC, electrical, plumbing, and fire protection solutions
            across commercial, industrial, and government sectors.
          </p>
          <motion.div
            className="flex gap-4 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              className="bg-slate-900 text-white border-none px-8 py-6 text-sm font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 h-auto rounded-sm shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
              <ChevronRight size={18} />
            </Button>
            <Button
              className="text-slate-900 border-2 border-slate-900 bg-transparent px-8 py-6 text-sm font-semibold transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-xl h-auto rounded-sm"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-20 max-w-6xl w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {mockData.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-bold tracking-[2px] uppercase text-amber-600 mb-4">
                ABOUT US
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-6 tracking-tight">
                Precision Engineering,
                <br />
                Delivered with Confidence
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Founded in 2022, Flow India Projects brings together a team of professional engineers
                dedicated to delivering world-class MEP solutions. We combine technical mastery with
                innovative approaches to create sustainable, efficient infrastructure systems.
              </p>
              <p className="text-base leading-relaxed text-slate-600 mb-10">
                Our expertise spans climate control, electrical systems, plumbing infrastructure, and
                fire protection—ensuring every project meets the highest standards of safety, efficiency,
                and reliability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-sm font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-700 text-white flex items-center justify-center rounded-full text-xs shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="/AboutUs"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
            <motion.div
              className="relative h-[400px] lg:h-[600px] order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <PremiumServicesSection />

      {/* Projects Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold tracking-[2px] uppercase text-amber-600 mb-4">
              PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 tracking-tight">
              Infrastructure that Inspires
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mockData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-200 shadow-sm"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="w-full h-[280px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/70 flex items-end p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-lg">
                      {project.category}
                    </div>
                  </motion.div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl lg:text-[22px] font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold tracking-[2px] uppercase text-amber-500 mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-12 lg:mb-16 tracking-tight max-w-3xl">
              Built on Trust, Driven by Excellence
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12 lg:mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mockData.trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-4 opacity-80">
                  {index + 1}
                </div>
                <h3 className="text-xl lg:text-[22px] font-bold mb-3">{factor.title}</h3>
                <p className="text-sm lg:text-[15px] leading-relaxed text-white/70">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-bold tracking-[2px] uppercase text-amber-600 mb-4">
                CONTACT US
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-6 tracking-tight">
                Let's Build Something Exceptional
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-12">
                Ready to discuss your next project? Our team of engineering experts is here to
                turn your vision into reality.
              </p>
              <div className="flex flex-col gap-8">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Call Us
                    </div>
                    <a
                      href="tel:+918077382865"
                      className="text-base font-semibold text-slate-900 no-underline transition-colors duration-200 hover:text-amber-600"
                    >
                      +91 80773 82865
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email Us
                    </div>
                    <a
                      href="mailto:flowrashid38@gmail.com"
                      className="text-base font-semibold text-slate-900 no-underline transition-colors duration-200 hover:text-amber-600 break-all"
                    >
                      flowrashid38@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Visit Us
                    </div>
                    <div className="text-base font-semibold text-slate-900">
                      Jasola Vihar, New Delhi
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 lg:p-12 bg-white border border-slate-200 shadow-xl rounded-sm">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-900">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="p-3 px-4 border border-slate-200 rounded-sm text-sm transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-900">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="p-3 px-4 border border-slate-200 rounded-sm text-sm transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-900">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="p-3 px-4 border border-slate-200 rounded-sm text-sm transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-900">
                      Project Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="p-3 px-4 border border-slate-200 rounded-sm text-sm transition-colors duration-200 bg-white resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleSubmit}
                      className="w-full bg-slate-900 text-white border-none px-8 py-6 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 rounded-sm h-auto shadow-lg"
                    >
                      Send Inquiry
                      <ChevronRight size={18} />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Home;