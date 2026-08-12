import React from 'react';
import { Clock, FileSpreadsheet, BarChart3, TrendingUp, CheckCircle, ArrowRight, Award } from 'lucide-react';

interface TestSeriesProps {
  onOpenEnrollModal: (title?: string) => void;
}

export const TestSeries: React.FC<TestSeriesProps> = ({ onOpenEnrollModal }) => {
  const features = [
    {
      title: "Exam Pattern Timed Tests",
      desc: "Simulating the strict 2.5-hour AISSEE duration so students learn time allocation per subject section.",
      icon: Clock
    },
    {
      title: "Official OMR Sheet Bubble Practice",
      desc: "Practicing on identical OMR layout sheets to prevent double-bubbling and alignment mistakes.",
      icon: FileSpreadsheet
    },
    {
      title: "Weekly Chapter Tests & Grand Mocks",
      desc: "50+ chapter tests to lock in concepts followed by 15 full-length grand mock examinations.",
      icon: Award
    },
    {
      title: "Diagnostic Scorecard & Ranking",
      desc: "Detailed subject-wise accuracy analysis, speed metrics, and weak-topic diagnostics.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
              <FileSpreadsheet className="w-3.5 h-3.5" /> High-Yield Test Engine
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Practice Like the Real Exam
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              In competitive exams like Sainik School and Navodaya, knowing the answer is only half the battle — speed and OMR accuracy decide the selection list.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-9 h-9 rounded-lg bg-navy-900 text-amber-400 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnrollModal('OMR Test Series Package')}
                className="gold-gradient-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase font-bold tracking-wider inline-flex items-center gap-2"
              >
                <span>JOIN OMR TEST SERIES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Flow Diagram */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-2xl relative">
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  Continuous Improvement Loop
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-1">
                  The Test-To-Selection Engine
                </h3>
              </div>

              {/* Step Flow Nodes */}
              <div className="space-y-4 relative">
                
                {/* Step 1 */}
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-navy-950 font-black flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">TEST</h4>
                    <p className="text-xs text-slate-300">Timed OMR Exam on AISSEE pattern</p>
                  </div>
                </div>

                <div className="text-center text-amber-400 text-xs font-bold">↓</div>

                {/* Step 2 */}
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-800 text-amber-400 font-black flex items-center justify-center flex-shrink-0 border border-amber-400/40">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">SCORE</h4>
                    <p className="text-xs text-slate-300">Instant OMR evaluation & score breakdown</p>
                  </div>
                </div>

                <div className="text-center text-amber-400 text-xs font-bold">↓</div>

                {/* Step 3 */}
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-800 text-amber-400 font-black flex items-center justify-center flex-shrink-0 border border-amber-400/40">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">ANALYSIS</h4>
                    <p className="text-xs text-slate-300">Diagnosing silly mistakes & speed bottlenecks</p>
                  </div>
                </div>

                <div className="text-center text-amber-400 text-xs font-bold">↓</div>

                {/* Step 4 */}
                <div className="bg-navy-950 p-4 rounded-xl border border-amber-500/40 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center flex-shrink-0 shadow">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400">IMPROVEMENT</h4>
                    <p className="text-xs text-slate-300">Targeted doubt classes & score boost</p>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Resulting in higher confidence on actual exam day.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
