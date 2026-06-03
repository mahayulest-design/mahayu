import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Wind, PhoneCall, Globe, ChevronDown, User, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeaderProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function Header({ activeSection, scrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English (UK)');
  const [showSignInModal, setShowSignInModal] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const languages = [
    'English (UK)',
    'Melayu (MY)',
    '中文 (ZH)',
  ];

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0B1B3D] backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left side: Brand Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-9 h-9 rounded-lg bg-brand-green flex items-center justify-center text-white shadow-md shadow-brand-green/20">
                <Wind className="w-5.5 h-5.5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white font-display">
                  THE KHAN'S <span className="text-brand-green font-black">AIRCON</span>
                </span>
                <span className="text-[8px] text-white/60 font-mono tracking-widest -mt-1 uppercase">
                  BIZ WORLDWIDE
                </span>
              </div>
            </div>

            {/* Desktop Navigation (Center/Left-ish but elegant) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 mx-auto">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 text-xs xl:text-sm font-bold tracking-wide rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-green rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right side Actions: Phone + Language + Sign In */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* WhatsApp Call / Number Link */}
              <a
                href={BUSINESS_INFO.links.whatsapp}
                target="_blank"
                rel="no-referrer"
                className="flex items-center space-x-1.5 text-white hover:text-brand-green transition-colors text-xs xl:text-sm font-bold bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                <span>+60177903021</span>
              </a>

              {/* Language Picker Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center space-x-1 text-white/90 hover:text-white text-xs xl:text-sm font-semibold py-2 px-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-white/60" />
                  <span>{selectedLang}</span>
                  <ChevronDown className="w-3 h-3 text-white/50" />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <>
                      {/* Invisible backdrop to close switcher */}
                      <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute right-0 mt-1.5 w-36 bg-[#0B1B3D] border border-white/10 rounded-lg shadow-lg py-1 z-20 text-xs"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              setSelectedLang(lang);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 hover:bg-white/10 flex items-center justify-between cursor-pointer ${
                              selectedLang === lang ? 'text-brand-green font-bold bg-white/15' : 'text-white/80'
                            }`}
                          >
                            <span>{lang}</span>
                            {selectedLang === lang && <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Sign In Button */}
              <button
                onClick={() => setShowSignInModal(true)}
                className="flex items-center space-x-1.5 bg-white border border-white text-slate-900 hover:bg-slate-100 hover:border-slate-100 px-4 py-2 rounded-lg text-xs xl:text-sm font-bold transition-all hover:shadow-md cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-slate-800" />
                <span>Sign in</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href={BUSINESS_INFO.links.whatsapp}
                target="_blank"
                rel="no-referrer"
                className="flex items-center space-x-1 text-xs font-bold text-white bg-brand-green hover:bg-brand-green-hover px-2.5 py-1.5 rounded-md"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Call US</span>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/15 focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-white/10 bg-[#0B1B3D]"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
                        isActive
                          ? 'bg-white/10 text-white font-extrabold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                
                {/* Mobile Language & Sign In Options */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between px-4 py-2 text-xs text-white/90 font-bold">
                    <span className="flex items-center space-x-1 text-white/70">
                      <Globe className="w-3.5 h-3.5 text-white/50" />
                      <span>Select Language</span>
                    </span>
                    <select
                      value={selectedLang}
                      onChange={(e) => setSelectedLang(e.target.value)}
                      className="bg-transparent border-0 text-white font-bold focus:ring-0 text-xs py-0 pl-0 pr-6 bg-[#0B1B3D]"
                    >
                      {languages.map((l) => (
                        <option key={l} value={l} className="text-slate-800 bg-white">{l}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowSignInModal(true);
                    }}
                    className="w-full flex items-center justify-center space-x-1.5 bg-white text-slate-900 hover:bg-slate-100 font-bold py-3 rounded-lg text-xs"
                  >
                    <User className="w-4 h-4" />
                    <span>Sign in to Dashboard</span>
                  </button>

                  <div className="px-4 text-[10px] text-white/50 font-mono text-center pt-2">
                    OPERATING HOURS: {BUSINESS_INFO.workingHours}
                  </div>
                  
                  <a
                    href={BUSINESS_INFO.links.whatsapp}
                    target="_blank"
                    rel="no-referrer"
                    className="flex items-center justify-center space-x-2 bg-brand-green text-white hover:bg-brand-green-hover py-3 rounded-lg text-xs font-semibold shadow-md pointer-events-auto"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>WhatsApp Support: +60177903021</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Elegant Sign-In Modal Dialog */}
      <AnimatePresence>
        {showSignInModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignInModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full relative z-10 border border-gray-150 shadow-2xl"
            >
              <button
                onClick={() => setShowSignInModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold text-lg mx-auto">
                  <User className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 font-display">Client Area Portal</h3>
                  <p className="text-xs text-gray-500">Secure access for corporate contracts & billing histories.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-left space-y-3">
                  <div className="flex items-start space-x-2.5 text-xs text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>View routine service and warranty logs (30-day water leak coverage active).</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Download SST-compliant corporate tax invoices.</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      alert("This is a preview demonstration. Account database is managed by our back-office. Please WhatsApp +60177903021 for client setup.");
                      setShowSignInModal(false);
                    }}
                    className="w-full bg-brand-green text-white font-bold py-3 rounded-lg text-xs shadow-md shadow-brand-green/10 hover:bg-brand-green-hover transition-colors"
                  >
                    Access Dashboard
                  </button>
                  <p className="text-[10px] text-gray-400 mt-2.5">
                    Authorized Access Only • Managed by {BUSINESS_INFO.companyName}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

