import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Navigation, 
  AlertCircle,
  HelpCircle,
  Loader2
} from 'lucide-react';
import { motion } from 'motion/react';
import { HVAC_IMAGES } from '../assets/images';
import { submitToWeb3Forms } from '../lib/web3forms';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Mississauga',
    serviceType: 'Furnace & Heating',
    urgency: 'today',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length > 0) {
      if (raw.length <= 3) {
        formatted = `(${raw}`;
      } else if (raw.length <= 6) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
      } else {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`;
      }
    }
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      alert('Please enter a valid 10-digit Canadian phone number (e.g. 416-676-3297).');
      return;
    }
    setIsSubmitting(true);

    await submitToWeb3Forms({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      location: formData.address,
      service: formData.serviceType,
      urgency: formData.urgency,
      message: formData.message,
      formType: 'Contact Page Dispatch',
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#05111E] text-white min-h-screen">
      {/* 1. Header Banner */}
      <div className="relative py-20 lg:py-24 bg-[#07192F] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HVAC_IMAGES.awComfortTeam}
            alt="AW Comfort dedicated technical team and service fleet"
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
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-300">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Dedicated Client Support</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact AWcomfort & Emergency Dispatch
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need urgent emergency furnace repair in freezing cold, specialized commercial pizza oven service, or a free quote on a new high-efficiency heat pump, we are ready to assist.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Contact Cards Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: 24/7 Phone */}
          <a
            href="tel:4166763297"
            className="bg-[#07192F] p-6 rounded-2xl border border-white/10 shadow-xl hover:border-sky-400/40 transition-colors group block"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
              <Phone className="w-6 h-6 fill-current" />
            </div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Direct Hotline 24/7</div>
            <div className="text-xl font-extrabold text-white mt-1 group-hover:text-sky-300 transition-colors">(416) 676-3297</div>
            <div className="text-xs text-slate-400 mt-2">Emergency technicians standing by across Mississauga & GTA.</div>
          </a>

          {/* Card 2: Official Address */}
          <a
            href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
            target="_blank"
            rel="noreferrer"
            className="bg-[#07192F] p-6 rounded-2xl border border-white/10 shadow-xl hover:border-sky-400/40 transition-colors group block"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Central Headquarters</div>
            <div className="text-sm font-bold text-white mt-1 group-hover:text-sky-300 transition-colors leading-snug">
              510 Ravenstone Ct, Mississauga, ON L5R 3J4, Canada
            </div>
            <div className="text-xs text-sky-400 mt-2 flex items-center gap-1">
              <span>Open in Google Maps</span>
              <Navigation className="w-3 h-3" />
            </div>
          </a>

          {/* Card 3: WhatsApp Chat */}
          <a
            href="https://wa.me/14166763297"
            target="_blank"
            rel="noreferrer"
            className="bg-[#07192F] p-6 rounded-2xl border border-white/10 shadow-xl hover:border-emerald-500/40 transition-colors group block"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Instant Technician Chat</div>
            <div className="text-xl font-extrabold text-white mt-1 group-hover:text-emerald-300 transition-colors">WhatsApp Chat</div>
            <div className="text-xs text-slate-400 mt-2">Send photos of error codes or equipment nameplates.</div>
          </a>
        </div>
      </div>

      {/* 3. Form & Dispatch Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#07192F] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Request a Service Visit or Free Estimate
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill in your details below and an AWcomfort technician will confirm your appointment promptly.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-white/5 rounded-2xl border border-sky-400/30 space-y-4">
                <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You, {formData.fullName}!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  We have received your service request for <strong>{formData.serviceType}</strong> in <strong>{formData.city}</strong>. A dispatch specialist will reach out to you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-sky-400 hover:underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Rossi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={14}
                      placeholder="(416) 676-3297"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] tracking-wide"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      City / Region
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-[#07192F] text-white focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]"
                    >
                      <option value="Mississauga">Mississauga (Headquarters)</option>
                      <option value="Brampton">Brampton</option>
                      <option value="Toronto">Toronto</option>
                      <option value="Etobicoke">Etobicoke</option>
                      <option value="Oakville">Oakville</option>
                      <option value="Milton">Milton</option>
                      <option value="Vaughan">Vaughan</option>
                      <option value="Markham">Markham</option>
                      <option value="Other GTA">Other GTA Community</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-[#07192F] text-white focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]"
                    >
                      <option value="Furnace & Heating">Furnace & Heating</option>
                      <option value="Air Conditioning">Air Conditioning</option>
                      <option value="Heat Pumps">Heat Pumps & Hybrid Systems</option>
                      <option value="Pizza Oven Installation & Repairs">Pizza Oven Installation & Repairs</option>
                      <option value="Commercial Appliances & Refrigeration">Commercial Appliances & Refrigeration</option>
                      <option value="Gas Piping & TSSA Compliance">Gas Piping & TSSA Compliance</option>
                      <option value="Restaurant Ventilation & Ducting">Restaurant Ventilation & Ducting</option>
                      <option value="Commercial HVAC & Rooftop Units">Commercial HVAC & Rooftop Units (RTU)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'emergency', label: 'Emergency', sub: 'Within 1 Hour' },
                      { id: 'today', label: 'Same-Day', sub: 'Within 24 Hours' },
                      { id: 'scheduled', label: 'Scheduled', sub: 'Flexible Date' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: opt.id })}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          formData.urgency === opt.id
                            ? 'bg-[#0284C7] border-sky-400 text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-xs font-bold">{opt.label}</div>
                        <div className="text-[10px] text-slate-300 opacity-80">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Describe Your Issue or Equipment Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Oven pilot won't ignite, furnace making whistling sound, or need estimate on heat pump..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0284C7] hover:bg-[#0077B6] disabled:bg-sky-400 text-white py-3.5 px-6 rounded-xl text-sm font-bold shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to AW Comfort Dispatch...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Service Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info & Map Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#07192F] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>DISPATCH GUARANTEE</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Reliable Local Service from Mississauga
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our technicians are fully dispatched from our local headquarters at <strong>510 Ravenstone Ct, Mississauga, ON L5R 3J4</strong>. We carry universal ignitors, flame sensors, blowers, contactors, and gas testing instrumentation in our service vans to solve issues on the very first visit.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours:</span>
                    <span>24/7 Emergency Service • 7 Days a Week, 365 Days a Year</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Licensing:</span>
                    <span>TSSA Registered Contractor • Licensed G1/G2 Gas Fitters</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Headquarters Address:</span>
                    <a 
                      href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-300 hover:underline"
                    >
                      510 Ravenstone Ct, Mississauga, ON L5R 3J4, Canada
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:4166763297"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Emergency Dispatch: (416) 676-3297</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
