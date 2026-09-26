import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ArrowRight, Flame, Snowflake, Zap, UtensilsCrossed, ShieldCheck, Wind, Building, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Commercial', path: '/commercial' },
    { label: 'About Us', path: '/about' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Contact', path: '/contact' },
  ];

  const serviceDropdownItems = [
    { label: 'Commercial Pizza Ovens', path: '/services/pizza-ovens', icon: Flame, tag: 'Specialty' },
    { label: 'Furnace & Heating', path: '/services/furnace-heating', icon: Flame },
    { label: 'Air Conditioning', path: '/services/air-conditioning', icon: Snowflake },
    { label: 'Heat Pumps & Hybrid', path: '/services/heat-pumps', icon: Zap },
    { label: 'Commercial Appliances & Coolers', path: '/services/commercial-appliances', icon: UtensilsCrossed },
    { label: 'Gas Piping & TSSA Certification', path: '/services/gas-piping', icon: ShieldCheck },
    { label: 'Restaurant Ventilation & Hoods', path: '/services/ventilation-ductwork', icon: Wind },
    { label: 'Packaged Rooftop HVAC (RTU)', path: '/services/commercial-hvac', icon: Building },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-[padding,background-color,border-color] duration-200 ${
        isScrolled
          ? 'bg-[#06121E]/98 shadow-lg border-b border-white/10 py-3'
          : 'bg-[#071421] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Link to Home */}
          <Link to="/" id="brand-logo-link" aria-label="AWcomfort Home" className="inline-block">
            <Logo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-1.5 ${
                        isActive(link.path)
                          ? 'text-sky-400 font-bold'
                          : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-2 w-80 bg-[#0A1A2C] border border-white/10 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl"
                        >
                          <div className="p-2 border-b border-white/10 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Specialized Services
                            </span>
                            <Link
                              to="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="text-[11px] font-bold text-sky-400 hover:text-white transition-colors"
                            >
                              View All →
                            </Link>
                          </div>

                          <div className="py-1 space-y-0.5 max-h-[380px] overflow-y-auto">
                            {serviceDropdownItems.map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors group"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <IconComponent className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                                    <span>{item.label}</span>
                                  </div>
                                  {item.tag && (
                                    <span className="bg-[#0284C7] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                                      {item.tag}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-colors py-1.5 ${
                    isActive(link.path)
                      ? 'text-sky-400 font-bold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Phone & Get a Free Quote Button */}
          <div className="hidden md:flex items-center gap-5">
            {/* Phone badge */}
            <a
              href="tel:4166763297"
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-9 h-9 rounded-full bg-[#0284C7] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors">
                  (416) 676-3297
                </span>
                <span className="text-[10px] font-medium text-slate-400 leading-tight">
                  24/7 Emergency Service
                </span>
              </div>
            </a>

            {/* Get a Free Quote button */}
            <motion.button
              type="button"
              onClick={onOpenBookingModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0077B6] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-sky-500/25 transition-colors cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="tel:4166763297"
              className="w-8 h-8 rounded-full bg-[#0284C7] flex items-center justify-center text-white"
              aria-label="Call emergency phone"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#071421] border-t border-white/10 px-4 py-5 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <Logo variant="dark" size="sm" />
              <span className="text-[11px] font-semibold text-slate-400">TSSA Registered</span>
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 font-medium ${isActive('/') ? 'text-sky-400 font-bold' : 'text-slate-200'}`}
              >
                Home
              </Link>
              
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 font-medium ${isActive('/services') ? 'text-sky-400 font-bold' : 'text-slate-200'}`}
              >
                All Services
              </Link>

              {/* Sub-services on mobile */}
              <div className="pl-4 space-y-2 border-l border-white/10 my-1">
                <Link
                  to="/services/pizza-ovens"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-300 hover:text-white"
                >
                  🍕 Commercial Pizza Ovens
                </Link>
                <Link
                  to="/services/furnace-heating"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-300 hover:text-white"
                >
                  🔥 Furnace & Heating
                </Link>
                <Link
                  to="/services/air-conditioning"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-300 hover:text-white"
                >
                  ❄️ Air Conditioning
                </Link>
                <Link
                  to="/services/heat-pumps"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-300 hover:text-white"
                >
                  ⚡ Heat Pumps & Rebates
                </Link>
                <Link
                  to="/services/commercial-appliances"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-300 hover:text-white"
                >
                  🍽️ Commercial Refrigeration
                </Link>
              </div>

              <Link
                to="/commercial"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 font-medium ${isActive('/commercial') ? 'text-sky-400 font-bold' : 'text-slate-200'}`}
              >
                Commercial Solutions
              </Link>
              
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 font-medium ${isActive('/about') ? 'text-sky-400 font-bold' : 'text-slate-200'}`}
              >
                About Us
              </Link>

              <Link
                to="/service-areas"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 font-medium ${isActive('/service-areas') ? 'text-sky-400 font-bold' : 'text-slate-200'}`}
              >
                Service Areas (510 Ravenstone Ct)
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 font-medium ${isActive('/contact') ? 'text-sky-400 font-bold' : 'text-slate-200'}`}
              >
                Contact & Dispatch
              </Link>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:4166763297"
                className="flex items-center justify-center gap-2 bg-white/10 text-white py-2.5 px-4 rounded-xl text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call (416) 676-3297 (24/7)</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0284C7] text-white py-3 px-4 rounded-xl text-xs font-bold cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
