import React from 'react';
import { Zap, Heart, Shield, Award, Users, CheckCircle, Sparkles } from 'lucide-react';

export default function AboutPage({ setIsChatOpen }) {
  const teamMembers = [
    {
      name: "Dr. Evelyn Vance",
      role: "Lead Accessibility Architect",
      credentials: "Ph.D. in Universal Architecture & Human Factors",
      bio: "Over two decades advocating for barrier-free environments. Dr. Vance leads our design standard, ensuring every doorway, switch height, and lighting lumen is optimized for senior independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Thorne",
      role: "Chief Automation Officer",
      credentials: "M.S. Robotics & Smart Building Systems",
      bio: "Former IoT system designer who believes smart technology should be zero-friction. Marcus engineered Whizbang's voice-activated climate and emergency fall-detection pathways.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Jenkins",
      role: "VP of Senior Experience",
      credentials: "Certified Senior Living Specialist (CSLS)",
      bio: "Sarah works directly with retirees and remote consultants to refine our floor plans, ensuring Good Whizbang spaces balance modern elegance with effortless daily comfort.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Senior-First Accessibility",
      desc: "Every design decision prioritizes legibility, high contrast visual cues, and zero-barrier physical movement."
    },
    {
      icon: Zap,
      title: "Effortless Automation",
      desc: "No complex smartphone apps required. Speak naturally to control temperature, lights, and window shades."
    },
    {
      icon: Shield,
      title: "Safety & Emergency Peace-of-Mind",
      desc: "Integrated infrared fall-prevention night lighting and one-touch assistance buttons give families confidence."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Brand Hero Story */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whizbang-orange/20 border border-whizbang-orange text-whizbang-orange font-extrabold text-sm uppercase">
          <Zap className="w-4 h-4 fill-whizbang-orange" /> Brand Story & Core Mission
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Redefining Workspace Independence for <span className="text-whizbang-orange">Active Seniors</span>
        </h1>

        <p className="text-xl text-gray-200 leading-relaxed">
          Good Whizbang was founded on a simple, powerful belief: **aging or physical changes should never force anyone to give up their passion for work, consulting, or creative expression.**
        </p>
      </div>

      {/* Brand Values Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div
              key={i}
              className="bg-whizbang-slate border-2 border-whizbang-lightgrey rounded-3xl p-8 space-y-4 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-whizbang-cyan/20 border border-whizbang-cyan text-whizbang-cyan flex items-center justify-center">
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">{v.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{v.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Detailed Team Section */}
      <div className="bg-whizbang-slate border-2 border-whizbang-lightgrey rounded-3xl p-8 sm:p-12 space-y-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-whizbang-cyan/20 text-whizbang-cyan font-bold text-sm rounded-full uppercase">
            <Users className="w-4 h-4" /> Team Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Minds Behind Good Whizbang</h2>
          <p className="text-xl text-gray-300">
            Meet the leaders building the world's most accessible pre-construction smart spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className="bg-whizbang-dark border border-whizbang-lightgrey rounded-2xl overflow-hidden shadow-lg space-y-4 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-56 object-cover rounded-xl border border-whizbang-lightgrey"
                />
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{m.name}</h3>
                  <span className="text-sm font-bold text-whizbang-orange uppercase block mt-1">{m.role}</span>
                  <span className="text-xs text-whizbang-cyan font-semibold block">{m.credentials}</span>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Assistant Banner */}
      <div className="bg-gradient-to-r from-whizbang-slate to-gray-900 border-2 border-whizbang-orange rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Have Questions About Our Team or Custom Floor Plans?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Our Gemini AI Assistant is available 24/7 to answer your specific accessibility and smart home architectural questions.
        </p>
        <button
          onClick={() => setIsChatOpen(true)}
          className="inline-flex items-center gap-3 bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-xl px-8 py-4 rounded-2xl shadow-xl transition-transform hover:scale-[1.03]"
        >
          <Sparkles className="w-6 h-6" /> Chat with Whizbang AI Concierge
        </button>
      </div>

    </div>
  );
}
