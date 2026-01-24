"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Wind, Zap, Droplets, Flame, Shield, Wifi, Video, Lock,
  Settings, ArrowRight, CheckCircle2, Sparkles, ChevronRight,
  Phone, Mail, MapPin, Layers
} from 'lucide-react';

const servicesData = {
  mechanical: {
    title: "Mechanical Division",
    subtitle: "Climate Control & Infrastructure",
    icon: Wind,
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-50 to-cyan-50",
    services: [
      { icon: Wind, name: "HVAC Systems", desc: "Complete climate control with central air conditioning" },
      { icon: Droplets, name: "Plumbing & Drainage", desc: "Advanced water supply and drainage solutions" },
      { icon: Flame, name: "Fire Fighting Systems", desc: "State-of-the-art fire protection and safety" },
      { icon: Wind, name: "Car Park Ventilation", desc: "Mechanical ventilation with CO monitoring" },
      { icon: Settings, name: "Kitchen Hood & Exhaust", desc: "Commercial kitchen ventilation systems" },
      { icon: Shield, name: "Smoke Exhaust System", desc: "Emergency smoke extraction systems" },
    ]
  },
  electrical: {
    title: "Electrical Division",
    subtitle: "Power & Technology Integration",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-50 to-orange-50",
    services: [
      { icon: Zap, name: "Power Distribution", desc: "Medium & low voltage switchgear and cabling" },
      { icon: Settings, name: "Building Management", desc: "Intelligent BMS for facility automation" },
      { icon: Video, name: "CCTV & Surveillance", desc: "Advanced closed circuit television systems" },
      { icon: Wifi, name: "Structured Cabling", desc: "Voice, data, and network infrastructure" },
      { icon: Lock, name: "Access Control", desc: "Secure entry management systems" },
      { icon: Settings, name: "Testing & Commissioning", desc: "Complete system validation and setup" },
    ]
  }
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('mechanical');
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const currentService = servicesData[activeTab];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 opacity-10">
            <div style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251, 191, 36) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }} className="absolute inset-0" />
          </div>

          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8">
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold tracking-[3px] uppercase text-white/90">
                Premium Engineering
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
              Transforming Spaces
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Expert MEP solutions that combine cutting-edge technology with 
              proven engineering excellence
            </p>
          </motion.div>
        </motion.div>

       
      </section>

      {/* Services Section - Alternating Layout */}
      <section ref={servicesRef} className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold tracking-[3px] uppercase text-amber-600">
                What We Offer
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Specialized Engineering
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Divisions
              </span>
            </h2>
          </motion.div>

          {/* Mechanical Division */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full mb-6">
                  <Wind className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-blue-600">
                    {servicesData.mechanical.title}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {servicesData.mechanical.subtitle}
                </h3>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our mechanical division delivers comprehensive climate control and infrastructure 
                  solutions with precision engineering and innovative technologies.
                </p>

                {/* Services List */}
                <div className="space-y-4">
                  {servicesData.mechanical.services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={i}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-sm text-slate-600">{service.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Element */}
              <motion.div 
                className="relative h-[600px] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                  }} className="absolute inset-0" />
                </div>

                {/* Animated Circles */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white/30 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-white/20 rounded-full"
                  animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Stats Cards */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                  <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
                    {[
                      { label: "Projects", value: "50+" },
                      { label: "Clients", value: "25+" },
                      { label: "Years", value: "3+" },
                      { label: "Success", value: "100%" }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 text-center"
                      >
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Feature Icons */}
                  <div className="grid grid-cols-4 gap-3 w-full max-w-md">
                    {[Wind, Droplets, Flame, Shield].map((Icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-3 flex items-center justify-center aspect-square"
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
                    <h4 className="text-white font-bold text-xl mb-2">Mechanical Excellence</h4>
                    <p className="text-white/80 text-sm">
                      Precision-engineered climate control systems for optimal performance
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Electrical Division - Reversed Layout */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Visual Element - First on Desktop */}
              <motion.div 
                className="relative h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                  }} className="absolute inset-0" />
                </div>

                {/* Animated Circles */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-white/30 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-white/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 0.9, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Central Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                  {/* Key Features */}
                  <div className="space-y-4 mb-8 w-full max-w-md">
                    {[
                      { icon: Zap, text: "Power Distribution Systems" },
                      { icon: Video, text: "Advanced CCTV Solutions" },
                      { icon: Wifi, text: "Network Infrastructure" },
                      { icon: Lock, text: "Access Control Systems" }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex items-center gap-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4"
                        >
                          <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <span className="text-white font-medium text-sm">{item.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Certification Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-white" />
                      <span className="text-white font-bold text-sm">ISO Certified Excellence</span>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
                    <h4 className="text-white font-bold text-xl mb-2">Electrical Innovation</h4>
                    <p className="text-white/80 text-sm">
                      Advanced power distribution and technology integration
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full mb-6">
                  <Zap className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-bold text-amber-600">
                    {servicesData.electrical.title}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {servicesData.electrical.subtitle}
                </h3>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  From power distribution to intelligent building systems, we deliver cutting-edge 
                  electrical solutions that meet international standards.
                </p>

                {/* Services List */}
                <div className="space-y-4">
                  {servicesData.electrical.services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={i}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50/50 transition-all duration-300 cursor-pointer"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-sm text-slate-600">{service.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      {/* <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} className="absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Quality Commitment
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Excellence in every project through rigorous standards and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO Certified", desc: "Adherence to international quality standards", delay: 0 },
              { title: "Expert Team", desc: "Certified engineers with decades of experience", delay: 0.1 },
              { title: "Proven Track Record", desc: "17+ successful projects across sectors", delay: 0.2 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300"
              >
                <CheckCircle2 className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section - Updated Colors */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} className="absolute inset-0" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Something Exceptional?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our expert MEP solutions can transform your project vision into reality
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.03] transition-all duration-300"

              >
                <span>Start Your Project</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* <a
                href="tel:+918077382865"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+91 80773 82865</span>
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;