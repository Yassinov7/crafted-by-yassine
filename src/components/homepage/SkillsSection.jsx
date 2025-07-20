'use client';

import { Monitor, Database, Wrench } from 'lucide-react';
import FadeInSection from '@/components/motion/FadeInSection';

const skills = {
    ar: [
        {
            category: 'الواجهات الأمامية',
            icon: ({ size = 40 } = {}) => (
                <Monitor
                    style={{ width: size, height: size }}
                    className="text-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                />
            ),
            items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
        },
        {
            category: 'الواجهات الخلفية وقواعد البيانات',
            icon: ({ size = 40 } = {}) => (
                <Database
                    style={{ width: size, height: size }}
                    className="text-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                />
            ),
            items: ['Supabase', 'PHP', 'MySQL', 'Firebase'],
        },
        {
            category: 'أدوات وتقنيات',
            icon: ({ size = 40 } = {}) => (
                <Wrench
                    style={{ width: size, height: size }}
                    className="text-accent transition-transform duration-500 group-hover:scale-110"
                />
            ),
            items: ['Git', 'VS Code', 'Figma', 'Framer Motion'],
        },
    ],
    en: [
        {
            category: 'Frontend',
            icon: ({ size = 40 } = {}) => (
                <Monitor
                    style={{ width: size, height: size }}
                    className="text-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                />
            ),
            items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
        },
        {
            category: 'Backend & Databases',
            icon: ({ size = 40 } = {}) => (
                <Database
                    style={{ width: size, height: size }}
                    className="text-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                />
            ),
            items: ['Supabase', 'PHP', 'MySQL', 'Firebase'],
        },
        {
            category: 'Tools & Tech',
            icon: ({ size = 40 } = {}) => (
                <Wrench
                    style={{ width: size, height: size }}
                    className="text-accent transition-transform duration-500 group-hover:scale-110"
                />
            ),
            items: ['Git', 'VS Code', 'Figma', 'Framer Motion'],
        },
    ],
};

export default function SkillsSection({ lang }) {
    const isAr = lang === 'ar';
    const skillSet = skills[lang];

    return (
        <section
            id="skills"
            className="w-full px-6 py-24 max-w-7xl mx-auto scroll-mt-20"
        >
            <FadeInSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    {isAr ? 'مهاراتي' : 'My Skills'}
                </h2>
                <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />
            </FadeInSection>

            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ${isAr ? 'rtl' : 'ltr'}`}>
                {skillSet.map((group, index) => (
                    <FadeInSection key={index} delay={index * 0.1}>
                        <div className="group flex flex-col items-center text-center h-full border rounded-2xl p-6 bg-muted/10 shadow-sm hover:shadow-md transition duration-300">
                            {/* الأيقونة بالأعلى */}
                            <div className="mb-4 text-accent">
                                {group.icon({ size: 40 })}
                            </div>

                            {/* العنوان */}
                            <h3 className="text-lg font-semibold text-accent mb-3">
                                {group.category}
                            </h3>

                            {/* المهارات */}
                            <ul className="flex flex-wrap justify-center gap-2 text-sm mt-auto">
                                {group.items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-accent text-white shadow-sm"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
}
