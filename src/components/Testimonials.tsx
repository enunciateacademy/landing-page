import React from 'react';
import { Star, Quote, MessageSquare, ShieldCheck, User } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
            <MessageSquare className="w-3.5 h-3.5" /> Parent Reviews & Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            What Parents & Students Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from parents whose children prepared with Enunciate Academy's structured methodology.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">5.0 / 5.0</span>
                </div>

                {/* Quote Box */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-amber-100 absolute -top-3 -left-2 -z-0" />
                  <p className="text-xs sm:text-sm text-slate-700 italic relative z-10 leading-relaxed">
                    "{item.quoteText}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-navy-900 font-bold flex-shrink-0">
                  <User className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy-900 font-heading">
                    {item.parentName}
                  </h3>
                  <p className="text-[11px] font-semibold text-amber-600">
                    {item.relation} • {item.examPrepared}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All parent testimonials can be reviewed directly at Enunciate Academy branches.</span>
        </div>

      </div>
    </section>
  );
};
