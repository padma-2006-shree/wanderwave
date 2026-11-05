export const currencies = {
  USD: { symbol: '$', rate: 1, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.79, name: 'British Pound' },
  INR: { symbol: '₹', rate: 83.5, name: 'Indian Rupee' },
  JPY: { symbol: '¥', rate: 154.2, name: 'Japanese Yen' },
  AUD: { symbol: 'A$', rate: 1.52, name: 'Australian Dollar' },
};

export const destinations = [
  {
    id: 'dest-bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    tag: 'Island Paradise',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviews: 1420,
    startingPrice: 580,
    bestTimeToVisit: 'April - October',
    weather: '28°C Sunny',
    description: 'Immerse yourself in lush emerald rice terraces, cliffside ocean temples, vibrant spiritual retreats, and world-class surf breaks in the Island of the Gods.',
    topAttractions: ['Ubud Monkey Forest', 'Tanah Lot Temple', 'Tegallalang Rice Terraces', 'Seminyak Beach Club']
  },
  {
    id: 'dest-swiss',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    tag: 'Scenic Mountain',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.95,
    reviews: 980,
    startingPrice: 890,
    bestTimeToVisit: 'December - March (Ski), June - Sept (Hike)',
    weather: '16°C Crisp',
    description: 'Experience alpine wonderlands with breathtaking peaks, glacier express scenic train journeys, crystal turquoise lakes, and cozy fireside chalets.',
    topAttractions: ['Matterhorn in Zermatt', 'Jungfraujoch Top of Europe', 'Lake Geneva', 'Interlaken Adventure Hub']
  },
  {
    id: 'dest-tokyo',
    name: 'Tokyo & Kyoto',
    country: 'Japan',
    region: 'Asia',
    tag: 'Culture & High-Tech',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.92,
    reviews: 2150,
    startingPrice: 720,
    bestTimeToVisit: 'March - May (Sakura), Oct - Nov (Autumn)',
    weather: '21°C Pleasant',
    description: 'A harmonious blend of neon-lit skyscraper districts, serene Shinto shrines, Michelin-starred culinary artistry, and high-speed bullet trains.',
    topAttractions: ['Shibuya Crossing', 'Fushimi Inari Taisha', 'Senso-ji Temple', 'Arashiyama Bamboo Grove']
  },
  {
    id: 'dest-santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    tag: 'Romantic Sunset',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.88,
    reviews: 1640,
    startingPrice: 650,
    bestTimeToVisit: 'May - October',
    weather: '26°C Sunny',
    description: 'Iconic whitewashed cliff dwellings capped with cobalt blue domes, volcanic black sand beaches, and the most celebrated sunset views in the Mediterranean.',
    topAttractions: ['Oia Sunset Castle', 'Red Beach', 'Fira to Oia Caldera Hike', 'Ancient Thera']
  },
  {
    id: 'dest-maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    tag: 'Ultra Luxury & Coral',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.96,
    reviews: 820,
    startingPrice: 1150,
    bestTimeToVisit: 'November - April',
    weather: '30°C Warm',
    description: 'Private overwater bungalows suspended over crystal lagoons teeming with manta rays, marine sanctuaries, private sandbank dinners, and tropical luxury.',
    topAttractions: ['Ari Atoll Diving', 'Underwater Restaurant', 'Bioluminescent Beach Vaadhoo', 'Sunset Dolphin Cruises']
  },
  {
    id: 'dest-amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    tag: 'Coastal Elegance',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.91,
    reviews: 1310,
    startingPrice: 820,
    bestTimeToVisit: 'May - September',
    weather: '25°C Coastal Breeze',
    description: 'Dramatic vertical cliffs cascading into shimmering azure waters, fragrant lemon groves, pastel-colored village harbors, and iconic cliffside dining.',
    topAttractions: ['Positano Marina Grande', 'Path of the Gods Hike', 'Ravello Villa Rufolo', 'Capri Island Boat Tour']
  }
];

