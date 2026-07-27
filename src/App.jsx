import React, { useState } from 'react';

export default function App() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does MetricFlow compare to Google Analytics 4 (GA4)?",
      a: "Unlike GA4 which requires complex tag configuration and has data sampling delays, MetricFlow tracks real-time event-based metrics automatically with zero setup and 100% data accuracy."
    },
    {
      q: "Does the script slow down our core web vitals?",
      a: "No. The tracking script is CDN-hosted, edge-cached, and under 1.8 KB (gzipped) — executing asynchronously with zero blocking on the main browser thread."
    },
    {
      q: "Are you fully GDPR and CCPA compliant?",
      a: "Yes. MetricFlow uses cookie-less fingerprinting by default and offers full EU data residency options so you never have to display intrusive cookie consent banners."
    },
    {
      q: "Can I upgrade or downgrade as my trackable volume scales?",
      a: "Yes, you can scale your plan up or down at any time from your billing settings without losing historical analytical data."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900/80">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/25">
              M
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">MetricFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-1">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-1">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-1">FAQ</a>
            <hr className="border-slate-800" />
            <div className="flex flex-col gap-2">
              <button className="w-full text-center py-2.5 rounded-lg text-slate-300 hover:text-white border border-slate-800">
                Sign In
              </button>
              <button className="w-full text-center py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          MetricFlow v2.0 is Live
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.12]">
          Real-time AI analytics for <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">modern founders</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Track conversion funnel friction, reduce user churn below 2%, and scale your recurring revenue with zero tracking setup.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
            Start Free 14-Day Trial
          </button>
          <button className="w-full sm:w-auto text-base font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 px-8 py-3.5 rounded-xl transition-all hover:border-slate-700">
            Book Live Demo
          </button>
        </div>

        {/* Dashboard Mockup - Realistic SaaS Benchmarks */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 backdrop-blur-2xl shadow-2xl max-w-5xl mx-auto relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-xs text-slate-500 font-mono bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800/50">
              dashboard.metricflow.io
            </div>
            <div className="w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all">
              <span className="text-xs text-slate-400 font-medium">ARR (Annual Recurring)</span>
              <div className="text-xl font-bold mt-1 text-white">$514,200</div>
              <span className="text-xs text-emerald-400 mt-2 block font-medium">↑ +18.4% QoQ</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all">
              <span className="text-xs text-slate-400 font-medium">Net Revenue Retention</span>
              <div className="text-xl font-bold mt-1 text-white">112%</div>
              <span className="text-xs text-emerald-400 mt-2 block font-medium">↑ Top 10% Industry</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all">
              <span className="text-xs text-slate-400 font-medium">User Churn Rate</span>
              <div className="text-xl font-bold mt-1 text-white">1.8%</div>
              <span className="text-xs text-emerald-400 mt-2 block font-medium">↓ -0.6% vs benchmark</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all">
              <span className="text-xs text-slate-400 font-medium">Trial Conversion</span>
              <div className="text-xl font-bold mt-1 text-white">8.4%</div>
              <span className="text-xs text-indigo-400 mt-2 block font-medium">✨ AI Optimized</span>
            </div>
          </div>
        </div>
      </main>

      {/* Real SaaS Brand Logos */}
      <section className="py-12 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Used by tech-forward teams across modern SaaS
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300 text-slate-400 font-extrabold text-lg tracking-wider">
            <span>SUPABASE</span>
            <span>VERCEL</span>
            <span>RESEND</span>
            <span>CLERK</span>
            <span>RAYCAST</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Powerful Engine</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">Everything you need to scale revenue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white">Instant Event Tracking</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Auto-capture clicks, form fills, and page views without writing tedious event handlers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              🎯
            </div>
            <h3 className="text-xl font-bold text-white">AI Drop-off Detection</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Identify where users drop off in your onboarding funnel before it impacts your bottom line.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              🔒
            </div>
            <h3 className="text-xl font-bold text-white">Privacy First Compliance</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              GDPR, CCPA, and cookie-less tracking built-in out of the box for international trust.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900 text-center">
        <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Predictable Pricing</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">Pick a plan that fits your stage</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)} 
            className="w-14 h-7 rounded-full bg-slate-900 border border-slate-800 p-1 relative transition-colors focus:outline-none"
            aria-label="Toggle Annual or Monthly Billing"
          >
            <div className={`w-5 h-5 rounded-full bg-indigo-500 transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Annual <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 text-left">
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <p className="text-sm text-slate-400 mt-1">For early-stage side projects and MVPs.</p>
              <div className="text-4xl font-extrabold text-white mt-6">
                ${isAnnual ? '29' : '39'}<span className="text-base text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Up to 10,000 monthly trackable users</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> 14-day data retention</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Core AI insights</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700">
              Get Started
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-indigo-950/20 border-2 border-indigo-500 flex flex-col justify-between relative shadow-2xl shadow-indigo-500/10">
            <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-xs font-bold text-white shadow-md">
              POPULAR
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">Pro Scale</h3>
              <p className="text-sm text-slate-400 mt-1">For growing teams and scaling apps.</p>
              <div className="text-4xl font-extrabold text-white mt-6">
                ${isAnnual ? '79' : '99'}<span className="text-base text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Up to 100,000 monthly trackable users</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Unlimited data retention</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Advanced custom funnel alerts</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Priority founder support</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Got Questions?</h2>
          <p className="text-3xl font-extrabold text-white mt-2">Frequently Asked Questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-slate-900/40 border border-slate-800/80 overflow-hidden transition-colors"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center text-white font-semibold text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="text-indigo-400 text-lg ml-4 font-bold">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 text-center text-xs text-slate-500">
        <p>© 2026 MetricFlow Inc. Designed & Built for High Conversions.</p>
      </footer>
    </div>
  );
}