'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import {SiReact} from 'react-icons/si';

export default function Extra({ lang }) {
  const isAr = lang === 'ar';

  const philosophy = isAr
    ? 'أنا لا أبني المشاريع فقط لتعمل، بل لأجعلها ممتعة، مرنة، وسهلة الاستخدام. أؤمن أن التفاصيل الصغيرة هي التي تصنع الفرق الكبير.'
    : "I don't just build projects to work, but to make them enjoyable, flexible, and user-friendly. I believe small details make the biggest difference.";

  const workflow = isAr
    ? ['الفكرة', 'التخطيط', 'التصميم', 'التطوير', 'النشر']
    : ['Idea', 'Planning', 'Design', 'Development', 'Deployment'];

  const sectionTitle = isAr ? 'فلسفتي في بناء المشاريع' : 'My Project Philosophy';
  const workflowTitle = isAr ? 'سير العمل' : 'Workflow';

  return (
    <section className="py-16 max-w-4xl mx-auto px-6 space-y-16 scroll-mt-20 text-text" id="extra">
      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx('text-center space-y-4', isAr ? 'rtl' : 'ltr')}
      >
        <h2 className="text-2xl font-bold">{sectionTitle}</h2>
        <p className="text-lg max-w-2xl mx-auto">{philosophy}</p>
      </motion.div>
      
      {/* Workflow title */}
      <h2 className="text-xl font-semibold text-center">{workflowTitle}</h2>
      {/* Circular Workflow */}
      <div className="relative w-64 h-64 mx-auto group">
        
        {/* الدوران */}
        <div className="absolute inset-0  origin-center">
          {workflow.map((step, index) => {
            const angle = (360 / workflow.length) * index;
            const rad = (angle * Math.PI) / 180;
            const radius = 100;

            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <div
                key={step}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                <div className="bg-accent text-white px-4 py-2 rounded-xl shadow text-sm font-medium">
                  {step}
                </div>
              </div>
            );
          })}
        </div>

        {/* مركز الدائرة */}
        <div className="" />
        <SiReact className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 text-accent" />
      </div>

    </section>
  );
}
