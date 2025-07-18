'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function SectionDivider() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // ✅ صوت اختياري (ملاحظة: تعمل فقط في المتصفح، مش SSR)
//   useEffect(() => {
//     if (inView) {
//       const audio = new Audio('/sounds/pop.mp3'); // ضع ملف صوت في public/sounds
//       audio.volume = 0.2;
//       audio.play().catch(() => {});
//     }
//   }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative my-2"
    >
      {/* الخط */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-text " />
      </div>

      {/* النقطة المركزية */}
      <motion.div
        className="relative mx-auto w-8 h-2 rounded-full bg-accent hover:scale-x-700 transition-all"
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1 } : {}}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      />
    </motion.div>
  );
}
