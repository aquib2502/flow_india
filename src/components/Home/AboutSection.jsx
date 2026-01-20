import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  { text: "ISO Certified Excellence" },
  { text: "24/7 Project Support" },
  { text: "Sustainable Solutions" },
  { text: "Expert Engineering Team" }
];

export default function FlowIndiaAboutSection() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-slate-950"></div>
      
      {/* Subtle Gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-950/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-orange-950/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Simple Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-xs font-bold tracking-[4px] uppercase text-amber-500 mb-3 sm:mb-4">
            ABOUT US
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4">
            Precision Engineering,{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Delivered with Confidence
            </span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Desktop: Overlapping Cards | Mobile: Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 lg:relative">
            
            {/* Image Card */}
            <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[55%] z-10 order-1">
              <div className="relative group">
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-64 sm:h-80 lg:h-[500px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl transform lg:-rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="about_hero.jpg"
                    alt="Flow India Projects Engineering Excellence"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-950/20 to-transparent" />
                  
                  {/* Border Accent */}
                  <div className="absolute inset-0 border border-amber-500/20 rounded-2xl sm:rounded-3xl" />
                  
                  {/* Corner Detail */}
                  <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-amber-500/40 rounded-tl-2xl sm:rounded-tl-3xl" />
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div className="lg:absolute lg:right-0 lg:top-12 xl:top-16 lg:w-[55%] z-20 order-2">
              <div className="relative group">
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl border border-amber-500/20 shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-14 transform lg:rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-amber-600/5 to-transparent rounded-bl-full" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                    </div>
                    
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8 font-light">
                      Founded in 2022, Flow India Projects brings together professional engineers 
                      dedicated to delivering world-class MEP solutions.
                    </p>
                    
                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10">
                      We combine technical mastery with innovative approaches to create sustainable, 
                      efficient infrastructure systems across climate control, electrical, plumbing, and fire protection.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 sm:gap-4 group/item cursor-pointer"
                          onMouseEnter={() => setHoveredFeature(index)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div 
                            className={`w-2 h-2 bg-amber-500 rounded-full transition-transform duration-200 ${
                              hoveredFeature === index ? 'scale-150' : 'scale-100'
                            }`}
                          />
                          <span className={`text-sm sm:text-base transition-colors duration-200 ${
                            hoveredFeature === index ? 'text-white' : 'text-gray-300'
                          }`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="/AboutUs"
                      className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 hover:scale-105 transition-all duration-300 group/btn"
                    >
                      Learn More About Us
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Spacer - Only on Desktop for Overlap */}
          <div className="hidden lg:block lg:h-[550px] xl:h-[650px]"></div>
        </div>
      </div>
    </section>
  );
}