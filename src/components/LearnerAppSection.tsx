import React from 'react';
import { Smartphone, Download, CheckCircle2, Play, BookOpen, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import { contactData, getCallLink } from '../data/contact';

export const LearnerAppSection: React.FC = () => {
  const journeySteps = [
    { num: '01', title: 'Download the App', desc: 'Install Enunciate Academy Learners from Google Play Store.', icon: Download },
    { num: '02', title: 'Login', desc: 'Use your registered email & password provided at admission.', icon: Smartphone },
    { num: '03', title: 'Open Library', desc: 'Navigate to your course library dashboard.', icon: BookOpen },
    { num: '04', title: 'Select Course', desc: 'Choose your batch (Sainik Class 6 / Class 9 / Navodaya / RMS).', icon: CheckCircle2 },
    { num: '05', title: "Find Today's Date", desc: 'Locate today’s schedule for daily tests & lectures.', icon: Calendar },
    { num: '06', title: 'Open the Live Link', desc: 'Join the daily live explanation session directly.', icon: Play },
    { num: '07', title: 'Start Test / Class', desc: 'Attempt timed tests and view interactive explanation video.', icon: ArrowRight },
  ];

  return (
    <section id="learner-app" className="py-16 sm:py-24 bg-navy-950 text-white relative border-b border-navy-800 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>Dedicated Mobile Platform</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Your Child's Preparation — <span className="text-amber-400">Right From the App</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Students can access their complete course, daily practice tests, live explanation links, and recorded archives through the official <strong className="text-white">Enunciate Academy Learners</strong> app.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={contactData.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-btn px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl shadow-amber-500/20 group"
            >
              <Download className="w-5 h-5 text-navy-950 group-hover:bounce" />
              <span>DOWNLOAD APP FROM PLAY STORE</span>
            </a>

            <a
              href={getCallLink()}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Login Help: Call {contactData.phone}</span>
            </a>
          </div>
        </div>

        {/* Journey Step-by-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {journeySteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-navy-900/90 border border-slate-800 hover:border-amber-400/50 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-amber-400/40 group-hover:text-amber-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center text-[11px] font-semibold text-amber-400/80">
                  <span>Enunciate Learner App</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Phone App Banner */}
        <div className="mt-12 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-md inline-block">
              Google Play Official App
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Enunciate Academy Learners
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Designed specifically for young minds preparing for Sainik School, Navodaya Vidyalaya, and RMS entrance examinations. Clear interface, distraction-free test environment, and instant score updates.
            </p>
          </div>

          <a
            href={contactData.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black rounded-xl text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 flex-shrink-0 transition-transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>GET IT ON GOOGLE PLAY</span>
          </a>
        </div>

      </div>
    </section>
  );
};
