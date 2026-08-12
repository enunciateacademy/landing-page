import React from 'react';
import { Phone, MessageSquare, ArrowRight, Award, Shield, ExternalLink } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

interface RegistrationCTASectionProps {
  onOpenEnrollModal: (courseTitle?: string) => void;
}

export const RegistrationCTASection: React.FC<RegistrationCTASectionProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900 text-white relative border-b border-navy-800 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Admissions Open for 2027 Sainik Batch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-tight">
          Ready to Start Your Child's Preparation?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Give your child the advantage of early preparation with structured daily tests, live concept sessions, and dedicated mentor guidance.
        </p>

        {/* Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={contactData.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto gold-gradient-btn px-8 py-4 rounded-xl text-sm sm:text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/20 group"
          >
            <span>REGISTER FOR COACHING</span>
            <ExternalLink className="w-4 h-4 text-navy-950 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={() => onOpenEnrollModal('Admissions Open for 2027 Sainik Batch')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base uppercase tracking-wider font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 flex items-center justify-center gap-2 shadow-xl"
          >
            <span>JOIN THE COURSE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getCallLink()}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL {contactData.phone}</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Direct Admissions Helpline: <strong className="text-slate-200">{contactData.phoneFormatted}</strong> • WhatsApp Direct Support Available
        </p>

      </div>
    </section>
  );
};