export const flights = [
  {
    id: 'fl-101',
    airline: 'Emirates',
    airlineCode: 'EK',
    logo: '✈️',
    flightNumber: 'EK 202',
    aircraft: 'Airbus A380-800',
    origin: 'New York (JFK)',
    destination: 'Dubai (DXB)',
    departureTime: '11:20 PM',
    arrivalTime: '07:30 PM (+1d)',
    duration: '12h 10m',
    stops: 0,
    stopDetails: 'Non-stop Direct',
    price: 840,
    availableSeats: 9,
    class: 'Economy',
    amenities: ['Wi-Fi Included', 'Gourmet Meals', '5,000+ Channels ICE TV', '2x 23kg Baggage Included'],
    carbonOffset: '142 kg CO2 saved'
  },
  {
    id: 'fl-102',
    airline: 'Singapore Airlines',
    airlineCode: 'SQ',
    logo: '🌸',
    flightNumber: 'SQ 025',
    aircraft: 'Boeing 777-300ER',
    origin: 'New York (JFK)',
    destination: 'Singapore (SIN)',
    departureTime: '08:45 AM',
    arrivalTime: '05:15 PM (+1d)',
    duration: '18h 30m',
    stops: 1,
    stopDetails: '1 Stop in Frankfurt (FRA, 1h 45m)',
    price: 990,
    availableSeats: 4,
    class: 'Economy',
    amenities: ['Award-winning Dining', 'Complimentary Champagne', 'High-Speed Wi-Fi', 'Extra Legroom'],
    carbonOffset: 'Certified Eco Route'
  },
  {
    id: 'fl-103',
    airline: 'Qatar Airways',
    airlineCode: 'QR',
    logo: '🦅',
    flightNumber: 'QR 704',
    aircraft: 'Airbus A350-1000',
    origin: 'London (LHR)',
    destination: 'Bali (DPS)',
    departureTime: '02:15 PM',
    arrivalTime: '06:40 PM (+1d)',
    duration: '16h 25m',
    stops: 1,
    stopDetails: '1 Stop in Doha (DOH, 2h 10m)',
    price: 760,
    availableSeats: 7,
    class: 'Economy',
    amenities: ['Oryx One Entertainment', 'Fresh Chef Meals', 'USB-C Power at every seat', 'Free Lounge Access on Transit'],
    carbonOffset: 'Fuel Efficient Fleet'
  },
  {
    id: 'fl-104',
    airline: 'Swiss International',
    airlineCode: 'LX',
    logo: '🏔️',
    flightNumber: 'LX 019',
    aircraft: 'Boeing 777-300ER',
    origin: 'New York (JFK)',
    destination: 'Zurich (ZRH)',
    departureTime: '06:10 PM',
    arrivalTime: '07:55 AM (+1d)',
    duration: '7h 45m',
    stops: 0,
    stopDetails: 'Non-stop Direct',
    price: 680,
    availableSeats: 12,
    class: 'Economy',
    amenities: ['Swiss Chocolates on board', 'On-demand Wi-Fi', 'Ergonomic Seats', 'Free Swiss Ski Baggage'],
    carbonOffset: '100% Sustainable Aviation Fuel Mix'
  },
  {
    id: 'fl-105',
    airline: 'Japan Airlines',
    airlineCode: 'JL',
    logo: '⛩️',
    flightNumber: 'JL 005',
    aircraft: 'Airbus A350-900',
    origin: 'San Francisco (SFO)',
    destination: 'Tokyo (HND)',
    departureTime: '01:30 PM',
    arrivalTime: '05:00 PM (+1d)',
    duration: '10h 30m',
    stops: 0,
    stopDetails: 'Non-stop Direct',
    price: 890,
    availableSeats: 6,
    class: 'Economy',
    amenities: ['Japanese Bento Meal Set', 'Quiet Cabin', 'Noise Cancelling Headsets', '2x Check-in Bags'],
    carbonOffset: 'Low Emission Cruiser'
  },
  {
    id: 'fl-106',
    airline: 'Air France',
    airlineCode: 'AF',
    logo: '🥖',
    flightNumber: 'AF 007',
    aircraft: 'Boeing 787-9 Dreamliner',
    origin: 'New York (JFK)',
    destination: 'Paris (CDG)',
    departureTime: '07:30 PM',
    arrivalTime: '08:45 AM (+1d)',
    duration: '7h 15m',
    stops: 0,
    stopDetails: 'Non-stop Direct',
    price: 590,
    availableSeats: 15,
    class: 'Economy',
    amenities: ['French Wine & Pastries', 'HD Touchscreen', 'Comfort Sleep Kit', 'Baggage Track in App'],
    carbonOffset: 'Eco-certified route'
  }
];

