import React, { useState } from 'react';

export default function App() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            M
          </div>
          <span className="font-bold text-xl tracking-tight text-white">MetricFlow</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          MetricFlow v2.0 is Live
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Real-time AI analytics for <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">modern founders</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
          Track conversion funnel friction, automate user insights, and scale your SaaS revenue with zero configuration required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95">
            Start Free 14-Day Trial
          </button>
          <button className="w-full sm:w-auto text-base font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-8 py-3.5 rounded-xl transition-all">
            Book Live Demo
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-xl shadow-2xl max-w-5xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-xs text-slate-500 font-mono">dashboard.metricflow.io</div>
            <div className="w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-medium">Monthly Recurring Revenue</span>
              <div className="text-2xl font-bold mt-1 text-white">$42,850</div>
              <span className="text-xs text-emerald-400 mt-2 block font-medium">↑ +14.2% this month</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-medium">Active Subscriptions</span>
              <div className="text-2xl font-bold mt-1 text-white">1,284</div>
              <span className="text-xs text-emerald-400 mt-2 block font-medium">↑ +8.1% this week</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-xs text-slate-400 font-medium">Funnel Conversion Rate</span>
              <div className="text-2xl font-bold mt-1 text-white">4.2%</div>
              <span className="text-xs text-indigo-400 mt-2 block font-medium">Optimized by AI</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Powerful Engine</h2>
          <p className="text-3xl font-extrabold text-white mt-2">Everything you need to scale revenue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white">Instant Event Tracking</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Auto-capture clicks, form fills, and page views without writing tedious event handlers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
              🎯
            </div>
            <h3 className="text-lg font-bold text-white">AI Drop-off Detection</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Identify where users drop off in your onboarding funnel before it impacts your bottom line.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold mb-4">
              🔒
            </div>
            <h3 className="text-lg font-bold text-white">Privacy First Compliance</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              GDPR, CCPA, and cookie-less tracking built-in out of the box for international trust.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 text-center">
        <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Predictable Pricing</h2>
        <p className="text-3xl font-extrabold text-white mt-2">Pick a plan that fits your stage</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)} 
            className="w-12 h-6 rounded-full bg-slate-800 p-1 relative transition-colors"
          >
            <div className={`w-4 h-4 rounded-full bg-indigo-500 transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Annual <span className="text-xs text-indigo-400 font-medium">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 text-left">
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <p className="text-sm text-slate-400 mt-1">For early-stage side projects and MVPs.</p>
              <div className="text-4xl font-extrabold text-white mt-6">
                ${isAnnual ? '29' : '39'}<span className="text-base text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>✓ Up to 10,000 monthly trackable users</li>
                <li>✓ 14-day data retention</li>
                <li>✓ Core AI insights</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all">
              Get Started
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-indigo-950/20 border-2 border-indigo-500/80 flex flex-col justify-between relative">
            <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-indigo-600 text-xs font-bold text-white">
              POPULAR
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">Pro Scale</h3>
              <p className="text-sm text-slate-400 mt-1">For growing teams and scaling apps.</p>
              <div className="text-4xl font-extrabold text-white mt-6">
                ${isAnnual ? '79' : '99'}<span className="text-base text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>✓ Up to 100,000 monthly trackable users</li>
                <li>✓ Unlimited data retention</li>
                <li>✓ Advanced custom funnel alerts</li>
                <li>✓ Priority founder support</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} MetricFlow Inc. Designed & Built for High Conversions.</p>
      </footer>
    </div>
  );
  
  
}