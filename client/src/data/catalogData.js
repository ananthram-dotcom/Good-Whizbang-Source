export const CATALOG_PRODUCTS = [
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
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
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
    ],
    hotspots: [
      { id: "door", title: "36\" Sliding Doorway", desc: "Zero-threshold lip with automatic motion/voice open sensor.", x: 25, y: 75 },
      { id: "light", title: "Circadian LED Panel", desc: "Diffused 98+ CRI non-glare lighting to prevent visual fatigue.", x: 50, y: 25 },
      { id: "controls", title: "Tactile Control Pad", desc: "48-inch height wall switch with large tactile buttons & voice mic.", x: 78, y: 60 }
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
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    accessibilityFeatures: [
      "Panoramic zero-glare electrochromic windows tint automatically based on sun position",
      "Integrated slow-speech voice recognition for hands-free temperature & blinds adjustment",
      "Ramped elevator transition with wide zero-lip entryways",
      "Anti-glare overhead light diffusers rated 98+ CRI"
    ],
    smartFeatures: [
      { name: "360 Auto-Tinting Glass Shield", description: "Filters 99% UV rays and prevents glare on digital screens.", icon: "eye" },
      { name: "Solar Roof Battery Storage", description: "Integrated solar tiles generate clean energy.", icon: "zap" }
    ],
    hotspots: [
      { id: "glass", title: "Electrochromic Auto-Glass", desc: "Tints automatically based on sun angle to eliminate glare.", x: 35, y: 35 },
      { id: "solar", title: "Solar Tile Array", desc: "Powers home workstation with 72-hour battery backup.", x: 50, y: 15 },
      { id: "ramp", title: "Ramped Elevator Lip", desc: "Zero-step transition into upper-level penthouse suite.", x: 80, y: 80 }
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
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    accessibilityFeatures: [
      "Voice & smartphone app unified control panel with extra-large visual fonts",
      "Electrochromic smart glass windows tint automatically to eliminate eye strain & glare",
      "Under-floor radiant heating with zero cold spots",
      "Wide barrier-free accessible restroom with grab bars & sensor faucets"
    ],
    smartFeatures: [
      { name: "Auto-Tinting Privacy Windows", description: "Electrochromic glass adjusts transparency automatically.", icon: "eye" },
      { name: "AI Acoustic Noise Suppression", description: "Integrated microphone actively filters room echo.", icon: "volume-2" }
    ],
    hotspots: [
      { id: "floor", title: "Radiant Warmth Floor", desc: "Underfloor warm radiant zone heating eliminates joint stiffness.", x: 40, y: 85 },
      { id: "restroom", title: "Accessible Bath", desc: "Grab bars, zero-threshold shower, and sensor fixtures.", x: 85, y: 55 }
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
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    accessibilityFeatures: [
      "Smooth ramped entryway integrated seamlessly into garden landscaping",
      "Ultra-wide sliding pocket doors with magnetic soft-close mechanism",
      "Voice-guided security camera feed readable directly on main displays",
      "Slip-resistant composite wood flooring suitable for mobility devices"
    ],
    smartFeatures: [
      { name: "Solar Tile Power Management", description: "Generates renewable energy with battery storage.", icon: "zap" },
      { name: "Automated Biophilic Air Circulation", description: "Pulls fresh filtered garden breeze automatically.", icon: "refresh-cw" }
    ],
    hotspots: [
      { id: "breeze", title: "Biophilic Air Filter", desc: "Automated outdoor breeze purification system.", x: 30, y: 30 },
      { id: "doors", title: "Pocket Sliding Doors", desc: "Wide 42-inch magnetic soft-close pocket entry.", x: 70, y: 65 }
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
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    accessibilityFeatures: [
      "Universal design compliance with 5-foot turning radius throughout all rooms",
      "Motorized height-adjustable kitchen counters and office desks",
      "Sensor lighting in pathways automatically illuminates at night with soft amber glow",
      "Smart voice assistant with customized slow-speech recognition mode"
    ],
    smartFeatures: [
      { name: "Universal Voice Command System", description: "Controls locks, shades, lighting, and audio.", icon: "mic" },
      { name: "Night Path Fall-Prevention Lighting", description: "Infrared sensors activate low-level amber guides.", icon: "moon" }
    ],
    hotspots: [
      { id: "nightpath", title: "Amber Night Guidance", desc: "Infrared floor lighting prevents night trips.", x: 45, y: 75 },
      { id: "counter", title: "Motorized Counters", desc: "Height adjusts at the touch of a button or voice command.", x: 65, y: 45 }
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
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    accessibilityFeatures: [
      "Digital hydrotherapy bath & roll-in shower with voice temperature memory",
      "Motorized circadian skylights that open based on air quality & weather",
      "Non-intrusive radar telemetry for fall-prevention and caregiver alerts",
      "Zero-threshold sliding glass wall opening seamlessly onto private garden terrace"
    ],
    smartFeatures: [
      { name: "Hydrotherapy Voice Control Bath", description: "Fill water & set temperature verbally.", icon: "droplet" },
      { name: "Circadian Skylight System", description: "Adjusts light spectrum and fresh air flow.", icon: "sun" }
    ],
    hotspots: [
      { id: "hydro", title: "Voice Hydrotherapy Bath", desc: "Roll-in shower & hydro bath with verbal temperature presets.", x: 25, y: 60 },
      { id: "skylight", title: "Circadian Skylight", desc: "Motorized glass roof synced with daylight spectrum.", x: 55, y: 20 }
    ]
  }
];
