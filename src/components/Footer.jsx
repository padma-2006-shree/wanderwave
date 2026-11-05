import React from 'react';
import { Compass, ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">
                Wander<span className="text-blue-500">Wave</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Connecting modern travelers with exceptional journeys across 190+ countries. Certified IATA partner, ATOL protected, and SSL bank-grade secured.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                PCI-DSS Level 1 Compliant
              </span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#search-section" className="hover:text-white transition-colors">Flights & Airlines</a></li>
              <li><a href="#search-section" className="hover:text-white transition-colors">Luxury Hotels & Villas</a></li>
              <li><a href="#search-section" className="hover:text-white transition-colors">All-Inclusive Packages</a></li>
              <li><a href="#search-section" className="hover:text-white transition-colors">Car Rentals</a></li>
              <li><a href="#deals" className="hover:text-white transition-colors">Last Minute Escapes</a></li>
            </ul>
          </div>

          {/* Column 2: Destinations */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Top Destinations
            </h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition-colors">Bali, Indonesia</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Swiss Alps, Switzerland</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Kyoto & Tokyo, Japan</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Santorini, Greece</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Maldives Overwater</span></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Support & Legal
            </h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition-colors">24/7 Help Desk</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Baggage Guidelines</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Cancellation Terms</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Privacy & Cookies</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 WanderWave Global Booking Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for globetrotters everywhere.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
