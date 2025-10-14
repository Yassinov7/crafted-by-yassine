'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function GlobalError({ error, reset }) {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'en';
    const isAr = lang === 'ar';

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <html lang={lang}>
            <body className="min-h-screen flex items-center justify-center px-6 bg-background text-text">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-6 max-w-md"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center"
                    >
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {isAr ? 'خطأ في النظام' : 'System Error'}
                    </motion.h1>

                    <motion.p
                        className="text-lg text-muted"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {isAr
                            ? 'عذراً، حدث خطأ غير متوقع. فريقنا يعمل على حل المشكلة.'
                            : 'Sorry, an unexpected error occurred. Our team is working to fix it.'}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            onClick={() => reset()}
                            className="px-4 py-2 rounded-xl bg-accent text-background hover:bg-accent/80 transition"
                        >
                            {isAr ? 'حاول مرة أخرى' : 'Try Again'}
                        </button>

                        <Link
                            href={`/${lang}`}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent/10 transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {isAr ? 'العودة إلى الرئيسية' : 'Back to Home'}
                        </Link>
                    </motion.div>
                </motion.div>
            </body>
        </html>
    );
}