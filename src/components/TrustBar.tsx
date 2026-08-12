import React from 'react';
import { Target, FileCheck2, BookOpenCheck, LineChart, Users2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      title: "Focused Entrance Preparation",
      description: "Exclusively designed for Sainik School, Navodaya & RMS exam patterns.",
      icon: Target,
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Daily Practice & Tests",
      description: "Chapter worksheets & timed OMR speed tests for error reduction.",
      icon: FileCheck2,
      accent: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Complete Study Material",
      description: "Subject books, shortcuts & 10-year question bank included.",
      icon: BookOpenCheck,
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Regular Performance Tracking",
      description: "Weekly OMR test scorecards & weak-chapter diagnostic reports.",
      icon: LineChart,
      accent: "text-purple-500 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Parent Guidance",
      description: "Continuous feedback, doubt sessions & parent consultation.",
      icon: Users2,
      accent: "text-amber-600 bg-amber-600/10 border-amber-600/20"
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-4 lg:pl-6' : ''
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.accent} mb-3 flex-shrink-0 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold font-heading text-navy-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
