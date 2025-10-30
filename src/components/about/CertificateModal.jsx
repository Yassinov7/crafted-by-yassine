'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import certificates from '@/lib/certificates';

export default function CertificateModal({ cert, isAr, onClose }) {
    const [currentCert, setCurrentCert] = useState(cert);
    const [certList, setCertList] = useState([]);

    useEffect(() => {
        // Get certificates for the current language
        const lang = isAr ? 'ar' : 'en';
        setCertList(certificates[lang] || []);

        // Set the current certificate
        setCurrentCert(cert);
    }, [cert, isAr]);

    const currentIndex = certList.findIndex(c => c.id === currentCert.id);

    const goToPrev = () => {
        if (currentIndex > 0) {
            setCurrentCert(certList[currentIndex - 1]);
        }
    };

    const goToNext = () => {
        if (currentIndex < certList.length - 1) {
            setCurrentCert(certList[currentIndex + 1]);
        }
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'ArrowRight') goToNext();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose, currentIndex, certList]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${isAr ? 'rtl' : 'ltr'}`}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                >
                    {/* Navigation Arrows */}
                    {currentIndex > 0 && (
                        <button
                            onClick={goToPrev}
                            className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-4' : 'left-4'} text-text bg-muted hover:bg-muted-foreground rounded-full p-2 z-10 transition-all`}
                            aria-label={isAr ? "السابق" : "Previous"}
                        >
                            {isAr ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                        </button>
                    )}

                    {currentIndex < certList.length - 1 && (
                        <button
                            onClick={goToNext}
                            className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-4' : 'right-4'} text-text bg-muted hover:bg-muted-foreground rounded-full p-2 z-10 transition-all`}
                            aria-label={isAr ? "التالي" : "Next"}
                        >
                            {isAr ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                        </button>
                    )}

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} text-text bg-muted hover:bg-muted-foreground rounded-full p-2 z-10 transition-all`}
                        aria-label={isAr ? "إغلاق" : "Close"}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Certificate Image */}
                    <div className="relative w-full aspect-[4/3] max-h-[400px]">
                        <Image
                            src={currentCert.image}
                            alt={currentCert.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>

                    {/* Certificate Details */}
                    <div className="p-6 text-text">
                        <h2 className="text-2xl font-bold text-accent mb-2">{currentCert.title}</h2>
                        <p className="text-muted mb-4 leading-relaxed">{currentCert.description}</p>

                        {/* Skills Section */}
                        {currentCert.skills && currentCert.skills.length > 0 && (
                            <div className="mb-4">
                                <h3 className="font-semibold text-lg mb-2">{isAr ? 'المهارات المكتسبة:' : 'Skills Acquired:'}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentCert.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="text-sm text-muted mt-4 flex justify-between items-center border-t border-muted/30 pt-4">
                            <span className="text-accent font-medium">{currentCert.date}</span>
                            <span className="text-muted-foreground">{isAr ? `المصدر: ${currentCert.source}` : `By: ${currentCert.source}`}</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}