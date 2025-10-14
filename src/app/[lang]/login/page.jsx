'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import IntroSection from '@/components/layout/IntroSection';

export default function LoginPage({ params }) {
    const isAr = params?.lang === 'ar';
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const title = isAr ? 'تسجيل الدخول' : 'Login';
    const description = isAr
        ? 'يرجى إدخال بيانات الاعتماد الخاصة بك للوصول إلى لوحة الإدارة'
        : 'Please enter your credentials to access the admin panel';
    const tagline = isAr
        ? '✦ بوابة الوصول الآمن إلى لوحة التحكم ✦'
        : '✦ Secure gateway to your admin dashboard ✦';

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
            router.push(`/${params?.lang}/admin`);
        }
    };

    return (
        <div className="w-full px-6 py-12 max-w-7xl mx-auto space-y-10">
            <IntroSection lang={params?.lang} title={title} description={description} tagline={tagline} />

            <div className="max-w-md mx-auto">
                <form
                    onSubmit={handleLogin}
                    className={`space-y-4 ${isAr ? 'direction-rtl' : ''}`}
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
                        className="w-full px-6 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/80 transition"
                    >
                        {isAr ? 'تسجيل الدخول' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}