import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES, CITY_IMAGES } from '../assets/images';

interface ServiceAreasPageProps {
  onOpenBooking: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onOpenBooking }) => {
  const serviceHubs = [
    {
      city: 'Mississauga',
      isHQ: true,
      image: CITY_IMAGES.mississauga,
      landmark: 'Absolute World, City Centre & Hurontario',
      address: '510 Ravenstone Ct, Mississauga, ON L5R 3J4',
      responseTime: '30–45 Mins',
      neighborhoods: [
        'City Centre', 'Port Credit', 'Streetsville', 'Meadowvale', 
        'Erin Mills', 'Cooksville', 'Clarkson', 'Hurontario', 'Lorne Park'
      ],
      description: 'Our primary operating headquarters. Rapid direct dispatch for residential furnaces, AC, commercial pizzerias, and retail plazas along Hurontario, Dundas, and Highway 403/401.'
    },
    {
      city: 'Brampton',
      isHQ: false,
      image: CITY_IMAGES.brampton,
      landmark: 'Rose Theatre & Downtown Heritage District',
      responseTime: '30–50 Mins',
      neighborhoods: [
        'Bramalea', 'Downtown Brampton', 'Springdale', 'Mount Pleasant', 
        'Goreway Industrial', 'Fletcher\'s Meadow', 'Castlemore'
      ],
      description: 'Extensive commercial kitchen and residential HVAC service. Heavy fleet presence along Highway 410, Queen St, and Steeles commercial corridors.'
    },
    {
      city: 'Toronto & Etobicoke',
      isHQ: false,
      image: CITY_IMAGES.torontoEtobicoke,
      landmark: 'Lake Ontario Waterfront, Humber Bay & Skyline',
      responseTime: '45–60 Mins',
      neighborhoods: [
        'Etobicoke West', 'Mimico', 'The Kingsway', 'Rexdale', 
        'Downtown Core', 'Yorkville', 'High Park', 'North York'
      ],
      description: 'Rapid commercial response for downtown restaurants, pizzerias, banquet halls, and residential ductless heat pump installations.'
    },
    {
      city: 'Oakville & Burlington',
      isHQ: false,
      image: CITY_IMAGES.oakvilleBurlington,
      landmark: 'Oakville Harbour, Bronte & Burlington Pier',
      responseTime: '40–55 Mins',
      neighborhoods: [
        'Old Oakville', 'Bronte', 'Kerr Village', 'Glen Abbey', 
        'Downtown Burlington', 'Alton Village', 'Roseland'
      ],
      description: 'High-efficiency heat pump retrofits, luxury residential HVAC zoning, and lakeshore restaurant kitchen ventilation and refrigeration.'
    },
    {
      city: 'Milton & Halton Hills',
      isHQ: false,
      image: CITY_IMAGES.miltonHalton,
      landmark: 'Niagara Escarpment & Historic Town Core',
      responseTime: '40–60 Mins',
      neighborhoods: [
        'Dorset Park', 'Old Milton', 'Beaty', 'Clarke', 
        'Georgetown', 'Acton'
      ],
      description: 'Fast coverage for residential heating emergencies, new heat pump conversions, and commercial warehouse heating systems.'
    },
    {
      city: 'Vaughan, Markham & Richmond Hill',
      isHQ: false,
      image: CITY_IMAGES.vaughanMarkham,
      landmark: 'VMC Towers, Unionville & York Region Tech Hub',
      responseTime: '50–70 Mins',
      neighborhoods: [
        'Woodbridge', 'Vaughan Metropolitan Centre', 'Thornhill', 
        'Markham Centre', 'Unionville', 'Richmond Hill'
      ],
      description: 'Commercial pizza oven servicing, rooftop unit maintenance agreements, and residential HVAC care across York Region.'
    }
  ];

  return (
    <div className="bg-[#05111E] text-white min-h-screen">
      {/* 1. Header Banner */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#05111E]/85 via-[#05111E]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05111E] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Greater Toronto Area Service Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Service Areas Across Mississauga & All GTA
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              With our official headquarters centrally situated at <strong>510 Ravenstone Ct, Mississauga</strong>, our mobile technical vans provide rapid, round-the-clock dispatch to homes, restaurants, and businesses across Peel, Halton, York, and Toronto.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-colors cursor-pointer"
              >
                Request Local Technician
              </button>
              <a
                href="tel:4166763297"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>24/7 Hotline: (416) 676-3297</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Official Headquarters Highlight Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-[#07192F] p-6 sm:p-8 rounded-3xl border border-sky-400/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-sky-400 text-[11px] font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CENTRAL DISPATCH & FLEET DEPOT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                510 Ravenstone Ct, Mississauga, ON L5R 3J4, Canada
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Centralized hub supporting fast emergency dispatch to all surrounding GTA municipalities.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-sky-500/20 hover:bg-[#0284C7] text-sky-300 hover:text-white border border-sky-400/40 px-5 py-3 rounded-xl text-xs font-bold transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Municipality Breakdown Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
            REGIONAL COVERAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Where We Deliver 24/7 HVAC & Commercial Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceHubs.map((hub) => (
            <div
              key={hub.city}
              className={`group bg-[#07192F] rounded-2xl overflow-hidden border flex flex-col justify-between shadow-xl transition-all duration-200 ${
                hub.isHQ ? 'border-sky-400/60 shadow-sky-950/50' : 'border-white/10 hover:border-sky-500/30'
              }`}
            >
              <div>
                {/* City Landmark Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={hub.image}
                    alt={`${hub.city} HVAC and Commercial Services`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="360"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-[#07192F]/40 to-transparent" />

                  {/* Badges on Top of Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    {hub.isHQ ? (
                      <span className="bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-white/20">
                        <ShieldCheck className="w-3 h-3" />
                        Central Headquarters
                      </span>
                    ) : (
                      <span className="bg-[#061426]/90 text-sky-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-white/15 shadow-md flex items-center gap-1">
                        <Truck className="w-3 h-3 text-sky-400" />
                        Mobile Dispatch Fleet
                      </span>
                    )}

                    <div className="flex items-center gap-1.5 bg-[#061426]/90 px-2.5 py-1 rounded-full border border-white/15 text-[11px] font-bold text-slate-200 shadow-md">
                      <Clock className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{hub.responseTime}</span>
                    </div>
                  </div>

                  {/* City Name & Landmark Title */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                      <span>{hub.city}</span>
                    </h3>
                    {hub.landmark && (
                      <span className="text-[11px] text-sky-200 font-medium drop-shadow-xs block ml-7">
                        {hub.landmark}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3.5">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hub.description}
                  </p>

                  {/* Neighborhoods tags */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                      Key Service Neighborhoods:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.neighborhoods.map((n) => (
                        <span
                          key={n}
                          className="bg-white/5 border border-white/10 text-[11px] text-slate-300 px-2.5 py-0.5 rounded-md hover:border-sky-400/30 transition-colors"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 bg-sky-500/15 hover:bg-[#0284C7] text-sky-300 hover:text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer border border-sky-400/30 hover:border-transparent shadow-sm"
                >
                  <span>Book in {hub.city.split('&')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
