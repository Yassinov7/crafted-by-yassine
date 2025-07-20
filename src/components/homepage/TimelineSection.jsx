'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, Code2 } from 'lucide-react';
import FadeInSection from '@/components/motion/FadeInSection';

const items = {
    ar: [
        {
            type: 'education',
            title: 'بدأت البرمجة',
            date: 'أكتوبر 2021',
            description:
                'بدأت رحلتي في البرمجة مع لغة C++ ومبادئ OOP خلال السنة الأولى من الجامعة.',
        },
        {
            type: 'education',
            title: 'توسعت في الخوارزميات وPython',
            date: '2022',
            description:
                'تعلمت هياكل البيانات والخوارزميات، بالإضافة إلى Python وJava وC#.',
        },
        {
            type: 'education',
            title: 'قواعد البيانات والمترجمات',
            date: '2023',
            description:
                'تعلمت تصميم قواعد البيانات، بنية الحاسوب، والمترجمات في السنة الثالثة.',
        },
        {
            type: 'education',
            title: 'الشبكات وهندسة البرمجيات',
            date: '2024',
            description:
                'درست أنظمة التشغيل، شبكات Cisco، ونمذجة المشاريع البرمجية في السنة الرابعة.',
        },
        {
            type: 'cert',
            title: 'HTML5 & CSS3',
            date: '6 أيار 2024',
            description: 'شهادة من معهد New Horizons بدمشق باستخدام Adobe Dreamweaver.',
        },
        {
            type: 'cert',
            title: 'JavaScript Fundamentals',
            date: '3 حزيران 2024',
            description: 'أساسيات JavaScript مع شهادة معتمدة من New Horizons.',
        },
        {
            type: 'cert',
            title: 'PHP & MySQL',
            date: '14 آب 2024',
            description: 'تطوير تطبيقات الويب باستخدام PHP وMySQL.',
        },
        {
            type: 'cert',
            title: 'React.js',
            date: '20 تشرين الأول 2024',
            description: 'شهادة React JavaScript من New Horizons.',
        },
        {
            type: 'project',
            title: 'EduConnect',
            date: 'مارس 2025',
            description:
                'مشروع تخرجي: منصة تعليمية تفاعلية تم تحليلها، تصميمها، وبناؤها من الصفر.',
        },
        {
            type: 'project',
            title: 'Satellite Al-Rajaa',
            date: 'أبريل 2025',
            description: 'موقع خدمات مجتمعية أطلقته للعامة.',
        },
        {
            type: 'project',
            title: 'UniRide',
            date: 'مايو 2025',
            description: 'نظام إدارة وتنظيم النقل الجامعي للطلاب والمشرفين.',
        },
        {
            type: 'note',
            title: 'والرحلة ما زالت في بدايتها...',
            date: '',
            description: 'القادم أعظم بإذن الله.',
        },
    ],
    en: [
        {
            type: 'education',
            title: 'Started Programming',
            date: 'October 2021',
            description: 'I began my journey with C++ and OOP during my first university year.',
        },
        {
            type: 'education',
            title: 'Expanded with Python & Algorithms',
            date: '2022',
            description: 'Learned Python, data structures, algorithms, Java, and C#.',
        },
        {
            type: 'education',
            title: 'Databases & Compilers',
            date: '2023',
            description: 'Studied DB design, computer architecture, and compilers.',
        },
        {
            type: 'education',
            title: 'Networks & Software Engineering',
            date: '2024',
            description:
                'Learned operating systems, Cisco networks, and software project modeling.',
        },
        {
            type: 'cert',
            title: 'HTML5 & CSS3',
            date: 'May 6, 2024',
            description: 'Certified by New Horizons using Adobe Dreamweaver.',
        },
        {
            type: 'cert',
            title: 'JavaScript Fundamentals',
            date: 'June 3, 2024',
            description: 'Certified by New Horizons in JavaScript basics.',
        },
        {
            type: 'cert',
            title: 'PHP & MySQL',
            date: 'August 14, 2024',
            description: 'Web app development using PHP and MySQL.',
        },
        {
            type: 'cert',
            title: 'React.js',
            date: 'October 20, 2024',
            description: 'React JavaScript certificate by New Horizons.',
        },
        {
            type: 'project',
            title: 'EduConnect',
            date: 'March 2025',
            description:
                'My graduation project: an interactive education platform built from scratch.',
        },
        {
            type: 'project',
            title: 'Satellite Al-Rajaa',
            date: 'April 2025',
            description: 'A public services site launched by me.',
        },
        {
            type: 'project',
            title: 'UniRide',
            date: 'May 2025',
            description: 'University ride management system for students and supervisors.',
        },
        {
        type: 'note',
        title: 'The journey has just begun...',
        date: '',
        description: 'The best is yet to come, God willing.',
        },
    ],
};

const getIcon = (type) => {
    switch (type) {
        case 'education':
            return <GraduationCap className="w-4 h-4 text-accent" />;
        case 'cert':
            return <BadgeCheck className="w-4 h-4 text-accent" />;
        case 'project':
            return <Code2 className="w-4 h-4 text-accent" />;
        case 'note':
            return <span className="w-2 h-2 bg-muted-foreground rounded-full block" />;
        default:
            return null;
    }
};

export default function TimelineSection({ lang }) {
    const isAr = lang === 'ar';
    const timelineItems = items[lang];

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
                className={`relative border-s-2 border-muted pl-6 space-y-12 ${isAr ? 'rtl text-right' : 'ltr text-left'
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
