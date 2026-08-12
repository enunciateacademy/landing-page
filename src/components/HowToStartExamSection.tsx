import React from 'react';
import { Smartphone, Key, Lock, BookOpen, Layers, Calendar, Radio, Target, Phone } from 'lucide-react';
import { contactData, getCallLink } from '../data/contact';

export const HowToStartExamSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Open the App',
      desc: 'Launch Enunciate Academy Learners on your phone or tablet.',
      icon: Smartphone,
      emoji: '📱'
    },
    {
      num: '02',
      title: 'Login',
      desc: 'Use your registered student email address.',
      icon: Key,
      emoji: '🔑'
    },
    {
      num: '03',
      title: 'Enter User ID & Password',
      desc: 'Enter your assigned credentials provided by the admin team.',
      icon: Lock,
      emoji: '🔐'
    },
    {
      num: '04',
      title: 'Open Library',
      desc: 'Tap on Library from the bottom navigation menu.',
      icon: BookOpen,
      emoji: '📚'
    },
    {
      num: '05',
      title: 'Select Your Course',
      desc: 'Tap on your registered Sainik / Navodaya batch.',
      icon: Layers,
      emoji: '🎓'
    },
    {
      num: '06',
      title: "Find Today's Date",
      desc: 'Locate the daily folder for today’s scheduled test.',
      icon: Calendar,
      emoji: '📅'
    },
    {
      num: '07',
      title: 'Open the Live Link',
      desc: 'Click on the red Live button to join explanation sessions.',
      icon: Radio,
      emoji: '🔴'
    },
    {
      num: '08',
      title: 'Start Your Exam',
      desc: 'Attempt your scheduled test and view score breakdown.',
      icon: Target,
      emoji: '🎯'
    }
  ];

  return (
    <section id="how-to-start-exam" className="py-16 sm:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4 text-amber-400" />
            <span>Student Step-by-Step Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            How to Start Your Exam
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A simple, clear guide for young students and parents to access daily live classes & practice tests.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-navy-950/80 border border-slate-800 p-6 rounded-2xl relative shadow-md hover:border-amber-400/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-heading text-amber-400">
                      {step.num}
                    </span>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mb-2 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{step.title}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                  Step {step.num} of 08
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpline Banner */}
        <div className="mt-12 bg-navy-950 border border-amber-500/40 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-amber-400 font-heading">
              Having trouble starting your exam or logging in?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our academic support team is available on WhatsApp & Call to assist you immediately.
            </p>
          </div>

          <a
            href={getCallLink()}
            className="gold-gradient-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center gap-2 flex-shrink-0 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Need Help? Call {contactData.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
