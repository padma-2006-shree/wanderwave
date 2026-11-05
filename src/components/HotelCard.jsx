import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import {
  Star,
  MapPin,
  Heart,
  Coffee,
  Wifi,
  Waves,
  ShieldCheck,
  Check,
  ChevronRight
} from 'lucide-react';

export const HotelCard = ({ hotel }) => {
  const { formatPrice, openCheckout, isWishlisted, toggleWishlist } = useBooking();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const wish = isWishlisted(hotel.id);

  const images = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : [hotel.image];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
      
      {/* Image Gallery Column */}
      <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden">
        <img
          src={images[activeImageIndex]}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
        
        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(hotel)}
          aria-label="Save to wishlist"
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
            wish
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500 shadow-md'
          }`}
        >
          <Heart className={`w-4 h-4 ${wish ? 'fill-white' : ''}`} />
        </button>

        {/* Hotel Type Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {hotel.type}
          </span>
        </div>

        {/* Thumbnail switcher if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeImageIndex === idx ? 'bg-white w-5' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Column */}
      <div className="p-6 md:w-7/12 flex flex-col justify-between">
        <div>
          {/* Header Row: Stars, Name, Location */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(hotel.stars || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1">
                  {hotel.rating}
                </span>
                <span className="text-[11px] text-slate-400">
                  ({hotel.reviews} reviews)
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {hotel.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{hotel.location}</span>
          </div>

          {/* Highlights & Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {hotel.features.slice(0, 4).map((feature, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1"
              >
                <Check className="w-3 h-3 text-emerald-500" />
                {feature}
              </span>
            ))}
          </div>

          {/* Perks list */}
          <div className="space-y-1 mb-5">
            {hotel.perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Booking Row */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
              Starting from
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">
                {formatPrice(hotel.pricePerNight)}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ night</span>
            </div>
            <div className="text-[10px] text-emerald-600 font-bold">
              Includes taxes & resort fees
            </div>
          </div>

          <button
            onClick={() => openCheckout(hotel, 'hotels')}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Book Stay</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
