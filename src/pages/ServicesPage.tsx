import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DETAILED_SERVICES } from '../data/servicesData';
import { 
  Flame, 
  Snowflake, 
  Zap, 
  UtensilsCrossed, 
  ShieldCheck, 
  Wind, 
  Building, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Clock, 
  Tag, 
  Wrench,
  Search,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES } from '../assets/images';
import { ProjectShowcaseSection } from '../components/ProjectShowcaseSection';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const servicesList = Object.values(DETAILED_SERVICES);

  const categories = ['All', 'Heating & Cooling', 'Commercial Kitchen', 'Gas & Piping', 'Ventilation'];

  const filteredServices = servicesList.filter((srv) => {
    const matchesCat = selectedCategory === 'All' || srv.category === selectedCategory;
    const matchesSearch = 
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-sky-400" />;
      case 'Snowflake': return <Snowflake className="w-5 h-5 text-sky-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-sky-400" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-400" />;
      case 'Building': return <Building className="w-5 h-5 text-sky-400" />;
      default: return <Wrench className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="bg-[#05111E] text-white min-h-screen">
      {/* 1. Page Header Banner */}
      <div className="relative py-20 lg:py-24 bg-[#07192F] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HVAC_IMAGES.heroDaylightHvac}
            alt="AWcomfort HVAC Services"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192F]/85 via-[#07192F]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05111E] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-300 mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full-Spectrum Residential & Commercial Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Certified HVAC, Pizza Oven & Gas Services
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Serving Mississauga and the entire Greater Toronto Area with 8+ years of proven expertise. TSSA registered contractor, licensed G1/G2 gas technicians, and 24/7 rapid emergency dispatch.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-lg cursor-pointer"
              >
                Schedule a Service Visit
              </button>
              <a
                href="tel:4166763297"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors border border-white/10"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call (416) 676-3297</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#07192F]/70 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0284C7] text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services, e.g. oven, heat pump..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="pt-4 pb-2 text-xs text-slate-400 flex items-center justify-between">
          <span>Showing {filteredServices.length} specialized service categories</span>
          <span className="text-sky-400">Headquarters dispatch: 510 Ravenstone Ct, Mississauga</span>
        </div>

        {/* 3. Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-[#07192F]/90 rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between group hover:border-sky-400/40 transition-colors"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-[#0284C7]/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                    {service.category}
                  </span>

                  {/* Dispatch Badge */}
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs border border-white/10 text-sky-300 text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{service.dispatchTime}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlight Benefits List */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2">
                  <span className="truncate">{service.warranty}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white py-2.5 px-3 rounded-xl text-xs font-bold border border-white/10 transition-colors text-center"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="inline-flex items-center justify-center gap-1 bg-[#0284C7] hover:bg-[#0077B6] text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Real Field Work Showcase */}
      <ProjectShowcaseSection 
        title="Field Work & Recent Equipment Installations"
        subtitle="Browse actual high-temperature pizza oven commissions, commercial ventilation systems, and precision AC refrigerant diagnostics."
      />

      {/* 5. Equipment Brands We Service & Install */}
      <div className="bg-[#071421] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
            TRUSTED OEM PARTNERS & BRANDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Industry-Leading Systems Installed & Serviced
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mt-2">
            We service all major commercial and residential manufacturers with factory-grade diagnostic procedures and genuine OEM replacement components.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            {[
              'Carrier',
              'Lennox',
              'Trane',
              'Keeprite',
              'Moretti Forni',
              'Bakers Pride',
              'Garland',
              'True Refrigeration',
              'Mitsubishi Electric',
              'Daikin',
              'Goodman',
              'CaptiveAire'
            ].map((brand) => (
              <div
                key={brand}
                className="bg-white/5 border border-white/10 py-3.5 px-4 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:border-sky-400/40 transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
