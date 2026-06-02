import React from 'react';
import { ShieldCheck, Award, Zap, HeartHandshake, Snowflake, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-green-light text-brand-green px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Users className="w-4 h-4" />
              <span>Meet Our Experts</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
              About <span className="text-brand-green">{BUSINESS_INFO.brandName}</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Established in the heart of Selangor with a firm commitment to clean indoor climates, <strong className="text-gray-950">{BUSINESS_INFO.brandName}</strong> (fully managed by <strong className="text-gray-800">{BUSINESS_INFO.companyName}</strong>) is a top-tier provider of transparent, high-quality, and dependable aircon solutions across Kuala Lumpur & Selangor.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We focus on premium workmanship and the longevity of your cooling appliances. By employing a team of certified local Malaysian technicians, we are dedicated to resolving persistent circuit issues, water leakages, choked filters, and sky-high utility bills forever.
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center space-x-4">
              <div className="p-3 bg-brand-sky-light text-brand-sky-dark rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Certified & Experienced Technicians</h4>
                <p className="text-xs text-gray-500 mt-0.5">All team members are fully certified to service modern energy-saving Inverter AC units.</p>
              </div>
            </div>
          </div>

          {/* Interactive Core Values Boxes */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-brand-grey p-6 rounded-2xl border border-gray-100/55 hover:border-brand-green/30 transition-all shadow-xs group">
              <div className="w-10 h-10 rounded-xl bg-opacity-10 bg-brand-green text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-display">30-Day Leaking Warranty</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                We stand behind our workmanship. If any serviced unit drips water again within 30 days, we will inspect and rectify it for free.
              </p>
            </div>

            <div className="bg-brand-grey p-6 rounded-2xl border border-gray-100/55 hover:border-brand-green/30 transition-all shadow-xs group">
              <div className="w-10 h-10 rounded-xl bg-opacity-10 bg-brand-sky text-brand-sky/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-display">Inverter System Experts</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                We train our technicians to thoroughly understand inverter R32/R410A gas loops, smart frequency configurations, and PCB micro-repairs.
              </p>
            </div>

            <div className="bg-brand-grey p-6 rounded-2xl border border-gray-100/55 hover:border-brand-green/30 transition-all shadow-xs group">
              <div className="w-10 h-10 rounded-xl bg-opacity-10 bg-yellow-500 text-yellow-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-display">Polite & Punctual Service</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                We maintain high standards of courtesy and respect inside your premises. We keep your floors clean, dry, and carefully protected.
              </p>
            </div>

            <div className="bg-brand-grey p-6 rounded-2xl border border-gray-100/55 hover:border-brand-sky/30 transition-all shadow-xs group">
              <div className="w-10 h-10 rounded-xl bg-opacity-10 bg-brand-sky text-brand-sky/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-display">Transparent Gas To-Ups</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                No flat-rate trap. Gas refill pressures are visibly checked with raw gauge manifolds, and we only charge according to the actual PSI gap required.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
