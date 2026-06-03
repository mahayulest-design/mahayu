import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "WHY IS MY AIRCON LEAKING?",
      answer: "Aircon leaking is usually caused by a clogged drainage pipe due to dirt and jelly accumulation, a frozen cooling coil from low gas levels, or a blocked air filter restricting airflow. A normal or chemical service can easily clear the blockage and solve the leak."
    },
    {
      question: "WHY DO I NEED TO SERVICE MY AIRCON?",
      answer: "Regular servicing improves cooling efficiency, reduces electricity bills, prevents water leaking, extends the lifespan of your AC unit, and purifies the indoor air quality by removing dust, bacteria, and allergens."
    },
    {
      question: "HOW OFTEN DO I NEED TO SERVICE MY AC?",
      answer: "For standard residential use, we highly recommend a Basic Service every 3 to 6 months. For high-usage commercial spaces, restaurants, or offices, servicing should be done every 1 to 2 months to maintain peak performance."
    },
    {
      question: "WHAT IS THE DIFFERENCE BETWEEN BASIC & CHEMICAL SERVICE?",
      answer: "Basic Service involves cleaning the front covers, washing the air filters, brushing the cooling coils, and clearing the drainage line. Chemical Service/Overhaul is a deep-clean process where the unit is dismantled, and specialized chemical solutions are used to thoroughly flush stubborn dirt, jelly, and bacteria out of the cooling coils and internal parts."
    },
    {
      question: "HOW LONG DOES A SERVICE USUALLY TAKE?",
      answer: "A Basic Service typically takes around 30 to 45 minutes per unit. A full Chemical Service or Overhaul usually takes about 60 to 90 minutes per unit, depending on the condition and size of the air conditioner."
    },
    {
      question: "WHAT IS THE DIFFERENCE BETWEEN WALL-MOUNTED, CASSETTE OR OTHER TYPE OF AC?",
      answer: "Wall-Mounted units are standard sleek units attached to the wall, ideal for bedrooms and living rooms. Cassette units are square systems installed flat against the ceiling, distributing air in 4 directions—best for large halls or commercial shops. Ceiling Exposed units are mounted right below the ceiling surface for high air volume, while Ducted/Centralized systems are hidden inside the ceiling plenum to cool large corporate buildings through vents."
    },
    {
      question: "HOW LONG IN ADVANCE SHOULD I BOOK AN APPOINTMENT?",
      answer: "To secure your preferred date and time slot, we recommend booking your appointment 1 to 3 days in advance. However, for urgent cases like severe water leaking or total breakdown, you can reach out via WhatsApp for emergency slot availability."
    },
    {
      question: "WHAT ARE YOUR SERVICE HOURS?",
      answer: "Our professional technicians are ready to serve you from Monday to Saturday, between 9:00 AM and 6:00 PM. We are closed on Sundays and selected Public Holidays."
    },
    {
      question: "DOES TROUBLESHOOTING SERVICE INCLUDE PARTS, REPAIR OR REPLACEMENT?",
      answer: "No, our initial Troubleshooting fee only covers the professional inspection and diagnosis to find the exact root cause of the breakdown. If any spare parts, repairs, or replacements are required, our technicians will provide a transparent, upfront quotation for your approval before proceeding with the repair work."
    },
    {
      question: "DO YOU OFFER WARRANTY FOR YOUR SERVICES?",
      answer: (
        <span>
          Yes! We stand behind our quality workmanship by providing a <strong className="font-extrabold text-[#0B1B3D] underline">30-Day Leaking Warranty</strong> specifically for units that have undergone our full Chemical Service or Overhaul, giving you total peace of mind.
        </span>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFFFF] scroll-mt-20 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESIGN & STRUKTUR: Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-50 text-[#0B1B3D] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-slate-100">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>Support Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight font-display text-center">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-16 h-1 bg-[#0B1B3D]/10 mx-auto rounded-full" />
        </div>

        {/* Accordion Layout List */}
        <div id="faq-accordion-list" className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-card-${index}`}
                className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
              >
                {/* FAQ Header Button (Trigger Click) */}
                <button
                  type="button"
                  id={`faq-btn-trigger-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none bg-[#F8F9FA] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#1A202C] font-display pr-6">
                    {item.question}
                  </span>
                  
                  {/* Rotating Arrow Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200/65 flex-shrink-0 text-slate-500 shadow-xs transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0B1B3D] border-[#0B1B3D]/25' : 'rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion Answer Body block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-5 sm:p-6 pt-2 sm:pt-4 border-t border-slate-100 text-sm sm:text-base text-[#4A5568] leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Secondary Help Center CTA box */}
        <div className="mt-16 text-center p-6 border border-slate-100 bg-[#F8F9FA] rounded-2xl">
          <p className="text-sm text-[#4A5568] font-medium font-sans">
            Still have an unanswered question about our professional maintenance solutions?
          </p>
          <a
            href={`${BUSINESS_INFO.links.whatsapp}?text=Hi%2C%20I%20have%20some%20questions%20regarding%20your%20aircon%20services.%20Please%20assist.`}
            target="_blank"
            rel="no-referrer"
            className="mt-3.5 inline-flex items-center space-x-1 text-[#0B1B3D] font-extrabold text-xs sm:text-sm hover:underline hover:opacity-80 transition-opacity"
          >
            <span>Ask our technical support on WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
