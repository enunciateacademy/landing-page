import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, CheckCircle, ShieldCheck, User, BookOpen, Send } from 'lucide-react';
import { contactData, getWhatsAppLink, getCallLink } from '../data/contact';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, preselectedCourse }) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetExam, setTargetExam] = useState(preselectedCourse || 'Sainik School Class 6');
  const [studentClass, setStudentClass] = useState('Class 5');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on Escape key press and disable background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Enunciate Academy! I am inquiring for my child:
- Student Name: ${studentName || '[Not provided]'}
- Current Class: ${studentClass}
- Target Exam: ${targetExam}
- Parent Phone: ${phone || '[Not provided]'}

Please guide me with batch timing and admission details.`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden cursor-default max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-6 relative">
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2 pr-8">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400 text-navy-900 uppercase tracking-wider">
              Admission Inquiry
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Verified Institute
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white pr-8">
            Join Enunciate Academy
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Get structured academic guidance, batch details & study material sample.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy-900">Inquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{parentName || 'Parent'}</span>. Our academic counselor will call you shortly at <span className="font-semibold text-slate-900">{phone || contactData.phone}</span>.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Connect on WhatsApp Now
                </button>
                <a
                  href={getCallLink()}
                  className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" /> Call {contactData.phone}
                </a>
              </div>

              <button
                onClick={() => { setIsSubmitted(false); onClose(); }}
                className="text-xs text-slate-500 hover:underline pt-2 inline-block"
              >
                Close Dialog
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Parent's Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Student's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Child's Full Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Current Class *
                  </label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 focus:bg-white outline-none transition-all"
                  >
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5 (Class 6 Entrance)</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8 (Class 9 Entrance)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Target Entrance Exam *
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 focus:bg-white outline-none transition-all"
                  >
                    <option value="Sainik School Class 6">Sainik School (AISSEE) - Class 6</option>
                    <option value="Sainik School Class 9">Sainik School (AISSEE) - Class 9</option>
                    <option value="Navodaya Vidyalaya Class 6">Navodaya Vidyalaya (JNVST) - Class 6</option>
                    <option value="RMS Entrance">RMS Entrance Test (Rashtriya Military Schools)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-Digit Phone Number (e.g. 9492444498)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-800 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 gold-gradient-btn py-3 rounded-xl font-bold text-navy-900 hover:brightness-105 transition-all text-sm uppercase tracking-wide"
                >
                  <Send className="w-4 h-4" /> Request Call Back & Syllabus Details
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-3 text-slate-400 text-xs">or instant chat</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" /> Chat Directly on WhatsApp
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Your privacy is respected. No spam, guaranteed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
