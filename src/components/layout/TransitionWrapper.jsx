'use client';

import { useEffect } from 'react';

export default function TransitionWrapper() {
  useEffect(() => {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');

    const timeout = setTimeout(() => {
      document.body.classList.remove('fade-in');
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
