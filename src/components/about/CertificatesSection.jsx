'use client';

import CertificateCard from './CertificateCard';
import FadeInSection from '@/components/motion/FadeInSection';

const certificates = {
    ar: [
        {
            image: '/certs/html-css.jpg',
            title: 'HTML5 & CSS3',
            description: 'شهادة من معهد New Horizons باستخدام Adobe Dreamweaver.',
            date: '6 أيار 2024',
            source: 'New Horizons - دمشق',
        },
        {
            image: '/certs/js.jpg',
            title: 'JavaScript Fundamentals',
            description: 'أساسيات JavaScript مع شهادة معتمدة من New Horizons.',
            date: '3 حزيران 2024',
            source: 'New Horizons - دمشق',
        },
        {
            image: '/certs/php-mysql.jpg',
            title: 'PHP & MySQL',
            description: 'تطوير تطبيقات الويب باستخدام PHP وMySQL.',
            date: '14 آب 2024',
            source: 'New Horizons - دمشق',
        },
        {
            image: '/certs/react.jpg',
            title: 'React JavaScript',
            description: 'شهادة React JavaScript من New Horizons.',
            date: '20 تشرين الأول 2024',
            source: 'New Horizons - دمشق',
        },
    ],
    en: [
        {
            image: '/certs/html-css.jpg',
            title: 'HTML5 & CSS3',
            description: 'Certified by New Horizons using Adobe Dreamweaver.',
            date: 'May 6, 2024',
            source: 'New Horizons - Damascus',
        },
        {
            image: '/certs/js.jpg',
            title: 'JavaScript Fundamentals',
            description: 'JavaScript basics certified by New Horizons.',
            date: 'June 3, 2024',
            source: 'New Horizons - Damascus',
        },
        {
            image: '/certs/php-mysql.jpg',
            title: 'PHP & MySQL',
            description: 'Web apps with PHP and MySQL.',
            date: 'August 14, 2024',
            source: 'New Horizons - Damascus',
        },
        {
            image: '/certs/react.jpg',
            title: 'React JavaScript',
            description: 'React JavaScript certification by New Horizons.',
            date: 'October 20, 2024',
            source: 'New Horizons - Damascus',
        },
    ],
};

export default function CertificatesSection({ lang }) {
    const isAr = lang === 'ar';
    const certList = certificates[lang];

    return (
        <section id='cert' className="w-full px-6 py-24 max-w-6xl mx-auto scroll-mt-20">
            <FadeInSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    {isAr ? 'الشهادات' : 'Certificates'}
                </h2>
                <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />
            </FadeInSection>

            <div
                className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${isAr ? 'rtl' : 'ltr'
                    }`}
            >
                {certList.map((cert, idx) => (
                    <CertificateCard key={idx} cert={cert} isAr={isAr} />
                ))}
            </div>
        </section>
    );
}
