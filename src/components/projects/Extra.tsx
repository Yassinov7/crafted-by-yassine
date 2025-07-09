'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = {
  lang: 'ar' | 'en';
};

export default function Extra({ lang }: Props) {
  const isAr = lang === 'ar';

  const philosophy = isAr
    ? 'أنا لا أبني المشاريع فقط لتعمل، بل لأجعلها ممتعة، مرنة، وسهلة الاستخدام. أؤمن أن التفاصيل الصغيرة هي التي تصنع الفرق الكبير.'
    : "I don't just build projects to work, but to make them enjoyable, flexible, and user-friendly. I believe small details make the biggest difference.";

  const workflow = isAr
    ? ['الفكرة', 'التخطيط', 'التصميم', 'التطوير', 'النشر']
    : ['Idea', 'Planning', 'Design', 'Development', 'Deployment'];

  const sectionTitle = isAr ? '💡 فلسفتي في بناء المشاريع' : '💡 My Project Philosophy';
  const workflowTitle = isAr ? '🔄 سير العمل' : '🔄 Workflow';

  return (
    <section className="py-16 max-w-4xl mx-auto px-6 space-y-10">
      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx('text-center space-y-4', isAr ? 'rtl' : 'ltr')}
      >
        <h2 className="text-2xl font-bold">{sectionTitle}</h2>
        <p className="text-muted text-lg">{philosophy}</p>
      </motion.div>

      {/* Workflow Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={clsx('text-center space-y-4', isAr ? 'rtl' : 'ltr')}
      >
        <h2 className="text-2xl font-bold">{workflowTitle}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {workflow.map((step, index) => (
            <div
              key={index}
              className="bg-background border rounded-xl px-6 py-3 shadow-sm hover:shadow-md transition text-sm font-medium"
            >
              {step}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
