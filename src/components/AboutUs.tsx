import React from 'react';
import { ShieldCheck, Award, Zap, HeartHandshake, Snowflake, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import ServiceMap from './ServiceMap';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50/65 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-100/50">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Meet Our Experts</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display text-[#0A3D30]">
                About {BUSINESS_INFO.brandName}
              </h2>

              <p className="text-sm sm:text-base text-[#2D3748] leading-relaxed font-sans">
                Established in the heart of Selangor with a firm commitment to clean indoor climates, <strong className="text-slate-900 font-extrabold">{BUSINESS_INFO.brandName}</strong> (fully managed by <strong className="text-slate-800 font-bold">{BUSINESS_INFO.companyName}</strong>) is a top-tier provider of transparent, high-quality, and dependable aircon solutions across Kuala Lumpur & Selangor.
              </p>

              <p className="text-sm sm:text-base text-[#2D3748] leading-relaxed font-sans">
                We focus on premium workmanship and the longevity of your cooling appliances. By employing a team of certified local Malaysian technicians, we are dedicated to resolving persistent circuit issues, water leakages, choked filters, and sky-high utility bills forever.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-start space-x-4">
              <div className="p-3 bg-sky-50 text-sky-700 rounded-xl border border-sky-100">
                <Award className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#0B1B3D]">Certified & Experienced Technicians</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">All team members are fully certified to service modern energy-saving Inverter AC units.</p>
              </div>
            </div>
          </div>

          {/* Interactive Core Values Boxes */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-500/30 transition-all shadow-sm group flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-emerald-100">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#FACC15] font-display">30-Day Leaking Warranty</h3>
              </div>
              <p className="text-sm text-[#4A5568] mt-3 leading-relaxed">
                We stand behind our workmanship. If any serviced unit drips water again within 30 days, we will inspect and rectify it for free.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-500/30 transition-all shadow-sm group flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-sky-100">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#FACC15] font-display">Inverter System Experts</h3>
              </div>
              <p className="text-sm text-[#4A5568] mt-3 leading-relaxed">
                We train our technicians to thoroughly understand inverter R32/R410A gas loops, smart frequency configurations, and PCB micro-repairs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-500/30 transition-all shadow-sm group flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-amber-100">
                  <HeartHandshake className="w-12 h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#FACC15] font-display">Polite & Punctual Service</h3>
              </div>
              <p className="text-sm text-[#4A5568] mt-3 leading-relaxed">
                We maintain high standards of courtesy and respect inside your premises. We keep your floors clean, dry, and carefully protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-500/30 transition-all shadow-sm group flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-sky-100">
                  <Snowflake className="w-12 h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#FACC15] font-display">Transparent Gas To-Ups</h3>
              </div>
              <p className="text-sm text-[#4A5568] mt-3 leading-relaxed">
                No flat-rate trap. Gas refill pressures are visibly checked with raw gauge manifolds, and we only charge according to the actual PSI gap required.
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic Interactive SVG Service Regions Map */}
        <div className="mt-16 lg:mt-24">
          <ServiceMap />
        </div>

      </div>
    </section>
  );
}
