import React from 'react';
import { Target, CalendarCheck, FileSpreadsheet, BookCheck, LineChart, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyEnunciate: React.FC = () => {
  const reasons = [
    {
      title: "1. Structured Preparation",
      icon: Target,
      description: "We follow a systematic syllabus breakdown week-by-week so children complete the syllabus 2 months prior to exams, leaving ample time for revision."
    },
    {
      title: "2. Daily Practice Worksheets",
      icon: CalendarCheck,
      description: "Students receive Daily Practice Problems (DPPs) after every class to reinforce classroom concepts before moving on to new topics."
    },
    {
      title: "3. Regular OMR Mock Tests",
      icon: FileSpreadsheet,
      description: "Tests are conducted on actual exam-format OMR sheets to eliminate bubble-filling errors, manage time stress, and build exam stamina."
    },
    {
      title: "4. Quality Study Material",
      icon: BookCheck,
      description: "Our printed and digital study modules are curated exclusively for Sainik & Navodaya patterns, replacing bulky unnecessary books with focused content."
    },
    {
      title: "5. Performance Tracking",
      icon: LineChart,
      description: "Parents receive detailed scorecard breakdowns after every mock test, clearly highlighting weak chapters that need extra doubt sessions."
    },
    {
      title: "6. Parent Support & Guidance",
      icon: HeartHandshake,
      description: "Direct academic updates, parent counseling sessions, and clear guidance regarding online application forms, documents, and medical exam norms."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" /> The Enunciate Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            Why Parents Choose Enunciate Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Instead of generic tuitions, we provide a disciplined academic framework engineered specifically for competitive entrance exams.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
