import React, { useState, useEffect } from 'react';
import { Phone, MapPin, ShieldCheck, Wrench, Send, CheckCircle2, Navigation, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteFormData } from '../types';
import { HVAC_IMAGES } from '../assets/images';
import { submitToWeb3Forms } from '../lib/web3forms';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    serviceType: preselectedService || 'Furnace',
    urgency: 'today',
    message: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

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
      alert('Please enter a valid 10-digit phone number (e.g. 416-676-3297).');
      return;
    }
    setIsSubmitting(true);

    // Send instant notification to AWcomfort@hotmail.com
    await submitToWeb3Forms({
      name: formData.fullName,
      phone: formData.phone,
      service: formData.serviceType,
      urgency: formData.urgency,
      message: formData.message,
      formType: 'Homepage Quote Form',
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#05111E] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 text-sky-400 text-xs font-extrabold uppercase tracking-widest mb-2">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Request a Free Quote
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Need a repair, installation or a custom commercial solution? Get in touch today — we're here to help.
          </p>
        </motion.div>

        {/* 2-Column: Left Form & Contact Details + Right Restaurant Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Form & Direct Phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#07192F]/90 backdrop-blur-md p-7 sm:p-9 rounded-3xl border border-white/10 shadow-2xl space-y-6"
          >
            {/* Quick Contact & Address Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
              <a
                href="tel:4166763297"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-2xl border border-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 fill-sky-400 text-sky-400 group-hover:fill-white" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Direct Hotline 24/7</div>
                  <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">(416) 676-3297</div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=510+Ravenstone+Ct,+Mississauga,+ON+L5R+3J4,+Canada"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-2xl border border-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors mt-0.5">
                  <MapPin className="w-5 h-5 text-sky-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span>Headquarters</span>
                    <Navigation className="w-2.5 h-2.5 text-sky-400" />
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    510 Ravenstone Ct, Mississauga, ON L5R 3J4, Canada
                  </div>
                </div>
              </a>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 text-center bg-white/5 rounded-2xl border border-sky-400/30 space-y-4"
                >
                  <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You, {formData.fullName}!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    We have received your request for <strong>{formData.serviceType}</strong>. 
                    An AWcomfort specialist will call you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        serviceType: 'Furnace',
                        urgency: 'today',
                        message: '',
                      });
                    }}
                    className="mt-2 text-xs font-bold text-sky-400 hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
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
                        placeholder="e.g. Michael Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
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
                        placeholder="(416) 123-4567"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all tracking-wide"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-[#07192F] text-white focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                    >
                      <option value="Furnace">Furnace (Heating)</option>
                      <option value="Air Conditioning">Air Conditioning</option>
                      <option value="Heat Pumps">Heat Pumps</option>
                      <option value="Heating & Cooling Systems">Heating & Cooling Systems</option>
                      <option value="Commercial Appliances">Commercial Appliances</option>
                      <option value="Gas Piping">Gas Piping</option>
                      <option value="Pizza Oven Installation & Repairs">Pizza Oven Installation & Repairs</option>
                      <option value="Restaurant Ventilation & Ducting">Restaurant Ventilation & Ducting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'emergency' })}
                        className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                          formData.urgency === 'emergency'
                            ? 'border-red-500 bg-red-500/20 text-red-300'
                            : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        🚨 Emergency (24/7)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'today' })}
                        className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                          formData.urgency === 'today'
                            ? 'border-sky-400 bg-sky-500/20 text-sky-300'
                            : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        Today
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'scheduled' })}
                        className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                          formData.urgency === 'scheduled'
                            ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                            : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        Scheduled / Quote
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Tell us about your project or issue
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what you need help with..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] disabled:bg-sky-400 text-white py-3.5 px-6 rounded-xl font-bold shadow-lg shadow-sky-500/25 transition-all text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request to AW Comfort...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Free Quote Request</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Atmospheric Restaurant & Pizza Oven Photo with Brand Script */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full min-h-[420px] bg-slate-950 group">
              <img
                src={HVAC_IMAGES.restaurantPizzaOven}
                alt="Commercial pizza oven and restaurant kitchen service by AWcomfort"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05111E] via-[#05111E]/40 to-transparent" />
              
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

              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-2 select-none pointer-events-none">
                <span className="text-3xl sm:text-4xl font-script text-sky-200 drop-shadow-lg block">
                  Your Comfort Our Priority
                </span>
                <p className="text-xs text-slate-300 font-medium max-w-sm">
                  Full commercial kitchen installations, custom gas piping, pizza oven maintenance, and certified 24/7 HVAC care.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
