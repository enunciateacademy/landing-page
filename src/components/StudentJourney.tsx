import React from 'react';
import { Target, BookOpen, Zap, HelpCircle, Trophy, CheckCircle2, ChevronRight } from 'lucide-react';
import { studentJourneyData } from '../data/journey';

interface StudentJourneyProps {
  onOpenEnrollModal: () => void;
}

export const StudentJourney: React.FC<StudentJourneyProps> = ({ onOpenEnrollModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return Target;
      case 'BookOpen': return BookOpen;
      case 'Zap': return Zap;
      case 'HelpCircle': return HelpCircle;
      default: return Trophy;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
            <Trophy className="w-3.5 h-3.5" /> Structured Learning Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            Your Child's Preparation Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A step-by-step roadmap designed to transform beginner students into confident entrance toppers.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {studentJourneyData.map((step, idx) => {
              const Icon = getIcon(step.iconName);
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.stepNumber}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all card-hover-effect">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-navy-900 text-amber-400">
                          {step.phase}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          Phase {step.stepNumber}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-navy-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="pt-3 border-t border-slate-200 space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-navy-900 block mb-1">
                          Key Deliverables:
                        </span>
                        {step.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="text-xs text-slate-700 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="relative flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-navy-900 border-4 border-white shadow-md text-amber-400 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnrollModal}
            className="gold-gradient-btn px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
          >
            <span>Start Phase 1 Diagnostic Test Today</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
