import React from 'react';
import { Calculator, Brain, BookOpen, Globe, ExternalLink, PlayCircle } from 'lucide-react';
import { recordedCategories } from '../data/recordedClasses';
import { contactData } from '../data/contact';

export const RecordedClassesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Calculator': return Calculator;
      case 'Brain': return Brain;
      case 'BookOpen': return BookOpen;
      case 'Globe': return Globe;
      default: return PlayCircle;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <PlayCircle className="w-4 h-4 text-amber-400" />
            <span>Subject Video Archives</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Learn Anytime With Recorded Sessions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Never miss a single concept. Access comprehensive recorded explanation archives anytime from your mobile or laptop.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {recordedCategories.map((cat, idx) => {
            const Icon = getIcon(cat.iconName);
            return (
              <a
                key={idx}
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-900/90 border border-slate-800 hover:border-amber-400/60 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-navy-950 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1">
                      <span>View Archive</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                  <span>{cat.subject}</span>
                  <span className="group-hover:translate-x-1 transition-transform">Free Access &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Central CTA Button */}
        <div className="text-center">
          <a
            href={contactData.blogFreeClassesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-btn px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl shadow-amber-500/20"
          >
            <span>EXPLORE ALL FREE CLASSES</span>
            <ExternalLink className="w-4 h-4 text-navy-950" />
          </a>
        </div>

      </div>
    </section>
  );
};
