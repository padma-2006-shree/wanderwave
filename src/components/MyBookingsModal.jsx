import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import {
  X,
  Ticket,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Printer,
  ChevronRight,
  Plane,
  Building2,
  Package,
  Car
} from 'lucide-react';

export const MyBookingsModal = () => {
  const {
    isMyBookingsOpen,
    setIsMyBookingsOpen,
    bookings,
    cancelBooking,
    formatPrice
  } = useBooking();

  const [activeTicket, setActiveTicket] = useState(null);

  if (!isMyBookingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full my-auto overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">My Travel Bookings</h2>
              <p className="text-[11px] text-slate-500">{bookings.length} reservations recorded</p>
            </div>
          </div>

          <button
            onClick={() => setIsMyBookingsOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          
          {bookings.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Ticket className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-700">No Bookings Found Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Discover your next destination and book a flight, hotel, or vacation package to see it here!
              </p>
              <button
                onClick={() => setIsMyBookingsOpen(false)}
                className="mt-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20"
              >
                Browse Deals
              </button>
            </div>
          ) : (
            bookings.map((booking) => {
              const isCancelled = booking.status === 'Cancelled';
              return (
                <div
                  key={booking.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCancelled
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {booking.id}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Booked on {booking.bookingDate}
                      </span>
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      isCancelled
                        ? 'bg-rose-50 text-rose-600 border border-rose-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {booking.item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{booking.item.subtitle}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Passenger: {booking.traveler.name} • {booking.traveler.seats}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-black text-slate-900">
                        {formatPrice(booking.pricing.totalPaid)}
                      </div>
                      <div className="text-[10px] text-slate-400">Total Paid</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    {!isCancelled && (
                      <button
                        onClick={() => cancelBooking(booking.id)}
                        className="text-xs font-semibold text-rose-500 hover:text-rose-700 transition-colors"
                      >
                        Cancel & Refund Trip
                      </button>
                    )}
                    {isCancelled && (
                      <span className="text-xs text-slate-400 italic">
                        Refund processed to original card
                      </span>
                    )}

                    <button
                      onClick={() => window.print()}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print E-Ticket</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}

        </div>

      </div>

    </div>
  );
};
