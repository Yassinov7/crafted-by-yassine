'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '@/components/motion/FadeInSection';
import { Search, Calendar, Code, Rocket, TextSearchIcon, HelpingHand } from 'lucide-react';
const processSteps = {
    ar: [
        {
            title: 'التحليل',
            description: 'فهم متطلباتك وتحليل احتياجات مشروعك بدقة',
            icon: Search
        },
        {
            title: 'التخطيط',
            description: 'وضع خطة استراتيجية شاملة مع إجراءات واضحة ومواعيد نهائية',
            icon: Calendar
        },
        {
            title: 'التنفيذ',
            description: 'تطوير النظام بأعلى جودة باستخدام أفضل الممارسات',
            icon: Code
        },
        {
            title: 'الاختبار',
            description: 'اختبار النظام لأي أخطاء، واصلاحها',
            icon: TextSearchIcon
        },
        {
            title: 'التسليم',
            description: 'تسليم المشروع النهائي مع دعم ما بعد الإطلاق والصيانة',
            icon: Rocket
        },
        {
            title: "الدعم",
            description: "تقديم الدعم والصيانة المستقبلية",
            icon: HelpingHand
        }
    ],
    en: [
        {
            title: 'Analysis',
            description: 'Understanding your requirements and analyzing your project needs accurately',
            icon: Search
        },
        {
            title: 'Planning',
            description: 'Creating a comprehensive strategic plan with clear procedures and deadlines',
            icon: Calendar
        },
        {
            title: 'Execution',
            description: 'Developing the system with highest quality using best practices',
            icon: Code
        },
        {
            title: 'Testing',
            description: 'Testing the system for any errors, and fixing them',
            icon: TextSearchIcon
        },
        {
            title: 'Delivery',
            description: 'Delivering the final project with post-launch support and maintenance',
            icon: Rocket
        },
        {
            title: 'Support',
            description: 'Providing future support and maintenance',
            icon: HelpingHand
        }
    ]
};

export default function ProcessSection({ lang }) {
    const isAr = lang === 'ar';
    const steps = processSteps[lang];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [steps.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <FadeInSection>
            <section id='process' className="w-full py-12 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {isAr ? 'عمليّتي' : 'My Process'}
                    </h2>
                    <div className="w-20 h-1 mx-auto bg-accent mb-6" />
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        {isAr
                            ? 'نهج منظم يضمن تقديم أفضل النتائج في كل مشروع'
                            : 'An organized approach ensuring the best results in every project'}
                    </p>
                </div>

                {/* Animated carousel */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden ">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: isAr ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isAr ? -100 : 100 }}
                                transition={{ duration: 0.5 }}
                                className="bg-muted/10 border p-8 shadow-lg"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Step number circle */}
                                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl mb-6">
                                        {currentIndex + 1}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                                        {steps[currentIndex].title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                        {steps[currentIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-6 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-accent w-12'
                                    : 'bg-accent/50 hover:bg-accent'
                                    }`}
                                aria-label={`Go to step ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                {/* Circular progress indicator */}
                <div className="mt-8 flex justify-center">
                    <div className="relative w-24 h-24">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="8"
                            />
                            {/* Progress circle */}
                            <motion.circle
                                key={currentIndex}
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#f97316"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray="283"
                                strokeDashoffset={283 - (283 * (currentIndex + 1)) / steps.length}
                                transform="rotate(-90 50 50)"
                                initial={{ strokeDashoffset: 283 }}
                                animate={{ strokeDashoffset: 283 - (283 * (currentIndex + 1)) / steps.length }}
                                transition={{ duration: 0.5 }}
                            />
                            {/* Center icon */}
                            <foreignObject x="30" y="30" width="40" height="40">
                                {steps[currentIndex].icon && (() => {
                                    const IconComponent = steps[currentIndex].icon;
                                    return <IconComponent size={40} className="text-accent" />;
                                })()}
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </section>
        </FadeInSection >
    );
}