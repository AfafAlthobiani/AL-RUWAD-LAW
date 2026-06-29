import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, Mail, Phone, Clock, MapPin, 
  ArrowUp, ShieldCheck, Heart, ArrowLeft, ExternalLink,
  Linkedin, Twitter, MessageCircle
} from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleQuickLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-slate-400 font-light text-sm pt-20 pb-8 relative overflow-hidden dir-rtl text-right">
      
      {/* Decorative accent shadows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Upper footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-6">
            <a href="#home" onClick={(e) => handleQuickLink(e, '#home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center shadow-md">
                <Scale className="w-5.5 h-5.5 text-navy-900 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-classic text-lg font-bold text-white tracking-wide leading-none">
                  مكتب الـرواد
                </span>
                <span className="text-[9px] text-gold-400 uppercase tracking-widest font-medium mt-1 leading-none">
                  للمحاماة والاستشارات القانونية
                </span>
              </div>
            </a>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              نخبة مرخصة من الكوادر والمستشارين القانونيين بالمملكة، نكرس كفاءتنا وخبراتنا العميقة لحماية أعمالكم وتمثيلكم القضائي بمنظومة حوكمة حديثة ودقة متناهية.
            </p>

            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gold-400 bg-white/5 border border-white/5 p-3 rounded-lg self-start">
              <ShieldCheck className="w-4.5 h-4.5 text-gold-500 shrink-0" />
              <span>مكتب مرخص ومعتمد من وزارة العدل وهيئة المحامين</span>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs text-slate-300 font-medium">تابعنا على شبكاتنا الاجتماعية:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/50 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center text-slate-300 transition-all duration-300 group/icon"
                  aria-label="LinkedIn"
                  title="لينكد إن"
                >
                  <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover/icon:scale-110" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/50 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center text-slate-300 transition-all duration-300 group/icon"
                  aria-label="Twitter / X"
                  title="تويتر / إكس"
                >
                  <Twitter className="w-4 h-4 transition-transform duration-300 group-hover/icon:scale-110" />
                </a>
                <a 
                  href="https://wa.me/966500000000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/50 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center text-slate-300 transition-all duration-300 group/icon"
                  aria-label="WhatsApp"
                  title="واتساب"
                >
                  <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover/icon:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-classic text-sm font-bold text-white uppercase tracking-wider relative pr-3">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-gold-500 rounded-sm" />
              <span>روابط سريعة</span>
            </h4>
            
            <nav className="flex flex-col gap-3">
              {[
                { name: 'الرئيسية والمبادئ', href: '#home' },
                { name: 'قيمنا ومزايانا', href: '#values' },
                { name: 'باقة الخدمات القانونية', href: '#services' },
                { name: 'آراء وشهادات العملاء', href: '#testimonials' },
                { name: 'الأسئلة والأجوبة الشائعة', href: '#faq' },
                { name: 'حجز استشارة فورية', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleQuickLink(e, link.href)}
                  className="hover:text-gold-400 transition-colors flex items-center gap-2 text-xs sm:text-sm group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-gold-500/40 group-hover:text-gold-500 group-hover:-translate-x-1 transition-all" />
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="font-classic text-sm font-bold text-white uppercase tracking-wider relative pr-3">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-gold-500 rounded-sm" />
              <span>بيانات الاتصال</span>
            </h4>

            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OFFICE_CONTACT.address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="dir-ltr">{OFFICE_CONTACT.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`mailto:${OFFICE_CONTACT.email}`} className="hover:text-gold-400 hover:underline">
                  {OFFICE_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Work Hours & Quick Quote */}
          <div className="flex flex-col gap-5">
            <h4 className="font-classic text-sm font-bold text-white uppercase tracking-wider relative pr-3">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-gold-500 rounded-sm" />
              <span>مواعيد الاستقبال</span>
            </h4>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white mb-0.5">أيام العمل الأسبوعية:</span>
                  <span>{OFFICE_CONTACT.workingHours}</span>
                </div>
              </div>

              <div className="h-px bg-white/5 my-1" />

              <div className="bg-white/2 border border-white/5 p-4 rounded-xl text-xs leading-relaxed text-slate-300 italic">
                "مهمتنا تكمن في تمهيد عقبات الأعمال وحفظ الحقوق بنخبة من مستشاري القانون وصائغي العقود الأكثر كفاءة."
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span>جميع الحقوق محفوظة © {currentYear}</span>
            <span className="font-classic text-slate-300 font-bold">مكتب الرواد للمحاماة والاستشارات القانونية</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <span>مرخص في المملكة العربية السعودية</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => handleQuickLink(e, '#home')} className="hover:text-gold-400">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#home" onClick={(e) => handleQuickLink(e, '#home')} className="hover:text-gold-400">اتفاقية الخدمة</a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 flex items-center justify-center shadow-lg hover:from-gold-400 hover:to-gold-500 active:scale-90 transition-all duration-200 cursor-pointer border border-white/10"
            aria-label="العودة لأعلى الصفحة"
            title="العودة لأعلى الصفحة"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}
