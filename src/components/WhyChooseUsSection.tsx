import React from 'react';
import { ShieldCheck, Zap, Star, MapPin, Award, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES } from '../assets/images';

export const WhyChooseUsSection: React.FC = () => {
  const trustBar = [
    { title: 'Licensed & Insured', subtitle: 'Full Liability Coverage', icon: ShieldCheck },
    { title: 'TSSA Registered Contractor', subtitle: 'Ontario Certified', icon: Award },
    { title: '8 Years Experience', subtitle: 'Proven Field Track Record', icon: Star },
    { title: 'Fast & Reliable Service', subtitle: 'Same-Day Response', icon: Clock },
    { title: '100% Customer Satisfaction', subtitle: 'Workmanship Guaranteed', icon: ThumbsUp },
  ];

  const points = [
    {
      id: 'tssa-certified',
      title: 'TSSA Registered Contractor',
      description: 'Fully licensed and strictly certified to Ontario safety and technical standards.',
      icon: ShieldCheck,
    },
    {
      id: 'fast-service',
      title: '24/7 Emergency Dispatch',
      description: 'Quick response times across Mississauga and GTA when equipment fails.',
      icon: Zap,
    },
    {
      id: 'experience-pricing',
      title: '8 Years Field Experience',
      description: 'Proven track record in residential HVAC and demanding commercial kitchen setups.',
      icon: Star,
    },
    {
      id: 'gta-coverage',
      title: 'Mississauga & All GTA',
      description: 'Dedicated fleet equipped with genuine parts for fast, same-day resolution.',
      icon: MapPin,
    },
  ];

  return (
    <section id="why-us" className="bg-white border-b border-slate-100 overflow-hidden">
      {/* 5-Item Trust Banner Bar */}
      <div className="bg-[#05111E] border-y border-slate-800 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {trustBar.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & 2x2 Features Grid */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] block mb-2">
                THE AWCOMFORT ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07192F] tracking-tight">
                Why Choose AWcomfort?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="space-y-3 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center group-hover:bg-[#07192F] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Commercial Kitchen & Oven Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group aspect-[4/3]">
              <img
                src={HVAC_IMAGES.serviceAppliances}
                alt="Commercial kitchen appliances and equipment installed by AWcomfort"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#06121E]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill on Kitchen photo */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>TSSA Registered • Commercial Kitchens</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
