'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CertificateModal({ cert, isAr, onClose }) {
    useEffect(() => {
        const handleKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 ${isAr ? 'rtl' : 'ltr'}`}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="relative bg-background rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                >
                    {/* زر الإغلاق */}
                    <button
                        onClick={onClose}
                        className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} text-text bg-muted hover:bg-muted-foreground rounded-full p-1 z-10`}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* صورة الشهادة */}
                    <div className="relative w-full aspect-[4/3] max-h-[300px]">
                        <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-contain rounded-t-xl"
                            sizes="(max-width: 768px) 100vw, 600px"
                        />
                    </div>

                    {/* تفاصيل الشهادة */}
                    <div className="p-6 text-sm sm:text-base space-y-1 text-text">
                        <h2 className="text-xl font-bold text-accent">{cert.title}</h2>
                        <p className="text-muted">{cert.description}</p>
                        <div className="text-xs text-muted mt-2 flex justify-between items-center">
                            <span className="text-accent">{cert.date}</span>
                            <span>{isAr ? `المصدر: ${cert.source}` : `By: ${cert.source}`}</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
