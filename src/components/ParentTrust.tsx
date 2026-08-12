import React from 'react';
import { CheckCircle2, Phone, MessageSquare, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

interface ParentTrustProps {
  onOpenEnrollModal: () => void;
}

export const ParentTrust: React.FC<ParentTrustProps> = ({ onOpenEnrollModal }) => {
  const needsList = [
    "Consistent practice beyond classroom lectures",
    "Proper guidance tailored to Sainik & Navodaya patterns",
    "Regular OMR testing to eliminate exam-hall fear",
    "Performance feedback so weak topics are fixed early",
    "Academic discipline and time-management habits",
    "Individual doubt clarification without hesitation",
    "A structured, day-by-day study roadmap"
  ];

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white border-b border-navy-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center space-y-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
              <HeartHandshake className="w-3.5 h-3.5" /> For Concerned Parents
            </span>

            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight leading-tight">
              As a Parent, You Want More Than Just Classes.
            </h2>

            <p className="text-sm sm:text-base text-slate-300">
              Preparing for a competitive entrance exam like Sainik School or Navodaya requires an ecosystem of discipline and individual care.
            </p>
          </div>

          {/* Checklist */}
          <div className="bg-navy-950/80 rounded-2xl p-6 border border-slate-800 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Your Child Needs:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {needsList.map((need, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{need}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Highlight */}
          <div className="text-center space-y-6">
            <p className="text-base sm:text-xl font-bold font-heading text-amber-300">
              "That's what our preparation system is designed to provide."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEnrollModal}
                className="w-full sm:w-auto gold-gradient-btn px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2"
              >
                <span>TALK TO OUR ACADEMIC TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getCallLink()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {contactData.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
