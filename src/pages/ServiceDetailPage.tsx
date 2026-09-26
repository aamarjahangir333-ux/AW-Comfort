import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DETAILED_SERVICES } from '../data/servicesData';
import { 
  ArrowLeft, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight,
  MapPin,
  Flame,
  Award,
  Wrench,
  Camera
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetailPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? DETAILED_SERVICES[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#05111E] text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="text-2xl font-bold">Service Not Found</h2>
          <p className="text-sm text-slate-300">
            The service page you are looking for may have moved or does not exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  // Get list of all services for next/prev navigation
  const allServices = Object.values(DETAILED_SERVICES);
  const currentIndex = allServices.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : allServices[allServices.length - 1];
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : allServices[0];

  return (
    <div className="bg-[#05111E] text-white min-h-screen">
      {/* 1. Breadcrumbs & Top Bar */}
      <div className="bg-[#07192F] border-b border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-sky-400 font-semibold">{service.title}</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Section */}
      <div className="relative py-16 sm:py-20 bg-slate-950 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
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
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/30 border border-sky-400/40 px-3 py-1 rounded-full text-xs font-bold text-sky-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TSSA Registered Contractor • {service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              {service.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Dispatch Time</div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{service.dispatchTime}</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Warranty</div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Award className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate">{service.warranty}</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Local Headquarters</div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">Mississauga & GTA</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBooking(service.title)}
                className="bg-[#0284C7] hover:bg-[#0077B6] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-colors cursor-pointer"
              >
                Book {service.title}
              </motion.button>

              <motion.a
                href="tel:4166763297"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call (416) 676-3297</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Comprehensive Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Detailed Service Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Core Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-400" />
                <span>Key Benefits & Advantages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#07192F] p-4 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-sky-400" />
                <span>Technical Features & Workmanship</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyFeatures.map((feat, i) => (
                  <div key={i} className="bg-[#07192F] p-5 rounded-xl border border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-sky-300">{feat.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional 4-Step Process */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Our 4-Step Service Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step) => (
                  <div key={step.step} className="bg-[#071421] p-5 rounded-xl border border-white/10 space-y-2 relative">
                    <span className="text-2xl font-black text-sky-500/30 absolute top-3 right-4">
                      {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Equipment & Installation Gallery */}
            {service.gallery && service.gallery.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Camera className="w-5 h-5 text-sky-400" />
                    <span>Real Equipment & Field Installation Gallery</span>
                  </h3>
                  <span className="text-xs text-sky-400 font-semibold">Authentic GTA Projects</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.gallery.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-[#07192F] rounded-2xl overflow-hidden border border-white/10 hover:border-sky-500/40 transition-all shadow-lg"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-2 left-3 right-3 text-xs font-bold text-white drop-shadow-md">
                          {item.title}
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Signs You Need Service */}
            <div className="bg-[#071421] p-6 sm:p-8 rounded-2xl border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Warning Signs Your System Needs Immediate Attention
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {service.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatible Equipment & Brands */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Systems & Equipment We Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.equipmentHandled.map((eq, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-xs font-semibold text-slate-200">
                    {eq}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-400" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-[#07192F] p-5 rounded-xl border border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-white">{faq.question}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Fast Contact Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              {/* Quick Action Card */}
              <div className="bg-[#07192F] p-6 rounded-2xl border border-white/10 shadow-2xl space-y-5">
                <h3 className="text-lg font-bold text-white">Book This Service</h3>
                <p className="text-xs text-slate-300">
                  Ready to schedule or need emergency assistance? Our licensed team is standing by across Mississauga and the GTA.
                </p>

                <div className="space-y-2 text-xs text-slate-300 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Response:</span>
                    <span className="font-bold text-white">{service.dispatchTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Licensing:</span>
                    <span className="font-bold text-sky-400">TSSA Registered</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Headquarters:</span>
                    <span className="font-bold text-white">Mississauga</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full bg-[#0284C7] hover:bg-[#0077B6] text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-md text-center block"
                  >
                    Request Appointment Online
                  </button>

                  <a
                    href="tel:4166763297"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-3 px-4 rounded-xl text-xs font-bold border border-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call (416) 676-3297</span>
                  </a>

                  <a
                    href="https://wa.me/14166763297"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600/80 hover:bg-emerald-600 text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 text-center">
                  Address: 510 Ravenstone Ct, Mississauga, ON L5R 3J4
                </div>
              </div>

              {/* Service Navigation Box */}
              <div className="bg-[#07192F] p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Other Specialized Services</div>
                <div className="space-y-2">
                  <Link
                    to={`/services/${prevService.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="truncate">← {prevService.title}</span>
                  </Link>
                  <Link
                    to={`/services/${nextService.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="truncate">{nextService.title} →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
