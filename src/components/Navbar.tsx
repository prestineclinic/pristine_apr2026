import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-8 md:px-12 lg:px-24",
      isScrolled ? "bg-white/70 backdrop-blur-2xl py-4 border-b border-slate-200/50" : "bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={64} className="group-hover:rotate-6 transition-transform duration-500" />
          <span className="font-display font-semibold text-xl tracking-tight text-slate-950">
            Pristine<span className="font-light italic text-sky-500">Physio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-slate-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://maps.app.goo.gl/X6yLj491oM27uxEz6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all"
          >
            <Navigation size={14} />
            Get Directions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-slate-950 text-white px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-slate-950/20"
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 mt-4 overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://maps.app.goo.gl/X6yLj491oM27uxEz6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-xl text-center font-semibold hover:bg-slate-100 transition-all"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-primary-dark transition-all"
              >
                Book Now
              </a>
              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mt-4">
                <Phone size={16} />
                <span>+91 6364 635 943</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
