import React from 'react';
import { Shield, Phone, Mail, MapPin, MessageSquare, Youtube, Facebook, Instagram, ChevronRight } from 'lucide-react';
import { contactData, getCallLink, getWhatsAppLink } from '../data/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-navy-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-navy-950 font-black">
                <Shield className="w-6 h-6 text-navy-950 fill-navy-950/20" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-heading tracking-tight text-white">
                  ENUNCIATE <span className="text-amber-400">ACADEMY</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-slate-400">
                  Entrance Coaching Institute
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sainik School (AISSEE), Jawahar Navodaya Vidyalaya (JNVST) & Rashtriya Military Schools (RMS) entrance exam coaching. Structured daily practice, mock tests, and expert guidance for Class 5 and Class 8 students.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={contactData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={contactData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Courses & Programs', href: '#courses' },
                { name: 'Student Results', href: '#results' },
                { name: 'Why Enunciate Academy', href: '#why-us' },
                { name: 'Study Material & Books', href: '#study-material' },
                { name: 'Parent Testimonials', href: '#testimonials' },
                { name: 'FAQ & Guidance', href: '#faq' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entrance Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Target Exams
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-600" /> AISSEE Class 6
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-600" /> AISSEE Class 9
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-600" /> JNVST Navodaya Class 6
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-600" /> RMS CET Entrance
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-600" /> OMR Mock Test Series
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Contact & Support
            </h3>
            <div className="space-y-2.5 text-xs">
              <a href={getCallLink()} className="flex items-start gap-2.5 text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Academic Helpline</span>
                  <span className="font-bold">{contactData.phoneFormatted}</span>
                </div>
              </a>

              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">WhatsApp Support</span>
                  <span className="font-bold">{contactData.whatsapp}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Email Address</span>
                  <span>{contactData.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Academy Branch</span>
                  <span>{contactData.address}, {contactData.cityState}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {contactData.academyName}. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-600">
            Sainik School, Navodaya & RMS Entrance Examination Coaching Institute
          </p>
        </div>

      </div>
    </footer>
  );
};
