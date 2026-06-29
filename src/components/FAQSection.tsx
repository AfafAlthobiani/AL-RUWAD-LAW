import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'عام', 'رسوم ومصاريف', 'السرية والخصوصية', 'خدمات الشركات', 'القضايا والمحاكم'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden dir-rtl text-right">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-bold text-xs uppercase tracking-widest block mb-3">المعرفة القانونية</span>
          <h2 className="font-classic text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            الأسئلة الشائعة والإجابات المنظومية
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            نسعى دائماً لتثقيف عملائنا وتقديم معلومات أولية موثوقة حول كيفية سير الإجراءات القضائية والاستشارات في المملكة العربية السعودية.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Live Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن سؤالك القانوني هنا... (مثال: رسوم، سرية، شركات)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-4 bg-white border border-slate-100 rounded-xl shadow-sm focus:outline-none focus:border-gold-500 text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
            />
            <Search className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveFaqId(null); // Close active FAQ when changing categories
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50 hover:text-navy-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordions */}
        <div className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:border-gold-500/20 transition-all duration-200"
                  >
                    {/* Header/Question Trigger */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-right font-classic text-sm sm:text-base font-bold text-navy-900 hover:text-gold-600 transition-colors focus:outline-none gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-gold-500 shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-gold-500' : ''
                        }`} 
                      />
                    </button>

                    {/* Expandable Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-light border-t border-slate-50">
                            {faq.answer}
                            
                            <div className="mt-4 flex items-center justify-between">
                              <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded">
                                التصنيف: {faq.category}
                              </span>
                              <a
                                href="#contact"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const contactSection = document.querySelector('#contact');
                                  if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }}
                                className="text-[11px] text-gold-600 hover:text-gold-500 font-semibold"
                              >
                                هل لديك استفسار أكثر تفصيلاً؟ تواصل معنا
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-sm">لا توجد أسئلة تطابق استعلامك أو اختيارك الحالي.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('الكل');
                  }}
                  className="mt-3 text-xs text-gold-600 hover:text-gold-500 font-semibold"
                >
                  إعادة تعيين مرشحات البحث
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