export const hotels = [
  {
    id: 'ht-201',
    name: 'Ayana Cliffside Resort & Spa',
    location: 'Jimbaran, Bali, Indonesia',
    city: 'Bali',
    country: 'Indonesia',
    type: 'Resort & Spa',
    stars: 5,
    rating: 4.9,
    reviews: 840,
    pricePerNight: 295,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Infinity Ocean Pool', 'Private Beach', 'World-famous Rock Bar', 'Holistic Balinese Spa', 'Free Breakfast Included'],
    roomTypes: [
      { name: 'Deluxe Ocean View Villa', priceMultiplier: 1, bed: '1 King Bed', size: '65 m²' },
      { name: 'Cliffside Sunset Pool Suite', priceMultiplier: 1.45, bed: '1 King Bed + Lounge', size: '110 m²' }
    ],
    perks: ['Free Cancellation before 48h', 'Breakfast included', 'No prepayment required']
  },
  {
    id: 'ht-202',
    name: 'The Chedi Andermatt Grand Alpine',
    location: 'Andermatt, Swiss Alps, Switzerland',
    city: 'Swiss Alps',
    country: 'Switzerland',
    type: 'Luxury Alpine Hotel',
    stars: 5,
    rating: 4.96,
    reviews: 620,
    pricePerNight: 460,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Heated Indoor & Outdoor Pools', 'Michelin Star Dining', 'Ski Butler Service', 'Tibetan Relaxation Spa', 'Fireplace in Every Room'],
    roomTypes: [
      { name: 'Alpine Superior Room', priceMultiplier: 1, bed: '1 Super King', size: '55 m²' },
      { name: 'Matterhorn Panorama Suite', priceMultiplier: 1.6, bed: '2 King Beds', size: '130 m²' }
    ],
    perks: ['Complimentary Ski Shuttle', 'Artisanal Fondue Dinner', 'High Speed Wi-Fi']
  },
  {
    id: 'ht-203',
    name: 'Aman Tokyo Sanctuary',
    location: 'Otemachi, Chiyoda City, Tokyo, Japan',
    city: 'Tokyo',
    country: 'Japan',
    type: 'Boutique Hotel',
    stars: 5,
    rating: 4.94,
    reviews: 512,
    pricePerNight: 510,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Panoramic Skyline Views', 'Onsen Hot Spring Bath', 'Traditional Japanese Garden', 'Sushi Master Bar'],
    roomTypes: [
      { name: 'Imperial Garden View Deluxe', priceMultiplier: 1, bed: '1 King Bed', size: '71 m²' },
      { name: 'Aman Sky Suite', priceMultiplier: 1.8, bed: '1 Master King', size: '141 m²' }
    ],
    perks: ['Tea Master Ceremony', 'Free Airport Transfer', 'Complimentary Minibar']
  },
  {
    id: 'ht-204',
    name: 'Canaves Oia Suites & Caldera',
    location: 'Oia, Santorini, Greece',
    city: 'Santorini',
    country: 'Greece',
    type: 'Caldera Boutique',
    stars: 5,
    rating: 4.92,
    reviews: 730,
    pricePerNight: 380,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Private Plunge Pool', 'Unobstructed Sunset Views', 'Yacht Charter Access', 'Cave Wine Cellar', 'Champagne Breakfast'],
    roomTypes: [
      { name: 'Classic Caldera Cave Suite', priceMultiplier: 1, bed: '1 Queen Bed', size: '45 m²' },
      { name: 'Infinity Pool Honeymoon Suite', priceMultiplier: 1.5, bed: '1 King Bed', size: '80 m²' }
    ],
    perks: ['Free Cancellation', 'Champagne on Arrival', 'Private Sun Deck']
  },
  {
    id: 'ht-205',
    name: 'Conrad Maldives Rangali Island',
    location: 'Rangali Island, Maldives',
    city: 'Maldives',
    country: 'Maldives',
    type: 'Overwater Villa',
    stars: 5,
    rating: 4.98,
    reviews: 950,
    pricePerNight: 740,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Underwater Bedroom Option', 'Glass Floor Lounge', 'Direct Coral Reef Access', '12 World-Class Restaurants'],
    roomTypes: [
      { name: 'Sunrise Overwater Villa', priceMultiplier: 1, bed: '1 King Bed', size: '86 m²' },
      { name: 'Sunset Water Villa with Pool', priceMultiplier: 1.4, bed: '1 King Bed', size: '115 m²' }
    ],
    perks: ['Seaplane Transfer Coordination', 'Daily Snorkeling Gear', 'Floating Breakfast Option']
  },
  {
    id: 'ht-206',
    name: 'Le Grand Quartier Parisien',
    location: '10th Arrondissement, Paris, France',
    city: 'Paris',
    country: 'France',
    type: 'Chic Urban Boutique',
    stars: 4,
    rating: 4.82,
    reviews: 1100,
    pricePerNight: 210,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Rooftop Eiffel View Bar', 'Courtyard Garden Cafe', 'Designer Metro Access', 'Artisan Bakery on Site'],
    roomTypes: [
      { name: 'Cozy Parisian Queen', priceMultiplier: 1, bed: '1 Queen Bed', size: '28 m²' },
      { name: 'Loft Terrace King Suite', priceMultiplier: 1.5, bed: '1 King Bed', size: '52 m²' }
    ],
    perks: ['Free High-Speed Wi-Fi', 'Complimentary Nespresso', 'Late 1 PM Check-out']
  }
];

