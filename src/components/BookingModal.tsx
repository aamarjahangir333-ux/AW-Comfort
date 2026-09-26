import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, Send, Flame, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { submitToWeb3Forms } from '../lib/web3forms';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Furnace',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService, isOpen]);

  // Auto-format Canadian/North American phone number e.g. (416) 676-3297
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
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      alert('Please enter a valid 10-digit phone number (e.g. 416-676-3297).');
      return;
    }
    setIsSubmitting(true);

    const generatedRef = `#AW-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedRef);

    // Send instant notification to AWcomfort@hotmail.com via Web3Forms
    await submitToWeb3Forms({
      name,
      phone,
      service,
      notes,
      formType: 'Booking Modal Quote',
    });

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setName('');
      setPhone('');
      setNotes('');
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="booking-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350, duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative"
          >
            {/* Close button */}
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Confirmed!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you {name}. An AWcomfort licensed technician will contact you on{' '}
                  <strong>{phone}</strong> to confirm your appointment details.
                </p>
                <div className="pt-2">
                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-sky-50 text-[#0284C7] rounded-full">
                    Booking Reference: {refCode || '#AW-728192'}
                  </span>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Logo variant="light" size="sm" />
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    Fast Response
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#07192F] tracking-tight">
                  Request Service or Free Quote
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-6">
                  TSSA Registered technicians serving Mississauga and the Greater Toronto Area (GTA). Direct notification to our dispatch team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name or Business *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Pizza Bella"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={14}
                      placeholder="(416) 676-3297"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] transition-all font-medium tracking-wide"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">10-digit Canadian phone number (e.g. 416-676-3297)</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Type *
                    </label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="Furnace" className="text-slate-900 bg-white">Furnace (Heating)</option>
                        <option value="Air Conditioning" className="text-slate-900 bg-white">Air Conditioning</option>
                        <option value="Heat Pumps" className="text-slate-900 bg-white">Heat Pumps</option>
                        <option value="Heating & Cooling Systems" className="text-slate-900 bg-white">Heating & Cooling Systems</option>
                        <option value="Commercial Appliances" className="text-slate-900 bg-white">Commercial Appliances (Refrigeration/Coolers)</option>
                        <option value="Gas Piping" className="text-slate-900 bg-white">Gas Piping & TSSA Red Tag Clearance</option>
                        <option value="Pizza Oven Installation & Repairs" className="text-slate-900 bg-white">Pizza Oven Installation & Repairs</option>
                        <option value="Restaurant Ventilation & Ducting" className="text-slate-900 bg-white">Restaurant Ventilation & Ducting</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-600">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Issue Details or Location (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe the unit or address in Mississauga / GTA..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] transition-all font-medium"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] disabled:bg-sky-400 text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Confirm Request</span>
                        </>
                      )}
                    </motion.button>

                    <motion.a
                      href="tel:4166763297"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-5 rounded-xl font-bold text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#0284C7] fill-[#0284C7]" />
                      <span>(416) 676-3297</span>
                    </motion.a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
