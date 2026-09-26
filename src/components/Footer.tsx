import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  ArrowUp,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#050D17] text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/3 -z-0 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 -z-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* 1. TOP HIGHLIGHT RIBBON: 24/7 Emergency & Rapid Booking Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#07192F]/90 via-[#07192F]/80 to-[#06121E]/90 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wider uppercase mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                </span>
                24/7 Emergency HVAC & Kitchen Dispatch
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Facing an HVAC or Commercial Kitchen Crisis?
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl">
                Protect your comfort and commercial operations. Our TSSA registered technicians respond fast across Mississauga and the entire GTA.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <motion.a
                id="footer-call-banner-btn"
                href="tel:4166763297"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-[#0284C7] hover:bg-[#0077B6] text-white px-6 py-3.5 rounded-full font-bold shadow-lg shadow-sky-950/40 hover:shadow-sky-800/30 transition-colors text-sm group cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white text-white group-hover:rotate-12 transition-transform" />
                <span>Call (416) 676-3297</span>
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-full font-semibold transition-colors text-sm cursor-pointer"
              >
                <span>Request Free Quote</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER MULTI-COLUMN GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Credentials (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" id="footer-brand-logo-link" aria-label="AWcomfort Home">
              <Logo variant="dark" size="lg" />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              TSSA Registered HVAC & Commercial Kitchen specialists based in Mississauga, serving the Greater Toronto Area. Dedicated to precision heating, air conditioning, commercial pizza ovens, walk-in coolers, and gas piping.
            </p>

            {/* Certifications & Badges */}
            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> TSSA Registered Contractor
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> 8+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" /> Licensed & Insured
              </span>
            </div>

            {/* Live Operational Status */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="text-xs">
                <span className="font-bold text-white block">Technicians on Duty Now</span>
                <span className="text-slate-400">Serving Mississauga & GTA with 24/7 emergency dispatch</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/pizza-ovens" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Commercial Pizza Ovens
                </Link>
              </li>
              <li>
                <Link to="/services/furnace-heating" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Furnace & Heating
                </Link>
              </li>
              <li>
                <Link to="/services/air-conditioning" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Air Conditioning
                </Link>
              </li>
              <li>
                <Link to="/services/heat-pumps" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Heat Pumps & Hybrid Systems
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-appliances" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Commercial Refrigeration & Coolers
                </Link>
              </li>
              <li>
                <Link to="/services/gas-piping" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Gas Piping & TSSA Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/ventilation-ductwork" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Restaurant Ventilation & Ducting
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-hvac" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Packaged Rooftop Units (RTU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Coverage (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Company & Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/commercial" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Commercial Care
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About AWcomfort
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Service Areas (GTA)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Emergency Dispatch
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Key Service Cities:
              </h5>
              <div className="text-xs text-slate-400 space-y-1">
                <p>• Mississauga (HQ)</p>
                <p>• Brampton & Caledon</p>
                <p>• Toronto & Etobicoke</p>
                <p>• Oakville & Milton</p>
              </div>
            </div>
          </div>

          {/* Column 4: Direct Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Direct Contact & HQ
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:4166763297"
                className="flex items-start gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4 fill-sky-400 group-hover:fill-white" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct Line / 24/7</span>
                  <span className="font-bold text-white text-sm">(416) 676-3297</span>
                </div>
              </a>

              <a
                href="https://wa.me/14166763297"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">WhatsApp Chat</span>
                  <span className="font-medium text-white text-xs sm:text-sm">Instant Technician Message</span>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Headquarters & Fleet Dispatch</span>
                  <span className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors leading-snug block">
                    510 Ravenstone Ct, Mississauga, ON L5R 3J4, Canada
                  </span>
                </div>
              </a>
            </div>

            {/* Quick action button */}
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBookingModal}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                <span>Book Service Visit</span>
              </motion.button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM SUB-FOOTER BAR */}
      <div className="border-t border-white/10 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            
            {/* Left: Copyright */}
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} AWcomfort. All rights reserved.</span>
            </div>

            {/* Center: Legal Links */}
            <div className="flex items-center gap-4 text-slate-400">
              <Link to="/about" className="hover:text-white transition-colors">TSSA Safety Standards</Link>
              <span>•</span>
              <Link to="/services" className="hover:text-white transition-colors">Commercial & Residential</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-white transition-colors">Emergency Dispatch</Link>
            </div>

            {/* Right: Social icons & Back to top button */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/14166763297' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}

              {/* Back to top button */}
              <motion.button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2 w-8 h-8 rounded-full bg-sky-500/20 hover:bg-[#0284C7] text-sky-300 hover:text-white flex items-center justify-center transition-colors border border-sky-400/30 cursor-pointer shadow-sm"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};
