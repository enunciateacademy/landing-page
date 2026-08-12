import React from 'react';
import { Phone, MessageSquare, CheckCircle2, Shield, Award, Sparkles, ArrowRight, BookOpen, Clock, Users, Star } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';
import heroBannerImg from '../assets/images/sainik_hero_banner_1786509296034.jpg';

interface HeroProps {
  onOpenEnrollModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollModal }) => {
  return (
    <section id="hero" className="relative navy-gradient-bg text-white pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-navy-800">
      
      {/* Subtle Background Pattern & Academic Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 font-semibold">Admissions Open 2026-27</span>
              <span className="text-slate-400">•</span>
              <span>Sainik • Navodaya • RMS Coaching</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.15]">
              Give Your Child a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Structured Path</span> to Sainik School Success
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Focused preparation with regular tests, live explanation sessions, study material, recorded classes and continuous practice.
            </p>

            {/* Key Value Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-1 text-left">
              {[
                "Structured Preparation",
                "Regular Tests",
                "Live Explanation",
                "Study Material",
                "Online & Offline Support"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200 leading-tight">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs Section */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenEnrollModal}
                className="w-full sm:w-auto gold-gradient-btn px-8 py-4 rounded-xl text-base uppercase tracking-wider font-bold transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group"
              >
                <span>JOIN THE COURSE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getCallLink()}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {contactData.phone}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-800/80 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Micro Trust Banner */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1 text-slate-300">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Dedicated Entrance Academy
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Class 5 & Class 8 Batches
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Users className="w-3.5 h-3.5 text-emerald-400" /> Verified System
              </span>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-b from-navy-800 to-navy-950 p-2.5 border border-slate-700/80 shadow-2xl shadow-navy-950/50">
              
              {/* Image Graphic / Illustration Box */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 min-h-[380px] sm:min-h-[430px] flex flex-col justify-between p-6 sm:p-8 border border-slate-800 group">
                
                {/* Real Demo Banner Image */}
                <img 
                  src={heroBannerImg} 
                  alt="Enunciate Academy Sainik School Coaching Classroom" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40"></div>
                
                {/* Header Tag inside Visual */}
                <div className="relative z-10 flex justify-between items-center">
                  <div className="flex items-center gap-2 bg-navy-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/40">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Sainik School Entrance</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700">
                    AISSEE / JNVST / RMS
                  </span>
                </div>

                {/* Central Visual Graphic */}
                <div className="relative z-10 my-auto text-center py-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-navy-800 via-navy-900 to-slate-800 border-2 border-amber-400/50 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/20 mb-3 backdrop-blur-md">
                    <Award className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white drop-shadow-md">
                    Structured Entrance Classroom
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-xs mx-auto drop-shadow">
                    Concepts • Daily Practice • OMR Speed Mocks • Error Analysis
                  </p>
                </div>

                {/* Floating Overlay Badge - Top Left */}
                <div className="absolute top-16 -left-3 sm:-left-6 bg-navy-950/95 backdrop-blur-md border border-slate-700 text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 z-20 max-w-[200px]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Weekly OMR Tests</p>
                    <p className="text-xs font-bold text-white">Timed Exam Format</p>
                  </div>
                </div>

                {/* Floating Overlay Badge - Bottom Right */}
                <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-navy-950/95 backdrop-blur-md border border-amber-500/50 text-white p-3.5 rounded-xl shadow-2xl flex items-center gap-3 z-20 max-w-[220px]">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase font-bold">Class 6 & Class 9</p>
                    <p className="text-xs font-bold text-slate-100">Complete Study Kit Included</p>
                  </div>
                </div>

                {/* Bottom Visual Bar */}
                <div className="relative z-10 bg-navy-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Guided Entrance Coaching
                  </span>
                  <span className="text-amber-400 font-bold">Enunciate System</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
