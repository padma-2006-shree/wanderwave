import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { promoCodes } from '../data/travelData';
import {
  X,
  Check,
  CreditCard,
  Shield,
  Luggage,
  Sparkles,
  Plane,
  Building2,
  Package,
  Car,
  QrCode,
  Download,
  Printer,
  ChevronRight,
  ArrowLeft,
  Calendar,
  User,
  Mail,
  Phone,
  Tag,
  CheckCircle2
} from 'lucide-react';

export const BookingModal = () => {
  const {
    checkoutModal,
    closeCheckout,
    formatPrice,
    addBooking,
    setIsMyBookingsOpen,
    searchParams
  } = useBooking();

  const { isOpen, item, itemType } = checkoutModal;

  const [step, setStep] = useState(1); // 1: Details, 2: Add-ons, 3: Payment, 4: Confirmed

  // Traveler info form state
  const [traveler, setTraveler] = useState({
    firstName: 'Padma',
    lastName: 'Shree',
    email: 'padmashree.travels@example.com',
    phone: '+1 (555) 392-8172',
    passport: 'A92837102',
    specialRequests: 'Quiet room / Window seat requested'
  });

  // Selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState({
    insurance: true, // +$45 per traveler
    extraBaggage: false, // +$35
    loungeAccess: false, // +$55
    carbonOffset: true // +$12
  });

  // Promo code
  const [promoInput, setPromoInput] = useState('WANDER20');
  const [appliedPromo, setAppliedPromo] = useState(promoCodes['WANDER20']);
  const [promoError, setPromoError] = useState('');

  // Payment form state
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardNumber: '4242 •••• •••• 4242',
    cardHolder: 'PADMA SHREE',
    expiry: '08/29',
    cvv: '883'
  });

  // Created booking record once confirmed
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!isOpen || !item) return null;

  // Base price calculation
  const travelersCount = searchParams.travelers || 1;
  const rawBasePrice =
    itemType === 'hotels'
      ? item.pricePerNight * 3 // mock 3 nights
      : itemType === 'cars'
      ? item.pricePerDay * 3
      : item.price * travelersCount;

  // Add-ons calculation
  let addOnsTotal = 0;
  if (selectedAddOns.insurance) addOnsTotal += 45 * travelersCount;
  if (selectedAddOns.extraBaggage) addOnsTotal += 35;
  if (selectedAddOns.loungeAccess) addOnsTotal += 55 * travelersCount;
  if (selectedAddOns.carbonOffset) addOnsTotal += 12;

  // Taxes
  const taxesAndFees = Math.round(rawBasePrice * 0.08);

  // Subtotal
  const subtotal = rawBasePrice + addOnsTotal + taxesAndFees;

  // Discount calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percent') {
      discountAmount = Math.round(subtotal * appliedPromo.discount);
    } else {
      discountAmount = Math.min(subtotal, appliedPromo.discount);
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  // Apply promo handler
  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (promoCodes[code]) {
      setAppliedPromo(promoCodes[code]);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "WANDER20" or "SUMMER25"');
    }
  };

  // Complete Booking
  const handleCompleteBooking = () => {
    const newBookingId = 'WV-' + Math.floor(100000 + Math.random() * 900000);
    const bookingRecord = {
      id: newBookingId,
      bookingDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      type: itemType,
      status: 'Confirmed',
      item: {
        title: item.title || item.name || `${item.airline} ${item.flightNumber}`,
        subtitle: item.destination || item.location || `${item.origin} → ${item.destination}`,
        airline: item.airline,
        flightNumber: item.flightNumber,
        category: item.category,
        image: item.image,
        stars: item.stars,
        date: searchParams.departDate
      },
      traveler: {
        name: `${traveler.firstName} ${traveler.lastName}`,
        email: traveler.email,
        phone: traveler.phone,
        seats: '12A, 12B',
        specialRequests: traveler.specialRequests
      },
      addOns: Object.keys(selectedAddOns).filter(k => selectedAddOns[k]),
      pricing: {
        basePrice: rawBasePrice,
        travelers: travelersCount,
        addOnsTotal,
        discount: discountAmount,
        totalPaid: finalTotal
      }
    };

    setConfirmedBooking(bookingRecord);
    addBooking(bookingRecord);
    setStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full my-auto overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              {itemType === 'flights' && <Plane className="w-4 h-4" />}
              {itemType === 'hotels' && <Building2 className="w-4 h-4" />}
              {itemType === 'packages' && <Package className="w-4 h-4" />}
              {itemType === 'cars' && <Car className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                {step === 4 ? 'Trip Confirmed!' : 'Secure Booking Checkout'}
              </h2>
              <p className="text-[11px] text-slate-500">
                {step === 4 ? `Ticket ID: ${confirmedBooking?.id}` : `Step ${step} of 3`}
              </p>
            </div>
          </div>

          <button
            onClick={closeCheckout}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progression Bar */}
        {step < 4 && (
          <div className="grid grid-cols-3 bg-slate-100/70 text-[11px] font-bold text-center border-b border-slate-100">
            <button
              onClick={() => setStep(1)}
              className={`py-2.5 transition-colors ${step === 1 ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
            >
              1. Traveler Details
            </button>
            <button
              onClick={() => setStep(2)}
              className={`py-2.5 transition-colors ${step === 2 ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
            >
              2. Add-ons & Perks
            </button>
            <button
              onClick={() => setStep(3)}
              className={`py-2.5 transition-colors ${step === 3 ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
            >
              3. Payment & Review
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          
          {/* STEP 1: Traveler Details */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Item Summary Banner */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                {item.image && (
                  <img
                    src={item.image}
                    alt="Preview"
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                )}
                <div className="flex-1">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {itemType.toUpperCase()} SELECTION
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {item.title || item.name || `${item.airline} ${item.flightNumber}`}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.destination || item.location || `${item.origin} → ${item.destination}`}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-slate-900">
                    {formatPrice(rawBasePrice)}
                  </div>
                  <div className="text-[10px] text-slate-500">{travelersCount} Traveler(s)</div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Primary Traveler Information
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={traveler.firstName}
                      onChange={(e) => setTraveler({ ...traveler, firstName: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={traveler.lastName}
                      onChange={(e) => setTraveler({ ...traveler, lastName: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={traveler.email}
                      onChange={(e) => setTraveler({ ...traveler, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={traveler.phone}
                      onChange={(e) => setTraveler({ ...traveler, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requests or Dietary Preferences
                  </label>
                  <input
                    type="text"
                    value={traveler.specialRequests}
                    onChange={(e) => setTraveler({ ...traveler, specialRequests: e.target.value })}
                    placeholder="e.g. Vegetarian meal, high floor room, infant seat"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Bottom Next Button */}
              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>Continue to Add-ons</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Add-ons & Perks */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="text-xs text-slate-500">
                Customize your trip with optional protection and premium travel perks:
              </div>

              {/* Addon 1: Insurance */}
              <label className={`flex items-start gap-3 p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedAddOns.insurance ? 'bg-blue-50/70 border-blue-300' : 'bg-slate-50 border-slate-200'
              }`}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.insurance}
                  onChange={(e) => setSelectedAddOns({ ...selectedAddOns, insurance: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-blue-600 rounded"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      Comprehensive Trip Protection & Medical
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      +{formatPrice(45 * travelersCount)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    100% refund for medical emergencies, flight delays, trip interruptions, and lost baggage.
                  </p>
                </div>
              </label>

              {/* Addon 2: Baggage */}
              <label className={`flex items-start gap-3 p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedAddOns.extraBaggage ? 'bg-blue-50/70 border-blue-300' : 'bg-slate-50 border-slate-200'
              }`}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.extraBaggage}
                  onChange={(e) => setSelectedAddOns({ ...selectedAddOns, extraBaggage: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-blue-600 rounded"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Luggage className="w-4 h-4 text-blue-600" />
                      Extra Checked Bag (+23 kg)
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      +{formatPrice(35)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Pack without stress with an additional 23kg priority-tagged check-in suitcase.
                  </p>
                </div>
              </label>

              {/* Addon 3: Lounge Access */}
              <label className={`flex items-start gap-3 p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedAddOns.loungeAccess ? 'bg-blue-50/70 border-blue-300' : 'bg-slate-50 border-slate-200'
              }`}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.loungeAccess}
                  onChange={(e) => setSelectedAddOns({ ...selectedAddOns, loungeAccess: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-blue-600 rounded"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      VIP Airport Lounge Pass
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      +{formatPrice(55 * travelersCount)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Complimentary buffet dining, open bar, luxury showers, and quiet work suites.
                  </p>
                </div>
              </label>

              {/* Navigation buttons */}
              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>Proceed to Payment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment & Review */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter Coupon (try WANDER20, SUMMER25)"
                    className="w-full pl-9 pr-3 py-2 text-xs font-mono uppercase font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center justify-between">
                  <span className="font-semibold">
                    🎉 Coupon Applied: {appliedPromo.desc}
                  </span>
                  <span className="font-bold text-emerald-700">
                    -{formatPrice(discountAmount)}
                  </span>
                </div>
              )}

              {promoError && (
                <div className="text-xs text-rose-500 font-semibold">{promoError}</div>
              )}

              {/* Payment Methods Selector */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Payment Method
                </h4>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      paymentMethod === 'paypal'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      paymentMethod === 'apple'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>Apple / G-Pay</span>
                  </button>
                </div>

                {/* Credit Card Inputs Mock */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardData.cardNumber}
                        onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-200 bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                          CVV Security Code
                        </label>
                        <input
                          type="password"
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Breakdown Bill */}
              <div className="p-4 rounded-2xl bg-slate-100/70 space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Base Booking ({travelersCount} traveler(s))</span>
                  <span className="font-semibold text-slate-800">{formatPrice(rawBasePrice)}</span>
                </div>
                {addOnsTotal > 0 && (
                  <div className="flex justify-between">
                    <span>Selected Add-ons</span>
                    <span className="font-semibold text-slate-800">+{formatPrice(addOnsTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Taxes & Port Surcharges</span>
                  <span className="font-semibold text-slate-800">+{formatPrice(taxesAndFees)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Promo Discount</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-black text-slate-900">
                  <span>Final Total</span>
                  <span className="text-blue-600">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Complete Booking Trigger */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleCompleteBooking}
                  className="px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/30 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Authorize & Book {formatPrice(finalTotal)}</span>
                </button>
              </div>

            </div>
          )}

          {/* STEP 4: Success E-Ticket & Confirmation */}
          {step === 4 && confirmedBooking && (
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              {/* Confirmed checkmark */}
              <div className="text-center space-y-1">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Your Trip is Booked & Confirmed!
                </h3>
                <p className="text-xs text-slate-500">
                  A confirmation email with itinerary vouchers has been sent to{' '}
                  <span className="font-semibold text-slate-800">{traveler.email}</span>
                </p>
              </div>

              {/* Digital Boarding Pass / Ticket Voucher */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                
                {/* Voucher Top */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">
                      Official E-Ticket Voucher
                    </span>
                    <div className="text-lg font-black text-white">
                      {confirmedBooking.item.title}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400">Reference No.</span>
                    <div className="text-sm font-mono font-bold text-amber-400">
                      {confirmedBooking.id}
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mb-6">
                  <div>
                    <div className="text-[10px] text-slate-400">Passenger</div>
                    <div className="font-bold text-white">{confirmedBooking.traveler.name}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Travel Date</div>
                    <div className="font-bold text-white">{confirmedBooking.item.date}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Class / Type</div>
                    <div className="font-bold text-white">{item.class || item.category || 'Standard VIP'}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Seats / Rooms</div>
                    <div className="font-bold text-white">{confirmedBooking.traveler.seats}</div>
                  </div>
                </div>

                {/* Voucher Bottom with QR Code */}
                <div className="border-t border-dashed border-slate-700 pt-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Paid & Guaranteed
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Present QR at check-in counter or hotel desk
                    </div>
                  </div>

                  <div className="p-2 bg-white rounded-xl text-slate-900 shadow-sm">
                    <QrCode className="w-10 h-10" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Ticket / PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    closeCheckout();
                    setIsMyBookingsOpen(true);
                  }}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Go to My Trips</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
