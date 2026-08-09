import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATALOG_PRODUCTS } from '../data/catalogData';
import { Zap, CheckCircle, ArrowRight, Sparkles, Search, ChevronRight, Layers, Download, X } from 'lucide-react';
import jsPDF from 'jspdf';

export default function ProductsPage({ setIsChatOpen }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(300000);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const categories = ['All', 'Compact WorkPod', 'Penthouse Pod', 'Executive Suite', 'Garden Studio', 'Wellness Suite', 'Flex Hybrid Office'];

  const filteredProducts = CATALOG_PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = p.startingPrice <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleDownloadPDF = (product) => {
    const doc = new jsPDF();
    
    doc.setFillColor(31, 41, 55);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 107, 0);
    doc.setFontSize(22);
    doc.text('GOOD WHIZBANG', 15, 20);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text('Senior-Accessible Pre-Construction Smart Spaces', 15, 30);

    doc.setTextColor(31, 41, 55);
    doc.setFontSize(18);
    doc.text(product.name, 15, 55);

    doc.setFontSize(12);
    doc.setTextColor(0, 180, 200);
    doc.text(`Starting Price: ${product.priceFormatted} | Floor Area: ${product.sqft} sq.ft`, 15, 65);

    doc.setTextColor(70, 70, 70);
    doc.setFontSize(10);
    const splitDesc = doc.splitTextToSize(product.description, 180);
    doc.text(splitDesc, 15, 75);

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

    doc.setFillColor(240, 240, 240);
    doc.rect(0, 270, 210, 27, 'F');
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Good Whizbang Inc. | Phone: 1-800-WHIZBANG | Email: support@goodwhizbang.com', 15, 282);

    doc.save(`${product.slug}-spec-sheet.pdf`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
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

      {/* Search & Filter Toolbar */}
      <div className="bg-whizbang-slate border border-whizbang-lightgrey p-6 rounded-3xl space-y-6 shadow-xl">
        <div className="grid md:grid-cols-12 gap-4 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g., zero-threshold, solar, penthouse)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-whizbang-dark border border-whizbang-lightgrey focus:border-whizbang-cyan text-white rounded-xl text-base min-h-[48px]"
            />
          </div>

          {/* Price Range Filter */}
          <div className="md:col-span-6 space-y-1">
            <div className="flex justify-between text-sm font-bold">
              <span className="text-gray-300">Max Price Filter:</span>
              <span className="text-whizbang-cyan">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="80000"
              max="300000"
              step="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2.5 bg-whizbang-dark rounded-lg appearance-none cursor-pointer accent-whizbang-orange"
            />
          </div>

        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-whizbang-lightgrey/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold min-h-[40px] transition-all ${
                selectedCategory === cat
                  ? 'bg-whizbang-orange text-white shadow-md shadow-whizbang-orange/30'
                  : 'bg-whizbang-dark text-gray-300 hover:text-white border border-whizbang-lightgrey'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-whizbang-slate border border-whizbang-lightgrey rounded-3xl p-8 space-y-4">
          <p className="text-2xl font-bold text-white">No models match your search or price criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchTerm('');
              setMaxPrice(300000);
            }}
            className="px-5 py-2.5 bg-whizbang-orange text-white font-extrabold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-whizbang-slate border-2 border-whizbang-lightgrey hover:border-whizbang-cyan rounded-3xl overflow-hidden shadow-2xl transition-all flex flex-col justify-between group"
            >
              {/* Image & Badge */}
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

              {/* Info Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                    <span>Est. Completion: <strong className="text-whizbang-cyan">{product.estCompletion}</strong></span>
                    <span>Area: <strong className="text-white">{product.sqft} sq.ft</strong></span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-white leading-tight">{product.name}</h2>
                  <p className="text-base text-gray-300 leading-relaxed">{product.tagline}</p>
                </div>

                {/* Senior Checklist */}
                <div className="space-y-2 pt-2 border-t border-whizbang-lightgrey/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-whizbang-cyan">Senior Accessibility:</h3>
                  <ul className="space-y-1 text-sm text-gray-200">
                    {product.accessibilityFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/models/${product.slug}`}
                    className="flex-1 bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-base px-4 py-3 rounded-xl min-h-[44px] shadow-md flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    View Specs & Hotspots <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="bg-whizbang-dark hover:bg-whizbang-lightgrey text-whizbang-cyan border border-whizbang-cyan font-extrabold px-3 py-3 rounded-xl min-h-[44px] flex items-center justify-center gap-1 text-xs"
                    title="Quick Preview Modal"
                  >
                    Quick Preview
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* QUICK PREVIEW MODAL WITH PDF GENERATOR */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
          <div className="bg-whizbang-slate border-2 border-whizbang-cyan rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative space-y-6">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-2 bg-whizbang-dark text-white rounded-xl border border-whizbang-lightgrey"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-3xl font-extrabold text-white">{quickViewProduct.name}</h2>
            <img src={quickViewProduct.imageUrl} alt="" className="w-full h-56 object-cover rounded-2xl border border-whizbang-lightgrey" />
            <p className="text-lg text-gray-200">{quickViewProduct.description}</p>

            <div className="flex gap-3">
              <Link
                to={`/models/${quickViewProduct.slug}`}
                className="flex-1 bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl text-center"
              >
                Inspect Full Interactive Blueprint
              </Link>
              <button
                onClick={() => handleDownloadPDF(quickViewProduct)}
                className="bg-whizbang-dark text-whizbang-cyan border border-whizbang-cyan font-extrabold px-4 py-3.5 rounded-xl flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download PDF Flyer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
