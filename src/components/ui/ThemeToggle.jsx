'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Detect theme
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }

    // Detect direction
    setIsRTL(document.documentElement.dir === 'rtl');
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-14 h-8 flex items-center px-1 rounded-full
        transition-colors duration-300
        ${dark ? 'bg-zinc-700' : 'bg-gray-300'}
        overflow-hidden
      `}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <motion.div
        className="w-6 h-6 bg-background rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: dark
            ? isRTL ? 0 : 24   // ☽ on right in LTR, left in RTL
            : isRTL ? -24 : 0   // ☀ on left in LTR, right in RTL
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {dark
          ? <Moon size={16} className="text-yellow-300" />
          : <Sun size={16} className="text-orange-400" />}
      </motion.div>
    </button>
  );
}
