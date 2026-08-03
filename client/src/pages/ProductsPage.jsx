import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, ArrowRight, Sparkles, Filter, X, Shield, PhoneCall, ChevronRight, Layers, Eye, Image } from 'lucide-react';

const FALLBACK_PRODUCTS = [
  {
    _id: "66b1a201f1e2d3c4b5a69701",
    slug: "lumina-senior-workpod",
    name: "The Lumina Accessible WorkPod",
    tagline: "Compact, zero-barrier smart office crafted for intuitive senior productivity.",
    description: "The Lumina is our signature single-level smart office designed specifically for active seniors and remote consultants. Featuring non-glare high-contrast lighting, zero-threshold doors, voice-activated environmental controls, and a built-in ergonomic desk that adjusts with a simple verbal command.",
    startingPrice: 89000,
    priceFormatted: "$89,000",
    sqft: 380,
    bedrooms: 0,
    bathrooms: 1,
    estCompletion: "Q4 2026",
    category: "Compact WorkPod",
    badge: "Senior Edition",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    accessibilityFeatures: [
      "Zero-threshold level entry with extra-wide 36-inch sliding doors",
      "Large-print high-contrast wall control panels with tactile feedback buttons",
      "Emergency one-touch assist button connected to family or caregiver alerts",
      "Acoustically dampened wall panels to reduce background noise for hearing aid users",
      "Stair-free continuous flooring with anti-slip micro-texture"
    ],
    smartFeatures: [
      { name: "Voice-Activated Ambience & Climate", description: "Control temperature and lights using plain voice commands.", icon: "mic" },
      { name: "Circadian Health Lighting System", description: "Automatic LED color spectrum shifts for sleep & energy.", icon: "sun" },
      { name: "Automated Height Desk", description: "Motorized sit-to-stand desk with preset memory.", icon: "sliders" }
    ]
  },
  {
    _id: "66b1a201f1e2d3c4b5a69705",
    slug: "solis-solar-penthouse-pod",
    name: "The Solis Solar Penthouse Pod",
    tagline: "Elevated single-level rooftop workspace with full panoramic glass & battery solar roof.",
    description: "The Solis Penthouse Pod combines breathtaking 360-degree views with senior accessibility. Built with zero-step ramped entry, automated electrochromic auto-tinting glass that eliminates eye strain, and a high-capacity solar tile roof that provides independent 72-hour power backup.",
    startingPrice: 125000,
    priceFormatted: "$125,000",
    sqft: 480,
    bedrooms: 0,
    bathrooms: 1,
    estCompletion: "Q1 2027",
    category: "Penthouse Pod",
    badge: "Solar Tech",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    accessibilityFeatures: [
      "Panoramic zero-glare electrochromic windows tint automatically based on sun position",
      "Integrated slow-speech voice recognition for hands-free temperature & blinds adjustment",
      "Ramped elevator transition with wide zero-lip entryways",
      "Anti-glare overhead light diffusers rated 98+ CRI"
    ],
    smartFeatures: [
      { name: "360 Auto-Tinting Glass Shield", description: "Filters 99% UV rays and prevents glare on digital screens.", icon: "eye" },
      { name: "Solar Roof Battery Storage", description: "Integrated solar tiles generate clean energy.", icon: "zap" }
    ]
  },
  {
    _id: "66b1a201f1e2d3c4b5a69702",
    slug: "apex-executive-smart-office",
    name: "The Apex Executive Smart Office",
    tagline: "Spacious pre-construction executive suite integrated with AI automation.",
    description: "Designed for professionals, consultants, and senior executives who require a luxury work environment without physical strain. The Apex offers expansive floor-to-ceiling smart glass that tints automatically based on sun angle, integrated dual monitor arms, and voice-governed zone climate control.",
    startingPrice: 149000,
    priceFormatted: "$149,000",
    sqft: 650,
    bedrooms: 0,
    bathrooms: 1,
    estCompletion: "Q2 2027",
    category: "Executive Suite",
    badge: "Most Popular",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    accessibilityFeatures: [
      "Voice & smartphone app unified control panel with extra-large visual fonts",
      "Electrochromic smart glass windows tint automatically to eliminate eye strain & glare",
      "Under-floor radiant heating with zero cold spots",
      "Wide barrier-free accessible restroom with grab bars & sensor faucets"
    ],
    smartFeatures: [
      { name: "Auto-Tinting Privacy Windows", description: "Electrochromic glass adjusts transparency automatically.", icon: "eye" },
      { name: "AI Acoustic Noise Suppression", description: "Integrated microphone actively filters room echo.", icon: "volume-2" }
    ]
  },
  {
    _id: "66b1a201f1e2d3c4b5a69703",
    slug: "horizon-garden-studio",
    name: "The Horizon Garden Studio Suite",
    tagline: "Serene detached workspace with panoramic garden views and passive solar energy.",
    description: "Merge nature and modern productivity with The Horizon. Built as a pre-construction backyard garden studio, it boasts zero step entrance, high-efficiency solar roof tiles, and an intuitive smart assistant that alerts you to outdoor weather shifts while keeping your workspace at ideal humidity and temperature.",
    startingPrice: 195000,
    priceFormatted: "$195,000",
    sqft: 850,
    bedrooms: 1,
    bathrooms: 1,
    estCompletion: "Q1 2027",
    category: "Garden Studio",
    badge: "Eco-Smart",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    accessibilityFeatures: [
      "Smooth ramped entryway integrated seamlessly into garden landscaping",
      "Ultra-wide sliding pocket doors with magnetic soft-close mechanism",
      "Voice-guided security camera feed readable directly on main displays",
      "Slip-resistant composite wood flooring suitable for mobility devices"
    ],
    smartFeatures: [
      { name: "Solar Tile Power Management", description: "Generates renewable energy with battery storage.", icon: "zap" },
      { name: "Automated Biophilic Air Circulation", description: "Pulls fresh filtered garden breeze automatically.", icon: "refresh-cw" }
    ]
  },
  {
    _id: "66b1a201f1e2d3c4b5a69704",
    slug: "haven-accessibility-hybrid",
    name: "The Haven Universal Hybrid Suite",
    tagline: "Our ultimate dual-purpose home office and living space built for universal accessibility.",
    description: "The Haven represents the pinnacle of universal design. Featuring a spacious layout that transforms effortlessly between an executive office studio and a comfortable rest lounge. Designed from the ground up for seniors who desire independence, maximum comfort, and seamless smart home integration.",
    startingPrice: 239000,
    priceFormatted: "$239,000",
    sqft: 1100,
    bedrooms: 1,
    bathrooms: 1.5,
    estCompletion: "Q3 2027",
    category: "Flex Hybrid Office",
    badge: "Pre-Construction Deal",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    accessibilityFeatures: [
      "Universal design compliance with 5-foot turning radius throughout all rooms",
      "Motorized height-adjustable kitchen counters and office desks",
      "Sensor lighting in pathways automatically illuminates at night with soft amber glow",
      "Smart voice assistant with customized slow-speech recognition mode"
    ],
    smartFeatures: [
      { name: "Universal Voice Command System", description: "Controls locks, shades, lighting, and audio.", icon: "mic" },
      { name: "Night Path Fall-Prevention Lighting", description: "Infrared sensors activate low-level amber guides.", icon: "moon" }
    ]
  },
  {
    _id: "66b1a201f1e2d3c4b5a69706",
    slug: "tranquility-wellness-care-suite",
    name: "The Tranquility Wellness & Care Estate",
    tagline: "Luxury multi-room accessibility suite with hydrotherapy voice bath & circadian skylights.",
    description: "The Tranquility Estate is our flagship luxury pre-construction model. Crafted for seniors seeking ultimate comfort, it features an integrated hydrotherapy voice-controlled bath, motorized skylights that sync with circadian health, digital telemetry health sensors, and a seamless indoor-to-patio zero-threshold garden transition.",
    startingPrice: 285000,
    priceFormatted: "$285,000",
    sqft: 1350,
    bedrooms: 2,
    bathrooms: 2,
    estCompletion: "Q4 2027",
    category: "Wellness Suite",
    badge: "Flagship Luxury",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    accessibilityFeatures: [
      "Digital hydrotherapy bath & roll-in shower with voice temperature memory",
      "Motorized circadian skylights that open based on air quality & weather",
      "Non-intrusive radar telemetry for fall-prevention and caregiver alerts",
      "Zero-threshold sliding glass wall opening seamlessly onto private garden terrace"
    ],
    smartFeatures: [
      { name: "Hydrotherapy Voice Control Bath", description: "Fill water & set temperature verbally.", icon: "droplet" },
      { name: "Circadian Skylight System", description: "Adjusts light spectrum and fresh air flow.", icon: "sun" }
    ]
  }
];

