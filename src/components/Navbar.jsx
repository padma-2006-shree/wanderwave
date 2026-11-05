import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import {
  Compass,
  Plane,
  Building2,
  Package,
  Car,
  Heart,
  Ticket,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Globe
} from 'lucide-react';

export const Navbar = () => {
  const {
    searchParams,
    setSearchParams,
    currency,
    setCurrency,
    currencies,
    wishlist,
    bookings,
    setIsMyBookingsOpen,
    setIsSavedTripsOpen
  } = useBooking();

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navCategories = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Stays', icon: Building2 },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'cars', label: 'Car Rentals', icon: Car },
  ];

  const handleNavClick = (catId) => {
    setSearchParams(prev => ({ ...prev, category: catId }));
    setIsMobileMenuOpen(false);
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Wander<span className="text-blue-600">Wave</span>
                </span>
                <span className="hidden sm:block text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Luxury & Global Travel
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
              {navCategories.map((item) => {
                const Icon = item.icon;
                const isActive = searchParams.category === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Currency Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/80"
              >
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{currency} ({currencies[currency]?.symbol})</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Select Currency
                  </div>
                  {Object.entries(currencies).map(([code, data]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrency(code);
                        setIsCurrencyOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                        currency === code ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{data.name}</span>
                      <span className="font-mono text-slate-500 font-bold">{data.symbol} {code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Trips / Wishlist */}
            <button
              onClick={() => setIsSavedTripsOpen(true)}
              className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/80"
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}`} />
              <span className="hidden xl:inline">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-rose-500 text-white rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* My Bookings */}
            <button
              onClick={() => setIsMyBookingsOpen(true)}
              className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/80"
            >
              <Ticket className="w-4 h-4 text-blue-600" />
              <span>My Trips</span>
              {bookings.length > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-600 text-white rounded-full">
                  {bookings.length}
                </span>
              )}
            </button>

            {/* Special Promo Badge / Button */}
            <a
              href="#deals"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>20% Off Coupon</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMyBookingsOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 relative"
            >
              <Ticket className="w-5 h-5 text-blue-600" />
              {bookings.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navCategories.map((item) => {
              const Icon = item.icon;
              const isActive = searchParams.category === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-500">Currency</div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="text-xs font-bold bg-slate-100 py-1.5 px-3 rounded-lg border border-slate-200"
            >
              {Object.entries(currencies).map(([code, data]) => (
                <option key={code} value={code}>
                  {code} ({data.symbol})
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsSavedTripsOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 text-center text-xs font-bold rounded-xl border border-slate-200 text-slate-700"
            >
              Wishlist ({wishlist.length})
            </button>
            <button
              onClick={() => {
                setIsMyBookingsOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 text-center text-xs font-bold rounded-xl bg-blue-600 text-white"
            >
              My Trips ({bookings.length})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
