import React from 'react';
import { useBooking } from '../context/BookingContext';
import { SlidersHorizontal, ArrowUpDown, RotateCcw } from 'lucide-react';

export const FilterSortBar = ({ totalCount }) => {
  const { filters, setFilters, formatPrice, searchParams } = useBooking();

  const handlePriceChange = (e) => {
    setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }));
  };

  const handleReset = () => {
    setFilters({
      maxPrice: 3000,
      minRating: 0,
      stops: 'all',
      sortBy: 'recommended'
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Results Counter & Active Category */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">
              {totalCount} {searchParams.category.toUpperCase()} Available
            </h3>
            <p className="text-xs text-slate-500">
              {searchParams.destination
                ? `Filtered for "${searchParams.destination}"`
                : 'Showing all top global deals'}
            </p>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          
          {/* Price Range Slider */}
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Max Price:</span>
            <input
              type="range"
              min="100"
              max="3000"
              step="50"
              value={filters.maxPrice}
              onChange={handlePriceChange}
              className="w-24 sm:w-28 accent-blue-600 cursor-pointer"
            />
            <span className="text-xs font-bold text-slate-800 font-mono">
              {formatPrice(filters.maxPrice)}
            </span>
          </div>

          {/* Rating Filter */}
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => setFilters(prev => ({ ...prev, minRating: 0 }))}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                filters.minRating === 0 ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
              }`}
            >
              All Stars
            </button>
            <button
              onClick={() => setFilters(prev => ({ ...prev, minRating: 4.5 }))}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                filters.minRating === 4.5 ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
              }`}
            >
              ★ 4.5+
            </button>
            <button
              onClick={() => setFilters(prev => ({ ...prev, minRating: 4.9 }))}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                filters.minRating === 4.9 ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
              }`}
            >
              ★ 4.9+
            </button>
          </div>

          {/* Stops Filter (For Flights) */}
          {searchParams.category === 'flights' && (
            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setFilters(prev => ({ ...prev, stops: 'all' }))}
                className={`px-2.5 py-1 rounded-lg font-semibold ${
                  filters.stops === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                }`}
              >
                All Flights
              </button>
              <button
                onClick={() => setFilters(prev => ({ ...prev, stops: '0' }))}
                className={`px-2.5 py-1 rounded-lg font-semibold ${
                  filters.stops === '0' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                }`}
              >
                Direct Only
              </button>
            </div>
          )}

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 py-2 px-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            onClick={handleReset}
            title="Reset Filters"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
};
