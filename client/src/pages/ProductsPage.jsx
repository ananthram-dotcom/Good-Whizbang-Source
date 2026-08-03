import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, ArrowRight, Sparkles, Filter, X, Shield, PhoneCall, ChevronRight } from 'lucide-react';

export default function ProductsPage({ setIsChatOpen }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && data.data) {
        setProducts(data.data);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', 'Compact WorkPod', 'Executive Suite', 'Garden Studio', 'Flex Hybrid Office'];

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
          Pre-Construction Smart Office Models
        </h1>
        <p className="text-xl text-gray-200 leading-relaxed">
          Engineered for active seniors with zero-threshold entries, voice environmental controls, and circadian health illumination.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-3 rounded-xl text-lg font-extrabold min-h-[48px] transition-all ${
              selectedCategory === cat
                ? 'bg-whizbang-orange text-white shadow-lg shadow-whizbang-orange/30'
                : 'bg-whizbang-slate text-gray-300 hover:text-white border border-whizbang-lightgrey'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      {loading ? (
        <div className="text-center py-16 space-y-4">
          <div className="w-12 h-12 border-4 border-whizbang-orange border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xl font-bold text-gray-300">Loading pre-construction models...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id || product.slug}
              className="bg-whizbang-slate border-2 border-whizbang-lightgrey hover:border-whizbang-cyan rounded-3xl overflow-hidden shadow-2xl transition-all flex flex-col justify-between"
            >
              {/* Product Image & Badge */}
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-whizbang-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-whizbang-lightgrey text-whizbang-cyan font-extrabold text-sm uppercase">
                  {product.badge || product.category}
                </div>
                <div className="absolute top-4 right-4 bg-whizbang-orange text-white px-4 py-1.5 rounded-full font-black text-xl shadow-lg">
                  {product.priceFormatted}
                </div>
              </div>

              {/* Product Info Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm font-bold text-gray-400">
                    <span>Est. Completion: <strong className="text-whizbang-cyan">{product.estCompletion}</strong></span>
                    <span>Floor Area: <strong className="text-white">{product.sqft} sq.ft</strong></span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-white">{product.name}</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">{product.tagline}</p>
                </div>

                {/* Senior Accessibility Bullet Checklist */}
                <div className="space-y-2 pt-2 border-t border-whizbang-lightgrey/60">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-whizbang-cyan">Senior Accessibility Features:</h3>
                  <ul className="space-y-1.5 text-base text-gray-200">
                    {product.accessibilityFeatures?.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="flex-1 bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-lg px-6 py-3.5 rounded-xl min-h-[52px] shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    View Full Specs & Features <ChevronRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="bg-whizbang-dark hover:bg-whizbang-lightgrey text-whizbang-cyan border border-whizbang-cyan font-extrabold px-5 py-3.5 rounded-xl min-h-[52px] flex items-center justify-center gap-2 transition-all"
                  >
                    <Sparkles className="w-5 h-5" /> Ask AI
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center">
          <div className="bg-whizbang-slate border-2 border-whizbang-cyan rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => {
                setActiveModalProduct(null);
                setReservationSubmitted(false);
              }}
              className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white bg-whizbang-dark rounded-xl border border-whizbang-lightgrey min-h-[48px] min-w-[48px] flex items-center justify-center"
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

            <img
              src={activeModalProduct.imageUrl}
              alt={activeModalProduct.name}
              className="w-full h-72 object-cover rounded-2xl border border-whizbang-lightgrey"
            />

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
