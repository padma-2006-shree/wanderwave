import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import {
  Plane,
  Building2,
  Package,
  Car,
  Calendar,
  Users,
  MapPin,
  ArrowRightLeft,
  Search,
  ShieldCheck,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const HeroSection = () => {
  const { searchParams, setSearchParams } = useBooking();
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const categories = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Stays & Resorts', icon: Building2 },
    { id: 'packages', label: 'Curated Packages', icon: Package },
    { id: 'cars', label: 'Car Rentals', icon: Car },
  ];

  const popularDestinations = [
    { name: 'Bali', tag: 'Tropical' },
    { name: 'Swiss Alps', tag: 'Snow & Peaks' },
    { name: 'Tokyo', tag: 'Culture' },
    { name: 'Maldives', tag: 'Overwater' },
    { name: 'Santorini', tag: 'Sunsets' },
    { name: 'Paris', tag: 'Romance' }
  ];

  const handleQuickDestination = (destName) => {
    setSearchParams(prev => ({
      ...prev,
      destination: destName
    }));
    const resultsSection = document.getElementById('travel-inventory');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSwapLocations = () => {
    setSearchParams(prev => ({
      ...prev,
      origin: prev.destination || 'Tokyo (HND)',
      destination: prev.origin
    }));
  };

  return (
    <section className="relative pt-6 pb-20 overflow-hidden">
      {/* Background with layered gradients and image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Travel Background"
          className="w-full h-full object-cover object-center filter brightness-[0.4] scale-105 transform motion-safe:animate-pulse duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14">
        
        {/* Hero Top Tagline & Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Over 1,200,000+ Dream Trips Booked in 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Wander Further. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Live the Extraordinary.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Effortlessly book premium flights, breathtaking cliffside resorts, all-inclusive alpine journeys, and sports cars with zero surprise fees.
          </p>
        </div>

        {/* Central Search Card Box */}
        <div id="search-section" className="mt-10 max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 border border-white/40">
            
            {/* Category Nav Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200/80 pb-4 mb-5 overflow-x-auto scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = searchParams.category === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSearchParams(prev => ({ ...prev, category: cat.id }))}
                    className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Search Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              
              {/* Origin / Pick-up (Applicable for Flights & Cars) */}
              {(searchParams.category === 'flights' || searchParams.category === 'cars') && (
                <div className="md:col-span-3 relative">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {searchParams.category === 'flights' ? 'Departure From' : 'Pick-up City'}
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <input
                      type="text"
                      value={searchParams.origin}
                      onChange={(e) => setSearchParams(prev => ({ ...prev, origin: e.target.value }))}
                      placeholder={searchParams.category === 'flights' ? "New York (JFK)" : "San Francisco Airport"}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Swap Button for Flights */}
              {searchParams.category === 'flights' && (
                <div className="hidden md:flex md:col-span-1 items-end justify-center pb-2">
                  <button
                    onClick={handleSwapLocations}
                    type="button"
                    title="Swap Origin & Destination"
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 text-slate-500 hover:text-blue-600 shadow-sm transition-all hover:rotate-180"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Destination (Flights, Hotels, Packages) */}
              <div className={`${
                searchParams.category === 'flights'
                  ? 'md:col-span-3'
                  : searchParams.category === 'hotels' || searchParams.category === 'packages'
                  ? 'md:col-span-4'
                  : 'md:col-span-4'
              } relative`}>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Destination or Property
                </label>
                <div className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 transition-colors">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <input
                    type="text"
                    value={searchParams.destination}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, destination: e.target.value }))}
                    placeholder="e.g. Bali, Swiss Alps, Tokyo..."
                    className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                  {searchParams.destination && (
                    <button
                      onClick={() => setSearchParams(prev => ({ ...prev, destination: '' }))}
                      className="text-xs text-slate-400 hover:text-slate-600 px-1 font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Dates: Depart / Check-in */}
              <div className={`${
                searchParams.category === 'flights' ? 'md:col-span-2' : 'md:col-span-3'
              } relative`}>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {searchParams.category === 'hotels' ? 'Check-in' : 'Departure Date'}
                </label>
                <div className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 transition-colors">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                  <input
                    type="date"
                    value={searchParams.departDate}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, departDate: e.target.value }))}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Dates: Return / Check-out (Except for one-way packages if needed) */}
              <div className={`${
                searchParams.category === 'flights' ? 'md:col-span-2' : 'md:col-span-2'
              } relative`}>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {searchParams.category === 'hotels' ? 'Check-out' : 'Return Date'}
                </label>
                <div className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 transition-colors">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                  <input
                    type="date"
                    value={searchParams.returnDate}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, returnDate: e.target.value }))}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests / Travelers & Class Popover */}
              <div className={`${
                searchParams.category === 'flights' ? 'md:col-span-1' : 'md:col-span-3'
              } relative`}>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Travelers
                </label>
                <button
                  type="button"
                  onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                  className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 text-left transition-colors"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <Users className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {searchParams.travelers} {searchParams.travelers === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>

                {showTravelerDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in zoom-in-95">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-bold text-slate-800">Adult Travelers</div>
                        <div className="text-[10px] text-slate-400">Ages 12+</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSearchParams(p => ({ ...p, travelers: Math.max(1, p.travelers - 1) }))}
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{searchParams.travelers}</span>
                        <button
                          type="button"
                          onClick={() => setSearchParams(p => ({ ...p, travelers: Math.min(10, p.travelers + 1) }))}
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {searchParams.category === 'flights' && (
                      <div className="pt-3">
                        <div className="text-xs font-bold text-slate-800 mb-2">Cabin Class</div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {['Economy', 'Premium', 'Business', 'First'].map((cls) => (
                            <button
                              key={cls}
                              type="button"
                              onClick={() => setSearchParams(p => ({ ...p, travelClass: cls }))}
                              className={`py-1.5 px-2 rounded-lg text-xs font-semibold ${
                                searchParams.travelClass === cls
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                              }`}
                            >
                              {cls}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setShowTravelerDropdown(false)}
                      className="w-full mt-3 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Quick Actions Row */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Popular Destination Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none py-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                  Trending:
                </span>
                {popularDestinations.map(item => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleQuickDestination(item.name)}
                    className="px-3 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-full text-xs font-semibold transition-colors shrink-0"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Find Deals Button */}
              <button
                type="button"
                onClick={() => {
                  const resultsSection = document.getElementById('travel-inventory');
                  if (resultsSection) {
                    resultsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl active:scale-98 transition-all shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Search Available {searchParams.category.toUpperCase()}</span>
              </button>

            </div>

          </div>
        </div>

        {/* Floating Perks Banner */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-white/90 text-xs">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">100% Verified Stays</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10">
            <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-medium">Flexible Cancellations</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10">
            <Plane className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="font-medium">Instant E-Ticket Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
