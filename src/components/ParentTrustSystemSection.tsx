import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowDown, Smartphone, BookOpen, FileText, Video, Play, TrendingUp } from 'lucide-react';

export const ParentTrustSystemSection: React.FC = () => {
  const parentChecks = [
    "What to study",
    "When to write the test",
    "When the explanation happens",
    "Where to access the class",
    "How to practice",
    "What to revise"
  ];

  const ecosystemFlow = [
    { title: 'Learner App', desc: 'Mobile access for student', icon: Smartphone },
    { title: 'Course Library', desc: 'Structured modules & notes', icon: BookOpen },
    { title: 'Daily Tests', desc: 'Timed OMR practice sets', icon: FileText },
    { title: 'Live Sessions', desc: 'Interactive teacher explanation', icon: Video },
    { title: 'Recorded Classes', desc: 'Archive for easy revision', icon: Play },
    { title: 'Continuous Practice', desc: 'Regular improvement tracking', icon: TrendingUp },
  ];

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Parent Trust Header (#20) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Parent Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            As a Parent, You Want to Know What Your Child Is Doing Every Day.
          </h2>
          <p className="text-base sm:text-lg text-amber-300 font-semibold max-w-2xl mx-auto">
            "Enunciate Academy brings classes, tests, practice and recorded learning together into one structured preparation system."
          </p>
        </div>

        {/* 6 Parent Checks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {parentChecks.map((item, idx) => (
            <div key={idx} className="bg-navy-900 border border-slate-800 p-4 rounded-xl text-center space-y-2 hover:border-amber-400/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
              <span className="text-xs font-bold text-slate-100 block">{item}</span>
            </div>
          ))}
        </div>

        {/* Section #21: Ecosystem Diagram */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Complete Educational Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              ENUNCIATE ACADEMY INTEGRATED PLATFORM
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {ecosystemFlow.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div key={idx} className="bg-navy-950 p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-between space-y-3 relative group hover:border-amber-400/60 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">{node.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{node.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Node 0{idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
