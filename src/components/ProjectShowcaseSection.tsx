import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Wind, 
  Wrench, 
  ShieldCheck, 
  Maximize2, 
  X,
  Building
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AUTHENTIC_WORK_IMAGES } from '../assets/images';

export interface ProjectPhoto {
  id: string;
  title: string;
  category: 'pizza-ovens' | 'ventilation' | 'ac-refrigeration';
  categoryLabel: string;
  image: string;
  badge: string;
  location: string;
  specs: string;
  description: string;
  serviceLink: string;
  serviceLinkLabel: string;
}

export const AUTHENTIC_PROJECTS: ProjectPhoto[] = [
  {
    id: 'pizza-baking-hearth',
    title: 'Stone Hearth Firing & Artisan Baking Test',
    category: 'pizza-ovens',
    categoryLabel: 'Pizza Ovens',
    image: AUTHENTIC_WORK_IMAGES.pizzaBakingHearth,
    badge: '750°F Heat Tested',
    location: 'GTA Trattoria & Pizzeria',
    specs: 'Refractory Deck Stone • Uniform Flame Distribution • Zero Soot',
    description: 'Post-installation combustion test verifying sustained baking temperatures and uniform radiant heat across cordierite refractory deck stones.',
    serviceLink: '/services/pizza-ovens',
    serviceLinkLabel: 'Pizza Oven Services',
  },
  {
    id: 'bakers-pride-double-deck',
    title: 'Bakers Pride Double Deck Oven Suite',
    category: 'pizza-ovens',
    categoryLabel: 'Pizza Ovens',
    image: AUTHENTIC_WORK_IMAGES.bakersPrideDoubleDeck,
    badge: 'TSSA Tagged',
    location: 'Mississauga Commercial Kitchen',
    specs: 'Independent Upper & Lower Controls • High-BTU Gas Manifold • Heavy-Duty Doors',
    description: 'Turnkey installation of twin Bakers Pride commercial deck pizza ovens with custom high-capacity gas piping, shutoff valves, and certified pressure verification.',
    serviceLink: '/services/pizza-ovens',
    serviceLinkLabel: 'Pizza Oven Services',
  },
  {
    id: 'bakers-pride-oven-active',
    title: 'Bakers Pride Commercial Deck Oven In Service',
    category: 'pizza-ovens',
    categoryLabel: 'Pizza Ovens',
    image: AUTHENTIC_WORK_IMAGES.bakersPrideOven,
    badge: 'Active Kitchen',
    location: 'Etobicoke Italian Restaurant',
    specs: 'Illuminated Baking Cavity • Thermostat Calibration • Flame Safeguard',
    description: 'Gas burner calibration and thermostat replacement on a busy restaurant deck oven, restoring rapid recovery during peak dinner rush service.',
    serviceLink: '/services/pizza-ovens',
    serviceLinkLabel: 'Pizza Oven Services',
  },
  {
    id: 'pizza-oven-flame-tuning',
    title: 'Precision Burner Combustion & Flame Pattern',
    category: 'pizza-ovens',
    categoryLabel: 'Pizza Ovens',
    image: AUTHENTIC_WORK_IMAGES.pizzaOvenFlame,
    badge: 'Burner Calibration',
    location: 'Brampton Artisan Bakery',
    specs: 'Clean Blue-Flame Combustion • Millivolt Pilot Serviced • Safety Valve Tested',
    description: 'Direct flame analysis and orifice cleanout inside commercial oven chamber, balancing air-to-gas ratio for soot-free high-temperature baking.',
    serviceLink: '/services/pizza-ovens',
    serviceLinkLabel: 'Pizza Oven Services',
  },
  {
    id: 'rooftop-exhaust-ductwork',
    title: 'Rooftop Upblast Grease Exhaust Fan & Flue',
    category: 'ventilation',
    categoryLabel: 'Ventilation & Rooftops',
    image: AUTHENTIC_WORK_IMAGES.rooftopExhaustDuctwork,
    badge: 'NFPA 96 Fire Code',
    location: 'Commercial Plaza Rooftop',
    specs: 'Curb-Mounted Upblast Fan • Welded Grease Flue • Vibration Isolators',
    description: 'Commercial restaurant kitchen rooftop exhaust system installation with heavy-gauge vertical flue stack and service ladder access.',
    serviceLink: '/services/ventilation-ductwork',
    serviceLinkLabel: 'Ventilation Services',
  },
  {
    id: 'commercial-kitchen-hood',
    title: 'Type 1 Commercial Kitchen Exhaust Canopy',
    category: 'ventilation',
    categoryLabel: 'Ventilation & Rooftops',
    image: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
    badge: 'Stainless Steel Canopy',
    location: 'Commercial Pizzeria Cooking Line',
    specs: 'UL-Listed Baffle Filters • Interlock Wiring • Make-Up Air Balanced',
    description: 'High-performance commercial kitchen ventilation hood canopy installed directly above cooking line and pizza oven equipment for smoke capture.',
    serviceLink: '/services/ventilation-ductwork',
    serviceLinkLabel: 'Ventilation Services',
  },
  {
    id: 'ac-refrigerant-diagnostics',
    title: 'Appion Digital Manifold Refrigerant Diagnostics',
    category: 'ac-refrigeration',
    categoryLabel: 'AC & Refrigeration',
    image: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
    badge: 'F-Gas & ODP Certified',
    location: 'Residential Outdoor Condenser',
    specs: 'Sub-500 Micron Deep Evacuation • High-Precision Digital Gauges • R410A / R32',
    description: 'Deep vacuum evacuation, nitrogen pressure holding test, and precision refrigerant recovery and charging on residential central AC condensing unit.',
    serviceLink: '/services/air-conditioning',
    serviceLinkLabel: 'AC System Services',
  },
];

