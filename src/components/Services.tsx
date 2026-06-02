import React from 'react';
import { Home, Building2, Flame, Snowflake, ShieldCheck, HelpCircle, Wrench, RefreshCw, LayoutGrid } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';

export default function Services() {
  return (
    <div className="bg-brand-grey py-16 lg:py-24 space-y-24 scroll-mt-20">
      
      {/* SECTION 1: RESIDENTIAL SERVICE */}
      <section id="residential" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-sky-light text-brand-sky-dark px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <Home className="w-4 h-4" />
            <span>Official Residential Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
            Residential Aircon Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We preserve the comfort of your home environment (condominiums, landed terrace, apartments, bungalows) using high-grade testing gear and premium sanitizing chemical washes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const icons = [
              <Snowflake className="w-6 h-6 text-brand-sky" />,
              <Flame className="w-6 h-6 text-brand-green" />,
              <Wrench className="w-6 h-6 text-brand-sky" />,
              <ShieldCheck className="w-6 h-6 text-brand-green" />,
              <RefreshCw className="w-6 h-6 text-brand-sky" />
            ];
            
            return (
              <div 
                key={service.id} 
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-brand-sky to-brand-green opacity-85" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                    {icons[index] || <Snowflake className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: COMMERCIAL SERVICE */}
      <section id="commercial" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-gradient-to-br from-brand-green-dark to-brand-green text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-brand-sky/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-brand-sky-light px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-xs">
                <Building2 className="w-4 h-4" />
                <span>Commercial & Industrial Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display">
                Commercial <br />Aircon Solutions
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
                Actively serving diverse commercial sectors in Kuala Lumpur & Selangor including corporate offices, boutique retail outlets, trendy cafes, school campuses, warehousing facilities, and clinical laboratories.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-gray-100">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-sky" />
                  <span>Concealed Ceiling & Cassette Ducts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-sky" />
                  <span>VRF & VRV Thermodynamic Fluid Loops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-sky" />
                  <span>Discounted Routine Maintenance Contracts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-sky" />
                  <span>Official Corporate Invoices (SST Compliant)</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl space-y-6">
              <h4 className="text-lg font-bold text-white font-display">
                Need a Custom Corporate Quote?
              </h4>
              <p className="text-xs text-brand-sky-light">
                Our lead estimators can execute structural site surveys and draft comprehensive thermal load reports to reduce your office energy consumption.
              </p>
              
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-100 col-span-2">
                  <ShieldCheck className="w-5 h-5 text-brand-sky" />
                  <span>Includes our robust 30-day corporate guarantee.</span>
                </div>
                
                <a
                  href={`https://wa.me/601116246460?text=${encodeURIComponent("Hello THE KHAN'S AIRCON! I would like to request more information regarding commercial aircon servicing contract proposals.")}`}
                  target="_blank"
                  rel="no-referrer"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-sky-dark hover:bg-brand-sky-hover text-white py-3.5 rounded-xl text-sm font-bold shadow-md shadow-brand-sky/10 transition-all text-center pointer-events-auto"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Message Commercial Representative</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
