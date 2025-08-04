'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { supabase } from '@/lib/supabase';
import FadeInSection from '@/components/motion/FadeInSection';

export default function LoginPage({ params }) {
    const { lang } = use(params);
    const isAr = lang === 'ar';
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(isAr ? 'خطأ في البريد الإلكتروني أو كلمة المرور' : 'Invalid email or password');
        } else {
            router.push(`/${lang}/admin`);
        }
    };

    return (
        <FadeInSection>
            <section className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {isAr ? 'تسجيل الدخول' : 'Login'}
                </h1>
                <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />

                <form
                    onSubmit={handleLogin}
                    className={`max-w-md mx-auto space-y-4 ${isAr ? 'direction-rtl' : ''}`}
                >
                    <div>
                        <input
                            type="email"
                            placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-accent rounded-full bg-muted/10 text-accent placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder={isAr ? 'كلمة المرور' : 'Password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-accent rounded-full bg-muted/10 text-accent placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                        />
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="px-6 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/80 transition"
                    >
                        {isAr ? 'تسجيل الدخول' : 'Sign In'}
                    </button>
                </form>
            </section>
        </FadeInSection>
    );
}