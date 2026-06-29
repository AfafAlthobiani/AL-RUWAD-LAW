import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Scale, FileText, HelpCircle, 
  Building, ShieldAlert, Gavel, UserCheck, 
  X, Check, ArrowLeft, Send
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

// Map icon name string to Lucide React component
const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  Scale,
  FileText,
  HelpCircle,
  Building,
  ShieldAlert,
  Gavel,
  UserCheck
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(null);
    
    // Smooth scroll to contact
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

      // Autofill inquiry type in contact form
      const selectElement = document.getElementById('inquiryType') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = serviceTitle;
        // Dispatch change event to let React state know it updated
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
      }
      
      // Focus on name input for convenience
      const nameInput = document.getElementById('fullName') as HTMLInputElement;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 800);
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden dir-rtl text-right">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-bold text-xs uppercase tracking-widest block mb-3">تخصصاتنا القانونية</span>
          <h2 className="font-classic text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            خدمات قانونية متكاملة تصاغ بأعلى معايير الدقة والمهنية
          </h2>
          <p className="text-slate-600 text-base font-light">
            نوفر لعملائنا من الشركات والأفراد منظومة متكاملة من الخدمات القانونية والاستشارات والترافع والتسويات، لضمان ممارسات آمنة وحماية فعالة للحقوق.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || HelpCircle;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:border-gold-500/30 hover:shadow-xl hover:shadow-navy-900/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-navy-800 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-navy-900 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-classic text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-navy-900 bg-slate-50 border border-slate-100 group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900 transition-all duration-200 cursor-pointer"
                >
                  <span>تفاصيل الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 duration-200" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-navy-900/65 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col dir-rtl text-right"
            >
              {/* Gold Header Bar */}
              <div className="absolute top-0 right-0 left-0 h-[4px] bg-gradient-to-l from-gold-600 via-gold-500 to-gold-400" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 left-4 p-1.5 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 pt-10 flex-1 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                    {(() => {
                      const Icon = iconMap[selectedService.iconName] || HelpCircle;
                      return <Icon className="w-6 h-6 stroke-[1.5]" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] text-gold-600 font-bold uppercase tracking-widest block mb-0.5">تفاصيل التخصص</span>
                    <h3 className="font-classic text-xl font-bold text-navy-900">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {selectedService.description}
                </p>

                <h4 className="font-classic text-sm font-bold text-navy-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>أبرز محاور وهيكل الخدمة:</span>
                </h4>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Modal Actions */}
                <div className="flex gap-4 border-t border-slate-100 pt-6">
                  <button
                    onClick={() => handleBookService(selectedService.title)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-bold text-navy-900 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md shadow-gold-500/10 active:scale-98 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>طلب استشارة في هذه الخدمة</span>
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 rounded-md text-sm font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    إغلاق
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
