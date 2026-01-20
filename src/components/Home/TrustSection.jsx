import React, { useState } from 'react';
import { Award, Shield, Zap, Heart } from 'lucide-react';

const trustFactors = [
  {
    icon: Award,
    title: "Proven Excellence",
    description: "17+ successful projects across multiple sectors demonstrating our commitment to quality and reliability."
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Clear communication and honest timelines. We believe in building relationships through trust and integrity."
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Cutting-edge engineering combined with practical expertise to deliver results that exceed expectations."
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our priority. We go the extra mile to ensure every project reflects our dedication."
  }
];

const WhyChooseUsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251, 191, 36) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-xs font-bold tracking-[3px] uppercase text-amber-600">
              Why Choose Us
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-4 tracking-tight max-w-3xl mx-auto">
            Built on Trust,
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Driven by Excellence
            </span>
          </h2>
        </div>

        {/* Trust Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card */}
                <div className={`
                  relative h-full p-8 rounded-2xl border-2 transition-all duration-300
                  ${hoveredIndex === index 
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 shadow-xl -translate-y-2' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                  }
                `}>
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                    ${hoveredIndex === index 
                      ? 'bg-gradient-to-br from-amber-500 to-orange-500 scale-110' 
                      : 'bg-amber-100'
                    }
                  `}>
                    <Icon className={`w-7 h-7 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-white' : 'text-amber-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900">
                    {factor.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-slate-600">
                    {factor.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`
                    absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-b-2xl transition-all duration-300
                    ${hoveredIndex === index ? 'w-full' : 'w-0'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We don't just complete projects – we build lasting partnerships based on mutual respect, 
            transparency, and a shared vision for success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;