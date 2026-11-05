# UpBound — Luxury & Global Travel Booking Platform ✈️🌍

A modern, responsive, and full-featured travel booking web application built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Key Features

### 1. Multi-Category Booking Console
- **✈️ Flights**: Non-stop and 1-stop routes, carrier badges, flight numbers, aircraft type, duration, live seat availability, and baggage allowances.
- **🏨 Stays & Luxury Resorts**: Star ratings, room sizes, curated amenities (Infinity pools, Michelin dining, Spas), and verified guest ratings.
- **🎒 Curated Tour Packages**: All-inclusive expeditions (Bali, Swiss Alps Glacier Express, Tokyo neon & Kyoto ancient temples) with interactive day-by-day itineraries.
- **🚗 Rental Cars**: Electric, SUV, and sports convertibles with transparent specifications and free cancellation terms.

### 2. Live Search, Interactive Filtering & Sorting
- Dynamic destination matching across cities, airports, countries, and property names.
- Price budget slider with real-time currency conversion.
- Star rating filters (All, 4.5+ Stars, 4.9+ Stars).
- Non-stop / Direct flight filter.
- Sorting by: Recommended, Lowest Price, Highest Price, and Top Rated.

### 3. Comprehensive 4-Step Checkout Flow (`BookingModal`)
1. **Traveler Details**: Passenger names, email, phone number, passport, and special requests.
2. **Add-ons & Protection**: Comprehensive travel insurance, extra baggage allowance (+23kg), VIP lounge access, and carbon offset contributions.
3. **Payment & Promo Codes**:
   - Interactive payment methods (Credit Card, PayPal, Apple/Google Pay).
   - Real-time coupon validator (e.g. `UPBOUND20` for 20% off, `SUMMER25` for 25% off, `FIRST100` for $100 off).
   - Itemized bill breakdown with taxes, discounts, and final total.
4. **Digital Boarding Pass / E-Ticket**:
   - Unique reference code (e.g. `UB-849201`).
   - Simulated QR code and boarding pass.
   - 1-click **Print / Save as PDF** capability.

### 4. User Trips & Wishlist Dashboard (`localStorage` Persisted)
- **My Trips Dashboard**: Review upcoming reservations, print e-tickets anytime, and simulate 1-click cancellations with refund tracking.
- **Wishlist Drawer**: Save favorite destinations and packages to a side drawer with quick-book links.

### 5. Multi-Currency Support
- Real-time currency conversion supporting **USD ($)**, **EUR (€)**, **GBP (£)**, **INR (₹)**, **JPY (¥)**, and **AUD (A$)**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Run
```bash
# Navigate to the project directory
cd "C:\Users\Padma shree\.gemini\antigravity\scratch\travel-booking-website"

# Dependencies are already installed! Start the development server:
npm run dev
```

Open your browser at:
👉 **[http://localhost:3000](http://localhost:3000)**

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
travel-booking-website/
├── index.html                  # HTML entry with Plus Jakarta Sans typography
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite server & build configuration
├── tailwind.config.js          # Tailwind styling presets & brand palette
├── postcss.config.js           # PostCSS setup
└── src/
    ├── main.jsx                # Application root
    ├── App.jsx                 # Main layout and inventory controller
    ├── index.css               # Tailwind directives & glassmorphism utilities
    ├── data/
    │   └── travelData.js       # Flights, Hotels, Packages, Cars, Reviews, Promos
    ├── context/
    │   └── BookingContext.jsx  # Global state (Search, Filter, Wishlist, Bookings, Currency)
    └── components/
        ├── Navbar.jsx          # Header navigation, currency selector, Wishlist/Bookings badges
        ├── HeroSection.jsx     # Hero headline & 4-category search console
        ├── FilterSortBar.jsx   # Price slider, star rating, flight stops, sort dropdown
        ├── FlightCard.jsx      # Airline card with route timeline & seat specs
        ├── HotelCard.jsx       # Resort card with photo carousel & perks
        ├── PackageCard.jsx     # Multi-day tour card with day-by-day accordion
        ├── CarCard.jsx         # Rental car card with mileage & specs
        ├── BookingModal.jsx    # 4-step interactive checkout wizard & e-ticket generator
        ├── MyBookingsModal.jsx # Active & past trips management with refund simulation
        ├── SavedTripsDrawer.jsx# Wishlist side drawer
        ├── DestinationsShowcase.jsx # Top destination wonders with modal travel guides
        ├── TravelPerksBanner.jsx # Security, guarantee, and 24/7 concierge highlights
        ├── TestimonialsSection.jsx # Verified traveler reviews and ratings
        ├── NewsletterSection.jsx # Insider club signup with instant coupon reveal
        ├── Footer.jsx          # Directory links and legal certifications
        └── ToastContainer.jsx  # Floating notification toasts
```
