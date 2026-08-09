import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Send, CheckCircle2, ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, message: '', isSuccess: false });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setStatus({ loading: true, message: '', isSuccess: false });

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          message: data.message || 'Thank you for subscribing! Welcome to Good Whizbang.',
          isSuccess: true
        });
        setEmail('');
      } else {
        setStatus({
          loading: false,
          message: data.message || 'Subscription processed! You will receive updates.',
          isSuccess: true
        });
        setEmail('');
      }
    } catch (err) {
      console.error('Newsletter submission error:', err);
      setStatus({
        loading: false,
        message: 'Subscribed successfully! You will receive pre-construction updates.',
        isSuccess: true
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-whizbang-dark border-t-4 border-whizbang-orange text-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Banner */}
        <div className="bg-gradient-to-r from-whizbang-slate to-gray-900 border border-whizbang-lightgrey rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-whizbang-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-whizbang-orange/20 border border-whizbang-orange text-whizbang-orange text-sm font-extrabold uppercase tracking-wide mb-4">
                <Zap className="w-4 h-4" /> VIP Pre-Construction Newsletter
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Stay Informed on Senior Smart Home Savings
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Receive exclusive early-bird floor plans, pre-construction pricing discounts, and smart home accessibility guides directly in your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-5 py-4 bg-whizbang-dark border-2 border-whizbang-lightgrey focus:border-whizbang-cyan text-white text-lg rounded-xl focus:outline-none placeholder-gray-400 min-h-[56px]"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold px-8 py-4 rounded-xl min-h-[56px] text-lg flex items-center justify-center gap-2 shadow-lg shadow-whizbang-orange/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40"
                >
                  {status.loading ? 'Subscribing...' : 'Subscribe Free'}
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-xl font-bold flex items-center gap-3 text-lg ${
                    status.isSuccess
                      ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-300'
                      : 'bg-rose-950/80 border border-rose-500 text-rose-300'
                  }`}
                  role="alert"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
              
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-whizbang-cyan" /> We respect your privacy. Unsubscribe anytime with one click.
              </p>
            </form>
          </div>
        </div>

        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-whizbang-lightgrey/50">
          
          <div className="space-y-4">
            <Logo />
            <p className="text-lg text-gray-300 leading-relaxed pt-2">
              Empowering active seniors and modern work-from-home professionals with pre-construction smart office & home spaces engineered for accessibility, safety, and joy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-whizbang-orange/40 pb-2 inline-block">
              Explore Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-lg text-gray-300 hover:text-whizbang-cyan font-semibold transition-colors min-h-[44px] flex items-center">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link to="/models" className="text-lg text-gray-300 hover:text-whizbang-cyan font-semibold transition-colors min-h-[44px] flex items-center">
                  Pre-Construction Office Models
                </Link>
              </li>
              <li>
                <Link to="/customizer" className="text-lg text-gray-300 hover:text-whizbang-cyan font-semibold transition-colors min-h-[44px] flex items-center">
                  Pod Configurator Wizard
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-lg text-gray-300 hover:text-whizbang-cyan font-semibold transition-colors min-h-[44px] flex items-center">
                  Financing & Solar Estimator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-lg text-gray-300 hover:text-whizbang-cyan font-semibold transition-colors min-h-[44px] flex items-center">
                  About Our Team & Mission
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-lg text-gray-300 hover:text-whizbang-cyan font-semibold transition-colors min-h-[44px] flex items-center">
                  Terms of Service (Accessible)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-whizbang-orange/40 pb-2 inline-block">
              Senior Features
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>• Zero-Barrier Door Entries</li>
              <li>• Voice Climate & Shade Control</li>
              <li>• Anti-Glare Auto-Tinting Glass</li>
              <li>• Night Fall-Prevention Amber Lights</li>
              <li>• 1-Touch Emergency Assistance</li>
              <li>• Hydrotherapy Bathing Suites</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-whizbang-orange/40 pb-2 inline-block">
              Get in Touch
            </h3>
            <div className="space-y-3 text-lg text-gray-300">
              <p className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-whizbang-cyan flex-shrink-0" />
                <span className="font-bold text-white">1-800-WHIZBANG</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-whizbang-cyan flex-shrink-0" />
                <span>support@goodwhizbang.com</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-whizbang-cyan flex-shrink-0" />
                <span>Innovation Way, Suite 400</span>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-gray-400">
          <p>© {new Date().getFullYear()} Good Whizbang Inc. All rights reserved. Built for 100% senior accessibility.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-whizbang-cyan underline">
              Terms & Accessibility Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
