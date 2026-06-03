import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Wrench, 
  Droplet, 
  Wind, 
  ShieldAlert, 
  Layers, 
  AlertCircle, 
  Plus, 
  ArrowRight,
  Info
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Pricing() {
  const whatsappUrl = `${BUSINESS_INFO.links.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20aircon%20service%20and%20installation.%20Please%20provide%20available%20slots.`;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FFFFFF] scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESIGN UTAMA & STRUKTUR: Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-50 text-[#0B1B3D] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-slate-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Honest & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display mb-2">
            Aircon Service & Installation Pricing
          </h2>
          <div className="w-16 h-1 bg-[#0B1B3D]/10 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Get premium heating & cooling solutions with clear upfront rates. No hidden fees, no surprise diagnostics—just standard professional care.
          </p>
        </div>

        {/* SUB-SECTION 1: 'INSTALLATION & SERVICE PRICE LIST' */}
        <div className="space-y-12">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#0B1B3D]">
              <Layers className="w-4 h-4 font-bold" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
              Installation & Service Price List
            </h3>
          </div>

          {/* Cards & Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Category 1: Aircon Installation Packages (Full-width Column block inside grid) */}
            <div className="lg:col-span-12 xl:col-span-4 bg-slate-50/50 border border-slate-150 rounded-2xl p-6 sm:p-8 hover:border-[#0B1B3D]/20 transition-all duration-300 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full translate-x-12 -translate-y-12 pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100/50">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold bg-[#0B1B3D] text-white px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                  Package
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#0B1B3D] mb-4">Aircon Installation Packages</h4>
              
              <div className="space-y-5">
                {/* Package - Install */}
                <div className="bg-white p-4.5 rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-3.5 hover:border-sky-200 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <span className="font-extrabold text-gray-950 text-sm">Install Aircon</span>
                    <span className="text-xl font-black text-emerald-600 font-mono flex-shrink-0">RM 300</span>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100/55 p-3 rounded-lg text-xs space-y-1 text-emerald-800">
                    <span className="font-extrabold block text-[10px] uppercase tracking-wider text-emerald-700">Pre-Included Free Items:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1 pt-1 font-medium font-sans">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        Copper Pipe 5 ft
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        Wiring 5 ft
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        Drain Pipe 5 ft
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Package - Dismantle */}
                <div className="bg-white p-4.5 rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex justify-between items-center gap-4 hover:border-slate-200 transition-colors">
                  <div className="space-y-0.5">
                    <span className="font-extrabold text-gray-950 text-sm block">Dismantle Aircon</span>
                    <span className="text-xs text-gray-400">Safe disassembly of older units</span>
                  </div>
                  <span className="text-lg font-black text-[#0B1B3D] font-mono flex-shrink-0">RM 100</span>
                </div>
              </div>
            </div>

            {/* Category 2 & 3: Wall Mounted Services (Wall-mounted Normal & Chemical) */}
            <div className="lg:col-span-6 xl:col-span-4 bg-slate-50/50 border border-slate-150 rounded-2xl p-6 sm:p-8 hover:border-[#0B1B3D]/20 transition-all duration-300 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full translate-x-12 -translate-y-12 pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50">
                  <Wind className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-extrabold bg-[#0B1B3D] text-white px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                  Wall Mounted
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#0B1B3D] mb-4">Wall Mounted Services</h4>
              
              <div className="space-y-6">
                {/* Normal Service block */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block border-b border-dashed border-slate-200 pb-1 font-mono">
                    Normal Service
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">1.0 HP & 1.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 70</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">2.0 HP & 2.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 90</strong>
                    </div>
                  </div>
                </div>

                {/* Chemical Service block */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-black uppercase text-teal-600 tracking-wider block border-b border-dashed border-slate-200 pb-1 font-mono">
                    Chemical Wash / Service
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">1.0 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 110</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">1.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 120</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">2.0 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 130</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">2.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 130</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 4 & 5: Ceiling Cassette Services */}
            <div className="lg:col-span-6 xl:col-span-4 bg-slate-50/50 border border-slate-150 rounded-2xl p-6 sm:p-8 hover:border-[#0B1B3D]/20 transition-all duration-300 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full translate-x-12 -translate-y-12 pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/50">
                  <Droplet className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold bg-[#0B1B3D] text-white px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                  Ceiling Cassette
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#0B1B3D] mb-4">Ceiling Cassette Services</h4>
              
              <div className="space-y-6">
                {/* Normal Service block */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block border-b border-dashed border-slate-200 pb-1 font-mono">
                    Normal Service
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">1.0 HP & 1.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 100</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">2.0 HP & 2.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 120</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">3.0 HP to 5.0 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 130</strong>
                    </div>
                  </div>
                </div>

                {/* Chemical / Overhaul Service block */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider block border-b border-dashed border-slate-200 pb-1 font-mono">
                    Chemical Service & Overhaul
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">1.0 HP & 1.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 190</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">2.0 HP to 2.5 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 250</strong>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">3.0 HP to 5.0 HP</span>
                      <strong className="text-base font-extrabold text-[#0B1B3D] font-mono">RM 280</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SUB-SECTION 2: 'ADDITIONAL CHARGES (MORE THAN 5 FEET)' */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 font-bold" />
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
              Additional Charges (More Than 5 Feet)
            </h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between mb-6">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                For setups where the layout spacing exceeds our pre-bundled 5 feet of materials, standard supplementary material and structural charges apply:
              </p>
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-2.5 py-1 font-mono uppercase tracking-wider">
                <Info className="w-3 h-3" />
                <span>Standardized Rates</span>
              </div>
            </div>

            {/* List with clean border indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-between select-none hover:bg-slate-50 transition-colors">
                <span className="text-xs text-gray-700 font-extrabold">Copper Pipe</span>
                <strong className="text-sm font-black text-[#0B1B3D] font-mono">RM 22 / foot</strong>
              </div>
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-between select-none hover:bg-slate-50 transition-colors">
                <span className="text-xs text-gray-700 font-extrabold">Wiring</span>
                <strong className="text-sm font-black text-[#0B1B3D] font-mono">RM 6 / foot</strong>
              </div>
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-between select-none hover:bg-slate-50 transition-colors">
                <span className="text-xs text-gray-700 font-extrabold">Drain Pipe</span>
                <strong className="text-sm font-black text-[#0B1B3D] font-mono">RM 5 / foot</strong>
              </div>
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-between select-none hover:bg-slate-50 transition-colors">
                <span className="text-xs text-gray-700 font-extrabold">Aircon Switch</span>
                <strong className="text-sm font-black text-[#0B1B3D] font-mono">RM 40</strong>
              </div>
              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-between select-none hover:bg-slate-50 transition-colors">
                <span className="text-xs text-gray-700 font-extrabold">Compressor Bracket</span>
                <strong className="text-sm font-black text-[#0B1B3D] font-mono">RM 50</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BAGIAN PENUTUP (CALL TO ACTION & DISCLAIMER) */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto">
          
          {/* Tombol WhatsApp (Book via WhatsApp Now) as specified */}
          <div className="w-full sm:w-auto hover:scale-[1.03] transition-all duration-300">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-8 py-5 rounded-2xl shadow-lg border border-[#1ebd51] text-sm tracking-wide transition-all w-full sm:w-auto font-sans"
            >
              {/* WhatsApp Icon Hand-coded precisely for corporate layout */}
              <svg 
                className="w-5.5 h-5.5 fill-current text-white flex-shrink-0" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-extrabold uppercase">Book via WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
            </a>
          </div>

          <div className="space-y-1.5">
            {/* Catatan Kaki: Gray text as specified */}
            <p className="text-[11px] sm:text-xs text-gray-400 font-sans tracking-wide leading-relaxed">
              Note: Prices shown are starting rates and subject to change based on actual site conditions. Terms & conditions apply.
            </p>
            {/* Tanggal Pembaruan: Listed at very bottom */}
            <p className="text-[10px] font-bold text-gray-400 font-mono tracking-wider uppercase">
              Price list updated as of April 2026.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
