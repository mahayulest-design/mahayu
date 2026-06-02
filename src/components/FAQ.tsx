import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/businessData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first is open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-green-light text-brand-green px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Learn more about our leakage guarantee rules, real-time pressure diagnostics, and specialized inverter maintenance expertise.
          </p>
        </div>

        {/* Accordion List wrapper */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-green bg-brand-green-light/10 shadow-xs'
                    : 'border-gray-100 bg-linear-to-b from-white to-gray-50 hover:border-gray-200'
                }`}
              >
                {/* Accordion Title Header trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 focus:outline-none transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4 font-display font-bold">
                    {item.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion Content animated slide */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-gray-100/50 text-xs sm:text-sm text-gray-600 leading-relaxed space-y-4">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Secondary support block */}
        <div className="mt-12 text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-sm text-gray-600">
            Have a different technical question or specialized inquiry?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-3 inline-flex items-center space-x-2 text-brand-green font-bold text-xs sm:text-sm hover:underline hover:text-brand-green-hover cursor-pointer"
          >
            <span>Message Technical Support &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
