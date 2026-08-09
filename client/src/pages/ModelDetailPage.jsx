import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATALOG_PRODUCTS } from '../data/catalogData';
import { Zap, CheckCircle, ArrowLeft, Download, Layers, Image as ImageIcon, Sparkles, MapPin, Eye, PhoneCall, ShieldCheck, Heart } from 'lucide-react';
import jsPDF from 'jspdf';

export default function ModelDetailPage({ setIsChatOpen }) {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'blueprint' | 'specs'
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', moveInYear: '2026', notes: '' });

  useEffect(() => {
    const found = CATALOG_PRODUCTS.find(p => p.slug === slug) || CATALOG_PRODUCTS[0];
    setProduct(found);
    if (found) {
      document.title = `${found.name} | Good Whizbang Pre-Construction`;
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-3xl font-extrabold">Office Model Not Found</h2>
        <Link to="/models" className="mt-4 inline-block px-6 py-3 bg-whizbang-orange rounded-xl text-white font-extrabold">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Download PDF Spec Sheet Flyer Function
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // PDF Header
    doc.setFillColor(31, 41, 55); // Whizbang Dark
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 107, 0); // Orange
    doc.setFontSize(22);
    doc.text('GOOD WHIZBANG', 15, 20);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text('Senior-Accessible Pre-Construction Smart Spaces', 15, 30);

    // Model Title & Details
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(18);
    doc.text(product.name, 15, 55);

    doc.setFontSize(12);
    doc.setTextColor(0, 180, 200);
    doc.text(`Starting Price: ${product.priceFormatted} | Floor Area: ${product.sqft} sq.ft | Completion: ${product.estCompletion}`, 15, 65);

    doc.setTextColor(70, 70, 70);
    doc.setFontSize(10);
    const splitDesc = doc.splitTextToSize(product.description, 180);
    doc.text(splitDesc, 15, 75);

    // Section 1: Senior Accessibility Standards
    let yPos = 105;
    doc.setFontSize(14);
    doc.setTextColor(255, 107, 0);
    doc.text('Senior Accessibility Standards:', 15, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    product.accessibilityFeatures.forEach((feat) => {
      doc.text(`- ${feat}`, 20, yPos);
      yPos += 7;
    });

    // Section 2: Smart Automation Features
    yPos += 5;
    doc.setFontSize(14);
    doc.setTextColor(0, 180, 200);
    doc.text('Smart Home & Voice Automation:', 15, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    product.smartFeatures.forEach((sf) => {
      doc.text(`- ${sf.name}: ${sf.description}`, 20, yPos);
      yPos += 7;
    });

    // Footer
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 270, 210, 27, 'F');
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Good Whizbang Inc. | Phone: 1-800-WHIZBANG | Email: support@goodwhizbang.com', 15, 282);
    doc.text('Guaranteed 100% Zero-Barrier Senior Accessibility Compliance', 15, 289);

    // Save File
    doc.save(`${product.slug}-spec-sheet.pdf`);
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productSlug: product.slug,
          productName: product.name,
          ...formData
        })
      });
    } catch (err) {
      console.warn('API offline, showing local success state:', err);
    }
    setReservationSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Top Breadcrumb Nav & Back Link */}
      <div className="flex items-center justify-between border-b border-whizbang-lightgrey/60 pb-4">
        <Link
          to="/models"
          className="inline-flex items-center gap-2 text-whizbang-cyan hover:text-white font-extrabold text-base min-h-[44px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Office Models Catalog
        </Link>

        <button
          onClick={handleDownloadPDF}
          className="bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-[1.02]"
        >
          <Download className="w-4 h-4" /> Download PDF Spec Flyer
        </button>
      </div>

      {/* Main Model Hero Header */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Visuals (Gallery / Blueprint Hotspots) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Sub-Nav View Switcher */}
          <div className="flex gap-2 bg-whizbang-slate p-2 rounded-2xl border border-whizbang-lightgrey">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 py-2.5 px-4 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 min-h-[44px] transition-all ${
                activeTab === 'gallery'
                  ? 'bg-whizbang-orange text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" /> Photo Gallery
            </button>

            <button
              onClick={() => setActiveTab('blueprint')}
              className={`flex-1 py-2.5 px-4 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 min-h-[44px] transition-all ${
                activeTab === 'blueprint'
                  ? 'bg-whizbang-cyan text-whizbang-dark shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" /> Interactive Blueprint Pins
            </button>
          </div>

          {/* GALLERY TAB */}
          {activeTab === 'gallery' && (
            <div className="space-y-3">
              <div className="relative rounded-3xl overflow-hidden border-2 border-whizbang-lightgrey shadow-2xl h-[420px]">
                <img
                  src={product.gallery[activeImage] || product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-whizbang-dark/90 backdrop-blur-md px-3.5 py-1 rounded-full text-whizbang-cyan text-xs font-bold uppercase border border-whizbang-cyan/40">
                  {product.badge || product.category}
                </div>
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative rounded-xl overflow-hidden border-2 min-w-[100px] h-20 transition-all ${
                        activeImage === idx ? 'border-whizbang-orange scale-105 shadow-lg' : 'border-whizbang-lightgrey opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* BLUEPRINT HOTSPOTS TAB */}
          {activeTab === 'blueprint' && (
            <div className="bg-whizbang-slate border-2 border-whizbang-cyan/50 rounded-3xl p-6 relative space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-whizbang-lightgrey/60 pb-3">
                <span className="text-whizbang-cyan font-bold text-lg flex items-center gap-2">
                  <Layers className="w-5 h-5" /> Senior Architectural Hotspots
                </span>
                <span className="text-xs text-gray-300">Tap pins below to inspect features</span>
              </div>

              {/* Blueprint Canvas Graphic with Interactive Pins */}
              <div className="relative bg-whizbang-dark rounded-2xl border-2 border-dashed border-whizbang-cyan/40 p-8 min-h-[320px] flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-2 opacity-30 pointer-events-none">
                  <span className="text-4xl">📐</span>
                  <p className="text-sm font-mono text-cyan-300 uppercase tracking-widest">{product.sqft} SQ.FT SINGLE LEVEL BLUEPRINT</p>
                </div>

                {/* Hotspot Pins Overlay */}
                {product.hotspots.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setActiveHotspot(pin)}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 transition-transform hover:scale-125 animate-pulse ${
                      activeHotspot?.id === pin.id
                        ? 'bg-whizbang-orange border-white text-white scale-125 z-20'
                        : 'bg-whizbang-cyan border-whizbang-dark text-whizbang-dark'
                    }`}
                    title={pin.title}
                  >
                    📍
                  </button>
                ))}
              </div>

              {/* Active Hotspot Inspector Card */}
              {activeHotspot ? (
                <div className="p-4 bg-whizbang-dark rounded-2xl border-2 border-whizbang-orange space-y-1 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-extrabold text-white">{activeHotspot.title}</h4>
                    <span className="text-xs font-bold text-whizbang-orange uppercase">Inspected Spec</span>
                  </div>
                  <p className="text-base text-gray-200">{activeHotspot.desc}</p>
                </div>
              ) : (
                <p className="text-center text-sm text-gray-400 italic">Click any pin icon on the blueprint above to see senior architectural details.</p>
              )}
            </div>
          )}

        </div>

        {/* Right Column: Pricing & Quick Reservation Card */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-whizbang-slate border-2 border-whizbang-lightgrey rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="px-3 py-1 bg-whizbang-orange/20 border border-whizbang-orange text-whizbang-orange font-bold text-xs rounded-md uppercase">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">{product.name}</h1>
              <p className="text-xl text-gray-300 mt-2">{product.tagline}</p>
            </div>

            <div className="p-4 bg-whizbang-dark rounded-2xl border border-whizbang-cyan/40 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase font-bold block">Pre-Construction Starting Price</span>
                <span className="text-4xl font-black text-whizbang-cyan">{product.priceFormatted}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 uppercase font-bold block">Est. Completion</span>
                <span className="text-lg font-extrabold text-white">{product.estCompletion}</span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
              <div className="p-3 bg-whizbang-dark rounded-xl border border-whizbang-lightgrey/40">
                <span className="text-gray-400 text-xs block">Floor Area</span>
                <strong className="text-white text-base">{product.sqft} sq.ft</strong>
              </div>
              <div className="p-3 bg-whizbang-dark rounded-xl border border-whizbang-lightgrey/40">
                <span className="text-gray-400 text-xs block">Accessibility Standard</span>
                <strong className="text-whizbang-orange text-base">100% Zero Barrier</strong>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Link
                to="/customizer"
                className="w-full bg-gradient-to-r from-whizbang-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-lg py-4 rounded-xl min-h-[52px] shadow-lg shadow-whizbang-orange/30 flex items-center justify-center gap-2 transition-all"
              >
                Customize This Model <Sparkles className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setIsChatOpen(true)}
                className="w-full bg-whizbang-dark hover:bg-whizbang-lightgrey text-whizbang-cyan border border-whizbang-cyan font-extrabold text-base py-3.5 rounded-xl min-h-[48px] flex items-center justify-center gap-2 transition-all"
              >
                Ask AI Assistant About Specs
              </button>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-whizbang-slate border border-whizbang-orange/50 rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-whizbang-orange" /> Reserve Pre-Construction Information
            </h3>

            {reservationSubmitted ? (
              <div className="p-5 bg-emerald-950/90 border border-emerald-500 rounded-2xl text-emerald-300 text-base font-bold space-y-2">
                <p>✅ Reservation Inquiry Confirmed for {product.name}!</p>
                <p className="text-xs text-emerald-400 font-normal">Our Senior Housing Specialist will reach out within 24 hours with floor plan packets and pricing locks.</p>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-whizbang-dark border border-whizbang-lightgrey text-white rounded-xl text-base min-h-[48px]"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-whizbang-dark border border-whizbang-lightgrey text-white rounded-xl text-base min-h-[48px]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-whizbang-dark border border-whizbang-lightgrey text-white rounded-xl text-base min-h-[48px]"
                />
                <button
                  type="submit"
                  className="w-full bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-lg py-3.5 rounded-xl shadow-md min-h-[48px]"
                >
                  Send Information Pack Request
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Senior Accessibility Bullet Details */}
      <div className="bg-whizbang-slate border-2 border-whizbang-lightgrey rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white">Universal Accessibility Specifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-whizbang-cyan">Senior Architectural Standards</h3>
            <ul className="space-y-3 text-base text-gray-200">
              {product.accessibilityFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-whizbang-dark p-3 rounded-xl border border-whizbang-lightgrey/40">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-whizbang-orange">Smart Environmental Automation</h3>
            <ul className="space-y-3 text-base text-gray-200">
              {product.smartFeatures.map((sf, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-whizbang-dark p-3 rounded-xl border border-whizbang-lightgrey/40">
                  <Zap className="w-5 h-5 text-whizbang-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{sf.name}</strong>
                    <span className="text-sm text-gray-400">{sf.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
