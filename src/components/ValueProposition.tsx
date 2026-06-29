import { motion } from 'motion/react';
import { Shield, EyeOff, Award, Clock, ArrowUpRight } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      title: 'النزاهة والشفافية المطلقة',
      description: 'نلتزم بالصراحة والوضوح التام مع عملائنا في تقييم مواقفهم القانونية ونسب النجاح والمخاطر من الجلسة الأولى دون مبالغات.',
      icon: Shield,
      bg: 'from-blue-500/5 to-cyan-500/5',
      iconColor: 'text-blue-400',
    },
    {
      title: 'السرية والأمان الرقمي للبيانات',
      description: 'نطبق معايير أمان إلكترونية مشددة لحماية معلومات عملاء ووثائق القضايا، ممتدة بموجب ميثاق المهنة ونظام المحاماة.',
      icon: EyeOff,
      bg: 'from-amber-500/5 to-gold-500/5',
      iconColor: 'text-gold-400',
    },
    {
      title: 'الخبرة والممارسة العميقة',
      description: 'فريق عملنا يضم نخبة من المستشارين الحاصلين على أعلى الدرجات العلمية والممارسين لأعقد القضايا التجارية والمدنية بالمملكة.',
      icon: Award,
      bg: 'from-emerald-500/5 to-teal-500/5',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'الكفاءة والالتزام بالمواعيد',
      description: 'ندير الملفات القانونية بمنهجية حوكمة حديثة ومؤشرات قياس أداء تضمن سرعة التنفيذ والالتزام التام بالجداول الزمنية.',
      icon: Clock,
      bg: 'from-indigo-500/5 to-purple-500/5',
      iconColor: 'text-indigo-400',
    },
  ];

  return (
    <section id="values" className="py-24 bg-white relative overflow-hidden dir-rtl text-right">
      {/* Decorative accent shadows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-wider block">لماذا مكتب الرواد؟</span>
            <h2 className="font-classic text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              نرسخ العدالة ونحمي طموحكم بقيم ثابتة وخبرات ممتدة
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md font-light leading-relaxed">
            انطلاقاً من فهمنا لمتطلبات البيئة القانونية والاستثمارية بالمملكة، نبني علاقتنا مع عملائنا على أسس صلبة تجمع بين الأمانة المهنية والحلول الاستباقية المبتكرة.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden p-8 rounded-2xl border border-slate-100 bg-gradient-to-br ${val.bg} hover:border-gold-500/30 hover:shadow-xl hover:shadow-navy-900/[0.02] transition-all duration-300`}
              >
                {/* Decorative gold hover line */}
                <span className="absolute top-0 right-0 w-0 h-[3px] bg-gradient-to-l from-gold-500 to-gold-400 transition-all duration-300 group-hover:w-full" />
                
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Icon wrap */}
                  <div className={`w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${val.iconColor}`}>
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-classic text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                      {val.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Firm Philosophy Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-navy-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          {/* Background overlay scale */}
          <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 opacity-10 pointer-events-none">
            <Shield className="w-64 h-64 text-gold-400 stroke-[1]" />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col gap-5">
            <span className="text-gold-400 font-bold text-xs uppercase tracking-widest">رسالتنا في قطاع العدالة</span>
            <p className="font-classic text-xl sm:text-2xl leading-relaxed font-medium">
              "العدل أساس الاستقرار، وحماية أعمالكم هي ركيزتنا الأولى للتطوير والمساهمة في تحقيق مستهدفات رؤية المملكة 2030."
            </p>
            <div className="h-0.5 w-16 bg-gradient-to-l from-gold-500 to-gold-300" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-white">الأستاذ متعب بن عبد العزيز الرواد</span>
              <span className="text-xs text-slate-400">الشريك المؤسس والمدير الإداري للمكتب</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
