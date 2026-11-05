import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import {
  Calendar,
  MapPin,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const PackageCard = ({ pkg }) => {
  const { formatPrice, openCheckout, isWishlisted, toggleWishlist, searchParams } = useBooking();
  const [showItinerary, setShowItinerary] = useState(false);
  const wish = isWishlisted(pkg.id);

  const totalPrice = pkg.price * searchParams.travelers;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      
      {/* Top Image Banner */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            {pkg.badge}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(pkg)}
          aria-label="Save to wishlist"
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
            wish
              ? 'bg-rose-500 text-white'
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${wish ? 'fill-white' : ''}`} />
        </button>

        {/* Bottom overlay info on image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{pkg.duration}</span>
            <span>•</span>
            <MapPin className="w-3.5 h-3.5" />
            <span>{pkg.destination}</span>
          </div>
          <h3 className="text-xl font-black text-white leading-tight">
            {pkg.title}
          </h3>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <span className="text-xs font-bold text-slate-800">{pkg.rating}</span>
            <span className="text-xs text-slate-400">({pkg.reviews} verified reviews)</span>
          </div>

          {/* Key Inclusions */}
          <div className="space-y-2 mb-5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Package Includes:
            </div>
            {pkg.included.slice(0, 4).map((inc, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>{inc}</span>
              </div>
            ))}
          </div>

          {/* Toggle Itinerary Button */}
          <button
            onClick={() => setShowItinerary(!showItinerary)}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-between transition-colors border border-slate-200/60 mb-4"
          >
            <span>{showItinerary ? 'Hide Day-by-Day Itinerary' : 'View Complete Itinerary'}</span>
            {showItinerary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Expandable Itinerary Accordion */}
          {showItinerary && (
            <div className="space-y-3 mb-5 pl-2 border-l-2 border-blue-200 animate-in fade-in duration-200">
              {pkg.itinerary.map((item) => (
                <div key={item.day} className="text-xs">
                  <div className="font-bold text-blue-600">Day {item.day}: {item.title}</div>
                  <p className="text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Booking Row */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
              Total Package
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">
                {formatPrice(pkg.price)}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ person</span>
            </div>
            {searchParams.travelers > 1 && (
              <div className="text-[10px] text-slate-500">
                {formatPrice(totalPrice)} for {searchParams.travelers} travelers
              </div>
            )}
          </div>

          <button
            onClick={() => openCheckout(pkg, 'packages')}
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Book Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
