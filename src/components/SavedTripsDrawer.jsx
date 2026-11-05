import React from 'react';
import { useBooking } from '../context/BookingContext';
import {
  X,
  Heart,
  Trash2,
  ArrowRight,
  Plane,
  Building2,
  Package,
  Car
} from 'lucide-react';

export const SavedTripsDrawer = () => {
  const {
    isSavedTripsOpen,
    setIsSavedTripsOpen,
    wishlist,
    toggleWishlist,
    openCheckout,
    formatPrice
  } = useBooking();

  if (!isSavedTripsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-base font-bold text-slate-900">Saved Wishlist</h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
              {wishlist.length}
            </span>
          </div>

          <button
            onClick={() => setIsSavedTripsOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-rose-50 text-rose-300 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-700">Your Wishlist is Empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Click the heart icon on any flight, stay, or vacation package to save it here for later!
              </p>
            </div>
          ) : (
            wishlist.map((item) => {
              const itemType = item.flightNumber
                ? 'flights'
                : item.stars
                ? 'hotels'
                : item.duration
                ? 'packages'
                : 'cars';

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200/80 hover:border-blue-200 bg-white shadow-sm flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt="Item"
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                    )}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.name || item.title || `${item.airline} ${item.flightNumber}`}
                      </h4>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.destination || item.location || `${item.origin} → ${item.destination}`}
                      </div>
                      <div className="text-xs font-black text-blue-600 mt-1">
                        {formatPrice(item.price || item.pricePerNight || item.pricePerDay || 0)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        setIsSavedTripsOpen(false);
                        openCheckout(item, itemType);
                      }}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => toggleWishlist(item)}
                      title="Remove from saved"
                      className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
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
