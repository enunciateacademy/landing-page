import React from 'react';
import { Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

interface StickyMobileCTAProps {
  onOpenEnrollModal: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenEnrollModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5 items-center">
        
        {/* Call Button */}
        <a
          href={getCallLink()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 text-white border border-slate-700 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-tight mt-0.5">
            CALL
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 text-white border border-emerald-600 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-emerald-300" />
          <span className="text-[10px] font-bold uppercase tracking-tight mt-0.5">
            WHATSAPP
          </span>
        </a>

        {/* Register Button */}
        <a
          href={contactData.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl gold-gradient-btn text-navy-950 active:scale-95 transition-transform shadow-lg"
        >
          <span className="flex items-center gap-0.5 text-[10px] font-black uppercase tracking-wider">
            REGISTER <ChevronRight className="w-3 h-3" />
          </span>
        </a>

      </div>
    </div>
  );
};
