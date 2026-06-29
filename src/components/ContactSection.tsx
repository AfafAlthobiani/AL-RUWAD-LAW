import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  CheckCircle2, Loader2, Sparkles, AlertCircle, History, Trash2
} from 'lucide-react';
import { OFFICE_CONTACT } from '../data';
import { ConsultationRequest } from '../types';

export default function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('استشارة عامة');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Local storage for keeping track of consultation requests
  const [history, setHistory] = useState<ConsultationRequest[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('alruwwad_requests');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveToHistory = (newRequest: ConsultationRequest) => {
    const updated = [newRequest, ...history];
    setHistory(updated);
    localStorage.setItem('alruwwad_requests', JSON.stringify(updated));
  };

  const clearHistory = () => {
    if (window.confirm('هل أنت متأكد من رغبتك في مسح سجل طلباتك السابقة من المتصفح؟')) {
      setHistory([]);
      localStorage.removeItem('alruwwad_requests');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('يرجى إدخال الاسم الكامل.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMessage('يرجى إدخال رقم هاتف صحيح (9 أرقام على الأقل).');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorMessage('يرجى إدخال تفاصيل الاستشارة (10 حروف على الأقل).');
      return;
    }

    setLoading(true);

    // Simulate server submission
    setTimeout(() => {
      const newRequest: ConsultationRequest = {
        id: 'req_' + Date.now(),
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        inquiryType,
        message: message.trim(),
        createdAt: new Date().toLocaleDateString('ar-SA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'pending'
      };

      saveToHistory(newRequest);
      setLoading(false);
      setShowSuccess(true);
      
      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setInquiryType('استشارة عامة');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden dir-rtl text-right">
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-bold text-xs uppercase tracking-widest block mb-3">حجز موعد واستفسار</span>
          <h2 className="font-classic text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            ابدأ مناقشة قضيتك مع مستشار قانوني مختص
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            يسعدنا استقبال استفساراتكم وحجز مواعيد الاستشارة القانونية من خلال النموذج أدناه. نلتزم بالرد على طلبكم في غضون 24 ساعة عمل وبسرية مطلقة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form & History */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Consultation Booking Form */}
            <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm relative">
              <h3 className="font-classic text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                <span>نموذج طلب الاستشارة والتمثيل القانوني</span>
              </h3>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-lg bg-rose-50 text-rose-700 text-xs sm:text-sm flex items-center gap-2.5 border border-rose-100">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-navy-800">
                    الاسم الكامل <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="الاسم الثلاثي أو اسم الشركة"
                    className="w-full px-4 py-3 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-navy-800">
                      البريد الإلكتروني <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@domain.com"
                      className="w-full px-4 py-3 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors text-right"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-navy-800">
                      رقم الهاتف <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05xxxxxxxx"
                      className="w-full px-4 py-3 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors text-left dir-ltr"
                      required
                    />
                  </div>
                </div>

                {/* Inquiry type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiryType" className="text-xs font-bold text-navy-800">
                    نوع الاستفسار / الخدمة المطلوبة <span className="text-slate-400 font-normal">(اختياري)</span>
                  </label>
                  <select
                    id="inquiryType"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors cursor-pointer"
                  >
                    <option value="استشارة عامة">استشارة قانونية عامة</option>
                    <option value="القانون التجاري والعقود">القانون التجاري وتأسيس الشركات</option>
                    <option value="صياغة واستعراض العقود">صياغة واستعراض العقود والاتفاقيات</option>
                    <option value="القانون المدني">القانون المدني والمطالبات المالية</option>
                    <option value="القانون الإداري">القانون الإداري والترافع أمام ديوان المظالم</option>
                    <option value="الملكية الفكرية">الملكية الفكرية والعلامات التجارية</option>
                    <option value="التمثيل أمام المحاكم">التمثيل القضائي والترافع</option>
                    <option value="تسوية النزاعات والتحكيم">التحكيم والوساطة والتسويات</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-navy-800">
                    تفاصيل الاستفسار أو القضية <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="يرجى كتابة ملخص واضح عن موضوع الاستشارة القانونية المطلوبة أو تفاصيل القضية والمستندات المتوفرة..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors resize-none leading-relaxed"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-bold text-navy-900 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold-500/15 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-98"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري إرسال طلبكم الآمن...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>إرسال طلب الاستشارة</span>
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Consultation History - SYNCED with Local Storage */}
            {history.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-navy-900">
                    <History className="w-4.5 h-4.5 text-gold-500" />
                    <h4 className="font-classic text-sm font-bold">طلباتي السابقة بهذا المتصفح</h4>
                  </div>
                  <button
                    onClick={clearHistory}
                    className="text-xs text-rose-600 hover:text-rose-500 flex items-center gap-1 font-semibold"
                    title="حذف السجل"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>مسح السجل</span>
                  </button>
                </div>

                <div className="flex flex-col gap-3 max-h-56 overflow-y-auto pr-1">
                  {history.map((req) => (
                    <div key={req.id} className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-xs font-bold text-navy-900">{req.fullName}</span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full font-medium">
                          قيد المعالجة
                        </span>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>نوع الاستشارة: {req.inquiryType}</span>
                        <span>{req.createdAt}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mt-1 border-t border-slate-50 pt-1.5">
                        {req.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Address Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Call Center Box */}
            <div className="bg-navy-900 text-white p-8 rounded-2xl relative overflow-hidden shadow-lg border border-white/5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-classic text-xl font-bold mb-6">قنوات الاتصال والزيارة</h3>
              
              <div className="flex flex-col gap-6">
                
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">الموقع والمقر الرئيسي</span>
                    <p className="text-sm font-medium leading-relaxed text-slate-200">
                      {OFFICE_CONTACT.address}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">أرقام التواصل الهاتفي</span>
                    <p className="text-sm font-bold text-slate-200 dir-ltr text-right">
                      هاتف المكتب: {OFFICE_CONTACT.phone}
                    </p>
                    <p className="text-sm font-bold text-slate-200 dir-ltr text-right mt-0.5">
                      الجوال المباشر: {OFFICE_CONTACT.mobile}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">المراسلات الإلكترونية</span>
                    <a href={`mailto:${OFFICE_CONTACT.email}`} className="text-sm font-bold text-gold-400 hover:underline">
                      {OFFICE_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">ساعات وأيام العمل</span>
                    <p className="text-sm font-medium text-slate-200">
                      {OFFICE_CONTACT.workingHours}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm overflow-hidden flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-navy-900">موقعنا الجغرافي (حي المروج، الرياض)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              
              {/* Aesthetic placeholder for Map representing our firm on King Fahd Rd */}
              <div className="relative w-full h-48 rounded-xl bg-slate-200 overflow-hidden flex items-center justify-center border border-slate-100 shadow-inner">
                {/* Simulated streets layout with CSS */}
                <div className="absolute inset-0 bg-slate-100 flex flex-col justify-around opacity-30 pointer-events-none">
                  <div className="h-4 bg-slate-300 w-full" />
                  <div className="h-4 bg-slate-300 w-full" />
                  <div className="h-4 bg-slate-300 w-full" />
                </div>
                <div className="absolute inset-0 bg-slate-100 flex justify-around opacity-30 pointer-events-none">
                  <div className="w-4 bg-slate-300 h-full" />
                  <div className="w-4 bg-slate-300 h-full" />
                  <div className="w-4 bg-slate-300 h-full" />
                </div>

                {/* Gold Law Firm Pin Indicator */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-12 h-12 rounded-full bg-navy-900 border-2 border-gold-400 flex items-center justify-center shadow-lg cursor-pointer"
                    onClick={() => window.open(OFFICE_CONTACT.googleMapsUrl, '_blank')}
                  >
                    <MapPin className="w-6 h-6 text-gold-400 fill-gold-400/10" />
                  </motion.div>
                  <span className="bg-navy-900 text-gold-400 text-[10px] font-bold px-3 py-1 rounded-full shadow border border-white/5">
                    مكتب الرواد للمحاماة
                  </span>
                </div>
                
                <button 
                  onClick={() => window.open(OFFICE_CONTACT.googleMapsUrl, '_blank')}
                  className="absolute bottom-2 left-2 bg-white/90 hover:bg-white text-navy-900 text-[10px] font-bold px-3 py-1.5 rounded shadow border border-slate-200 transition-colors"
                >
                  فتح خرائط Google
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Success Confirmation Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="absolute inset-0 bg-navy-900/65 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-white border border-slate-100 rounded-2xl shadow-2xl p-6 sm:p-8 text-center z-10 flex flex-col items-center gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-classic text-xl font-bold text-navy-900">تم إرسال استشارتكم بنجاح</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                  نشكركم على ثقتكم في <strong className="text-navy-900">مكتب الرواد للمحاماة والاستشارات القانونية</strong>. تم إدراج طلبكم بأمان بنظام الاستشارات، وسيقوم أحد مستشارينا المعتمدين بدراسة تفاصيل استفساركم والتواصل معكم هاتفياً أو عبر البريد في غضون <strong className="text-gold-600">24 ساعة عمل</strong>.
                </p>
              </div>

              <div className="h-px bg-slate-100 w-full" />

              <div className="text-[11px] text-slate-400">
                تم حفظ الطلب في سجل متصفحكم لتسهيل متابعته.
              </div>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 rounded-lg text-sm font-bold text-navy-900 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md shadow-gold-500/10 cursor-pointer"
              >
                موافق، إغلاق النافذة
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
