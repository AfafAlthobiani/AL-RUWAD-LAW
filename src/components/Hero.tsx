import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, ArrowLeft, Gavel, Award } from 'lucide-react';
import heroBg from '../assets/images/saudi_society_hero_bg_1782756293503.jpg';

export default function Hero() {
  const stats = [
    { value: '+15', label: 'عاماً من الخبرة', icon: Award },
    { value: '+1200', label: 'قضية ناجحة', icon: Gavel },
    { value: '+350', label: 'عميل من الشركات', icon: ShieldCheck },
    { value: '98%', label: 'نسبة النجاح والرضا', icon: Scale },
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="مكتب الرواد للمحاماة والاستشارات القانونية"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/90 to-navy-900/45" />
        {/* Abstract pattern grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(212,175,55,0.015)_1.5px,transparent_1.5px)] bg-[size:40px_40px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 dir-rtl text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main copy and actions */}
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 self-start bg-gold-500/10 border border-gold-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gold-400"
            >
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>نخبة من المحامين والمستشارين المعتمدين بالمملكة</span>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-classic text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                مكتب الرواد <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                  للمحاماة والاستشارات القانونية
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light"
              >
                شراكتكم القانونية الموثوقة لحماية مصالح وتنمية أعمالكم. نوفر حلولاً واستشارات مبتكرة ورصينة تواكب الأنظمة والتحولات الرقمية القضائية المتسارعة في المملكة العربية السعودية بكفاءة وسرية مطلقة.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-bold text-navy-900 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>احجز استشارتك الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-bold text-white bg-navy-800/80 border border-white/10 hover:bg-navy-800 hover:border-gold-500/50 hover:text-gold-400 active:scale-[0.98] transition-all duration-200"
              >
                <span>استكشف خدماتنا القانونية</span>
              </button>
            </motion.div>
          </div>

          {/* Trust badges and brief highlight */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-navy-800/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-6 text-right">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-classic text-xl font-bold text-white">مبادئنا الثابتة</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  نؤمن في مكتب الرواد بأن القانون ليس مجرد نصوص بل هو ميزان للحقوق ودرع للأعمال. نكرس كفاءتنا لضمان استقرار كياناتكم التجارية وحماية حقوقكم الشخصية.
                </p>
                <div className="h-px bg-white/5" />
                <div className="text-xs text-gold-400 flex items-center gap-1.5 font-medium">
                  <span>مرخصون من وزارة العدل السعودية</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats grid section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 bg-navy-900/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-4 text-right group p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-5.5 h-5.5 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-classic text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
