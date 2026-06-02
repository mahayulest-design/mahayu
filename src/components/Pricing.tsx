import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Table, CheckCircle, HelpCircle, Flame, ShieldAlert, BadgeInfo } from 'lucide-react';
import { WALL_MOUNTED_PRICING, CEILING_CASSETTE_PRICING, ADDITIONAL_CHARGES, BUSINESS_INFO } from '../data/businessData';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'wall' | 'ceiling' | 'additional'>('wall');

  const tabs = [
    { id: 'wall', label: 'Wall-Mounted AC' },
    { id: 'ceiling', label: 'Ceiling Cassette AC' },
    { id: 'additional', label: 'Additional Materials' },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-green-light text-brand-green px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <Table className="w-4 h-4" />
            <span>Transparent Pricing Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
            Pricing & Packages
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Get an honest, transparent, and fair servicing rate with zero hidden costs. All charges are itemized clearly for your reference.
          </p>
        </div>

        {/* Tab Controller Switcher */}
        <div className="flex justify-center p-1 bg-gray-100 rounded-xl max-w-2xl mx-auto mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 text-center py-3.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-brand-green shadow-xs font-bold'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Pricing Content Grid */}
        <div className="mt-8">
          {activeTab === 'wall' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {WALL_MOUNTED_PRICING.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    item.highlight
                      ? 'border-brand-green bg-brand-green-light/40 shadow-md ring-2 ring-brand-green/20'
                      : 'border-gray-100 bg-linear-to-b from-white to-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-lg'
                  }`}
                >
                  {item.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-green text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-xs">
                      Highly Recommended
                    </span>
                  )}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">
                      {item.name.toLowerCase().includes("normal") ? "Normal Servicing" : item.name.toLowerCase().includes("chemical") ? "Chemical Wash" : "Installation / Other"}
                    </h4>
                    <h3 className="text-base font-extrabold text-gray-900 font-display leading-tight min-h-12">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 italic min-h-8">
                      {item.details}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-baseline justify-between">
                    <span className="text-xs text-gray-400 font-medium">Clear Rate</span>
                    <span className="text-lg font-black text-brand-green font-display">{item.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'ceiling' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {CEILING_CASSETTE_PRICING.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    item.highlight
                      ? 'border-brand-sky-dark bg-brand-sky-light/40 shadow-md ring-2 ring-brand-sky-dark/20'
                      : 'border-gray-100 bg-linear-to-b from-white to-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-lg'
                  }`}
                >
                  {item.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-sky-dark text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-xs">
                      Corporate Favorite
                    </span>
                  )}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">
                      {item.name.toLowerCase().includes("normal") ? "Normal Cassette" : "Chemical Overhaul"}
                    </h4>
                    <h3 className="text-base font-extrabold text-gray-900 font-display leading-tight min-h-12">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 italic min-h-8">
                      {item.details}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-150 flex items-baseline justify-between">
                    <span className="text-xs text-gray-400 font-medium font-mono">Cassette Service</span>
                    <span className="text-lg font-black text-brand-sky-dark font-display">{item.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'additional' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 text-gray-700 font-bold uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-4">Item Details & Dimensions (Material)</th>
                      <th className="px-6 py-4 text-right">Standard Charge Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {ADDITIONAL_CHARGES.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-900">{item.name}</div>
                          <span className="text-xs text-gray-400 font-medium">{item.details}</span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-brand-green font-display text-sm">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Material footnotes banner */}
              <div className="mt-4 p-4 bg-yellow-50/50 border border-yellow-105 rounded-xl flex items-start space-x-3 text-xs text-yellow-800">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 text-yellow-600" />
                <p>
                  <strong>Additional Material Note:</strong> The material rates shown above apply only if the active installation layout requires copper piping or wiring distances beyond our standard limit (e.g. over 3 feet), or if they lie completely outside the free components pre-bundled in our brand new installation deals.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Deep Trust Builder: Gas Charging Policy info */}
        <div className="mt-12 p-6 bg-brand-sky/5 rounded-2xl border border-brand-sky-dark/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="p-3 bg-brand-sky-light text-brand-sky-dark rounded-xl flex-shrink-0">
            <BadgeInfo className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h5 className="text-sm font-extrabold text-gray-900 font-display">Transparent Refrigerant Gas Policy</h5>
            <p className="text-xs text-gray-500 leading-relaxed">
              We highly oppose unfair flat-rate charging models for refrigerant top-ups. Our certified service crew will record a real-time live pressure reading using certified gauge diagnostic manifolds. You only pay for the exact PSI difference needed to optimal capacity for your system (R32 or R410A inverter loops).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
