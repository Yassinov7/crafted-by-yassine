'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';

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
      className={`
        flex items-center gap-2 text-sm px-3 py-1.5 rounded-full w-25
        border border-zinc-300 dark:border-zinc-600
        bg-zinc-100 text-zinc-800
        dark:bg-zinc-800 dark:text-zinc-100
        hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white
        transition-all
      `}
      title={currentLang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Languages size={16} />
      {currentLang === 'ar' ? 'English' : 'العربية'}
    </button>
  );
}
