import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Building2, Sparkles, ChevronRight } from 'lucide-react';

const projectsData = [
  { name: "Renne Cosmetics", location: "Lulu Mall, Lucknow", category: "Commercial", color: "from-blue-500 to-cyan-500" },
  { name: "EXL Service", location: "Noida", category: "Commercial", color: "from-indigo-500 to-blue-500" },
  { name: "HCL Tech", location: "Gurugram", category: "Commercial", color: "from-violet-500 to-purple-500" },
  { name: "Genpect", location: "Noida", category: "Industrial", color: "from-slate-600 to-slate-800" },
  { name: "Hotel India Awadh", location: "Lucknow", category: "Hospitality", color: "from-amber-500 to-orange-500" },
  { name: "Masala Darbar", location: "Lucknow", category: "Hospitality", color: "from-rose-500 to-pink-500" },
  { name: "The Radiant Resort", location: "Gorakhpur", category: "Hospitality", color: "from-emerald-500 to-teal-500" },
  { name: "Forest Club", location: "Gorakhpur", category: "Hospitality", color: "from-green-500 to-emerald-500" },
  { name: "Pind Balluchi", location: "Gorakhpur", category: "Hospitality", color: "from-red-500 to-orange-500" },
  { name: "Royal Residency", location: "Gorakhpur", category: "Hospitality", color: "from-purple-500 to-pink-500" },
  { name: "Military Engineer Service", location: "Gorakhpur", category: "Government", color: "from-slate-700 to-slate-900" },
  { name: "Sandooz", location: "Amritsar", category: "Hospitality", color: "from-amber-600 to-yellow-500" },
  { name: "Sandooz", location: "Janakpuri, Delhi", category: "Hospitality", color: "from-orange-500 to-amber-500" },
  { name: "Sandooz Base Kitchen", location: "Shakurpur, Delhi", category: "Hospitality", color: "from-amber-500 to-orange-600" },
  { name: "Neoba", location: "Pacific Mall, Delhi", category: "Commercial", color: "from-cyan-500 to-blue-500" },
  { name: "Sandooz", location: "Gurugram", category: "Hospitality", color: "from-yellow-500 to-amber-600" },
  { name: "Private Hospital", location: "Gurugram", category: "Healthcare", color: "from-teal-500 to-cyan-500" }
];

const ProjectsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsInView(inView);
      
      if (inView) {
        const relativeScroll = window.innerHeight - rect.top;
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create infinite loop arrays
  const row1Data = [...projectsData.slice(0, 6), ...projectsData.slice(0, 6)];
  const row2Data = [...projectsData.slice(6, 12), ...projectsData.slice(6, 12)];
  const row3Data = [...projectsData.slice(12), ...projectsData.slice(0, 5), ...projectsData.slice(12), ...projectsData.slice(0, 5)];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <span className="text-xs font-bold tracking-[4px] uppercase text-slate-800">
              Our Portfolio
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 leading-tight">
            Delivering Excellence
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Across India
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-600/30 via-amber-500/80 to-amber-600/30 rounded-full" />
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across multiple sectors
          </p>
        </div>
      </div>

      {/* Scrolling Grid */}
      <div className="relative space-y-4 sm:space-y-6 mb-12 sm:mb-16">
        {/* Row 1 - Moves Right on scroll */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 sm:gap-6 will-change-transform"
            style={{
              transform: isInView ? `translateX(${-scrollY * (isMobile ? 0.15 : 0.3)}px)` : 'translateX(0px)',
              transition: 'transform 0.1s linear'
            }}
          >
            {row1Data.map((project, index) => (
              <ProjectCard key={`row1-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Left on scroll (opposite direction) */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 sm:gap-6 will-change-transform"
            style={{
              transform: isInView 
                ? `translateX(calc(${isMobile ? '-200px' : '-400px'} + ${scrollY * (isMobile ? 0.15 : 0.3)}px))` 
                : `translateX(${isMobile ? '-200px' : '-400px'})`,
              transition: 'transform 0.1s linear'
            }}
          >
            {row2Data.map((project, index) => (
              <ProjectCard key={`row2-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Row 3 - Moves Right on scroll (same as row 1) */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 sm:gap-6 will-change-transform"
            style={{
              transform: isInView ? `translateX(${-scrollY * (isMobile ? 0.15 : 0.3)}px)` : 'translateX(0px)',
              transition: 'transform 0.1s linear'
            }}
          >
            {row3Data.map((project, index) => (
              <ProjectCard key={`row3-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Explore All Projects</span>
            <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96">
      <div className="group relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative h-full p-4 sm:p-5 flex flex-col justify-between z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-2 sm:mb-3 border border-white/30">
              <Building2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <div className="mb-2">
              <div className="text-3xl sm:text-4xl font-bold text-white/20 mb-1">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:scale-105 transition-transform duration-300">
                {project.name}
              </h3>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
              <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white/80 flex-shrink-0 mt-0.5" />
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                {project.location}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-r-2 border-white/30 rounded-br-xl" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </div>
  );
};

export default ProjectsSection;