import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden dir-rtl text-right">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-bold text-xs uppercase tracking-widest block mb-3">شراكات نعتز بها</span>
          <h2 className="font-classic text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            ماذا يقول عملاؤنا عن خدماتنا القانونية؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            ثقة عملائنا هي أثمن ما نملك، ورضاهم هو الثمرة الحقيقية لالتزامنا بالمهنية العالية والدقة المتناهية في حل أعقد النزاعات وحماية الأعمال.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative flex flex-col justify-between group hover:border-gold-500/30 hover:bg-white hover:shadow-xl hover:shadow-navy-900/[0.02] transition-all duration-300"
            >
              {/* Double Quotes Icon */}
              <div className="absolute top-6 left-6 text-slate-200 group-hover:text-gold-500/10 transition-colors duration-300 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Author Meta */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm shadow-inner shrink-0">
                  {t.name.split(' ').slice(-1)[0][0] || 'ع'}
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-classic text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5">
                    {t.role} {t.company && <span className="text-gold-600 font-medium">| {t.company}</span>}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-navy-900/5 border border-navy-900/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-right">
            <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="font-classic text-base font-bold text-navy-900">انضم إلى قائمة شركاء النجاح</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                نوفر عقود استشارية سنوية مرنة تناسب الشركات الكبرى والناشئة لتغطية كافة متطلبات الحماية والنمو.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 hover:text-gold-400 shadow-md transition-colors"
          >
            طلب عقد استشاري للشركات
          </a>
        </motion.div>

      </div>
    </section>
  );
}
