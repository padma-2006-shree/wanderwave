import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { Mail, Sparkles, Check, Copy } from 'lucide-react';

export const NewsletterSection = () => {
  const { addToast } = useBooking();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'warning');
      return;
    }
    setSubscribed(true);
    addToast('Welcome to WanderWave VIP! Your 20% coupon code is ready.', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText('WANDER20');
    setCopied(true);
    addToast('Coupon code "WANDER20" copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="deals" className="py-16 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Exclusive Insider Club</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Unlock Secret 20% Off Travel Deals
        </h2>

        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2 mb-8">
          Join 250,000+ wanderers receiving unpublished airfare flash sales, private island upgrades, and seasonal escape discounts.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-blue-500/30 whitespace-nowrap transition-all active:scale-95"
            >
              Get Discount Code
            </button>
          </form>
        ) : (
          <div className="p-6 bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl max-w-md mx-auto text-center space-y-3 animate-in zoom-in-95">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Here is your 20% discount code:</h3>
            
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-lg font-black bg-blue-600/50 px-4 py-1.5 rounded-xl border border-blue-400 tracking-widest text-amber-300">
                WANDER20
              </span>
              <button
                onClick={handleCopy}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-colors"
                title="Copy code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-300">
              Apply this during checkout for an automatic 20% reduction on flights, stays, and packages!
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
