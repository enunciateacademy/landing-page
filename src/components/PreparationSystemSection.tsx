import React from 'react';
import { BookOpen, PenTool, Clock, BarChart2, RefreshCw, Trophy, ArrowDown } from 'lucide-react';

export const PreparationSystemSection: React.FC = () => {
  const steps = [
    { name: 'LEARN', title: 'Understand the Concept', desc: 'Clear fundamentals through interactive live lectures and concept notes.', icon: BookOpen },
    { name: 'PRACTICE', title: 'Solve Questions', desc: 'Work through daily practice worksheets and topic-wise MCQ problem sets.', icon: PenTool },
    { name: 'TEST', title: 'Attempt Timed Tests', desc: 'Practice under real exam conditions with timed OMR test booklets.', icon: Clock },
    { name: 'ANALYSE', title: 'Understand Mistakes', desc: 'Detailed live error analysis sessions following every test.', icon: BarChart2 },
    { name: 'IMPROVE', title: 'Strengthen Weak Areas', desc: 'Targeted revision, doubt clearing, and re-attempt practice tests.', icon: RefreshCw },
    { name: 'PERFORM', title: 'Enter Exam with Confidence', desc: 'Reach the entrance hall relaxed, fully prepared, and speed-optimized.', icon: Trophy },
  ];

  return (
    <section id="preparation-system" className="py-16 sm:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>The Enunciate System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Preparation Is a Process — <span className="text-amber-400">Not a One-Day Effort.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A proven 6-stage cycle that converts effort into reliable exam performance.
          </p>
        </div>

        {/* Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-navy-950/90 border border-slate-800 p-6 rounded-2xl relative shadow-lg hover:border-amber-400/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-navy-950 bg-amber-400 px-3 py-1 rounded-md uppercase">
                      STEP 0{idx + 1} • {step.name}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Enunciate Method</span>
                  {idx < steps.length - 1 && <span className="text-amber-400">&rarr; Next Stage</span>}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
