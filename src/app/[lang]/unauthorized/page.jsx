'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function UnauthorizedPage({ params }) {
    const { lang } = use(params);
    const isAr = lang === 'ar';
    const router = useRouter();

    const title = isAr ? 'غير مصرح' : 'Unauthorized';
    const description = isAr
        ? 'عذراً، ليس لديك الصلاحية للوصول إلى هذه الصفحة.'
        : 'Sorry, you do not have permission to access this page.';
    const tagline = isAr
        ? '✦ الأمان أولوية في كل خطوة ✦'
        : '✦ Security is a priority at every step ✦';

    return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-background text-text">
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
                    className="mx-auto w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center"
                >
                    <ShieldAlert className="w-8 h-8 text-orange-500" />
                </motion.div>

                <motion.h1
                    className="text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="text-lg text-muted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {description}
                </motion.p>

                <motion.p
                    className="text-sm text-muted opacity-70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {tagline}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <button
                        onClick={() => router.back()}
                        className="px-4 py-2 rounded-xl bg-accent text-background hover:bg-accent/80 transition"
                    >
                        {isAr ? 'العودة للخلف' : 'Go Back'}
                    </button>

                    <Link
                        href={`/${lang}`}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent/10 transition"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {isAr ? 'الرئيسية' : 'Home'}
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}