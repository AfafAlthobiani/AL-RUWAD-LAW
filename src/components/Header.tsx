import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Clock, Scale } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#values' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'آراء العملاء', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Showcase and Sale Red Banner */}
      <div className="bg-red-700 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 text-center dir-rtl flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 shadow-md border-b border-red-800 relative z-50">
        <div className="flex items-center gap-2 justify-center">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
          <span>هذا الموقع مخصص للعرض والبيع، ويمكن تصميم وتنفيذ موقع مشابه مع إمكانية التخصيص حسب احتياجاتكم.</span>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=966592843956&text=%D9%87%D9%84%D8%A7%21+%D8%A3%D8%A8%D9%8A+%D8%AE%D8%AF%D9%85%D8%A9+%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%85%D9%88%D9%82%D8%B9+%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%D9%8A+%D9%84%D8%B4%D8%B1%D9%83%D8%A9+%D8%A3%D9%88+%D9%85%D8%A4%D8%B3%D8%B3%D8%A9+%EF%BF%BD&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-700 hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.97] px-3.5 py-1 rounded-md text-xs sm:text-xs font-bold transition-all duration-200 shadow-sm flex items-center gap-1 shrink-0"
        >
          اطلب الآن
        </a>
      </div>

      {/* Top bar with quick info - visible on desktop */}
      <div className="hidden lg:block bg-navy-900 border-b border-navy-800 text-xs text-slate-300 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center dir-rtl">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>{OFFICE_CONTACT.workingHours}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span className="dir-ltr">{OFFICE_CONTACT.phone}</span>
            </span>
          </div>
          <div className="text-gold-400 font-medium">
            تأسس مكتب الرواد للمحاماة ليضع الريادة والعدالة في خدمتكم
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div 
        className={`w-full transition-all duration-300 px-4 md:px-8 py-3 ${
          isScrolled 
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-navy-800' 
            : 'bg-navy-900/60 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center shadow-md shadow-gold-500/10 transition-transform group-hover:rotate-12 duration-300">
              <Scale className="w-5.5 h-5.5 text-navy-900 stroke-[2]" />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-classic text-lg md:text-xl font-bold tracking-wide text-white leading-tight">
                مكتب الـرواد
              </span>
              <span className="text-[9px] md:text-[10px] text-gold-400 uppercase tracking-widest font-medium leading-none mt-0.5">
                للمحاماة والاستشارات القانونية
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-200 hover:text-gold-400 font-medium text-sm transition-colors duration-200 py-2 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-gold-500 to-gold-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Consultation CTA & Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 rounded-md text-xs font-semibold text-navy-900 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-lg shadow-gold-600/15 hover:shadow-gold-600/25 active:scale-95 transition-all duration-200"
            >
              طلب استشارة فورية
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-navy-900/98 backdrop-blur-lg border-b border-navy-800 shadow-xl px-4 py-6 flex flex-col gap-4 dir-rtl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-300 hover:text-gold-400 hover:bg-navy-800/50 px-4 py-3 rounded-md font-medium text-base transition-all duration-200 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/0 hover:bg-gold-500/100" />
                </a>
              ))}
            </div>
            
            <div className="h-px bg-navy-800 my-2" />
            
            <div className="flex flex-col gap-3 px-4">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{OFFICE_CONTACT.workingHours}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="dir-ltr text-right">{OFFICE_CONTACT.phone}</span>
              </div>
              
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 mt-2 rounded-md text-sm font-semibold text-navy-900 bg-gradient-to-r from-gold-400 to-gold-500 shadow-md shadow-gold-500/10"
              >
                طلب استشارة فورية
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
