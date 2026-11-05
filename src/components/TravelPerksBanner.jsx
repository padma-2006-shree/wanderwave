import React from 'react';
import {
  ShieldCheck,
  Headphones,
  Award,
  RefreshCw,
  Sparkles,
  Plane
} from 'lucide-react';

export const TravelPerksBanner = () => {
  const perks = [
    {
      icon: Award,
      title: 'Best Price Guaranteed',
      desc: 'Found a lower rate elsewhere within 24 hours? We will beat it by 10%.'
    },
    {
      icon: Headphones,
      title: '24/7 Global Concierge',
      desc: 'Real travel specialists ready via chat or call wherever you are in the world.'
    },
    {
      icon: RefreshCw,
      title: 'Flexible Cancellation',
      desc: 'Plans change. Enjoy 1-click cancellations and instant automated refunds.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Bonded Checkout',
      desc: 'Bank-grade 256-bit SSL encryption and full passenger financial protection.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The WanderWave Distinction</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Travel With Unrivaled Peace of Mind
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Every booking is backed by our customer-first commitment and global travel network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
