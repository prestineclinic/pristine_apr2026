import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
        {/* Brand */}
        <div className="lg:col-span-5 space-y-10">
          <div className="flex items-center gap-3">
            <Logo size={64} />
            <span className="font-display font-semibold text-xl tracking-tight text-slate-950">
              Pristine<span className="font-light italic text-sky-500">Physio</span>
            </span>
          </div>
          <p className="text-lg font-light text-slate-500 leading-relaxed max-w-sm">
            Bridging the gap between clinical excellence and athletic performance through modern rehabilitation.
          </p>
          <div className="flex gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-8">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600">
            <li><a href="#services" className="hover:text-slate-950 transition-colors">Expertise</a></li>
            <li><a href="#about" className="hover:text-slate-950 transition-colors">Clinic</a></li>
            <li><a href="#testimonials" className="hover:text-slate-950 transition-colors">Stories</a></li>
            <li><a href="#contact" className="hover:text-slate-950 transition-colors">Consultation</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-2 space-y-8">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600">Services</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600">
            <li><a href="#" className="hover:text-slate-950 transition-colors">Physiotherapy</a></li>
            <li><a href="#" className="hover:text-slate-950 transition-colors">Osteopathy</a></li>
            <li><a href="#" className="hover:text-slate-950 transition-colors">Neuro & Pediatric Rehab</a></li>
            <li><a href="#" className="hover:text-slate-950 transition-colors">PNF Therapy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3 space-y-8">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600">Contact</h4>
          <ul className="space-y-6 text-sm font-medium text-slate-600">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-sky-500 shrink-0" />
              <span className="font-light">No 50 hig, KHB Colony, Koramangala 8th Block, Koramangala, Bengaluru, Karnataka 560095</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={18} className="text-sky-500 shrink-0" />
              <span className="font-light">+91 6364 635 943</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={18} className="text-sky-500 shrink-0" />
              <span className="font-light">prestine.clinic@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-600">
        <p>© 2025 Pristine Clinic. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-950 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-950 transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
