'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function IntroSection({ lang, title, description, tagline }) {
    const isAr = lang === 'ar';

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={clsx(
                'text-center space-y-4 py-12 px-4',
                isAr ? 'rtl' : 'ltr'
            )}
        >
            <h1 className="text-4xl sm:text-5xl font-bold text-text">
                {title}
            </h1>

            <p className="text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>

            {tagline && (
                <div className="text-sm text-text opacity-70">{tagline}</div>
            )}
        </motion.section>
    );
}