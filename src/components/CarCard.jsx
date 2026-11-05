import React from 'react';
import { useBooking } from '../context/BookingContext';
import {
  Users,
  Briefcase,
  Gauge,
  ShieldCheck,
  Check,
  Heart,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const CarCard = ({ car }) => {
  const { formatPrice, openCheckout, isWishlisted, toggleWishlist } = useBooking();
  const wish = isWishlisted(car.id);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      
      {/* Car Image Preview */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {car.category}
          </span>
        </div>

        <button
          onClick={() => toggleWishlist(car)}
          aria-label="Save to wishlist"
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            wish
              ? 'bg-rose-500 text-white'
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${wish ? 'fill-white' : ''}`} />
        </button>
      </div>

      {/* Car Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {car.name}
            </h3>
            <span className="text-[11px] font-semibold text-slate-400">
              {car.supplier}
            </span>
          </div>

          {/* Specs icons */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 my-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              <span>{car.bags} Bags</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-slate-400" />
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-1.5 mb-4">
            {car.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {car.freeCancellation && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free cancellation up to 24h prior</span>
            </div>
          )}
        </div>

        {/* Price & Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
              Daily Rate
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">
                {formatPrice(car.pricePerDay)}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ day</span>
            </div>
            <div className="text-[10px] text-slate-400">
              {car.mileage}
            </div>
          </div>

          <button
            onClick={() => openCheckout(car, 'cars')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1"
          >
            <span>Reserve</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
