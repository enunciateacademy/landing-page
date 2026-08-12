import React from 'react';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface ValueComparisonProps {
  onOpenEnrollModal: () => void;
}

export const ValueComparison: React.FC<ValueComparisonProps> = ({ onOpenEnrollModal }) => {
  const featuresList = [
    { title: "Live / Interactive Classroom Coaching", detail: "Concept building by subject specialists" },
    { title: "Complete Subject Study Material Kit", detail: "Printed/Digital books, workbooks & shortcuts" },
    { title: "Daily Practice Problem Sets (DPPs)", detail: "Topic-wise daily homework & review" },
    { title: "Weekly Chapter & Speed OMR Tests", detail: "Exam pattern timed practice" },
    { title: "15+ Full-Length Grand Mock Exams", detail: "Replicating exact AISSEE & JNVST environment" },
    { title: "Detailed Diagnostic Performance Scorecard", detail: "Identifying weak chapters & speed bottlenecks" },
    { title: "Intensive Revision Workshops", detail: "Formula brush-up & past 10-year question solving" },
    { title: "1-on-1 Dedicated Doubt Resolution", detail: "Personal attention for every student" },
    { title: "Continuous Parent Progress Updates", detail: "Direct score alerts & academic guidance" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
            <Shield className="w-3.5 h-3.5" /> All-Inclusive Preparation Package
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            What Your Child Gets
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Every enrollment includes our complete 360-degree preparation ecosystem — no hidden charges or separate material fees.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {featuresList.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-navy-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-700">
              Ready to give your child a structured start?
            </span>
            <button
              onClick={onOpenEnrollModal}
              className="gold-gradient-btn px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2"
            >
              <span>GET COMPLETE PACKAGE DETAILS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