export const packages = [
  {
    id: 'pkg-301',
    title: 'Ultimate Bali Spiritual & Surf Escape',
    destination: 'Bali, Indonesia',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    rating: 4.95,
    reviews: 320,
    price: 1290,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    included: [
      '5-Star Eco-Resort Villa in Ubud & Seminyak',
      'Daily Sunrise Yoga & Balinese Cooking Masterclass',
      'Private Chauffeur & English Guide',
      'All Temple Entry Fees & Snorkel Gear',
      'Airport VIP Fast-track Pickups'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Tropical Welcome', desc: 'Private transfer to Ubud resort, blessing ceremony, welcome poolside dinner.' },
      { day: 2, title: 'Sacred Temples & Rice Terraces', desc: 'Tirta Empul water temple cleansing and Tegallalang trek.' },
      { day: 3, title: 'Sunrise Mount Batur Trek', desc: 'Volcano breakfast with clouds below, hot spring soak.' },
      { day: 4, title: 'Transfer to Coast & Rock Bar', desc: 'Scenic drive to Uluwatu cliff temple and Kecak fire dance.' },
      { day: 5, title: 'Nusa Penida Island Tour', desc: 'Speedboat to Kelingking T-Rex cliff and Manta Bay swimming.' },
      { day: 6, title: 'Seminyak Beach & Spa Day', desc: 'Signature 2-hour Balinese herbal massage and sunset beach club.' },
      { day: 7, title: 'Artisan Markets & Departure', desc: 'Handicraft shopping and private transfer to airport.' }
    ]
  },
  {
    id: 'pkg-302',
    title: 'Swiss Glacier Express & Alpine Luxury',
    destination: 'Swiss Alps, Switzerland',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    rating: 4.98,
    reviews: 210,
    price: 2450,
    badge: 'Exclusive Experience',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    included: [
      '1st Class Glacier Express Panoramic Train Pass',
      'Luxury 5-Star Alpine Chalet Stays (Zermatt & St. Moritz)',
      'Gourmet Multi-Course Swiss Fondue Dinners',
      'Matterhorn Cableway Unlimited Pass',
      'Luggage Concierge Door-to-Door'
    ],
    itinerary: [
      { day: 1, title: 'Zurich to Lucerne', desc: 'Lake Lucerne boat cruise and stay at lakefront palace.' },
      { day: 2, title: 'GoldenPass to Interlaken', desc: 'Ascent to Jungfraujoch Top of Europe.' },
      { day: 3, title: 'Zermatt & Matterhorn View', desc: 'Check in to luxury chalet with direct Matterhorn views.' },
      { day: 4, title: 'Glacier Hiking & Alpine Spa', desc: 'Gornergrat railway and afternoon thermal wellness.' },
      { day: 5, title: 'World Famous Glacier Express', desc: 'Panoramic 7-hour scenic journey over Landwasser Viaduct.' },
      { day: 6, title: 'St. Moritz Aristocratic Charm', desc: 'Explore pristine alpine lakes and luxury boutiques.' },
      { day: 7, title: 'Bernina Red Train Day Trip', desc: 'Scenic hop across Italian border to Tirano.' },
      { day: 8, title: 'Zurich Farewell', desc: 'First class return to Zurich Airport for international flight.' }
    ]
  },
  {
    id: 'pkg-303',
    title: 'Tokyo Neon & Kyoto Ancient Temples',
    destination: 'Tokyo & Kyoto, Japan',
    duration: '9 Days / 8 Nights',
    days: 9,
    nights: 8,
    rating: 4.93,
    reviews: 440,
    price: 1890,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    included: [
      '7-Day JR Shinkansen Bullet Train Green Car Pass',
      '4-Star & 5-Star Boutique Hotels + 1 Night Traditional Ryokan with Kaiseki',
      'Private Foodie Tour in Shinjuku & Tsukiji',
      'Tea Ceremony with Geisha in Kyoto Gion',
      'Pocket Wi-Fi & 24/7 Digital Concierge'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Tokyo', desc: 'Arrival at Haneda/Narita, bullet-speed check-in, Shinjuku evening neon walk.' },
      { day: 2, title: 'Modern Wonders & teamLab', desc: 'Shibuya crossing, Harajuku, teamLab Planets immersive art.' },
      { day: 3, title: 'Historic Asakusa & Akihabara', desc: 'Senso-ji temple and electronic anime town.' },
      { day: 4, title: 'Shinkansen to Hakone & Mt. Fuji', desc: 'Hot spring onsen, Mt. Fuji views, kaiseki multi-dish feast.' },
      { day: 5, title: 'Bullet Train to Kyoto', desc: 'Fushimi Inari 10,000 orange Torii gate sunset hike.' },
      { day: 6, title: 'Kyoto Bamboo & Golden Pavilion', desc: 'Arashiyama bamboo forest and Kinkaku-ji temple.' },
      { day: 7, title: 'Nara Deer Sanctuary & Gion', desc: 'Feed sacred bowing deer in Nara and Gion evening stroll.' },
      { day: 8, title: 'Osaka Street Food Extravaganza', desc: 'Dotonbori takoyaki and Wagyu beef culinary trail.' },
      { day: 9, title: 'Sayonara Japan', desc: 'Bullet train to Kansai/Tokyo international airport.' }
    ]
  }
];

