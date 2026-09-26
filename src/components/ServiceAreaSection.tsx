import React from 'react';
import { MapPin, Check, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import serviceAreaSkyline from '../assets/images/toronto_skyline_panorama_1789333115711.webp';

export const ServiceAreaSection: React.FC = () => {
  const citiesCol1 = ['Mississauga', 'Toronto', 'Brampton', 'Etobicoke'];
  const citiesCol2 = ['Oakville', 'Vaughan', 'Markham', 'and more...'];

  return (
    <section id="service-area" className="relative py-20 sm:py-24 bg-[#05111E] overflow-hidden">
      {/* Background panoramic skyline image - fully visible and bright */}
      <div className="absolute inset-0 z-0">
        <img
          src={serviceAreaSkyline}
          alt="Toronto and Mississauga Greater Area Skyline"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
        />
        {/* Soft, targeted gradient only behind text for legibility while keeping the skyline vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071422]/80 via-[#071422]/35 via-35% to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05111E] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Service Area Headline & Cities List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 text-white space-y-4 bg-[#071422]/50 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-2 text-sky-400 text-xs font-extrabold uppercase tracking-widest">
              <MapPin className="w-4 h-4 fill-sky-400 text-sky-400" />
              <span>SERVICE AREA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Mississauga & All GTA
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium drop-shadow-xs">
              We proudly serve Mississauga and all surrounding areas across the Greater Toronto Area.
            </p>

            {/* Two-column cities checklist */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-3 max-w-md">
              <div className="space-y-2.5">
                {citiesCol1.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-xs sm:text-sm text-white font-semibold drop-shadow-xs">
                    <Check className="w-4 h-4 text-sky-400 stroke-[3]" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2.5">
                {citiesCol2.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-xs sm:text-sm text-white font-semibold drop-shadow-xs">
                    <Check className="w-4 h-4 text-sky-400 stroke-[3]" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Emergency Service Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#07192F]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5 fill-sky-400 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Need Emergency Service?
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We're available 24/7 for urgent repairs and emergency calls.
              </p>

              <motion.a
                href="tel:4166763297"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0077B6] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg shadow-sky-500/25 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white text-white" />
                <span>Call Now (416) 676-3297</span>
              </motion.a>

              <div className="pt-2 border-t border-white/10 flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Local Headquarters</span>
                  <a
                    href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-300 transition-colors font-medium"
                  >
                    510 Ravenstone Ct, Mississauga, ON L5R 3J4, Canada
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
