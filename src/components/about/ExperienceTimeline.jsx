'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, Code2 } from 'lucide-react';
import FadeInSection from '@/components/motion/FadeInSection';

// src/data/timeline.js
const items = {
  ar: [
    {
      type: 'education',
      title: 'الولادة والنشأة',
      date: '7 أيار 2002',
      description: 'وُلدت في مدينة درعا - سوريا، ونشأت فيها حتى الصف الرابع الابتدائي.',
    },
    {
      type: 'education',
      title: 'الدراسة في لبنان',
      date: '2011 – 2018',
      description:
        'بسبب الأحداث، انتقلت إلى لبنان وأكملت دراستي من الصف الخامس حتى الصف التاسع.',
    },
    {
      type: 'education',
      title: 'العودة إلى سوريا',
      date: 'آب 2018',
      description:
        'عدت إلى درعا وأكملت المرحلة الثانوية، وأنهيت الشهادة العامة بمعدل 78%.',
    },
    {
      type: 'education',
      title: 'بداية المرحلة الجامعية',
      date: '2020',
      description:
        'التحقت بجامعة قاسيون الخاصة لدراسة الهندسة المعلوماتية، وبدأت رحلتي الجامعية.',
    },
    {
      type: 'education',
      title: 'السنة الأولى: C++ وOOP',
      date: '2021',
      description: 'بدأت البرمجة بلغة C++ والمفاهيم الكائنية خلال السنة الأولى.',
    },
    {
      type: 'education',
      title: 'السنة الثانية: Python والخوارزميات',
      date: '2022',
      description: 'تعلمت هياكل البيانات والخوارزميات وبدأت العمل بلغة Python، Java، وC#.',
    },
    {
      type: 'education',
      title: 'السنة الثالثة: قواعد البيانات والمترجمات',
      date: '2023',
      description: 'درست تصميم قواعد البيانات، المترجمات، وبنية الحاسوب.',
    },
    {
      type: 'education',
      title: 'السنة الرابعة: الشبكات وهندسة البرمجيات',
      date: '2024',
      description: 'درست أنظمة التشغيل، شبكات Cisco، وهندسة المشاريع البرمجية.',
    },
    {
      type: 'education',
      title: 'السنة الخامسة (النهائية)',
      date: '2025',
      description: 'أنا الآن في الفصل الأخير، أعمل على مناقشة مشروع التخرج ومعدلي 2.8/4.',
    },
    {
      type: 'cert',
      title: 'HTML5 & CSS3',
      date: '6 أيار 2024',
      description: 'شهادة من معهد New Horizons باستخدام Adobe Dreamweaver.',
    },
    {
      type: 'cert',
      title: 'JavaScript Fundamentals',
      date: '3 حزيران 2024',
      description: 'أساسيات JavaScript من New Horizons.',
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
      description: 'مشروع تخرجي: منصة تعليمية تفاعلية.',
    },
    {
      type: 'project',
      title: 'Satellite Al-Rajaa',
      date: 'أبريل 2025',
      description: 'موقع مجتمعي خدمي تم إطلاقه للعامة.',
    },
    {
      type: 'project',
      title: 'UniRide',
      date: 'مايو 2025',
      description: 'نظام إدارة نقل جامعي ذكي.',
    },
    {
      type: 'note',
      title: 'الرحلة مستمرة...',
      date: '',
      description: 'أطمح للتوسع في مجال الويب وهندسة البرمجيات — والقادم أعظم بإذن الله.',
    },
  ],
  en: [
    {
      type: 'education',
      title: 'Born & Raised',
      date: 'May 7, 2002',
      description: 'Born in Daraa, Syria and raised there until 4th grade.',
    },
    {
      type: 'education',
      title: 'Studied in Lebanon',
      date: '2011 – 2018',
      description:
        'Moved to Lebanon due to the war and studied from grade 5 to grade 9.',
    },
    {
      type: 'education',
      title: 'Back to Syria',
      date: 'August 2018',
      description:
        'Returned to Daraa, completed high school with a score of 78%.',
    },
    {
      type: 'education',
      title: 'Started University',
      date: '2020',
      description: 'Joined Qasioun University to study Software Engineering.',
    },
    {
      type: 'education',
      title: 'Year 1: C++ and OOP',
      date: '2021',
      description: 'Started coding with C++ and object-oriented principles.',
    },
    {
      type: 'education',
      title: 'Year 2: Python & Algorithms',
      date: '2022',
      description:
        'Learned data structures, algorithms, Python, Java, and C#.',
    },
    {
      type: 'education',
      title: 'Year 3: Databases & Compilers',
      date: '2023',
      description:
        'Studied database design, computer architecture, and compilers.',
    },
    {
      type: 'education',
      title: 'Year 4: Networks & Software Engineering',
      date: '2024',
      description:
        'Studied OS, Cisco networks, and software engineering practices.',
    },
    {
      type: 'education',
      title: 'Final Year',
      date: '2025',
      description:
        'Currently preparing my graduation project. GPA: 2.8 / 4 (Very Good).',
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
      description: 'Web development using PHP and MySQL.',
    },
    {
      type: 'cert',
      title: 'React.js',
      date: 'October 20, 2024',
      description: 'React JavaScript certification by New Horizons.',
    },
    {
      type: 'project',
      title: 'EduConnect',
      date: 'March 2025',
      description: 'Graduation project: interactive education platform.',
    },
    {
      type: 'project',
      title: 'Satellite Al-Rajaa',
      date: 'April 2025',
      description: 'Public service site built and launched by me.',
    },
    {
      type: 'project',
      title: 'UniRide',
      date: 'May 2025',
      description: 'University transportation management system.',
    },
    {
      type: 'note',
      title: 'The journey continues...',
      date: '',
      description:
        'I aim to grow in web development and software engineering — the best is yet to come.',
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