export const cars = [
  {
    id: 'car-401',
    name: 'Tesla Model Y Long Range',
    category: 'Electric SUV',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
    seats: 5,
    bags: 4,
    transmission: 'Automatic',
    mileage: 'Unlimited Miles',
    pricePerDay: 75,
    rating: 4.9,
    features: ['Autopilot', 'Supercharging included', 'Panoramaroof', 'Apple CarPlay / GPS'],
    supplier: 'AeroDrive Premium',
    freeCancellation: true
  },
  {
    id: 'car-402',
    name: 'Range Rover Sport HSE',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    seats: 5,
    bags: 5,
    transmission: 'Automatic 4x4',
    mileage: 'Unlimited Miles',
    pricePerDay: 135,
    rating: 4.88,
    features: ['All-Terrain Mode', 'Meridian Sound', 'Heated Leather Seats', 'Panoramic Sunroof'],
    supplier: 'Prestige Car Hire',
    freeCancellation: true
  },
  {
    id: 'car-403',
    name: 'Porsche 911 Carrera Cabriolet',
    category: 'Exotic Convertible',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    seats: 2,
    bags: 2,
    transmission: 'Automatic PDK',
    mileage: '200 miles/day',
    pricePerDay: 240,
    rating: 4.97,
    features: ['Drop-Top Convertible', 'Sport Chrono', 'Bose Surround', 'Coast Highway Ready'],
    supplier: 'Exotic Velocity',
    freeCancellation: true
  },
  {
    id: 'car-404',
    name: 'Toyota RAV4 Hybrid',
    category: 'Compact Eco SUV',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    seats: 5,
    bags: 3,
    transmission: 'Automatic',
    mileage: 'Unlimited Miles',
    pricePerDay: 48,
    rating: 4.85,
    features: ['45 MPG Fuel Economy', 'Bluetooth & USB', 'Lane Departure Alert', 'Great Family Choice'],
    supplier: 'Budget Mobility',
    freeCancellation: true
  }
];

export const reviews = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    location: 'Geneva, Switzerland',
    trip: 'Ultimate Bali Spiritual & Surf Escape',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    comment: 'UpBound made our dream honeymoon completely effortless. The private driver in Ubud was fantastic, and receiving instant mobile e-tickets on checkout gave us complete peace of mind!'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    location: 'Austin, Texas',
    trip: 'Swiss Glacier Express & Alpine Luxury',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 month ago',
    comment: 'The pricing was 20% lower than typical booking portals, and the customer concierge team responded in 2 minutes when we wanted to upgrade our Matterhorn suite. Outstanding service.'
  },
  {
    id: 'rev-3',
    author: 'Sarah Chen',
    location: 'Vancouver, Canada',
    trip: 'Tokyo Neon & Kyoto Ancient Temples',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Booked flights, hotels, and the shinkansen package all in one smooth checkout. The interactive itinerary receipt has all confirmation codes nicely formatted. 10/10 recommend!'
  }
];

export const promoCodes = {
  'UPBOUND20': { discount: 0.20, type: 'percent', desc: '20% off whole trip' },
  'WANDER20': { discount: 0.20, type: 'percent', desc: '20% off whole trip' },
  'SUMMER25': { discount: 0.25, type: 'percent', desc: '25% summer discount' },
  'FIRST100': { discount: 100, type: 'flat', desc: '$100 off your first booking' },
  'FLY50': { discount: 50, type: 'flat', desc: '$50 flight credit' }
};
