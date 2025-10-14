'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SiReact } from 'react-icons/si';

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
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{sectionTitle}</h2>
        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-6"></div>

        <p className="text-lg max-w-2xl mx-auto">{philosophy}</p>
      </motion.div>

      {/* Workflow title */}
      <h2 className="text-xl font-semibold text-center">{workflowTitle}</h2>

      {/* Enhanced Circular Workflow */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
        {/* Spinning orbit circles */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent/20"
          animate={{ rotate: -360 }} // Spinning in opposite direction
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-4 rounded-full border border-accent/10"></div>
        </motion.div>

        {/* Workflow Steps - Fixed positions (not rotating) */}
        {workflow.map((step, index) => {
          const angle = (360 / workflow.length) * index - 90; // Start from top
          const rad = (angle * Math.PI) / 180;
          const radius = 140; // Increased radius to move steps further from center

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
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                whileHover={{
                  scale: 1.15,
                  zIndex: 10
                }}
              >
                {/* Glow effect container */}
                <div className="absolute -inset-2 bg-accent rounded-xl blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>

                <div className="relative bg-background border border-accent/30 text-accent px-4 py-3 rounded-xl shadow-lg text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:shadow-accent/30 hover:shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="flex-shrink-0 w-7 h-7 bg-accent text-background rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {/* Fixed width for text */}
                    <span className="whitespace-nowrap min-w-[50px] md:min-w-[70px] text-center">{step}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}



        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/10">
          {/* Center React Icon - Fixed position with spinning animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="relative"
              animate={{
                rotate: 360 // Continuous spinning animation
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute -inset-2 bg-accent rounded-full blur-lg opacity-30"></div>
              <SiReact className="relative w-12 h-12 md:w-16 md:h-16 text-accent" />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}