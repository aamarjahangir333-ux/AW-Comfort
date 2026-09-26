import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { ContactSection } from '../components/ContactSection';
import { ProjectShowcaseSection } from '../components/ProjectShowcaseSection';
import { ShieldCheck, Award, Flame, Snowflake, UtensilsCrossed, ArrowRight, Wrench, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES, AUTHENTIC_WORK_IMAGES } from '../assets/images';

interface HomePageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenBookingModal={() => onOpenBooking()} />

      {/* 2. Trust Credentials Ribbon */}
      <div className="bg-[#05111E] border-y border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-xs sm:text-sm">
            <div className="flex items-center gap-3 bg-white/5 py-3 px-4 rounded-xl border border-white/10">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold block text-white">TSSA Registered</span>
                <span className="text-[11px] text-slate-400">Ontario Gas Contractor</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 py-3 px-4 rounded-xl border border-white/10">
              <Award className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold block text-white">8+ Years Experience</span>
                <span className="text-[11px] text-slate-400">Mississauga & All GTA</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 py-3 px-4 rounded-xl border border-white/10">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold block text-white">Local Headquarters</span>
                <span className="text-[11px] text-slate-400">510 Ravenstone Ct, Mississauga</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 py-3 px-4 rounded-xl border border-white/10">
              <Phone className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold block text-white">24/7 Rapid Dispatch</span>
                <span className="text-[11px] text-slate-400">(416) 676-3297</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Services Overview Grid */}
      <ServicesSection onSelectService={(service) => onOpenBooking(service)} />

      {/* Multi-Page Navigation Callout Banner: Explore All Detailed Services */}
      <div className="bg-[#07192F] py-8 border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-lg font-bold text-white">Looking for In-Depth Equipment Specs & Free Estimates?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Explore our dedicated service pages with pricing guides, common troubleshooting steps, and technical specs.</p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors shrink-0 shadow-md"
          >
            <span>Browse All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 4. Commercial Highlight Feature Bento */}
      <section className="py-20 bg-[#05111E] text-white border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
                COMMERCIAL EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                Pizzerias, Commercial Kitchens & Plazas
              </h2>
            </div>
            <Link
              to="/commercial"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-bold group"
            >
              <span>View Dedicated Commercial Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Commercial Feature 1: Pizza Ovens */}
            <div className="bg-[#07192F]/80 rounded-2xl overflow-hidden border border-white/10 group flex flex-col justify-between">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={HVAC_IMAGES.servicePizzaOven}
                  alt="Commercial pizza oven installation"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                  Specialty Service
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Commercial Pizza Ovens</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Specialized installation, high-BTU gas piping, refractory stone leveling, and emergency repair for deck, conveyor, and wood-gas hybrid ovens.
                  </p>
                </div>
                <Link
                  to="/services/pizza-ovens"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white transition-colors pt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Commercial Feature 2: Walk-In Refrigeration & Kitchens */}
            <div className="bg-[#07192F]/80 rounded-2xl overflow-hidden border border-white/10 group flex flex-col justify-between">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={HVAC_IMAGES.coldRoom}
                  alt="Walk-in cooler and refrigeration"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                  Food Safety
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Walk-In Coolers & Refrigeration</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Temperature-critical cold rooms, prep counters, blast freezers, and emergency compressor repair to safeguard food safety.
                  </p>
                </div>
                <Link
                  to="/services/commercial-appliances"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white transition-colors pt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Commercial Feature 3: Rooftop Units & Plazas */}
            <div className="bg-[#07192F]/80 rounded-2xl overflow-hidden border border-white/10 group flex flex-col justify-between">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={HVAC_IMAGES.serviceCommHvac}
                  alt="Commercial HVAC and rooftop units"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                  Commercial Plazas
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Packaged Rooftop Units (RTU)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Plaza HVAC maintenance contracts, economizer calibrations, crane-lift retrofits, and scheduled quarterly filter & belt care.
                  </p>
                </div>
                <Link
                  to="/services/commercial-hvac"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white transition-colors pt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Project Showcase: Authentic Field Work & Installations */}
      <ProjectShowcaseSection />

      {/* 6. About AWcomfort Section */}
      <AboutSection onLearnMoreClick={() => navigate('/about')} />

      {/* 6. Why Choose Us? Section */}
      <WhyChooseUsSection />

      {/* 7. Service Area Section with exact address */}
      <ServiceAreaSection />

      {/* 9. Contact & Fast Quote Section */}
      <ContactSection />
    </div>
  );
};
