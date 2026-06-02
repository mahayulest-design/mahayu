import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Snowflake, CheckCircle, Zap, Send, Phone } from 'lucide-react';
import { BUSINESS_INFO, COVERED_AREAS } from '../data/businessData';
import { BookingForm } from '../types';

const heroImg = '/src/assets/images/technician_aircon_1780412493415.png';

export default function HeroBooking() {
  const [formData, setFormData] = useState<BookingForm>({
    fullName: '',
    phone: '',
    area: 'Kuala Lumpur',
    serviceType: 'Normal Aircon Service',
    unitCount: '1',
    date: '',
    timeSlot: '09:00 AM - 12:00 PM',
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  const services = [
    'Normal Aircon Service',
    'Chemical Service (Chemical Wash)',
    'Water Leaking Rectification',
    'Troubleshooting & Repair',
    'Dismantle Aircon Unit',
    'Install New Aircon (Upgrade to Inverter)',
  ];

  const timeSlots = [
    '09:00 AM - 12:00 PM',
    '12:00 PM - 03:00 PM',
    '03:00 PM - 06:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      alert('Please fill in both your Full Name and Malaysian Phone Number.');
      return;
    }

    // Format phone number to clean up leading '+' or '60' or '0'
    let cleanPhone = formData.phone.trim();
    if (cleanPhone.startsWith('+')) cleanPhone = cleanPhone.substring(1);
    if (cleanPhone.startsWith('60')) {
      // already good
    } else if (cleanPhone.startsWith('0')) {
      cleanPhone = '6' + cleanPhone;
    } else {
      cleanPhone = '60' + cleanPhone;
    }

    const message = `Hello ${BUSINESS_INFO.brandName}! I would like to book a premium air conditioner service slot:

👤 *Customer Information*
- Full Name: ${formData.fullName.trim()}
- Phone Number: +${cleanPhone}
- Covered Area: ${formData.area}

🛠️ *Service Details*
- Service Type: ${formData.serviceType}
- Number of Units: ${formData.unitCount} unit(s)
- Preferred Date: ${formData.date ? formData.date : 'Immediate / Flexible'}
- Preferred Waktu/Time Slot: ${formData.timeSlot}

*Note:* Please confirm the booking slot availability and 30-day leaking workmanship warranty. Thank you!`;

    setGeneratedMessage(message);
    setBookingSuccess(true);

    const waBaseUrl = `https://wa.me/${BUSINESS_INFO.phoneWhatsApp}`;
    const fullWaUrl = `${waBaseUrl}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(fullWaUrl, '_blank', 'noreferrer');
    }, 1200);
  };

  return (
    <section id="home" className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Soft color ambient blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-brand-sky/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and narrative descriptions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-brand-green-light text-brand-green px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>No. 1 Trusted Inverter Aircon Servicing Partner in Malaysia</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight font-display">
                Welcome to <br />
                <span className="text-brand-green">{BUSINESS_INFO.companyName}</span>
              </h1>
              <div className="space-y-3.5 text-gray-650 text-sm sm:text-base leading-relaxed">
                <p className="font-bold text-gray-900 text-base sm:text-lg">
                  Your trusted partner for professional air conditioning services in Kuala Lumpur & Selangor.
                </p>
                <p>
                  We provide reliable aircon installation, repair, chemical cleaning, maintenance, gas top-up, and commercial air conditioning services for residential and business customers.
                </p>
                <p>
                  Our experienced team focuses on quality workmanship, customer satisfaction, professional service, and fast response support.
                </p>
              </div>
            </div>

            {/* Quick stats columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-start space-x-3 bg-brand-grey p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-sky-light text-brand-sky-dark flex items-center justify-center font-bold">
                  <Snowflake className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">30-Day Leaking Warranty</h4>
                  <p className="text-xs text-gray-500 mt-1">We inspect and rectify for free if water leaks reoccur.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-brand-grey p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Inverter Specialists</h4>
                  <p className="text-xs text-gray-500 mt-1">Accurate PCB error diagnosis & energy optimization.</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-xl lg:max-w-2xl bg-gray-50"
            >
              <img
                src={heroImg}
                alt="THE KHANS AIRCON Professional Technician Aircon Service"
                className="w-full h-64 sm:h-80 object-cover hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45 flex flex-col justify-between p-6">
                <div className="self-start bg-brand-green text-white font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-full shadow-md animate-pulse">
                  GET YOUR FREE AIRCOND SERVICE QUOTE TODAY!
                </div>
                <div className="text-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-brand-sky mb-0.5">Premium Standard</p>
                  <p className="text-sm sm:text-base font-semibold">Our certified technician diagnosing and cleaning energy-saving Inverter air conditioners.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Integrated Modern Booking Form - Right Column */}
          <div className="lg:col-span-5 bg-linear-to-b from-white to-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xl relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green-light text-brand-green rounded-tr-2xl rounded-bl-3xl flex items-center justify-center">
              <Snowflake className="w-8 h-8 animate-spin-slow" />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 font-display">Instant Booking Form</h3>
              <p className="text-xs text-gray-500 mt-1">Fill in the quick details below. Your reservation is compiled and processed directly to our WhatsApp support line.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Farhan bin Ismail"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Malaysia Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">+60</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="123456789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">We support standard clean WhatsApp redirects.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Areas We Cover <span className="text-red-500">*</span>
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-white transition-all cursor-pointer"
                >
                  {COVERED_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="unitCount" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Number of Units <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    id="unitCount"
                    name="unitCount"
                    required
                    value={formData.unitCount}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-white transition-all cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Service Type Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-white transition-all cursor-pointer"
                >
                  {services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {timeSlots.map((slot) => (
                    <label
                      key={slot}
                      className={`flex items-center justify-between px-3.5 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                        formData.timeSlot === slot
                          ? 'border-brand-green bg-brand-green-light text-brand-green font-semibold ring-1 ring-brand-green'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span>{slot}</span>
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot}
                        checked={formData.timeSlot === slot}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        formData.timeSlot === slot ? 'border-brand-green bg-brand-green' : 'border-gray-300'
                      }`}>
                        {formData.timeSlot === slot && <span className="w-1.5 h-1.5 rounded-full bg-white block" />}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Booking success overlay message */}
              <AnimatePresence>
                {bookingSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 bg-brand-green-light border border-brand-green/30 rounded-lg text-xs space-y-2 mt-4"
                  >
                    <div className="flex items-center space-x-2 text-brand-green font-bold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Connecting to WhatsApp...</span>
                    </div>
                    <p className="text-gray-600">Your booking message was automatically formatted.</p>
                    <div className="bg-white/80 p-2.5 rounded-md text-[11px] font-mono whitespace-pre-line text-gray-700 border border-brand-green/10 max-h-24 overflow-y-auto">
                      {generatedMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-brand-green text-white hover:bg-brand-green-hover py-3 px-4 rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-brand-green/20 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Book Now via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

        {/* Trusted By Malaysia's Top Organizations Section */}
        <div className="mt-16 pt-8 border-t border-gray-100/80">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 font-mono">
            Trusted By Malaysia’s Top Organizations & Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 opacity-50 grayscale hover:opacity-75 transition-opacity duration-300">
            <span className="font-sans font-extrabold text-base tracking-widest text-gray-500 uppercase">PETRONAS</span>
            <span className="font-sans font-black text-lg text-gray-500 tracking-tight">Maybank</span>
            <span className="font-sans font-bold text-sm tracking-widest text-gray-500">TNB MALAYSIA</span>
            <span className="font-sans font-black text-xl italic text-gray-500">DHL EXPRESS</span>
            <span className="font-sans font-extrabold text-base tracking-widest text-gray-500 uppercase">SUNWAY GROUP</span>
          </div>
        </div>

      </div>
    </section>
  );
}
