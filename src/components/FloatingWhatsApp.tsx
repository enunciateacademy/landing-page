import React from 'react';
import { MessageSquare } from 'lucide-react';
import { contactData, getWhatsAppLink } from '../data/contact';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-110 border-2 border-white/20 group"
      aria-label="Chat on WhatsApp with Enunciate Academy"
    >
      <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
      <span className="hidden md:inline-block text-xs font-bold uppercase tracking-wider pr-1">
        WhatsApp Us ({contactData.phone})
      </span>
      {/* Pulse effect badge */}
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
      </span>
    </a>
  );
};
