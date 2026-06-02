import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, CheckCircle2, UserCircle2 } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/businessData';
import { ReviewItem } from '../types';

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newReview.name || !newReview.comment) {
      alert('Please fill in both your Name and Review Comment.');
      return;
    }

    const createdReview: ReviewItem = {
      id: `custom-rev-${Date.now()}`,
      name: newReview.name.trim(),
      rating: newReview.rating,
      comment: newReview.comment.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([createdReview, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 4500);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-brand-grey scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-sky-light text-brand-sky-dark px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
            <span>Genuine Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
            Customer Testimonials & Reviews
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Hear directly from homeowners, business landlords, and corporate offices in Kuala Lumpur & Selangor who have experienced our professional air conditioning workmanship.
          </p>
        </div>

        {/* Master Review Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Reviews List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 font-display flex items-center space-x-2">
              <MessageSquareCode className="w-5 h-5 text-brand-green" />
              <span>Latest Reviews ({reviews.length})</span>
            </h3>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence initial={false}>
                {reviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center font-bold text-sm">
                          {rev.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">{rev.name}</h4>
                          <span className="text-[10px] text-gray-400 font-mono">{rev.date}</span>
                        </div>
                      </div>
                      
                      {/* Star rating display */}
                      <div className="flex items-center space-x-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rev.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                      "{rev.comment}"
                    </p>

                    <div className="flex items-center space-x-2 text-[11px] text-brand-green font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                      <span>Verified Client • Aircon Servicing Package</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Mini Interactive Review Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-md h-fit">
            <h3 className="text-xl font-bold text-gray-900 font-display">Submit a Review</h3>
            <p className="text-xs text-gray-500 mt-1">We appreciate your feedback and strive to continually improve our cooling repair and service standards.</p>

            <form onSubmit={handleSubmitReview} className="space-y-5 mt-6">
              
              {/* Form Input Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Lim / Ahmad Danial"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-white transition-all"
                />
              </div>

              {/* Interactive Star Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Overall Service Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-2 mt-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <button
                        type="button"
                        key={ratingValue}
                        onClick={() => setNewReview({ ...newReview, rating: ratingValue })}
                        onMouseEnter={() => setHoverRating(ratingValue)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 cursor-pointer hover:scale-110 transition-transform focus:outline-none"
                      >
                        <Star
                          className={`w-7 h-7 transition-all ${
                            ratingValue <= (hoverRating ?? newReview.rating)
                              ? 'text-yellow-400 fill-yellow-400 scale-105'
                              : 'text-gray-200'
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="text-xs text-gray-500 font-bold ml-2">
                    {newReview.rating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Form Input Comment */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Written Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about your technician's efficiency, politeness, and clean workmanship..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-white transition-all resize-none"
                />
              </div>

              {/* Success Alert */}
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-3 bg-brand-green-light border border-brand-green/20 rounded-lg text-xs flex items-center space-x-2 text-brand-green"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-brand-green" />
                    <span>Your testimonial was registered. Thank you for your review!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-brand-green text-white hover:bg-brand-green-hover py-3 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer hover:scale-[1.01]"
              >
                <span>Submit My Review</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
