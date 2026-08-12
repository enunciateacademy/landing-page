import React from 'react';
import { BookOpen, CheckCircle2, Shield, ArrowRight, Sparkles, Clock, FileText, Headphones } from 'lucide-react';
import { coursesData, Course } from '../data/courses';

interface CoursesProps {
  onOpenEnrollModal: (courseTitle?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="courses" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
            <BookOpen className="w-3.5 h-3.5" /> Specialized Entrance Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            Choose the Right Preparation Program
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Targeted coaching programs structured according to official Sainik, Navodaya and RMS exam patterns.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coursesData.map((course: Course) => (
            <div 
              key={course.id}
              className={`relative bg-white rounded-2xl border ${
                course.popular 
                  ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-xl' 
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              } p-6 sm:p-8 flex flex-col justify-between transition-all card-hover-effect`}
            >
              {/* Popular Badge */}
              {course.badge && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-navy-950 shadow-md uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {course.badge}
                </div>
              )}

              <div>
                {/* Course Header */}
                <div className="border-b border-slate-100 pb-5 mb-5">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                    {course.targetClass}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-navy-900">
                    {course.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Exam: {course.exam}
                  </p>
                  <p className="text-xs text-emerald-700 bg-emerald-50 py-1 px-2.5 rounded-md inline-block font-medium mt-2">
                    Eligibility: {course.eligibility}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Subjects Covered */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Subjects & Syllabus Covered:
                  </h4>
                  <ul className="space-y-2">
                    {course.subjects.map((sub, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Includes Breakdown */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Batches</p>
                      <p className="font-bold text-slate-900">{course.includes.classes}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <FileText className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Test Series</p>
                      <p className="font-bold text-slate-900">{course.includes.tests}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <BookOpen className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Study Material</p>
                      <p className="font-bold text-slate-900">{course.includes.materials}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Headphones className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Doubt Support</p>
                      <p className="font-bold text-slate-900">{course.includes.support}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Price & Action Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Course Fee</span>
                  <span className="text-xl font-bold text-navy-900 font-heading">
                    {course.price}
                  </span>
                  <span className="text-[11px] text-amber-700 font-semibold block">Contact 9492444498 for current batch fee</span>
                </div>

                <button
                  onClick={() => onOpenEnrollModal(course.title)}
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    course.popular
                      ? 'gold-gradient-btn shadow-lg'
                      : 'bg-navy-900 hover:bg-navy-800 text-white shadow'
                  }`}
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-12 text-center text-xs text-slate-500 bg-amber-50/60 border border-amber-200/60 p-4 rounded-xl max-w-2xl mx-auto">
          Need help deciding which entrance exam is right for your child? <br />
          <strong className="text-navy-900">Call our Academic Helpline at 9492444498</strong> for free counseling and eligibility verification.
        </div>

      </div>
    </section>
  );
};
