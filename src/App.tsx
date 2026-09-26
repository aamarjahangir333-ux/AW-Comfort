import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BookingModal } from './components/BookingModal';

// Primary landing page loaded immediately for instant First Paint
import { HomePage } from './pages/HomePage';

// Subroutes code-split for minimal initial bundle & faster loading
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const CommercialPage = lazy(() => import('./pages/CommercialPage').then(m => ({ default: m.CommercialPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage').then(m => ({ default: m.ServiceAreasPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const RouteLoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-sky-500 border-t-transparent animate-spin" />
  </div>
);

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Furnace');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#05111E] text-white selection:bg-sky-500 selection:text-white flex flex-col">
        {/* Top Sticky Navigation Bar */}
        <Navbar onOpenBookingModal={() => handleOpenBooking()} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route
                path="/"
                element={<HomePage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/services"
                element={<ServicesPage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/services/:serviceId"
                element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/commercial"
                element={<CommercialPage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/about"
                element={<AboutPage onOpenBooking={() => handleOpenBooking()} />}
              />
              <Route
                path="/service-areas"
                element={<ServiceAreasPage onOpenBooking={() => handleOpenBooking()} />}
              />
              <Route
                path="/contact"
                element={<ContactPage />}
              />
              {/* Fallback to Home */}
              <Route
                path="*"
                element={<HomePage onOpenBooking={handleOpenBooking} />}
              />
            </Routes>
          </Suspense>
        </main>

        {/* Universal Multi-Column High-End Industrial Footer */}
        <Footer onOpenBookingModal={() => handleOpenBooking()} />

        {/* Interactive Booking & Fast Quote Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
}
