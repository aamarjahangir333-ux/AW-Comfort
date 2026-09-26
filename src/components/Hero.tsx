import React from 'react';
import { Phone, ArrowRight, Clock, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import heroDaylightHvac from '../assets/images/hero_daylight_hvac.webp';
import heroBrightHvac from '../assets/images/hero_bright_hvac_1789333132812.webp';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[660px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#040D18]"
    >
      {/* Background with City Skyline + Rooftop HVAC Technician - bright & clearly visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source srcSet={heroDaylightHvac} type="image/webp" />
          <img
            src={heroDaylightHvac}
            alt="HVAC technician on commercial rooftop overlooking Toronto and Mississauga skyline in bright daylight"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-[70%_center] lg:object-[65%_center] xl:object-center brightness-110 contrast-105"
          />
        </picture>
        {/* Soft, light gradient focused strictly on the left text area so the image remains bright, vibrant, and completely visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040C16]/80 via-[#040C16]/40 via-35% to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040D18]/90 to-transparent pointer-events-none" />

        {/* Official AW Comfort Logo on Technician's Work Jacket */}
        <div className="hidden lg:flex absolute right-[26%] xl:right-[28%] top-[43%] z-10 flex-col items-center pointer-events-none select-none drop-shadow-xl">
          <div className="flex items-center bg-[#061426]/90 px-3 py-1.5 rounded-lg border border-white/15 shadow-md">
            <img
              src="/aw-comfort-logo.webp"
              alt="AW Comfort"
              width="140"
              height="80"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Top Right: TSSA Registered Contractor Official Badge */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10 lg:top-10 lg:right-16 z-20 flex flex-col items-center select-none">
        <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white p-1 shadow-2xl border-2 border-red-600 flex items-center justify-center">
          {/* Outer circular text effect */}
          <div className="w-full h-full rounded-full border border-red-500/40 flex flex-col items-center justify-center text-center p-1">
            <span className="text-[6px] sm:text-[7px] font-extrabold text-red-700 uppercase tracking-tighter leading-tight">
              TECHNICAL STANDARDS
            </span>
            <div className="my-0.5 px-2 py-0.5 bg-red-600 text-white rounded-xs text-[10px] sm:text-xs font-black tracking-wider">
              T S S A
            </div>
            <span className="text-[6px] sm:text-[7px] font-extrabold text-red-700 uppercase tracking-tighter leading-tight">
              & SAFETY AUTHORITY
            </span>
          </div>
        </div>
        <span className="mt-2 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider text-center drop-shadow-md">
          TSSA REGISTERED<br />CONTRACTOR
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
          
          {/* Subtitle / Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-300 drop-shadow-xs">
              TRUSTED HVAC & COMMERCIAL EXPERTS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
          >
            Comfort for Your Home <br />
            <span className="text-[#0284C7] drop-shadow-xs">& Business</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            From heating and cooling systems to commercial kitchen equipment and gas piping, 
            we deliver reliable, professional service across Mississauga and the GTA.
          </motion.p>

          {/* 4 Feature Badges in single horizontal strip with dark translucent container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2"
          >
            {/* 1. 24/7 Emergency */}
            <div className="flex items-center gap-2.5 bg-black/40 hover:bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-bold text-white">24/7</span>
                <span className="text-[10px] text-slate-300">Emergency Service</span>
              </div>
            </div>

            {/* 2. TSSA Registered */}
            <div className="flex items-center gap-2.5 bg-black/40 hover:bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-bold text-white">TSSA Registered</span>
                <span className="text-[10px] text-slate-300">Contractor</span>
              </div>
            </div>

            {/* 3. 8 Years Experience */}
            <div className="flex items-center gap-2.5 bg-black/40 hover:bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-bold text-white">8 Years</span>
                <span className="text-[10px] text-slate-300">Experience</span>
              </div>
            </div>

            {/* 4. Mississauga & All GTA */}
            <div className="flex items-center gap-2.5 bg-black/40 hover:bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-bold text-white">Mississauga &</span>
                <span className="text-[10px] text-slate-300">All GTA</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            {/* Call Now (416) 676-3297 button */}
            <motion.a
              id="hero-call-now-button"
              href="tel:4166763297"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0077B6] text-white px-7 py-4 rounded-full font-bold shadow-lg shadow-sky-500/30 transition-all text-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white text-white" />
              <span>Call Now (416) 676-3297</span>
            </motion.a>

            {/* Request a Free Quote button */}
            <motion.button
              type="button"
              id="hero-quote-button"
              onClick={onOpenBookingModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-black/50 hover:bg-black/70 text-white border border-white/20 hover:border-white/40 px-7 py-4 rounded-full font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Script Calligraphy in bottom right: "Stay Comfortable All Year Round" */}
      <div className="hidden sm:block absolute right-8 sm:right-16 bottom-8 z-20 pointer-events-none select-none">
        <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-white/95 drop-shadow-xl rotate-[-6deg] tracking-wide">
          Stay Comfortable<br />All Year Round
        </p>
      </div>
    </section>
  );
};


