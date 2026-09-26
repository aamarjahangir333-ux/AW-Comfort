import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  UtensilsCrossed, 
  Flame, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES, AUTHENTIC_WORK_IMAGES } from '../assets/images';
import { ProjectShowcaseSection } from '../components/ProjectShowcaseSection';

interface CommercialPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#05111E] text-white min-h-screen">
      {/* 1. Hero Banner */}
      <div className="relative py-20 lg:py-24 bg-[#07192F] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HVAC_IMAGES.restaurantPizzaOven}
            alt="Commercial kitchen equipment"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192F]/85 via-[#07192F]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05111E] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-300">
              <Building className="w-3.5 h-3.5" />
              <span>Commercial & Industrial Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Commercial Kitchen, Pizza Oven & Plaza HVAC Solutions
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed specifically for restaurant operators, pizzerias, franchise kitchens, and commercial property managers across Mississauga and the GTA. Preventative maintenance contracts, TSSA gas certification, and guaranteed 24/7 priority emergency response.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking('Commercial Service')}
                className="bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-colors cursor-pointer"
              >
                Inquire About Commercial Care
              </button>
              <a
                href="tel:4166763297"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>24/7 Priority Line: (416) 676-3297</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Commercial Sectors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
            SECTORS WE SERVE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Engineered for High-Pressure Commercial Environments
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sector 1: Pizzerias & Bakeries */}
          <div className="bg-[#07192F] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="h-52 overflow-hidden relative">
                <img
                  src={AUTHENTIC_WORK_IMAGES.pizzaBakingHearth}
                  alt="Commercial pizza oven stone hearth firing"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                  Pizzerias & Bakeries
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">Commercial Pizza Ovens & Gas</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We specialize in Moretti Forni, Bakers Pride, Cuppone, and conveyor ovens. From high-BTU gas supply piping to refractory stone leveling and thermocouple calibrations, we keep your ovens baking at optimal temperatures.
                </p>
                <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Emergency dinner rush repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>TSSA gas line sizing & pressure testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Exhaust hood interlock wiring</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                to="/services/pizza-ovens"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl text-xs font-bold border border-white/10 transition-colors"
              >
                <span>Explore Pizza Oven Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Sector 2: Restaurants & Food Service */}
          <div className="bg-[#07192F] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="h-52 overflow-hidden relative">
                <img
                  src={AUTHENTIC_WORK_IMAGES.commercialKitchenHood}
                  alt="Commercial kitchen cooking line and hood canopy"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                  Food Service & Hospitality
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">Refrigeration & Cooking Lines</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Protect food inventory with rapid walk-in cooler and freezer diagnostics. We repair commercial fryers, ranges, prep tables, and balance kitchen make-up air systems to eliminate smoke and negative pressure.
                </p>
                <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Food-safe temperature recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Defrost timer & compressor overhauls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Commercial gas cookline repairs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                to="/services/commercial-appliances"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl text-xs font-bold border border-white/10 transition-colors"
              >
                <span>Explore Refrigeration Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Sector 3: Plazas & Property Managers */}
          <div className="bg-[#07192F] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="h-52 overflow-hidden relative">
                <img
                  src={AUTHENTIC_WORK_IMAGES.rooftopExhaustDuctwork}
                  alt="Commercial rooftop exhaust fan and ductwork installation"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                  Plazas & Facility Managers
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">Packaged Rooftop Units (RTU)</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Turnkey management of rooftop climate infrastructure for commercial plazas, retail strips, and offices. Scheduled quarterly filter changes, economizer tuning, and crane-assisted unit changeouts.
                </p>
                <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Quarterly compliance documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Economizer seasonal calibration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Multi-tenant zoning & thermostats</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                to="/services/commercial-hvac"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl text-xs font-bold border border-white/10 transition-colors"
              >
                <span>Explore Rooftop Unit Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Real Commercial Project Showcase */}
      <ProjectShowcaseSection
        title="Commercial Installations & Equipment in Action"
        subtitle="Explore our real GTA restaurant kitchen hoods, Bakers Pride pizza oven hookups, and rooftop grease exhaust systems."
      />

      {/* 4. Preventative Maintenance Agreement (PMA) Benefits */}
      <div className="bg-[#071421] py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#07192F] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-extrabold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>SERVICE LEVEL AGREEMENTS (SLA)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                AWcomfort Commercial Care Program
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Emergency equipment breakdowns destroy profit and damage customer reputation. Our scheduled preventative maintenance agreements ensure your equipment runs efficiently, stays under warranty, and avoids catastrophic mid-service shutdowns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Guaranteed Response Window</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Priority dispatch queue with guaranteed 1-hour emergency arrival for contracted clients.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Award className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">15% Discount on All Parts</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Preferred commercial pricing on OEM replacement fans, valves, sensors, and controls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <FileText className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">TSSA & Health Audit Logs</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Full written documentation and pressure test logs ready for health and municipal inspectors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Zap className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Energy & Hydro Reductions</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Clean coils, fresh filters, and dialed-in refrigerants cut commercial utility bills by 12–20%.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Commercial Maintenance Agreement')}
                  className="bg-[#0284C7] hover:bg-[#0077B6] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-colors cursor-pointer"
                >
                  Request a Commercial Maintenance Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
