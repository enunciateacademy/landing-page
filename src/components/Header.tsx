import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Award, ChevronRight, MessageSquare } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

interface HeaderProps {
  onOpenEnrollModal: (courseTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: '2026 Results', href: '#results' },
    { name: 'Courses', href: '#courses' },
    { name: 'SPARK Batch', href: '#spark-batch' },
    { name: 'Learner App', href: '#learner-app' },
    { name: 'How to Start Exam', href: '#how-to-start-exam' },
    { name: 'Demo Classes', href: '#demo-classes' },
    { name: 'Study System', href: '#preparation-system' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-navy-950 text-slate-200 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" /> Sainik School, Navodaya & RMS Admissions Open 2026-27
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Class 5 & Class 8 Entrance Coaching</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Direct
            </a>
            <span className="text-slate-600">•</span>
            <a href={getCallLink()} className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> Helpline: {contactData.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3' 
          : 'bg-navy-900 py-4 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-navy-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-navy-950 fill-navy-950/20" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black font-heading tracking-tight text-white flex items-center gap-1">
                  ENUNCIATE <span className="text-amber-400">ACADEMY</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-slate-300">
                  Sainik • Navodaya • RMS Coaching
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-200 hover:text-amber-400 rounded-lg hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3">
              <a
                href={contactData.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm"
              >
                <span>REGISTER NOW</span>
              </a>

              <a
                href={getCallLink()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold text-slate-100 bg-slate-800/90 hover:bg-slate-800 hover:text-amber-400 border border-slate-700/80 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {contactData.phone}</span>
              </a>

              <button
                onClick={() => onOpenEnrollModal()}
                className="gold-gradient-btn px-4 py-2 rounded-xl text-xs xl:text-sm uppercase tracking-wider font-bold transition-all flex items-center gap-1"
              >
                <span>Join Now</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button & Quick Call */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getCallLink()}
                className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 hover:bg-amber-400/20 transition-colors"
                aria-label="Call Enunciate Academy"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollModal();
                }}
                className="w-full gold-gradient-btn py-3 rounded-xl font-bold uppercase tracking-wider text-center text-sm flex items-center justify-center gap-2"
              >
                <span>Join The Course</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={getCallLink()}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {contactData.phone}</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-950/80 text-emerald-300 text-xs font-semibold border border-emerald-800/80"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
