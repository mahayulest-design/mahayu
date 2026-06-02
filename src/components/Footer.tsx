import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Send, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  scrollTo: (id: string) => void;
}

export default function Footer({ scrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      
      {/* SECTION: CONTACT TECHNICAL SUPPORT */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-b border-gray-800 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Support Information Text (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-green/20 text-brand-sky px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-brand-green/30">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Technical Helpdesk & Warranty Support</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Technical Support <br />& Booking Requests
            </h2>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              Our service crew is ready to dispatch directly to your home or commercial premises to inspect, diagnose, and resolve any air conditioning systems errors. For urgent water leak inquiries within your 30-day workmanship warranty scope, please connect with our chat handlers immediately.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-800">
              {/* Phone item */}
              <a
                href={BUSINESS_INFO.links.whatsapp}
                target="_blank"
                rel="no-referrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800 border border-gray-800 hover:border-brand-green transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wide">Emergency WhatsApp Hotline</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">+{BUSINESS_INFO.phoneWhatsApp} (Active Support)</p>
                </div>
              </a>

              {/* Email item */}
              <a
                href={`mailto:${BUSINESS_INFO.supportEmail}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800 border border-gray-800 hover:border-brand-green transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-sky/10 text-brand-sky flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wide">Corporate Support Email</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{BUSINESS_INFO.supportEmail}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Core Business Info & Coverage grid (7 Cols) */}
          <div className="lg:col-span-7 bg-gray-950 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-6">
            <h3 className="text-lg font-bold text-white font-display">THE KHAN'S AIRCON - Operational HQ</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-brand-sky text-xs font-bold uppercase tracking-wide">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <div className="text-[11px] text-gray-500 font-mono mt-1">
                  SSM Registration No: {BUSINESS_INFO.ssmNumber}
                </div>
              </div>

              {/* Operating Hours & Area */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-sky text-xs font-bold uppercase tracking-wide">
                    <Clock className="w-4 h-4" />
                    <span>Business Hours</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {BUSINESS_INFO.workingHours}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-green text-xs font-bold uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Klang Valley Coverage</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Sectors we routinely cover: {BUSINESS_INFO.coverageDetails}
                  </p>
                </div>
              </div>

            </div>

            {/* Static Interactive SEO Map Frame */}
            <div className="relative rounded-xl overflow-hidden border border-gray-800 h-44 bg-gray-900 group">
              <div className="absolute inset-0 bg-linear-to-b from-gray-950/20 to-gray-950/80 z-10" />
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-brand-sky font-mono font-bold uppercase">Google Maps Navigation Ready</span>
                  <h4 className="text-sm font-bold text-white">Seri Kembangan Head Office</h4>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="no-referrer"
                  className="px-3.5 py-1.5 bg-brand-green hover:bg-brand-green-hover text-white rounded-md text-xs font-bold flex items-center space-x-1.5 shadow-md pointer-events-auto cursor-pointer"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700/40 text-center select-none flex flex-col items-center">
                <MapPin className="w-12 h-12 text-brand-green animate-bounce" />
                <span className="text-[9px] font-mono mt-1">LAT: 3.0238° N • LON: 101.7058° E</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER METADATA, SOCIAL MEDIA, SHORTCUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Logo Brand left side (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white font-black text-sm">
                TK
              </div>
              <span className="text-md font-bold tracking-wider text-white font-display">
                THE KHAN'S <span className="text-brand-green">AIRCON</span>
              </span>
            </div>
            <p className="text-[11px] text-gray-500 max-w-sm leading-relaxed">
              Premium air conditioner service registered legally under <strong>{BUSINESS_INFO.companyName}</strong>. SSM Registration No: {BUSINESS_INFO.ssmNumber}.
            </p>
          </div>

          {/* Quick shortcuts center section (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center text-xs font-semibold text-gray-400">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer">Pricing Packages</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button>
          </div>

          {/* Social Links Right side (3 cols) */}
          <div className="md:col-span-3 flex justify-start md:justify-end space-x-3.5">
            <a
              href={BUSINESS_INFO.links.facebook}
              target="_blank"
              rel="no-referrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-green text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-5 h-5" />
            </a>
            
            <a
              href={BUSINESS_INFO.links.instagram}
              target="_blank"
              rel="no-referrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-green text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Outer bottom row copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} <strong>{BUSINESS_INFO.companyName}</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-1.5">
            <span>Engineered for optimum thermodynamics in Malaysia</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </section>

    </footer>
  );
}
