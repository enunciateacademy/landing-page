import React from 'react';
import { Award, Trophy, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { results2026Data } from '../data/results2026';
import { contactData, getCallLink } from '../data/contact';

interface Results2026SectionProps {
  onOpenEnrollModal: (courseTitle?: string) => void;
}

export const Results2026Section: React.FC<Results2026SectionProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="results" className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Official Exam Scores</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Real Students. Real Scores. Real Preparation.
          </h2>
          <p className="text-lg sm:text-xl font-bold text-amber-400 font-heading">
            Enunciate Academy — 2026 Sainik School Results
          </p>
          <p className="text-sm text-slate-300">
            Updated scores from our 2026 Sainik Batch
          </p>
        </div>

        {/* 2026 Results Cards / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {results2026Data.map((item) => (
            <div
              key={item.rank}
              className="bg-navy-900/90 border border-slate-800 hover:border-amber-400/50 p-5 rounded-2xl shadow-lg transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-navy-950 font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                  #{item.rank}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-400">{item.exam}</p>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <span className="text-xl font-black text-amber-400 font-heading">
                  {item.score}
                </span>
                <span className="text-[10px] text-slate-400 block font-semibold">/ 300</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Trust Message Section (#9) */}
        <div className="mt-14 bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <ShieldCheck className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-widest">Verified Academic Dedication</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-200 max-w-2xl mx-auto leading-relaxed">
            "Behind every score is consistent practice, testing, revision and guidance."
          </h3>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnrollModal('JOIN THE 2027 SAINIK BATCH')}
              className="gold-gradient-btn px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <Award className="w-4 h-4 text-navy-950" />
              <span>JOIN THE 2027 SAINIK BATCH</span>
            </button>

            <a
              href={getCallLink()}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline: {contactData.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
