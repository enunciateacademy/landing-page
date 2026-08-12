import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

interface FinalCTAProps {
  onOpenEnrollModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="py-20 sm:py-28 navy-gradient-bg text-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-4 h-4" /> Take The First Step Toward Sainik School Entrance
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            Your Child's Preparation Can Start Today.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Speak with Enunciate Academy and find the right preparation program for your child.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnrollModal}
              className="w-full sm:w-auto gold-gradient-btn px-8 py-4 rounded-xl text-sm uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/30"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={getCallLink()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>CALL {contactData.phone}</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WHATSAPP NOW</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 max-w-xl mx-auto">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Certified Guidance
            </span>
            <span>•</span>
            <span className="text-slate-300">Class 5 & Class 8 Admissions</span>
            <span>•</span>
            <span className="text-slate-300">Phone: {contactData.phoneFormatted}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
