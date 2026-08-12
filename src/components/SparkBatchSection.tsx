import React from 'react';
import { Sun, Moon, Clock, CheckCircle2, Sparkles, Video, Play, BookOpen } from 'lucide-react';
import { morningSchedule, eveningSchedule, class6Routine, class9Routine, sparkBatchVideo } from '../data/sparkBatch';
import { VideoCard } from './VideoCard';

export const SparkBatchSection: React.FC = () => {
  return (
    <section id="spark-batch" className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Signature Morning & Evening Batch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            SPARK BATCH
          </h2>
          <p className="text-lg sm:text-xl font-bold text-amber-400 font-heading">
            "Early to rise. Early to learn. Prepare with discipline."
          </p>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The SPARK Batch follows a disciplined early-morning Brahma Muhurtham study system, building consistency, speed, and exam accuracy before regular school hours.
          </p>
        </div>

        {/* Timetables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Morning Schedule Card */}
          <div className="bg-navy-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Morning — Brahma Muhurtham Schedule</h3>
                <p className="text-xs text-amber-400 font-semibold">Starts sharp at 04:40 AM</p>
              </div>
            </div>

            <div className="space-y-3">
              {morningSchedule.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between bg-navy-950 p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm">
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">{item.activity}</span>
                    <span className="text-[11px] text-slate-400">{item.subject} {item.forClass && `• ${item.forClass}`}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-amber-400 font-bold text-xs flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Schedule Card */}
          <div className="bg-navy-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Evening Session Schedule</h3>
                <p className="text-xs text-blue-400 font-semibold">05:00 PM to 08:00 PM</p>
              </div>
            </div>

            <div className="space-y-3">
              {eveningSchedule.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between bg-navy-950 p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm">
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">{item.activity}</span>
                    <span className="text-[11px] text-slate-400">{item.subject} {item.forClass && `• ${item.forClass}`}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-blue-300 font-bold text-xs flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* What Students Do Every Day (Routines) */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              What Students Do Every Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Structured daily preparation flow tailored for Class 6 and Class 9 entrance candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Class 6 Routine */}
            <div className="bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <span className="px-3 py-1 bg-amber-400 text-navy-950 font-black text-xs rounded-md uppercase">
                  Class 6
                </span>
                <h4 className="text-lg font-bold text-white font-heading">Class 6 Daily Routine</h4>
              </div>

              <ul className="space-y-3">
                {class6Routine.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class 9 Routine */}
            <div className="bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <span className="px-3 py-1 bg-blue-500 text-white font-black text-xs rounded-md uppercase">
                  Class 9
                </span>
                <h4 className="text-lg font-bold text-white font-heading">Class 9 Daily Routine</h4>
              </div>

              <ul className="space-y-3">
                {class9Routine.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SPARK Batch Video Showcase Card */}
        <div className="bg-navy-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md inline-block">
              Watch Experience Video
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              See How the SPARK Batch Works
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Experience the disciplined morning atmosphere, instant live question resolution, and test evaluation system.
            </p>
          </div>

          <VideoCard
            title={sparkBatchVideo.title}
            youtubeUrl={sparkBatchVideo.youtubeUrl}
            youtubeId={sparkBatchVideo.youtubeId}
            subject="SPARK Batch Special"
          />
        </div>

      </div>
    </section>
  );
};
