import React from 'react';
import { Award, Building2, Users, CheckCircle2 } from 'lucide-react';
import { results2025Data, results2025Stats } from '../data/results2025';

export const Results2025Section: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Historic Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            AISSEE 2025 — Outstanding Results
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A proven track record of structured guidance and student achievement.
          </p>
        </div>

        {/* Breakdown Summary Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 text-center">
            <Users className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <span className="text-3xl font-black text-white font-heading block">{results2025Stats.totalTrained}</span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Students Trained</span>
          </div>

          <div className="bg-navy-950 p-6 rounded-2xl border border-emerald-500/30 text-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <span className="text-3xl font-black text-emerald-400 font-heading block">{results2025Stats.totalSecuredSeats}</span>
            <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Secured Seats</span>
          </div>

          <div className="bg-navy-950 p-6 rounded-2xl border border-blue-500/30 text-center">
            <Building2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <span className="text-3xl font-black text-blue-400 font-heading block">{results2025Stats.govtSchoolSeats}</span>
            <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Government Sainik Seats</span>
          </div>

          <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 text-center">
            <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <span className="text-3xl font-black text-amber-400 font-heading block">{results2025Stats.privateSchoolSeats}</span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Approved Private Seats</span>
          </div>
        </div>

        {/* Results List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results2025Data.map((item, idx) => (
            <div
              key={idx}
              className="bg-navy-950/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white font-heading">{item.name}</h3>
                {item.schoolCategory ? (
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                    {item.schoolCategory}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">AISSEE Qualified Candidate</span>
                )}
              </div>

              <div className="text-right flex-shrink-0">
                {item.score > 0 ? (
                  <span className="text-lg font-black text-amber-400 font-heading">{item.score}</span>
                ) : (
                  <span className="text-xs font-bold text-emerald-400">Selected</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