interface ProjectShowcaseSectionProps {
  title?: string;
  subtitle?: string;
  initialCategory?: 'all' | 'pizza-ovens' | 'ventilation' | 'ac-refrigeration';
  compact?: boolean;
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  title = 'Our Work in Action: Real Installations Across the GTA',
  subtitle = 'Authentic photos from our recent residential and commercial projects — from high-temp pizza ovens to rooftop exhaust and precision AC diagnostics.',
  initialCategory = 'all',
  compact = false,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pizza-ovens' | 'ventilation' | 'ac-refrigeration'>(initialCategory);
  const [selectedImage, setSelectedImage] = useState<ProjectPhoto | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? AUTHENTIC_PROJECTS 
    : AUTHENTIC_PROJECTS.filter((p) => p.category === activeFilter);

  const displayList = compact ? filteredProjects.slice(0, 4) : filteredProjects;

  return (
    <section id="project-showcase" className="py-16 sm:py-20 bg-[#040C16] text-white border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-300 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Equipment • Real GTA Field Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All Projects ({AUTHENTIC_PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('pizza-ovens')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'pizza-ovens'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Pizza Ovens (4)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ventilation')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'ventilation'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Wind className="w-3.5 h-3.5 text-sky-400" />
              <span>Ventilation (2)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ac-refrigeration')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'ac-refrigeration'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-emerald-400" />
              <span>AC Diagnostics (1)</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="group bg-[#07192F] rounded-2xl overflow-hidden border border-white/10 hover:border-sky-500/40 transition-colors duration-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom Trigger */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{project.badge}</span>
                  </div>

                  {/* Expand Zoom Button */}
                  <button
                    type="button"
                    aria-label={`Enlarge photo of ${project.title}`}
                    className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Category Pill on Bottom */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-semibold text-slate-300 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-xs">
                    {project.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-2 text-[11px] text-sky-400/90 font-mono">
                    {project.specs}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-4 pt-2 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={project.serviceLink}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white transition-colors"
                >
                  <span>{project.serviceLinkLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedImage(project)}
                  className="text-[11px] text-slate-400 hover:text-white font-medium cursor-pointer"
                >
                  View Photo
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#07192F] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="relative flex-1 bg-black min-h-[300px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    decoding="async"
                    className="max-h-[65vh] w-full object-contain"
                  />
                  <div className="absolute top-4 left-4 bg-[#0284C7] text-white text-xs font-extrabold uppercase px-3 py-1 rounded-md shadow-lg">
                    {selectedImage.badge}
                  </div>
                </div>

                {/* Modal Footer Info */}
                <div className="p-6 bg-[#07192F] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                        {selectedImage.categoryLabel} • {selectedImage.location}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-0.5">
                        {selectedImage.title}
                      </h3>
                    </div>
                    <Link
                      to={selectedImage.serviceLink}
                      onClick={() => setSelectedImage(null)}
                      className="inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0"
                    >
                      <span>Explore {selectedImage.serviceLinkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedImage.description}
                  </p>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs font-mono text-sky-300">
                    <strong>Technical Specs:</strong> {selectedImage.specs}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
