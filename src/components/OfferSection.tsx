import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Calendar } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

interface OfferSectionProps {
  onOpenEnrollModal: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          
          <div className="relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5" /> Upcoming Batch Admissions Active
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight leading-tight">
              Give Your Child a Structured Start Today.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Batch availability is structured to maintain optimal student-teacher ratios. Contact our academic team to understand the right course program for your child.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEnrollModal}
                className="w-full sm:w-auto gold-gradient-btn px-8 py-4 rounded-xl text-sm uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 shadow-xl"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getCallLink()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
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

            <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Free academic counseling session available upon request.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
