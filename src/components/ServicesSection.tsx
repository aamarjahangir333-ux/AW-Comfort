import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Wind,
  Leaf,
  Building2,
  UtensilsCrossed,
  Fuel,
  Pizza,
  Fan,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES } from '../assets/images';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hvac' | 'commercial'>('all');

  const allServices = [
    {
      id: 'furnace',
      slug: 'furnace-heating',
      title: 'Furnace',
      description: 'Reliable heating solutions for your home or business.',
      category: 'hvac',
      icon: Flame,
      image: HVAC_IMAGES.serviceFurnace,
    },
    {
      id: 'air-conditioning',
      slug: 'air-conditioning',
      title: 'Air Conditioning',
      description: 'Stay cool and comfortable all year round.',
      category: 'hvac',
      icon: Wind,
      image: HVAC_IMAGES.serviceAcCondenser,
    },
    {
      id: 'heat-pumps',
      slug: 'heat-pumps',
      title: 'Heat Pumps',
      description: 'Energy-efficient heating and cooling.',
      category: 'hvac',
      icon: Leaf,
      image: HVAC_IMAGES.serviceHeatPump,
    },
    {
      id: 'heating-cooling-systems',
      slug: 'commercial-hvac',
      title: 'Heating & Cooling Systems',
      description: 'Complete system installation, repair and maintenance.',
      category: 'hvac',
      icon: Building2,
      image: HVAC_IMAGES.serviceCommHvac,
    },
    {
      id: 'commercial-appliances',
      slug: 'commercial-appliances',
      title: 'Commercial Appliances',
      description: 'Installation, repair and maintenance for all commercial kitchen equipment.',
      category: 'commercial',
      icon: UtensilsCrossed,
      image: HVAC_IMAGES.serviceAppliances,
    },
    {
      id: 'gas-piping',
      slug: 'gas-piping',
      title: 'Gas Piping',
      description: 'Safe and professional gas piping services.',
      category: 'commercial',
      icon: Fuel,
      image: HVAC_IMAGES.serviceGasPipe,
    },
    {
      id: 'pizza-oven',
      slug: 'pizza-ovens',
      title: 'Pizza Oven Installation & Repairs',
      description: 'Professional installation and expert repairs.',
      category: 'commercial',
      icon: Pizza,
      image: HVAC_IMAGES.servicePizzaOven,
    },
    {
      id: 'restaurant-ventilation',
      slug: 'ventilation-ductwork',
      title: 'Restaurant Ventilation & Ducting',
      description: 'High-quality ducting for optimal performance.',
      category: 'commercial',
      icon: Fan,
      image: HVAC_IMAGES.serviceVentDuct,
    },
  ];

  const displayedServices =
    activeTab === 'all'
      ? allServices
      : allServices.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title on Left and Filter Tabs on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] block mb-2">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07192F] tracking-tight">
              Complete HVAC & Commercial Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We handle everything from residential HVAC to full commercial installations and repairs. Quality work. Reliable service. Every time.
            </p>
          </div>

          {/* Toggle Tabs (HVAC Services / Commercial Services) */}
          <div className="flex items-center gap-2 bg-slate-100/90 p-1.5 rounded-full self-start md:self-auto border border-slate-200/70">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'hvac' ? 'all' : 'hvac')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hvac' || activeTab === 'all'
                  ? 'bg-[#0A1A2C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>HVAC Services</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'commercial' ? 'all' : 'commercial')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-[#0A1A2C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Commercial Services</span>
            </button>
          </div>
        </div>

        {/* 8 Cards Grid (4 columns on lg, 2 on sm, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-[box-shadow,border-color] duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container with Floating Blue Icon Badge */}
                  <Link to={`/services/${service.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="375"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                    />

                    {/* Floating Blue Square Icon Badge */}
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </Link>

                  {/* Text Details */}
                  <div className="p-5 pb-2">
                    <Link to={`/services/${service.slug}`}>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Multi-Page Action Links */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0077B6] group/link cursor-pointer"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
