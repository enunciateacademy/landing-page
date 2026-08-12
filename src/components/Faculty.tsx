import React from 'react';
import { Users, BookOpen, Award, UserCheck } from 'lucide-react';
import { facultyData } from '../data/faculty';

export const Faculty: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-amber-400">
            <Users className="w-3.5 h-3.5" /> Experienced Academic Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
            Meet the Team Behind the Preparation
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated educators with specialized experience in Sainik School and Navodaya competitive entrance patterns.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facultyData.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-navy-800 transition-all card-hover-effect"
            >
              <div>
                {/* Image Placeholder Box */}
                <div className="relative w-28 h-28 mx-auto mb-5 rounded-2xl bg-navy-900 border-2 border-amber-400/40 flex flex-col items-center justify-center text-amber-400 shadow-md overflow-hidden">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
                      <UserCheck className="w-12 h-12" />
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter mt-1">
                        {member.imagePlaceholderText}
                      </span>
                    </>
                  )}
                </div>

                {/* Faculty Info */}
                <div className="text-center space-y-1 mb-4">
                  <h3 className="text-lg font-bold font-heading text-navy-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-600">
                    {member.role}
                  </p>
                  <p className="text-[11px] font-medium text-slate-500">
                    {member.qualification} • {member.experience}
                  </p>
                </div>

                {/* Specialization Tag */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 mb-3 text-xs">
                  <span className="text-[10px] font-bold text-navy-900 uppercase tracking-wider block text-slate-400">
                    Specialization:
                  </span>
                  <p className="font-semibold text-slate-800 mt-0.5">
                    {member.specialization}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed text-center italic">
                  "{member.bio}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-flex items-center gap-1">
                  <Award className="w-3 h-3" /> Student Academic Mentor
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
