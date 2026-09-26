import React from 'react';
import { ArrowRight, Award, ShieldCheck, MapPin, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES } from '../assets/images';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className="py-20 bg-[#07192F] text-white border-b border-slate-800 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: AWcomfort Service Van with Script */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5] bg-slate-950">
              <img
                src={HVAC_IMAGES.awcomfortServiceVan}
                alt="AWcomfort commercial service fleet van in Mississauga and GTA"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192F]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Cursive overlay script at bottom of van */}
              <div className="absolute bottom-6 left-6 right-6 select-none pointer-events-none">
                <span className="text-3xl sm:text-4xl font-script text-sky-300 drop-shadow-lg tracking-wide block">
                  Professional Reliable Local
                </span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest block mt-0.5">
                  Ready To Deploy Across Mississauga & GTA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Heading, Description, 3 Badges, and Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
                ABOUT AWCOMFORT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Your Local HVAC & Commercial Experts
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              AWcomfort is a professional HVAC and commercial services company serving Mississauga and the Greater Toronto Area (GTA). With 8 years of experience and a TSSA registered contractor, we deliver high-quality service, safety, and customer satisfaction — every time.
            </p>

            {/* 3 Pills in Column */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-semibold text-white">
                <Award className="w-4 h-4 text-sky-400 shrink-0" />
                <span>8 Years Experience</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>TSSA Registered Contractor</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-semibold text-white">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mississauga & All GTA</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <motion.button
                id="about-learn-more-button"
                type="button"
                onClick={onLearnMoreClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-sky-500/25 transition-colors cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: 3-Photo Bento Collage */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-4 grid grid-cols-2 gap-3.5"
          >
            {/* Top Left: HVAC Rooftop Technician */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square shadow-xl bg-slate-950 group">
              <img
                src={HVAC_IMAGES.aboutTechHvac}
                alt="HVAC technician servicing rooftop condenser unit"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-white uppercase tracking-wider">
                HVAC Specialists
              </span>
            </div>

            {/* Top Right: Commercial Pizza Chef & Oven */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square shadow-xl bg-slate-950 group">
              <img
                src={HVAC_IMAGES.servicePizzaOven}
                alt="Commercial pizza oven installation and repairs"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-white uppercase tracking-wider">
                Pizza Ovens
              </span>
            </div>

            {/* Bottom Span: Commercial Kitchen with Script "Built on Quality & Trust" */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] shadow-xl bg-slate-950 group">
              <img
                src={HVAC_IMAGES.aboutKitchenTrust}
                alt="Stainless steel commercial kitchen equipment and ductwork"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-script text-sky-200 drop-shadow-md">
                  Built on Quality & Trust
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
                  TSSA Certified
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
