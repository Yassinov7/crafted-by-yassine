'use client';

import CertificateCard from './CertificateCard';
import FadeInSection from '@/components/motion/FadeInSection';
import certificates from '@/lib/certificates';


export default function CertificatesSection({ lang }) {
    const isAr = lang === 'ar';
    const certList = certificates[lang] || [];

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
                {certList.map((cert) => (
                    <CertificateCard key={cert.id} cert={cert} isAr={isAr} />
                ))}
            </div>
        </section>
    );
}