export default function ProductsPage({ setIsChatOpen }) {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [modalTab, setModalTab] = useState('photos');
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Attempt API fetch from backend server
      const backendUrl = process.env.NODE_ENV === 'production'
        ? 'https://good-whizbang-server.onrender.com/api/products'
        : '/api/products';

      const res = await fetch(backendUrl);
      const data = await res.json();
      if (data.success && data.data && data.data.length > 0) {
        setProducts(data.data);
      }
    } catch (err) {
      console.warn('API fetch failed, utilizing built-in catalog data:', err.message);
      setProducts(FALLBACK_PRODUCTS);
    }
  };

  const categories = ['All', 'Compact WorkPod', 'Penthouse Pod', 'Executive Suite', 'Garden Studio', 'Wellness Suite', 'Flex Hybrid Office'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whizbang-orange/20 border border-whizbang-orange text-whizbang-orange font-extrabold text-sm uppercase tracking-wide">
          <Zap className="w-4 h-4 fill-whizbang-orange" /> Pre-Construction Smart Catalog
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Pre-Construction Smart Office & Living Models
        </h1>
        <p className="text-xl text-gray-200 leading-relaxed">
          Engineered for active seniors with zero-threshold entries, voice environmental controls, circadian health illumination, and solar battery energy storage.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-extrabold min-h-[44px] transition-all ${
              selectedCategory === cat
                ? 'bg-whizbang-orange text-white shadow-lg shadow-whizbang-orange/30'
                : 'bg-whizbang-slate text-gray-300 hover:text-white border border-whizbang-lightgrey'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards Grid (Always renders items!) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-whizbang-slate/60 border border-whizbang-lightgrey rounded-3xl p-8 space-y-3">
          <p className="text-2xl font-bold text-white">No models found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-5 py-2.5 bg-whizbang-orange text-white font-extrabold rounded-xl"
          >
            View All 6 Pre-Construction Models
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id || product.slug}
              className="bg-whizbang-slate border-2 border-whizbang-lightgrey hover:border-whizbang-cyan rounded-3xl overflow-hidden shadow-2xl transition-all flex flex-col justify-between group"
            >
              {/* Product Image & Badge */}
              <div className="relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-whizbang-dark/90 backdrop-blur-md px-3 py-1 rounded-full border border-whizbang-lightgrey text-whizbang-cyan font-extrabold text-xs uppercase">
                  {product.badge || product.category}
                </div>
                <div className="absolute top-4 right-4 bg-whizbang-orange text-white px-3.5 py-1 rounded-full font-black text-lg shadow-lg">
                  {product.priceFormatted}
                </div>
              </div>

              {/* Product Info Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                    <span>Est. Completion: <strong className="text-whizbang-cyan">{product.estCompletion}</strong></span>
                    <span>Floor Area: <strong className="text-white">{product.sqft} sq.ft</strong></span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-white leading-tight">{product.name}</h2>
                  <p className="text-base text-gray-300 leading-relaxed">{product.tagline}</p>
                </div>

                {/* Senior Accessibility Bullet Checklist */}
                <div className="space-y-2 pt-2 border-t border-whizbang-lightgrey/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-whizbang-cyan">Senior Accessibility Standards:</h3>
                  <ul className="space-y-1 text-sm text-gray-200">
                    {product.accessibilityFeatures?.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => {
                      setActiveModalProduct(product);
                      setModalTab('photos');
                    }}
                    className="flex-1 bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-base px-4 py-3 rounded-xl min-h-[44px] shadow-md flex items-center justify-center gap-1.5 transition-all"
                  >
                    View Specs <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="bg-whizbang-dark hover:bg-whizbang-lightgrey text-whizbang-cyan border border-whizbang-cyan font-extrabold px-4 py-3 rounded-xl min-h-[44px] flex items-center justify-center gap-1.5 transition-all text-sm"
                  >
                    <Sparkles className="w-4 h-4" /> Ask AI
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* ENHANCED MODEL DETAIL MODAL WITH MULTI-VIEW TABS */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center">
          <div className="bg-whizbang-slate border-2 border-whizbang-cyan rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => {
                setActiveModalProduct(null);
                setReservationSubmitted(false);
              }}
              className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white bg-whizbang-dark rounded-xl border border-whizbang-lightgrey min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Model Details"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-whizbang-orange text-white font-bold text-sm rounded-md uppercase">
                {activeModalProduct.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{activeModalProduct.name}</h2>
              <p className="text-2xl font-black text-whizbang-cyan">{activeModalProduct.priceFormatted} starting price</p>
            </div>

            {/* Interactive View Tabs */}
            <div className="flex gap-2 border-b border-whizbang-lightgrey pb-2">
              <button
                onClick={() => setModalTab('photos')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-base font-extrabold min-h-[44px] ${
                  modalTab === 'photos' ? 'bg-whizbang-orange text-white' : 'text-gray-300 hover:bg-whizbang-dark'
                }`}
              >
                <Image className="w-4 h-4" /> Exterior View
              </button>
              <button
                onClick={() => setModalTab('blueprint')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-base font-extrabold min-h-[44px] ${
                  modalTab === 'blueprint' ? 'bg-whizbang-cyan text-whizbang-dark' : 'text-gray-300 hover:bg-whizbang-dark'
                }`}
              >
                <Layers className="w-4 h-4" /> Floorplan Layout
              </button>
            </div>

            {modalTab === 'photos' && (
              <img
                src={activeModalProduct.imageUrl}
                alt={activeModalProduct.name}
                className="w-full h-72 object-cover rounded-2xl border border-whizbang-lightgrey"
              />
            )}

            {modalTab === 'blueprint' && (
              <div className="bg-whizbang-dark border-2 border-whizbang-cyan/40 p-6 rounded-2xl text-center space-y-4">
                <div className="p-4 bg-whizbang-slate rounded-xl border border-whizbang-lightgrey inline-block">
                  <span className="text-whizbang-cyan font-bold text-lg block">📐 Senior Blueprint Specifications</span>
                  <span className="text-gray-300 text-sm">Single Level • 36" Zero-Threshold Doors • 5ft Turning Radius</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-200">
                  <div className="p-3 bg-whizbang-slate rounded-xl">🚪 36" Sliding Doors</div>
                  <div className="p-3 bg-whizbang-slate rounded-xl">⚡ 48" Light Switch Height</div>
                  <div className="p-3 bg-whizbang-slate rounded-xl">🪟 Anti-Glare Windows</div>
                  <div className="p-3 bg-whizbang-slate rounded-xl">💡 Amber Night Floor Guides</div>
                </div>
              </div>
            )}

            <p className="text-xl text-gray-200 leading-relaxed">{activeModalProduct.description}</p>

            <div className="grid sm:grid-cols-2 gap-6 bg-whizbang-dark p-6 rounded-2xl border border-whizbang-lightgrey">
              <div>
                <h3 className="text-lg font-extrabold text-whizbang-orange mb-3">Accessibility Standard:</h3>
                <ul className="space-y-2 text-base text-gray-300">
                  {activeModalProduct.accessibilityFeatures?.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-whizbang-cyan mb-3">Smart Automation Systems:</h3>
                <ul className="space-y-2 text-base text-gray-300">
                  {activeModalProduct.smartFeatures?.map((sf, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-whizbang-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">{sf.name}</strong>
                        <span className="text-sm text-gray-400">{sf.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Reservation Inquiry Form */}
            <div className="bg-whizbang-dark p-6 rounded-2xl border border-whizbang-orange/50 space-y-4">
              <h3 className="text-2xl font-extrabold text-white">Reserve Pre-Construction Information Pack</h3>
              
              {reservationSubmitted ? (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500 rounded-xl text-emerald-300 text-lg font-bold">
                  ✅ Reservation Inquiry Received! Our senior accommodation advisor will contact you within 24 hours.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReservationSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      className="px-4 py-3 bg-whizbang-slate border border-whizbang-lightgrey text-white rounded-xl text-lg min-h-[48px]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      className="px-4 py-3 bg-whizbang-slate border border-whizbang-lightgrey text-white rounded-xl text-lg min-h-[48px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-xl py-4 rounded-xl shadow-lg min-h-[52px]"
                  >
                    Request Pre-Construction Pricing & Specs
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
