import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, HeartHandshake, Eye, Sparkles, ArrowRight, CheckCircle, Users, Star, Award, Sliders, Calculator } from 'lucide-react';
import SmartFeatureToggle from '../components/SmartFeatureToggle';
import MortgageSavingsCalculator from '../components/MortgageSavingsCalculator';

export default function LandingPage({ setIsChatOpen }) {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Zero-Barrier Access",
      desc: "Stair-free continuous single-level layouts with extra-wide 36-inch zero-threshold sliding entryways."
    },
    {
      icon: Eye,
      title: "Senior High Contrast",
      desc: "Non-glare circadian lighting, large print controls, and automated anti-glare electrochromic windows."
    },
    {
      icon: HeartHandshake,
      title: "Touchless Voice Control",
      desc: "Manage heating, lighting, shades, and emergency alerts using natural spoken commands."
    }
  ];

  const teamSpotlight = [
    {
      name: "Dr. Evelyn Vance",
      role: "Lead Accessibility Architect",
      bio: "20+ years designing universal housing environments tailored for senior mobility & visual clarity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Thorne",
      role: "Chief Smart Home Automation Engineer",
      bio: "Pioneered voice-first emergency response protocols and circadian health lighting for residential suites.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Jenkins",
      role: "VP of Senior Experience & Design",
      bio: "Dedicated to creating empowering, joyful workspace models for active retirees & remote professionals.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const seniorReviews = [
    {
      name: "Arthur & Margaret K.",
      location: "Retired Educators",
      quote: "The voice climate controls and zero-threshold entry allow Arthur to consult from home without straining his joints. Good Whizbang thought of everything!",
      model: "The Lumina WorkPod"
    },
    {
      name: "Robert S.",
      location: "Financial Advisor (Age 68)",
      quote: "The auto-tinting privacy glass eliminates afternoon glare on my screens completely. I love showing off the smart automation to my clients.",
      model: "The Apex Executive Suite"
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-whizbang-dark via-whizbang-slate to-whizbang-dark border-b border-whizbang-lightgrey/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-whizbang-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-whizbang-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whizbang-orange/20 border-2 border-whizbang-orange text-whizbang-orange font-extrabold text-sm uppercase tracking-wider">
                <Zap className="w-5 h-5 fill-whizbang-orange" /> Pre-Construction Senior Smart Offices
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Empowering Senior Independence with <span className="text-whizbang-orange underline decoration-whizbang-cyan decoration-wavy decoration-2">Smart Workspaces</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-medium">
                Modern pre-construction office & living suites integrated with touchless voice controls, zero-barrier entryways, auto-tinting privacy glass, and circadian health lighting.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/models"
                  className="bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-xl px-8 py-4 rounded-2xl min-h-[56px] shadow-xl shadow-whizbang-orange/30 flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-[0.98]"
                >
                  Explore Office Models <ArrowRight className="w-6 h-6" />
                </Link>

                <Link
                  to="/customizer"
                  className="bg-whizbang-slate hover:bg-whizbang-lightgrey text-whizbang-cyan border-2 border-whizbang-cyan font-extrabold text-xl px-8 py-4 rounded-2xl min-h-[56px] flex items-center justify-center gap-3 transition-all hover:scale-[1.03]"
                >
                  Configure Custom Pod <Sliders className="w-6 h-6" />
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-whizbang-lightgrey/60">
                <div>
                  <span className="block text-3xl font-extrabold text-whizbang-cyan">100%</span>
                  <span className="text-sm font-semibold text-gray-300">Barrier-Free Design</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-whizbang-orange">$89K+</span>
                  <span className="text-sm font-semibold text-gray-300">Pre-Construction Starting</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-teal-400">24/7</span>
                  <span className="text-sm font-semibold text-gray-300">Voice Safety Protocol</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-whizbang-lightgrey shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                  alt="The Lumina Senior Smart Office Suite"
                  className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-whizbang-dark via-whizbang-dark/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-whizbang-slate/90 backdrop-blur-md rounded-2xl border border-whizbang-lightgrey">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase text-whizbang-cyan tracking-wider">Model Feature Spotlight</span>
                      <h3 className="text-2xl font-bold text-white">The Lumina WorkPod</h3>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-whizbang-orange text-white font-extrabold text-lg">
                      $89,000
                    </span>
                  </div>
                  <p className="text-base text-gray-300 mt-2">
                    Zero-step access, voice-command climate, and anti-glare circadian illumination.
                  </p>
                  <Link
                    to="/models/lumina-senior-workpod"
                    className="mt-3 inline-flex items-center gap-1.5 text-whizbang-cyan font-bold text-sm hover:underline"
                  >
                    Inspect Blueprint & Specs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Built from the Ground Up for <span className="text-whizbang-cyan">Senior Readability & Safety</span>
          </h2>
          <p className="text-xl text-gray-300 mt-3">
            Every Good Whizbang space removes everyday barriers so active seniors can work, consult, and create with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-whizbang-slate border-2 border-whizbang-lightgrey hover:border-whizbang-orange rounded-3xl p-8 transition-all hover:-translate-y-1 shadow-xl space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-whizbang-orange/20 border border-whizbang-orange flex items-center justify-center text-whizbang-orange">
                  <Icon className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">{item.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE FEATURE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmartFeatureToggle />
      </section>

      {/* INTERACTIVE MORTGAGE & SAVINGS CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MortgageSavingsCalculator />
      </section>

      {/* SENIOR TESTIMONIAL REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl font-extrabold text-white">Loved by Active Seniors & Retirees</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {seniorReviews.map((rev, idx) => (
            <div key={idx} className="bg-whizbang-slate border border-whizbang-lightgrey rounded-3xl p-8 space-y-4 shadow-xl">
              <p className="text-xl text-gray-200 italic leading-relaxed">"{rev.quote}"</p>
              <div className="flex justify-between items-center pt-3 border-t border-whizbang-lightgrey/50 text-sm">
                <div>
                  <span className="font-extrabold text-white text-base block">{rev.name}</span>
                  <span className="text-whizbang-cyan font-semibold">{rev.location}</span>
                </div>
                <span className="px-3 py-1 bg-whizbang-dark border border-whizbang-orange/40 text-whizbang-orange font-extrabold rounded-lg">
                  {rev.model}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT THE TEAM SPOTLIGHT SECTION */}
      <section className="bg-whizbang-slate/60 border-y border-whizbang-lightgrey/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500 text-teal-300 font-bold text-sm uppercase mb-3">
              <Users className="w-4 h-4" /> Meet Our Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Architects & Engineers Devoted to Senior Well-Being
            </h2>
            <p className="text-xl text-gray-300 mt-3">
              Our multidisciplinary team combines architectural excellence with cutting-edge assistive technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamSpotlight.map((member, idx) => (
              <div
                key={idx}
                className="bg-whizbang-dark border-2 border-whizbang-lightgrey rounded-3xl overflow-hidden shadow-xl hover:border-whizbang-cyan transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-extrabold text-white">{member.name}</h3>
                  <span className="block text-sm font-bold text-whizbang-cyan uppercase tracking-wider">
                    {member.role}
                  </span>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-whizbang-slate hover:bg-whizbang-lightgrey text-whizbang-orange border-2 border-whizbang-orange font-extrabold text-lg px-8 py-3.5 rounded-xl min-h-[52px] transition-all"
            >
              Read Full Brand Story & Mission <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
