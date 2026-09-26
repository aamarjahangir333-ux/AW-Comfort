import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Wrench, 
  CheckCircle2, 
  Flame, 
  Users, 
  Clock, 
  Truck, 
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES } from '../assets/images';
import { ProjectShowcaseSection } from '../components/ProjectShowcaseSection';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#05111E] text-white min-h-screen">
      {/* 1. Page Header */}
      <div className="relative py-20 lg:py-24 bg-[#07192F] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HVAC_IMAGES.torontoSkylinePanorama}
            alt="Toronto Skyline"
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
              <Award className="w-3.5 h-3.5" />
              <span>8+ Years of HVAC & Commercial Excellence</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About AWcomfort
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Your trusted local HVAC, commercial refrigeration, and gas piping partner serving Mississauga and the Greater Toronto Area. Dedicated to safety, transparent pricing, and rapid 24/7 technical dispatch.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Company Story & Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built on Safety, Craftsmanship & Local Reliability
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded over 8 years ago in Mississauga, AWcomfort was established with a single unwavering principle: to deliver uncompromising technical expertise in heating, cooling, commercial restaurant equipment, and gas infrastructure.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              While conventional HVAC companies often restrict themselves to simple residential box-swaps, AWcomfort combines heavy-duty commercial kitchen capabilities—such as commercial deck pizza ovens, walk-in coolers, and grease exhaust ducting—with high-efficiency residential heat pumps and furnaces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#07192F] p-4 rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>TSSA Registered</span>
                </div>
                <p className="text-xs text-slate-400">
                  Fully licensed with the Technical Standards & Safety Authority for gas piping, appliances, and high-BTU burners.
                </p>
              </div>

              <div className="bg-[#07192F] p-4 rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Mississauga Dispatch</span>
                </div>
                <p className="text-xs text-slate-400">
                  Strategically based at 510 Ravenstone Ct, giving rapid highway access to Peel, Halton, York, and Toronto.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Van Photo & Overlay (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-slate-950 group">
              <img
                src={HVAC_IMAGES.awcomfortServiceVan}
                alt="AWcomfort commercial service fleet van"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent" />
              
              {/* Official AW Comfort Logo Badge */}
              <div className="absolute top-6 left-6 z-10 flex items-center bg-[#071526]/90 px-3 py-1.5 rounded-lg border border-white/15 shadow-md">
                <img
                  src="/aw-comfort-logo.webp"
                  alt="AW Comfort"
                  width="140"
                  height="80"
                  className="h-8 w-auto object-contain"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-2xl sm:text-3xl font-script text-sky-300 block">
                  Professional • Reliable • Local
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Mobile Diagnostic Units Equipped for Same-Day Repair
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Values Grid */}
      <div className="bg-[#071421] py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
              OUR FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Why Customers Trust AWcomfort
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#07192F] p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Upfront Written Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe in complete transparency. Our technicians provide detailed diagnostic reports and flat-rate quotes before any work commences. No surprise overtime charges.
              </p>
            </div>

            <div className="bg-[#07192F] p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">24/7 Emergency Dispatch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Furnace breakdowns in sub-zero cold or walk-in cooler failures during a restaurant shift cannot wait. Our emergency technician team is available around the clock.
              </p>
            </div>

            <div className="bg-[#07192F] p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Code Compliance & Safety</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All gas piping, high-BTU oven installations, and venting comply strictly with the Ontario Fuel Safety Code (B149.1) and NFPA 96 standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Dedicated Team Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-300">
            <Users className="w-4 h-4 text-sky-400" />
            <span>CERTIFIED HVAC & GAS SPECIALISTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Dedicated Team Behind AW Comfort
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every repair, installation, and inspection is conducted by our in-house, TSSA-registered gas technicians and Red Seal refrigeration mechanics. We never subcontract your safety.
          </p>
        </div>

        {/* Heroic Team Photo Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950 mb-12 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={HVAC_IMAGES.awComfortTeam}
              alt="AW Comfort dedicated technical team and service fleet in the Greater Toronto Area"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="1280"
              height="720"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05111E] via-[#05111E]/40 to-transparent" />
            
            {/* Top Badge: Brand Logo */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center bg-[#071526]/90 px-3.5 py-2 rounded-xl border border-white/15 shadow-xl backdrop-blur-xs">
              <img
                src="/aw-comfort-logo.webp"
                alt="AW Comfort"
                width="140"
                height="80"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>

            {/* Top Right Live Dispatch Badge */}
            <div className="hidden sm:flex absolute top-6 right-6 z-10 items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active Field Crew on Duty • GTA Coverage</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 select-none">
              <div>
                <span className="text-2xl sm:text-3xl font-script text-sky-300 block drop-shadow-md">
                  Precision • Integrity • 24/7 Reliability
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase drop-shadow-sm">
                  AW Comfort Certified Technicians & Mobile Fleet Units
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-[#0284C7] text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm">
                  TSSA Registered Contractor
                </span>
                <span className="bg-white/10 text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/20">
                  Red Seal 313A
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#07192F] border-t border-white/10">
            <div className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">8+ Years</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">GTA Service Experience</div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">100%</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">Licensed Gas Techs</div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">30–60 Min</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">Avg Emergency Arrival</div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">0%</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">Subcontracting</div>
            </div>
          </div>
        </div>

        {/* Specialized Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#07192F] rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 hover:border-sky-400/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Licensed Gas Technicians</h3>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">TSSA G1 & G2 Certified</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized in furnace diagnosis, hydronic boilers, commercial unit heaters, and high-pressure black-iron gas pipe fitting according to Ontario B149.1 standards.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-medium">
              ✓ Combustion efficiency & carbon monoxide testing
            </div>
          </div>

          <div className="bg-[#07192F] rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 hover:border-sky-400/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Refrigeration Mechanics</h3>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">313A Red Seal Certified</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Experts in walk-in coolers, blast chillers, cold storage rooms, rooftop package units, and heat pumps using advanced digital manifold diagnostic tools.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-medium">
              ✓ ODP certified • Environmentally compliant recovery
            </div>
          </div>

          <div className="bg-[#07192F] rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 hover:border-sky-400/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Kitchen & Ventilation Pros</h3>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">NFPA 96 & Pizza Specialists</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated specialists for commercial pizza deck ovens (Bakers Pride, Moretti Forni), commercial range exhaust hoods, make-up air fans, and fire clearances.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-medium">
              ✓ Gas valve calibrating & thermostat rebuilding
            </div>
          </div>

          <div className="bg-[#07192F] rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 hover:border-sky-400/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Rapid Dispatch Team</h3>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">24/7 GTA Operations</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Centrally coordinated dispatch out of Mississauga to ensure fully equipped vans arrive swiftly with common OEM parts in stock to achieve same-day fixes.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-medium">
              ✓ GPS coordinated • Direct technician communication
            </div>
          </div>
        </div>

        {/* Team Commitment Callout */}
        <div className="bg-gradient-to-r from-sky-900/30 via-[#07192F] to-sky-900/30 border border-sky-400/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Our Zero-Subcontracting Pledge</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                When you call AW Comfort, you deal exclusively with our verified employees covered by full WSIB insurance and comprehensive commercial liability.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white px-6 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-md"
          >
            <span>Book With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5. Headquarters & Dispatch Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#07192F] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-extrabold uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>OFFICIAL HEADQUARTERS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                510 Ravenstone Ct, Mississauga, ON L5R 3J4
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our primary dispatch depot is centrally positioned in Mississauga, allowing our fleet of service vans to rapidly reach residential and commercial customers across the GTA within 30 to 60 minutes.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Direct phone line: <strong>(416) 676-3297</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>24/7 Emergency response across Peel, Halton, York & Toronto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Licensed Gas Technicians (G1/G2) & Red-Seal Mechanics</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-md"
                >
                  View on Google Maps
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded-xl text-xs font-bold border border-white/10 transition-colors cursor-pointer"
                >
                  Request Dispatch
                </button>
              </div>
            </div>

            {/* Visual Photo Bento */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative group">
                <img
                  src={HVAC_IMAGES.pizzaBakingHearth}
                  alt="Commercial pizza oven stone hearth test"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold text-white backdrop-blur-xs">
                  Artisan Hearth
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative group">
                <img
                  src={HVAC_IMAGES.bakersPrideDoubleDeck}
                  alt="Bakers Pride commercial pizza oven setup"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold text-white backdrop-blur-xs">
                  Bakers Pride
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative group">
                <img
                  src={HVAC_IMAGES.rooftopExhaustDuctwork}
                  alt="Rooftop grease exhaust ductwork"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold text-white backdrop-blur-xs">
                  Rooftop Exhaust
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative group">
                <img
                  src={HVAC_IMAGES.acRefrigerantDiagnostics}
                  alt="Appion digital refrigerant manifold diagnostics"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold text-white backdrop-blur-xs">
                  AC Diagnostics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Authentic Field Work & Installations Showcase */}
      <ProjectShowcaseSection
        title="Our Authentic Field Work & Project Portfolio"
        subtitle="Every project reflects our obsession with safety, reliability, and precision engineering across the Greater Toronto Area."
      />
    </div>
  );
};
