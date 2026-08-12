import React from 'react';
import { BookOpen, Edit3, Clock, Search, RefreshCw, ChevronRight } from 'lucide-react';

interface LearningSystemProps {
  onOpenEnrollModal: () => void;
}

export const LearningSystem: React.FC<LearningSystemProps> = ({ onOpenEnrollModal }) => {
  const steps = [
    {
      step: "STEP 01",
      title: "Learn the Concept",
      subtitle: "Interactive Fundamentals",
      description: "Concept mastery from basics with shortcut calculation tricks.",
      icon: BookOpen,
      color: "bg-amber-400 text-navy-950"
    },
    {
      step: "STEP 02",
      title: "Practice Questions",
      subtitle: "Daily Worksheets (DPP)",
      description: "Topic-wise practice sets graded from basic to advanced levels.",
      icon: Edit3,
      color: "bg-navy-800 text-amber-400"
    },
    {
      step: "STEP 03",
      title: "Take Regular Tests",
      subtitle: "OMR Speed Practice",
      description: "Timed chapter tests and full exam pattern mock papers.",
      icon: Clock,
      color: "bg-navy-900 text-amber-400"
    },
    {
      step: "STEP 04",
      title: "Analyze Mistakes",
      subtitle: "Diagnostic Review",
      description: "Identifying silly mistakes, time lags & weak topic areas.",
      icon: Search,
      color: "bg-navy-800 text-amber-400"
    },
    {
      step: "STEP 05",
      title: "Improve & Repeat",
      subtitle: "Doubt Resolution",
      description: "Targeted remedial classes until concepts are 100% mastered.",
      icon: RefreshCw,
      color: "bg-emerald-600 text-white"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white border-b border-navy-800 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-navy-900 px-3 py-1 rounded-full border border-amber-500/20">
            5-Step Academic Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
            A Preparation System Designed for Competitive Exams
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Success in Sainik & Navodaya entrance exams requires a disciplined loop — not random study hours.
          </p>
        </div>

        {/* 5 Steps Horizontal Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-navy-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-400/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-amber-400 font-heading">
                      {item.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center shadow`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-amber-400/90 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Connector for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-navy-800 border border-amber-400/40 flex items-center justify-center text-amber-400 text-xs">
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* System CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnrollModal}
            className="gold-gradient-btn px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2 shadow-xl shadow-amber-500/20"
          >
            <span>Enroll Your Child In Our System</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
