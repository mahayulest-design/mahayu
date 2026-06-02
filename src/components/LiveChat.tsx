import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Check, 
  ExternalLink, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  actionLink?: { label: string; url: string; type: 'whatsapp' | 'telegram' };
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome messages
  useEffect(() => {
    const welcomeMessages: Message[] = [
      {
        id: 'welcome-1',
        sender: 'bot',
        text: "Selamat Datang! Welcome to THE KHAN'S AIRCON BIZ WORLDWIDE SD BHD Client Support desk. ❄️",
        timestamp: getCurrentTime()
      },
      {
        id: 'welcome-2',
        sender: 'bot',
        text: "How can we assist you with your air conditioner today? Touch any quick option below for an instant response or type your question!",
        timestamp: getCurrentTime(),
        options: [
          '💰 View Pricing Packages',
          '🛡️ 30-Day Aircon Warranty',
          '📍 Coverage Areas',
          '📝 Book on WhatsApp',
          '✈️ Connect on Telegram'
        ]
      }
    ];
    setMessages(welcomeMessages);
  }, []);

  // Scroll to bottom on updates
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setUnreadCount(0);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Append User Message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: getCurrentTime()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Trigger Bot Response
    simulateBotResponse(text);
  };

  const simulateBotResponse = (userText: string) => {
    setIsTyping(true);

    setTimeout(() => {
      let botText = "";
      let options: string[] = [];
      let actionLink: { label: string; url: string; type: 'whatsapp' | 'telegram' } | undefined = undefined;

      const normText = userText.toLowerCase();

      if (normText.includes('price') || normText.includes('pricing') || normText.includes('harga') || normText.includes('rm') || normText.includes('💰')) {
        botText = "Our professional services are extremely affordable with zero hidden elements:\n\n• Normal Wall Service: from RM 70\n• Chemical Service: from RM 110\n• 2.0 / 2.5 HP Chemical: RM 130\n• New AC Installation: RM 300\n\nWould you like to complete a dispatch booking via WhatsApp or Telegram right now?";
        options = ['📝 Book on WhatsApp Now', '✈️ Chat on Telegram', '📍 Check Coverage Areas', '🔙 Main Menu'];
      } else if (normText.includes('warranty') || normText.includes('leaking') || normText.includes('leaks') || normText.includes('bocor') || normText.includes('🛡️')) {
        botText = "We stand firmly behind our work! We provide a complete 30-Day Workmanship Warranty for water leaking issues post-service. If it drips, we return and fix it entirely for FREE.";
        options = ['📝 Main Booking Form', '💬 Contact Agent On Mobile', '🔙 Main Menu'];
      } else if (normText.includes('area') || normText.includes('coverage') || normText.includes('kawasan') || normText.includes('📍')) {
        botText = `We routinely dispatch technical crews around Kuala Lumpur & Selangor. Active areas include: Seri Kembangan, Subang Jaya, Petaling Jaya, Cyberjaya, Putrajaya, Cheras, Ampang, Puchong, Kajang, Klang, and Shah Alam.`;
        options = ['📝 Book Service Now', '🔙 Main Menu'];
      } else if (normText.includes('book') || normText.includes('whatsapp') || normText.includes('telegram') || normText.includes('chat') || normText.includes('agent') || normText.includes('📝') || normText.includes('✈️')) {
        botText = "Excellent! Tap below to open an instant chat with our technical dispatcher. Our primary hotline is active and ready to schedule your service.";
        actionLink = {
          label: "Launch Chat: +60177903021",
          url: BUSINESS_INFO.links.whatsapp,
          type: 'whatsapp'
        };
        options = ['✈️ Chat on Telegram instead', '💰 View Pricing Packages', '🔙 Main Menu'];
      } else if (normText.includes('menu') || normText.includes('back') || normText.includes('mula') || normText.includes('🔙')) {
        botText = "Sure, let's start over! What would you like to inquire about?";
        options = [
          '💰 View Pricing Packages',
          '🛡️ 30-Day Aircon Warranty',
          '📍 Coverage Areas',
          '📝 Book on WhatsApp',
          '✈️ Connect on Telegram'
        ];
      } else {
        botText = "Thank you for reaching out to THE KHAN'S AIRCON! All bookings, custom repair estimates, and invoice receipts are handled efficiently by our WhatsApp/Telegram service dispatch team. Please connect with us directly.";
        actionLink = {
          label: "Urgent Support WhatsApp",
          url: BUSINESS_INFO.links.whatsapp,
          type: 'whatsapp'
        };
        options = ['✈️ Telegram Support Support', '💰 View Pricing Packages', '🔙 Main Menu'];
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botText,
        timestamp: getCurrentTime(),
        options: options.length > 0 ? options : undefined,
        actionLink: actionLink
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const handleOptionClick = (option: string) => {
    // Treat as custom message sent by user
    handleSendMessage(option);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-150 w-[340px] sm:w-[380px] h-[520px] sm:h-[560px] flex flex-col overflow-hidden mb-4"
          >
            {/* Chat header panel */}
            <div className="bg-gray-900 text-white p-4 flex items-center justify-between relative">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center text-white font-extrabold font-display">
                    TKB
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold tracking-wide font-display">THE KHAN'S Support</h3>
                  <div className="flex items-center space-x-1.5 text-[10px] text-gray-400 font-mono">
                    <Clock className="w-3 h-3 text-brand-green" />
                    <span>Real-time Response Hub</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleToggle}
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close Chat Window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Support guarantee banner */}
            <div className="bg-brand-green-light/20 p-2.5 px-4 text-xs font-semibold text-brand-green-dark border-b border-brand-green-light/25 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>30-Day Workmanship Warranty Active • No Hidden Cost</span>
            </div>

            {/* Chat messages feed */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div key={msg.id} className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-1.5`}>
                    <div className="flex items-center space-x-1.5 text-[10px] text-gray-400 font-medium px-1">
                      <span>{isBot ? "Agent Responder" : "You"}</span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div 
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-[85%] leading-relaxed ${
                        isBot 
                          ? 'bg-white border border-gray-150 text-gray-800 rounded-tl-sm shadow-xs whitespace-pre-line' 
                          : 'bg-brand-green text-white font-medium rounded-tr-sm shadow-md'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Interactive Action Links for direct redirection */}
                    {isBot && msg.actionLink && (
                      <div className="pt-1.5 w-full max-w-[85%]">
                        <a
                          href={msg.actionLink.url}
                          target="_blank"
                          rel="no-referrer"
                          className={`flex items-center justify-between p-3 rounded-xl border font-bold text-xs shadow-xs hover:shadow-md transition-all gap-2 cursor-pointer ${
                            msg.actionLink.type === 'telegram'
                              ? 'bg-sky-50 text-sky-600 border-sky-100 hover:bg-sky-100'
                              : 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100'
                          }`}
                        >
                          <span className="flex items-center space-x-2">
                            {msg.actionLink.type === 'telegram' ? (
                              <MessageSquare className="w-4 h-4" />
                            ) : (
                              <Phone className="w-3.5 h-3.5 animate-pulse" />
                            )}
                            <span>{msg.actionLink.label}</span>
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* Integrated Quick Options */}
                    {isBot && msg.options && (
                      <div className="flex flex-col gap-1.5 pt-2 pl-1 w-full max-w-[85%]">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleOptionClick(opt)}
                            className="bg-white hover:bg-gray-100 hover:border-brand-green/45 text-gray-700 hover:text-brand-green text-left px-3.5 py-2 rounded-xl text-xs font-semibold border border-gray-200 transition-all cursor-pointer flex items-center justify-between group active:scale-98"
                          >
                            <span>{opt}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand-green" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Bot typing simulation */}
              {isTyping && (
                <div className="flex flex-col items-start space-y-1.5">
                  <div className="text-[10px] text-gray-400 px-1 font-medium">Assistant is typing...</div>
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm shadow-xs flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Core support channel links drawer */}
            <div className="px-4 py-2 bg-gray-100/50 border-t border-b border-gray-150 flex items-center justify-between gap-2.5 text-[11px]">
              <span className="font-bold text-gray-500 uppercase tracking-widest font-mono text-[9px]">Direct Channels:</span>
              <div className="flex items-center space-x-2">
                <a 
                  href={BUSINESS_INFO.links.whatsapp} 
                  target="_blank" 
                  rel="no-referrer"
                  className="flex items-center space-x-1 text-green-700 hover:text-green-800 font-bold hover:underline"
                >
                  <Phone className="w-3 h-3 text-green-600" />
                  <span>WhatsApp</span>
                </a>
                <span className="text-gray-300">|</span>
                <a 
                  href={BUSINESS_INFO.links.telegram} 
                  target="_blank" 
                  rel="no-referrer"
                  className="flex items-center space-x-1 text-sky-600 hover:text-sky-700 font-bold hover:underline"
                >
                  <MessageSquare className="w-3 h-3 text-sky-500" />
                  <span>Telegram Link</span>
                </a>
              </div>
            </div>

            {/* Custom input panel */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-gray-150 bg-white flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask pricing, warranty, bookings..."
                className="flex-grow px-3.5 py-2 border border-gray-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green bg-gray-50/50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-brand-green disabled:bg-gray-100 hover:bg-brand-green-hover text-white disabled:text-gray-300 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Trigger Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center cursor-pointer shadow-xl relative hover:bg-brand-green-hover transition-colors group"
        aria-label="Toggle Live Chat Helpdesk"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageCircle className="w-7 h-7" />
              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 border-2 border-brand-green w-5 h-5 rounded-full text-[9px] font-black text-white flex items-center justify-center animate-bounce">
                  {unreadCount}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative hover prompt */}
        <span className="absolute right-16 bg-gray-900 text-white font-bold text-xs py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none pr-3">
          Need Help? Chat Live ❄️
        </span>
      </motion.button>
    </div>
  );
}
