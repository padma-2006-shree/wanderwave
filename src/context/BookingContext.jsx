import React, { createContext, useContext, useState, useEffect } from 'react';
import { currencies } from '../data/travelData';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // Search parameters
  const [searchParams, setSearchParams] = useState({
    category: 'flights', // flights, hotels, packages, cars
    origin: 'New York (JFK)',
    destination: '',
    departDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    returnDate: new Date(Date.now() + 86400000 * 10).toISOString().split('T')[0],
    travelers: 2,
    rooms: 1,
    travelClass: 'Economy'
  });

  // Filter and Sort states
  const [filters, setFilters] = useState({
    maxPrice: 3000,
    minRating: 0,
    stops: 'all', // all, direct, 1stop
    sortBy: 'recommended' // recommended, price-asc, price-desc, rating-desc
  });

  // Selected Currency
  const [currency, setCurrency] = useState('USD');

  // Format price helper
  const formatPrice = (usdAmount) => {
    const curr = currencies[currency] || currencies.USD;
    const converted = Math.round(usdAmount * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  // Convert raw price helper
  const convertPrice = (usdAmount) => {
    const curr = currencies[currency] || currencies.USD;
    return Math.round(usdAmount * curr.rate);
  };

  // Wishlist / Saved items
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('upbound_wishlist') || localStorage.getItem('wanderwave_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('upbound_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const toggleWishlist = (item) => {
    setWishlist(prev => {
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        addToast(`Removed "${item.name || item.airline || item.title}" from saved trips`, 'info');
        return prev.filter(i => i.id !== item.id);
      } else {
        addToast(`Saved "${item.name || item.airline || item.title}" to your wishlist!`, 'success');
        return [...prev, item];
      }
    });
  };

  const isWishlisted = (id) => wishlist.some(i => i.id === id);

  // Bookings state (persisted in localStorage)
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('upbound_bookings') || localStorage.getItem('wanderwave_bookings');
      if (saved) return JSON.parse(saved);
      // default sample booking for immediate rich preview
      return [
        {
          id: 'UB-98214',
          bookingDate: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
          type: 'flights',
          status: 'Confirmed',
          item: {
            title: 'Emirates Flight EK 202',
            subtitle: 'New York (JFK) → Dubai (DXB)',
            date: 'Nov 18, 2026',
            airline: 'Emirates',
            class: 'Economy',
            flightNumber: 'EK 202'
          },
          traveler: {
            name: 'Padma Shree',
            email: 'traveler@upbound.com',
            phone: '+1 (555) 019-2834',
            seats: '14A, 14B'
          },
          addOns: ['Travel Protection Insurance', 'Priority Boarding'],
          pricing: {
            basePrice: 840,
            travelers: 2,
            addOnsTotal: 140,
            discount: 0,
            totalPaid: 1820
          }
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('upbound_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error(e);
    }
  }, [bookings]);

  const addBooking = (bookingData) => {
    setBookings(prev => [bookingData, ...prev]);
    addToast(`Booking confirmed! Reference: ${bookingData.id}`, 'success');
  };

  const cancelBooking = (bookingId) => {
    setBookings(prev =>
      prev.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b)
    );
    addToast(`Booking ${bookingId} has been cancelled and refunded.`, 'info');
  };

  // Modals & Drawers
  const [checkoutModal, setCheckoutModal] = useState({
    isOpen: false,
    item: null,
    itemType: 'flights'
  });

  const openCheckout = (item, itemType = 'flights') => {
    setCheckoutModal({
      isOpen: true,
      item,
      itemType
    });
  };

  const closeCheckout = () => {
    setCheckoutModal({
      isOpen: false,
      item: null,
      itemType: 'flights'
    });
  };

  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isSavedTripsOpen, setIsSavedTripsOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Toast Notification System
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <BookingContext.Provider
      value={{
        searchParams,
        setSearchParams,
        filters,
        setFilters,
        currency,
        setCurrency,
        currencies,
        formatPrice,
        convertPrice,
        wishlist,
        toggleWishlist,
        isWishlisted,
        bookings,
        addBooking,
        cancelBooking,
        checkoutModal,
        openCheckout,
        closeCheckout,
        isMyBookingsOpen,
        setIsMyBookingsOpen,
        isSavedTripsOpen,
        setIsSavedTripsOpen,
        selectedDestination,
        setSelectedDestination,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
