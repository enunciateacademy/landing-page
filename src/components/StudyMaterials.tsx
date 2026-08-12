import React from 'react';
import { BookOpen, Check, ShieldCheck, ArrowRight, BookMarked, FileCode, Sparkles } from 'lucide-react';
import { studyMaterialsData } from '../data/studyMaterials';
import studyKitImg from '../assets/images/study_kit_books_1786509313166.jpg';

interface StudyMaterialsProps {
  onOpenEnrollModal: (title?: string) => void;
}

export const StudyMaterials: React.FC<StudyMaterialsProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="study-material" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
            <BookMarked className="w-3.5 h-3.5" /> Curated Academic Books & Workbooks
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            Everything Your Child Needs to Prepare Better
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Designed specifically for AISSEE, JNVST and RMS syllabus — eliminating clutter and focusing on high-frequency exam questions.
          </p>
        </div>

        {/* Study Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyMaterialsData.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-navy-800 transition-all card-hover-effect"
            >
              <div>
                {/* Book Cover Header Graphic */}
                <div className="relative bg-navy-900 text-white p-5 rounded-xl border border-navy-800 mb-5 flex items-center justify-between overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-amber-400/10 to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold font-heading text-white mt-0.5 line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-amber-400 text-navy-950 font-bold flex items-center justify-center flex-shrink-0 z-10 shadow">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-bold text-navy-800 bg-amber-100 px-2.5 py-1 rounded-md">
                  {item.badge}
                </span>
                <button
                  onClick={() => onOpenEnrollModal(`Study Material: ${item.title}`)}
                  className="text-xs font-bold text-navy-900 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>Request Sample Pages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Big Action Bar for Study Materials */}
        <div className="mt-12 bg-navy-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden border border-navy-800">
          
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <img 
              src={studyKitImg} 
              alt="Complete Study Kit Books" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1 text-center sm:text-left relative z-10 max-w-xl">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-amber-400" /> Complete Printed Kit Available
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Get the entire subject book set, topic workbooks & OMR practice booklets delivered to your doorstep.
            </p>
          </div>

          <button
            onClick={() => onOpenEnrollModal('Complete Study Material Kit')}
            className="gold-gradient-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold flex-shrink-0 flex items-center gap-2 relative z-10 shadow-xl"
          >
            <span>VIEW STUDY MATERIAL & SAMPLES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
