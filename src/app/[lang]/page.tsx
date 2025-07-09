// src/app/[lang]/page.tsx

import Button from '@/components/ui/Button';

export default function Home({ params }: { params: { lang: 'ar' | 'en' } }) {
  const isAr = params.lang === 'ar';

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        {isAr ? 'مرحبًا بك في موقعي' : 'Welcome to my website'}
      </h1>
      <Button>{isAr ? 'جرّب الزر' : 'Try the Button'}</Button>
    </main>
  );
}
