'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, Code2, Stars, NotebookPenIcon } from 'lucide-react';
import FadeInSection from '@/components/motion/FadeInSection';
import timelineData from '@/lib/timeline';

const getIcon = (type) => {
    switch (type) {
        case 'star':
            return <Stars className='className="w-4 h-4 text-accent' />;
        case 'education':
            return <GraduationCap className="w-4 h-4 text-accent" />;
        case 'cert':
            return <BadgeCheck className="w-4 h-4 text-accent" />;
        case 'project':
            return <Code2 className="w-4 h-4 text-accent" />;
        case 'note':
            return <NotebookPenIcon className="w-4 h-4 text-accent" />;
        default:
            return null;
    }
};

export default function TimelineSection({ lang }) {
    const isAr = lang === 'ar';
    const timelineItems = timelineData[lang];

    return (
        <section
            id="timeline"
            className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20"
        >
            <FadeInSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    {isAr ? 'رحلتي وإنجازاتي' : 'My Learning Journey & Achievements'}
                </h2>
                <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />
            </FadeInSection>

            <div
                className={`relative border-s-2 border-muted space-y-12 ${isAr ? 'rtl text-right' : 'ltr text-left'
                    }`}
            >
                {timelineItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isAr ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* النقطة مع الأيقونة */}
                        <div className="absolute -start-4 top-1 flex items-center justify-center w-7 h-7 rounded-full border-4 border-accent bg-background shadow-md">
                            {getIcon(item.type)}
                        </div>

                        {/* النص */}
                        <div className="ps-6">
                            <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
                            <p className="text-sm text-muted mb-1">{item.date}</p>
                            <p className="text-base text-text">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
