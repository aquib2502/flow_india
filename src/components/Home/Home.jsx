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
import EnhancedAboutSection from './AboutSection';
import FlowIndiaAboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import HeroSection from './HeroSection';
import CTASection from './ContactSection';
import WhyChooseUsSection from './TrustSection';

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

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <FlowIndiaAboutSection />

      {/* Services Section */}
      <PremiumServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Trust Section */}
      <WhyChooseUsSection />

      {/* Contact Section */}
      {/* <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
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
                      href="mailto:info@flowindiaprojects.com"
                      className="text-base font-semibold text-slate-900 no-underline transition-colors duration-200 hover:text-amber-600 break-all"
                    >
                      info@flowindiaprojects.com
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
      </section> */}
      <CTASection />
    </div>
  );
};

export default Home;