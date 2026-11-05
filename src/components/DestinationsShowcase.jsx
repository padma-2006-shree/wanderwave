import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { destinations } from '../data/travelData';
import {
  MapPin,
  Star,
  Sun,
  Calendar,
  ArrowRight,
  Sparkles,
  X,
  Check
} from 'lucide-react';

export const DestinationsShowcase = () => {
  const { formatPrice, setSearchParams } = useBooking();
  const [activeModalDest, setActiveModalDest] = useState(null);

  const handleSelectDestination = (dest) => {
    setSearchParams(prev => ({
      ...prev,
      destination: dest.name
    }));
    const resultsSection = document.getElementById('travel-inventory');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Trending Getaways</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Hand-picked Wonders for 2026
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Curated by global expedition leaders with guaranteed best rates.
            </p>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                    {dest.tag}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{dest.rating}</span>
                </div>

                {/* Bottom title info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{dest.country} • {dest.region}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-5 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-700">{dest.weather}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{dest.bestTimeToVisit}</span>
                    </div>
                  </div>
                </div>

                {/* Footer with Price & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Flights & Stays from
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      {formatPrice(dest.startingPrice)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalDest(dest)}
                      className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors"
                    >
                      Guide
                    </button>
                    <button
                      onClick={() => handleSelectDestination(dest)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Destination Detailed Guide Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-xl w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="relative h-60">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <button
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-xs uppercase tracking-wider font-bold text-sky-300">
                  {activeModalDest.country}
                </span>
                <h3 className="text-2xl font-black text-white">{activeModalDest.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalDest.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Top Highlights & Must-See Attractions:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeModalDest.topAttractions.map((att, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 border border-slate-100"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{att}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Package Deals Starting At</div>
                  <div className="text-xl font-black text-blue-600">
                    {formatPrice(activeModalDest.startingPrice)}
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleSelectDestination(activeModalDest);
                    setActiveModalDest(null);
                  }}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20"
                >
                  Show Available Stays & Flights
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
