import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import {
  Plane,
  Clock,
  Luggage,
  Wifi,
  Utensils,
  ChevronDown,
  ChevronUp,
  Heart,
  Leaf,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export const FlightCard = ({ flight }) => {
  const { formatPrice, openCheckout, isWishlisted, toggleWishlist, searchParams } = useBooking();
  const [isExpanded, setIsExpanded] = useState(false);
  const wish = isWishlisted(flight.id);

  // Calculate traveler-multiplied price
  const totalPrice = flight.price * searchParams.travelers;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      
      {/* Top Banner with Airline info and badges */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl shadow-sm">
              {flight.logo}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-slate-900">{flight.airline}</h4>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {flight.flightNumber}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {flight.aircraft} • {flight.class} Class
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {flight.carbonOffset && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <Leaf className="w-3 h-3 text-emerald-600" />
                {flight.carbonOffset}
              </span>
            )}
            
            <button
              onClick={() => toggleWishlist(flight)}
              aria-label="Save to wishlist"
              className={`p-2.5 rounded-xl border transition-all ${
                wish
                  ? 'bg-rose-50 border-rose-200 text-rose-500'
                  : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${wish ? 'fill-rose-500' : ''}`} />
            </button>
          </div>

        </div>

        {/* Flight Route Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
          
          {/* Departure */}
          <div className="md:col-span-3 text-left">
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-mono">
              {flight.departureTime}
            </div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">{flight.origin}</div>
            <div className="text-[11px] text-slate-400">Terminal 4 • Scheduled</div>
          </div>

          {/* Timeline Center Indicator */}
          <div className="md:col-span-4 flex flex-col items-center justify-center px-2">
            <div className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{flight.duration}</span>
            </div>
            
            <div className="relative w-full flex items-center">
              <div className="h-0.5 w-full bg-slate-200 rounded-full" />
              <div className="absolute left-0 w-2 h-2 rounded-full bg-blue-600" />
              <div className="absolute right-0 w-2 h-2 rounded-full bg-blue-600" />
              <Plane className="absolute left-1/2 -translate-x-1/2 w-4 h-4 text-blue-600 bg-slate-50 px-0.5 transform rotate-90" />
            </div>

            <span className={`text-[11px] font-bold mt-1 ${
              flight.stops === 0 ? 'text-emerald-600' : 'text-amber-600'
            }`}>
              {flight.stopDetails}
            </span>
          </div>

          {/* Arrival */}
          <div className="md:col-span-2 text-left md:text-right">
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-mono">
              {flight.arrivalTime}
            </div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">{flight.destination}</div>
            <div className="text-[11px] text-slate-400">Direct Gate Access</div>
          </div>

          {/* Price & Action */}
          <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-slate-200/80 pt-3 md:pt-0 md:pl-4">
            <div className="text-left md:text-right">
              <div className="text-2xl font-black text-blue-600 tracking-tight">
                {formatPrice(flight.price)}
              </div>
              <div className="text-[11px] text-slate-500">
                per person {searchParams.travelers > 1 ? `(${formatPrice(totalPrice)} total)` : ''}
              </div>
            </div>

            <button
              onClick={() => openCheckout(flight, 'flights')}
              className="mt-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Book Flight</span>
            </button>
          </div>

        </div>

        {/* Feature quick tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Luggage className="w-3.5 h-3.5 text-slate-400" />
              <span>2 Check-in Bags</span>
            </span>
            <span className="flex items-center gap-1">
              <Wifi className="w-3.5 h-3.5 text-slate-400" />
              <span>Free Wi-Fi</span>
            </span>
            <span className="flex items-center gap-1">
              <Utensils className="w-3.5 h-3.5 text-slate-400" />
              <span>Meals Included</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {flight.availableSeats <= 5 && (
              <span className="text-[11px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md">
                Only {flight.availableSeats} seats left!
              </span>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>{isExpanded ? 'Hide Details' : 'Flight Info'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Expandable Flight Specifications */}
      {isExpanded && (
        <div className="bg-slate-50 border-t border-slate-100 p-5 sm:p-6 text-xs text-slate-600 space-y-3 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                Baggage Allowance
              </div>
              <p className="text-slate-500">1 Carry-on (7kg) + 2 Checked Bags (23kg each included free).</p>
            </div>
            
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                Cancellation & Changes
              </div>
              <p className="text-slate-500">Free cancellation within 24 hours of booking. Change fee $0 + fare difference.</p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-indigo-500" />
                In-flight Comfort
              </div>
              <p className="text-slate-500">32-inch seat pitch, individual USB power outlets, multi-course dining, complimentary drinks.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
