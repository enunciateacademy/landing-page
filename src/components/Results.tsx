import React from 'react';
import { Award, ShieldCheck, CheckCircle2, User, ChevronRight } from 'lucide-react';
import { resultsData, resultsNote } from '../data/results';

interface ResultsProps {
  onOpenEnrollModal: () => void;
}

export const Results: React.FC<ResultsProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
            <Award className="w-3.5 h-3.5" /> Proven Entrance System
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            Results That Build Confidence
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our students prepare with a system — not with guesswork.
          </p>
        </div>

        {/* Result Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultsData.map((res) => (
            <div 
              key={res.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between card-hover-effect"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-600" /> {res.badgeText}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{res.year}</span>
                </div>

                {/* Avatar Placeholder / Student Photo Container */}
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 border-2 border-navy-800 flex flex-col items-center justify-center text-slate-400 shadow-inner overflow-hidden">
                  {res.imageUrl ? (
                    <img 
                      src={res.imageUrl} 
                      alt={res.studentName} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
                      <User className="w-9 h-9 text-slate-400" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter mt-0.5">
                        {res.imagePlaceholderText}
                      </span>
                    </>
                  )}
                </div>

                {/* Student Info */}
                <div className="text-center space-y-1">
                  <h3 className="text-base font-bold text-navy-900 font-heading">
                    {res.studentName}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600">
                    {res.exam}
                  </p>
                  <p className="text-xs font-medium text-slate-700 bg-slate-100 py-1 px-2 rounded-md inline-block my-1">
                    {res.schoolSelected}
                  </p>
                </div>

                {/* Rank & Testimonial Quote */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{res.rankOrMarks}</span>
                  </div>
                  {res.testimonialText && (
                    <p className="text-[11px] text-slate-500 italic text-center leading-relaxed">
                      "{res.testimonialText}"
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom verification label */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 text-center font-medium">
                {res.rollNoOrPlace}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note Banner */}
        <div className="mt-8 bg-blue-50/80 border border-blue-200/80 rounded-xl p-4 text-center text-xs text-slate-700 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="flex-1 text-slate-700 font-medium">
            <span className="font-bold text-navy-900">Verified Results:</span> {resultsNote}
          </p>
          <button
            onClick={onOpenEnrollModal}
            className="flex-shrink-0 gold-gradient-btn px-4 py-2 rounded-lg text-xs uppercase font-bold text-navy-900 flex items-center gap-1"
          >
            <span>Start Your Child's Journey</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
