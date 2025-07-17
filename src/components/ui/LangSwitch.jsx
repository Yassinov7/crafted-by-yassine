'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LangSwitch({ currentLang }) {
  const pathname = usePathname();
  const router = useRouter();

  const otherLang = currentLang === 'ar' ? 'en' : 'ar';

  const switchLang = () => {
    document.body.classList.add('fade-out');

    setTimeout(() => {
      const newPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);
      router.push(newPath);
    }, 300);
  };

  return (
    <button
      onClick={switchLang}
      className="text-sm border px-3 py-1 rounded hover:bg-accent hover:text-white transition"
    >
      {currentLang === 'ar' ? 'English' : 'العربية'}
    </button>
  );
}
