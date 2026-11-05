import React, { useMemo } from 'react';
import { BookingProvider, useBooking } from './context/BookingContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FilterSortBar } from './components/FilterSortBar';
import { FlightCard } from './components/FlightCard';
import { HotelCard } from './components/HotelCard';
import { PackageCard } from './components/PackageCard';
import { CarCard } from './components/CarCard';
import { DestinationsShowcase } from './components/DestinationsShowcase';
import { TravelPerksBanner } from './components/TravelPerksBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { SavedTripsDrawer } from './components/SavedTripsDrawer';
import { ToastContainer } from './components/ToastContainer';

import { flights, hotels, packages, cars } from './data/travelData';
import { Frown, RotateCcw } from 'lucide-react';

const InventorySection = () => {
  const { searchParams, filters, setFilters } = useBooking();

  // Filter and sort items dynamically
  const displayItems = useMemo(() => {
    let items = [];
    const cat = searchParams.category;

    if (cat === 'flights') items = [...flights];
    else if (cat === 'hotels') items = [...hotels];
    else if (cat === 'packages') items = [...packages];
    else if (cat === 'cars') items = [...cars];

    // Filter by destination search query
    const query = (searchParams.destination || '').toLowerCase().trim();
    if (query) {
      items = items.filter(item => {
        if (cat === 'flights') {
          return (
            item.destination.toLowerCase().includes(query) ||
            item.origin.toLowerCase().includes(query) ||
            item.airline.toLowerCase().includes(query)
          );
        }
        if (cat === 'hotels') {
          return (
            item.name.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query) ||
            item.city.toLowerCase().includes(query) ||
            item.country.toLowerCase().includes(query)
          );
        }
        if (cat === 'packages') {
          return (
            item.title.toLowerCase().includes(query) ||
            item.destination.toLowerCase().includes(query)
          );
        }
        if (cat === 'cars') {
          return (
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
          );
        }
        return true;
      });
    }

    // Filter by Max Price
    items = items.filter(item => {
      const p = item.price || item.pricePerNight || item.pricePerDay || 0;
      return p <= filters.maxPrice;
    });

    // Filter by Minimum Rating
    if (filters.minRating > 0) {
      items = items.filter(item => (item.rating || 4.5) >= filters.minRating);
    }

    // Filter by stops (flights only)
    if (cat === 'flights' && filters.stops === '0') {
      items = items.filter(item => item.stops === 0);
    }

    // Sorting
    items.sort((a, b) => {
      const priceA = a.price || a.pricePerNight || a.pricePerDay || 0;
      const priceB = b.price || b.pricePerNight || b.pricePerDay || 0;
      const ratingA = a.rating || 4.5;
      const ratingB = b.rating || 4.5;

      if (filters.sortBy === 'price-asc') return priceA - priceB;
      if (filters.sortBy === 'price-desc') return priceB - priceA;
      if (filters.sortBy === 'rating-desc') return ratingB - ratingA;
      return 0; // recommended default
    });

    return items;
  }, [searchParams, filters]);

  return (
    <section id="travel-inventory" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filter and sorting toolbar */}
      <FilterSortBar totalCount={displayItems.length} />

      {/* Empty State */}
      {displayItems.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-8 shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Frown className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No Matching Results</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We couldn't find any {searchParams.category} matching your selected budget or destination. Try broadening your filters or resetting them!
          </p>
          <button
            onClick={() => setFilters({ maxPrice: 3000, minRating: 0, stops: 'all', sortBy: 'recommended' })}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {searchParams.category === 'flights' && (
            <div className="space-y-4">
              {displayItems.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          )}

          {searchParams.category === 'hotels' && (
            <div className="space-y-6">
              {displayItems.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          )}

          {searchParams.category === 'packages' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {displayItems.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}

          {searchParams.category === 'cars' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayItems.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <InventorySection />
          <DestinationsShowcase />
          <TravelPerksBanner />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        <Footer />

        {/* Dynamic Modals, Drawers & Toast Notifications */}
        <BookingModal />
        <MyBookingsModal />
        <SavedTripsDrawer />
        <ToastContainer />
      </div>
    </BookingProvider>
  );
}
