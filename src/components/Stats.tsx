import React from 'react';
import { Users, FileCheck, BookOpen, Award, Sparkles } from 'lucide-react';
import { statsData } from '../data/stats';

export const Stats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'FileCheck': return FileCheck;
      case 'BookOpen': return BookOpen;
      case 'Award': return Award;
      default: return Sparkles;
    }
  };

  return (
    <section className="py-12 bg-navy-900 text-white border-y border-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Enunciate Academy Metrics
          </p>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1">
            Structured Preparation By The Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat) => {
            const IconComponent = getIcon(stat.iconName);
            return (
              <div 
                key={stat.id}
                className="bg-navy-950/80 border border-slate-800 rounded-2xl p-5 text-center shadow-lg hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black font-heading text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-100 mt-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-6 italic">
          *Note: Statistics represent actual verified institute academic records. Editable via <code className="bg-slate-800 px-1 py-0.5 rounded text-amber-300">src/data/stats.ts</code>.
        </p>
      </div>
    </section>
  );
};
